<?php
header('Content-Type textevent-stream');
header('Cache-Control no-cache');

$time = date('r');
echo data The server time is {$time}nn;
flush();