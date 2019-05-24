
const articleModel = require('./mongo').articleModel

articleModel.create({
    id: '123',          
    author_id: 'znl',   
    class_id: '爱情', 
    content: '我爱的人不爱我',    
    title: '我是标题',        
    tag: ['爱情','故事'],
    create_date:  '2019-5-22 15:45:09',  
    good: true,          
    reading_number: 23, 
    cover: ''           
}, (err)=>{
   if(!err){
       console.log('插入成功！')
   }else{
       throw err;
   }
});