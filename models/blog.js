const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
   Title:{
      type:String,
      required:true
   },
   Content:{
      type:String,
      required:true
   },
   Author:{
      type:String,
      required:true
   },
   created_at:{
       type:Date,
       required:true
      },
   password:{
      type:String,
      required:true
   }


});

// creating model
const Blog = mongoose.model('Blog', blogSchema);

// export schema to index.js

module.exports=Blog;