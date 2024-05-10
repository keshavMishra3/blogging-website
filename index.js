
const express = require('express');
const app = express();
// npx nodemon 
app.listen(8080,()=>{
    console.log("server is listenting on port 8080...")
});

// get route
app.get("/",(req,res)=>{
    res.send("requested accepted")
})

// Using Node.js `require()`
const mongoose = require('mongoose');

main().then((res)=>{
    console.log("mongoDb is connected")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
// for setup ejs
const path=require("path")

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs")
// for serving static file to ejs
app.use(express.static(path.join(__dirname,"public")))
// for parsing the data which recieved from form
app.use(express.urlencoded({extended:true}));

// require chatSchema Model
const Blog=require("./models/blog.js");




// index route
app.get("/blogs",async (req,res)=>{
    // extracting all data from database
    let blogs= await Blog.find()
    res.render("index.ejs",{blogs})
})

// new message route
app.get("/blogs/new",(req,res)=>{
    // res.send("working")
   res.render("new.ejs")
});

// submit data from form
// Create Route
app.post("/blogs",(req,res)=>{
    let{Title,Content,Author,password}=req.body;
    let newBlog=new Blog(
      {
       Title:Title,
       Content:Content,
       Author:Author,
       created_at:new Date(),
       password:password
      }
    )

    newBlog.save().then((result)=>{
        console.log("Blog was saved");
    }).catch((err)=>{
        console.log(err)
    })
    res.redirect("/blogs")

    
})

// edit route
app.get("/blogs/:id/edit", async (req,res)=>{
    // res.send("working")
    let {id}=req.params;
    let blog=await Blog.findById(id)
    
    res.render("edit.ejs",{blog})
})

// update route
// mehod override for put request
let methodOverride=require("method-override")
app.use(methodOverride("_method"))
app.put("/blogs/:id/", async (req, res) => {
    let { id } = req.params;
    console.log(req.body)
    // let { Content: newContent, password:newPassword } = req.body;
    let{Content,password}=req.body;
    console.log(Content)
    console.log(password)

    try {
        const blog = await Blog.findById(id);
        if (blog && blog.password === password) { // Ensure blog exists and password matches
            
            let updatedBlog = await Blog.findByIdAndUpdate(id, { Content: Content,created_at:new Date() }, { new: true });
            console.log(updatedBlog);
            res.redirect("/blogs");
        } else {
            res.send("<h1 style='text-align: center; margin-top:10vh;'>Wrong Password Entered</h1>");

        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});
// check password for deletion operation
app.get("/blogs/:id/delete", async (req,res)=>{
    // res.send("working")

     

    let {id}=req.params;
    let blog=await Blog.findById(id)
    
    res.render("passwordCheck.ejs",{blog})
})






// Destroy Route
app.delete("/blogs/:id",async (req,res)=>{
    // res.send("working")
    let {id}=req.params;
    let blog=await Blog.findById(id)
    let{password}=req.body;
    if(password===blog.password){
     
    
    await Blog.findByIdAndDelete(id).then((res)=>{
        console.log("Deleted Sucsessfully")
    }).catch((err)=>{
        console.log(err)
    })
    res.redirect("/blogs")
    }else{
        res.send("<h1 style='text-align: center; margin-top:10vh;'>Wrong Password Entered</h1>");
    }
    
})