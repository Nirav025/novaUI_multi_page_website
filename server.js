const app = require("express")();
const PORT = 5000;


app.set("view engine","ejs")  



app.get("/",(req,res)=>{
    res.render("pages/index",{
        title:"Home"
    })
})



app.get("/about",(req,res)=>{
    res.render("pages/about",{
        title:"About"
    })
})


app.get("/pricing",(req,res)=>{
    res.render("pages/pricing",{
        title:"Pricing"
    })
})


app.get("/blog",(req,res)=>{
    res.render("pages/blog",{
        title:"Blog"
    })
})


app.get("/services",(req,res)=>{
    res.render("pages/services",{
        title:"Services"
    })
})


app.listen(PORT,()=>console.log(`server is running on http://localhost:${PORT}`))