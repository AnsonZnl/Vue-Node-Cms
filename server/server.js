var mongoose = require('mongoose');
var express = require('express');
var app = express();
var globalData = null;

mongoose.connect('mongodb://localhost/test');
var db= mongoose.connection;
//连接
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connect ok')
    // 建立schema （表 / 集合） 定义表的字段规则
    var kittySchema = mongoose.Schema({
        name: String,
        sex: String,
        age: Number
    })
    // 创建集合 model
    var Kitten = mongoose.model('Kitten', kittySchema)
    Kitten.find({name: '张宁乐'}, (err, data)=>{
        if(!err){
            console.log('send ok')
            globalData =data
        }else{
            throw err;
        }
    })
})

//设置跨域访问
app.all('*', function(req, res, next) {
       res.header("Access-Control-Allow-Origin", "*");
       res.header("Access-Control-Allow-Headers", "X-Requested-With");
       res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
       res.header("X-Powered-By",' 3.2.1');
       res.header("Content-Type", "application/json;charset=utf-8");
       next();
})
// api 接口
app.get('/data', (req, res)=>{
    res.send(globalData);
}).listen(8081, "127.0.0.1");


console.log('Server is running at http://127.0.0.1:8081/');
