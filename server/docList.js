var mongoose = require('mongoose');
var express = require('express');
var app = express();
let formidableMiddleware = require('express-formidable');

app.use(formidableMiddleware({
    encoding: 'utf-8',
    uploadDir: './uploads',
    multiples: true, // req.files to be arrays of files
    keepExtensions: true//保留后缀
  }))

// var bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

var globalData = null;

mongoose.connect('mongodb://localhost/test');
var db= mongoose.connection;
//连接
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
    console.log('connect ok')
    // // 建立schema （表 / 集合） 定义表的字段规则
    Schema = mongoose.Schema;
    var peopleSchema = new Schema({
        name: String,
        sex: String,
        age: Number,
        remarks: String
    })
    var postsSchema= new Schema({
        _id: String,
        author: String,
        title: String,
        content: String,
        pv: Number
    })
    // // 创建集合 model
    // var people = mongoose.model('person', peopleSchema)
    var people = mongoose.model('posts', postsSchema)
    //                            这个字段 巨坑
    // 添加是写的表名，会自动转化成复数形式，查询时写表名不行，就得写表的复.
    // people.create({name: 'as',sex: 'men', age: 13},(err, data)=>{
    //     if(!err) return err;
    //     console.log(data)
    // })
    people.find({}, (err, data)=>{
        if(!err){
            // console.log(data)
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
})

app.get('/dataList', (req, res)=>{
    res.send(globalData);
})

// 添加文章接口
app.get('/addPost', (req, res)=>{
    res.send(req + '');
    console.log(req.query)
})

/*
 * axios get 请求参数是： params
 * axios post 请求参数是： data
 * express get 接受参数 是 req.query
 * express post 接受参数是：req.fields， 接受文件是：req.files.file.path
 *
 */
// form-data
app.post('/testFormData', (req, res)=>{
    res.send('request success!');
    console.log(req.files.file.path);
    console.log(req.fields);
})

app.listen(8081, "127.0.0.1");
console.log('Server is running at http://127.0.0.1:8081/');
