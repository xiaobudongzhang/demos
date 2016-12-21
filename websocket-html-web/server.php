<?php

$server= socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
socket_set_option($server, SOL_SOCKET, SO_REUSEADDR, 1);
socket_bind($server, '192.168.1.38', 8088);
socket_listen($server);




for(;;){
    $sock_data=socket_accept($server);
    $rev=socket_read($sock_data,1024);
    var_dump($rev);
        

    //获取Sec-WebSocket-Key
    $headers = array();
    $lines = preg_split("/\r\n/", $rev);
    foreach($lines as $line)
    {
        $line = chop($line);
        if(preg_match('/\A(\S+): (.*)\z/', $line, $matches))
        {
            $headers[$matches[1]] = $matches[2];
        }
    }
    
    $secKey = $headers['Sec-WebSocket-Key'];
    $secAccept = base64_encode(pack('H*', sha1($secKey . '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')));
    $upgrade  = "HTTP/1.1 101 Web Socket Protocol Handshake\r\n" .
              "Upgrade: websocket\r\n" .
              "Connection: Upgrade\r\n" .
              "WebSocket-Origin: 192.168.1.38\r\n" .
              "WebSocket-Location: ws://192.168.1.38:8088/demo/shout.php\r\n".
              "Sec-WebSocket-Accept:$secAccept\r\n\r\n";
    socket_write($sock_data,$upgrade,strlen($upgrade));


    //建立连接后获取客户端数据
    
    while(socket_recv($sock_data,$buf, 2048, 0)>= 1){
        var_dump("recv sus");
        var_dump($buf);//需要解码
        var_dump("recv sus");
        break ;
    }

    $msg=mask(json_encode(["message"=>"from server"]));
    socket_write($sock_data,$msg,strlen($msg));

    socket_close($sock_data);
}

//待研究
function mask($text)
{
    $b1 = 0x80 | (0x1 & 0x0f);
    $length = strlen($text);
    
    if($length <= 125)
        $header = pack('CC', $b1, $length);
    elseif($length > 125 && $length < 65536)
        $header = pack('CCn', $b1, 126, $length);
    elseif($length >= 65536)
        $header = pack('CCNN', $b1, 127, $length);
    return $header.$text;
}