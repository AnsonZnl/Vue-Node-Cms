const mongoose = require('../lib/mongo')
const Schema = mongoose.Schema;
// 文章模型
var ArticlesSchema = new Schema({
    id: Number,
    title: String,
    content: String,
    author: String,
    create_date: String,
    pv: Number
})
const Article = mongoose.model('Article', ArticlesSchema);

module.exports = Article