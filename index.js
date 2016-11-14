var express=require('express');
var app=express();

app.get('/api/whoami/', function(req,res){
    var headers = {"ipaddress":"","language":"","software":""};
    headers['ipaddress'] = req.headers['x-forwarded-for']
    headers['language'] = req.headers['accept-language'].slice(0,5);
    headers['software'] = req.headers['user-agent'].slice(req.headers['user-agent'].indexOf('(')+1,req.headers['user-agent'].indexOf(')'));
    
    res.send(headers);
});

app.listen(8080,function(){
    console.log("Listening on port 8080");
});