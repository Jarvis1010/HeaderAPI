var express=require('express');
var app=express();

var port = process.env.PORT||8080;

app.get('/', function(req,res){
    res.send("To use this API, put in '/api/whoami/' on the end of URL above to get JSON of your header info.");
});

app.get('/api/whoami/', function(req,res){
    var headers = {"ipaddress":"","language":"","software":""};
    headers['ipaddress'] = req.headers['x-forwarded-for']
    headers['language'] = req.headers['accept-language'].slice(0,5);
    headers['software'] = req.headers['user-agent'].slice(req.headers['user-agent'].indexOf('(')+1,req.headers['user-agent'].indexOf(')'));
    
    res.send(headers);
});

app.listen(port,function(){
    console.log("Listening on port "+port);
});