var express=require('express');
var mysql=require('mysql');
var fs=require('fs');
var bodyParser=require('body-parser');
var app=express();



//巨坑
app.use(bodyParser.json()); // for parsing application/json
//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var out={
        'code':'00000',
        'msg':'ok',
        'data':[]
    };

app.get('/test',function(req,res){
//    console.log(req);//
    res.send('Hello World');
});
app.post('/regandlog/login',function(req,res){
    var isValid=false;
    
    //req.query;
    if(req.body.email=='root'&&req.body.passwd=='root'){
	isValid=true;
    }
    
   // fs.writeFile('datatest.json',req.body);
    if(!isValid){
	out['code']='10000'
    }
    res.send(out);
});
//user表数据的交互
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mysql',
    database:'test'
});
connection.connect();

app.get('/data/user/list',function(req,res){
    var query='select * from user limit 2 offset ?';
    var page=req.query.page-1;

    connection.query(query,[page],
		     function(err,results,fields){
			 if(err) throw err;
			 out['data']=results;
			res.send(out);
		     });
});

app.get('/data/user/one',function(req,res){
    var query='select * from user where id= ?';
    var id=req.query.id;

    connection.query(query,[id],
                     function(err,results,fields){
                         if(err) throw err;
			 out['data']=results[0];
                         res.send(out);
                     });
});

app.post('/data/user/update',function(req,res){
    var query='update user set nickname=?,phone=? where id=?';
    
    var name=req.body.name;
    var phone=req.body.phone;
    var id= req.body.id;
	
    
    connection.query(query,[name,phone,id],
                     function(err,result){
                         if(err) throw err;
                         res.send(out);
                     });
});

//connection.end();

module.exports=app;
