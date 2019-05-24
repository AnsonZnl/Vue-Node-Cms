
let mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/test');
let db= mongoose.connection;

db.on('open', ()=>{
   console.log('连接成功！')
})

// 新建Schema （表/ 模式对象） 定义规则/字段的规则
let Schema= mongoose.Schema;
//定义 schemaArticle 的字段（规则）
let schemaArticle= new Schema({
   id: String,            //文章id
   author_id: String,     //用户id
   class_id: String,      //文章类型
   content: String,       //文章内容
   title: String,         //文章标题
   tag: Array,            //文章标签
   create_date: String,   //创建时间
   good: Boolean,         //是否是热榜
   reading_number: Number,//阅读量
   cover: String          //封面图
});
//导出文章模型
exports.articleModel= mongoose.model('article', schemaArticle);