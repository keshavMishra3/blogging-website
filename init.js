const mongoose = require('mongoose');

main().then((res)=>{
    console.log("mongoDb is connected")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
const Chat=require("./models/blog.js");

const allBlogs = [
    {
        Title: "Introduction to JavaScript",
        Content: "JavaScript is a programming language...",
        Author: "John Doe",
        created_at: new Date(),
        password:"mN6!bE8#oP"
    },
    {
        Title: "Getting Started with Node.js",
        Content: "Node.js is a JavaScript runtime built...",
        Author: "Jane Smith",
        created_at: new Date(),
        password:"dP9%wQ4&lZ"
    },
    {
        Title: "React Hooks Tutorial",
        Content: "React Hooks allow you to use state...",
        Author: "Alex Johnson",
        created_at: new Date(),
        password:"vT7#sE2@xR"
    },
    // Add 20 more blog posts
    {
        Title: "Advanced JavaScript Techniques",
        Content: "JavaScript, being a versatile language...",
        Author: "Michael Anderson",
        created_at: new Date(),
        password:"fG5@hT3&oL"
    },
    {
        Title: "Deep Dive into Promises",
        Content: "Promises in JavaScript provide a way to...",
        Author: "Samantha Lee",
        created_at: new Date(),
        password:"kR6#gH9@mZ"
    },
    {
        Title: "Mastering CSS Grid Layouts",
        Content: "CSS Grid Layout is a powerful tool for...",
        Author: "David Brown",
        created_at: new Date(),
        password:"pO2$lM7#jK"
    },
    {
        Title: "Building RESTful APIs with Express",
        Content: "Express.js is a popular framework for...",
        Author: "Emily Wilson",
        created_at: new Date(),
        password:"aZ8#eR1@uY"
    },
    {
        Title: "Optimizing React Performance",
        Content: "Performance optimization in React is crucial...",
        Author: "Chris Roberts",
        created_at: new Date(),
        password:"qW3&rT5@dF"
    },
    {
        Title: "Understanding Redux State Management",
        Content: "Redux is a predictable state container for...",
        Author: "Sophia Garcia",
        created_at: new Date(),
        password:"zX4#pQ9@sW"
    },
    {
        Title: "Securing Your Node.js Applications",
        Content: "Security is a critical aspect of any...",
        Author: "Daniel Martinez",
        created_at: new Date(),
        password:"xY9@bN6#gV"
    },
    {
        Title: "Effective React Component Design",
        Content: "Designing React components efficiently...",
        Author: "Jessica Thompson",
        created_at: new Date(),
        password:"bM5#kP2@iO"
    },
    {
        Title: "Asynchronous JavaScript Patterns",
        Content: "Asynchronous programming is essential...",
        Author: "Ryan Wilson",
        created_at: new Date(),
        password:"mN8@kL1#oP"
    },
    {
        Title: "Advanced Node.js Features",
        Content: "Node.js offers a range of advanced...",
        Author: "Emma White",
        created_at: new Date(),
        password:"dF7@gH3#wQ"
    },
    {
        Title: "Responsive Web Design Best Practices",
        Content: "Responsive web design ensures that your...",
        Author: "Oliver Taylor",
        created_at: new Date(),
        password:"vT2@bR9#nM"
    },
    {
        Title: "Scaling React Applications",
        Content: "Scaling React applications requires...",
        Author: "Hannah Wilson",
        created_at: new Date(),
        password:"jK6@sD3#fG"
    },
    {
        Title: "Advanced CSS Techniques",
        Content: "CSS is a powerful language that allows...",
        Author: "Lucas Roberts",
        created_at: new Date(),
        password:"qW8#lK4@dF"
    },
    {
        Title: "Optimizing Node.js Performance",
        Content: "Node.js performance optimization involves...",
        Author: "Lily Davis",
        created_at: new Date(),
        password:"hJ3@nM7#pQ"
    },
    {
        Title: "Vue.js Fundamentals",
        Content: "Vue.js is a progressive JavaScript framework...",
        Author: "Ethan Clark",
        created_at: new Date(),
        password:"rT5@dF9#vG"
    },
    {
        Title: "Testing React Applications",
        Content: "Testing React applications is crucial...",
        Author: "Isabella Garcia",
        created_at: new Date(),
        password:"yU7#tR2@wQ"
    },
    {
        Title: "Diving Deep into Web Accessibility",
        Content: "Web accessibility ensures that websites...",
        Author: "Nathan Brown",
        created_at: new Date(),
        password:"xW3@qR6#zT"
    },
    {
        Title: "Optimizing Frontend Performance",
        Content: "Frontend performance optimization involves...",
        Author: "Sophie Johnson",
        created_at: new Date(),
        password:"aS4@fG8#hJ"
    }
];


Chat.insertMany(allBlogs).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})