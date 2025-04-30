// requiring express
const express=require("express")
// invoking express
const app=express();
// const app=require("express")()
const {db, books}=require("./database/connection")//importing db object from connection.js file


// get all books

app.get("/books",async (req,res)=>{
    //yele me books table ma vako sabai data lyayer dinxa(this is query ans i/o operation so we use async await)
    const datas=await books.findAll()//select * from books(always return array of objects)
    console.log(datas)
    // sending response to the client
    res.json({
        message:"Get all books",
        datas
    }) 
}) 
// get single book by id
app.get("/books/:id",(req,res)=>{

    res.json({message:`Get book with id ${req.params.id}`}) 
})                                                     
// post books   
app.post("/books",(req,res)=>{
    res.json({message:"book added successfully"}) 
})
// update books by id      
app.patch("/books/:id",(req,res)=>{
    res.json({message:`Update a book with id ${req.params.id}`}) 
})
// delete books by id   
app.delete("/books/:id",(req,res)=>{
    res.json({message:`book with id ${req.params.id} deleted successfully`})
})

// making our server to listen request at  4000 port number(runnig server at 4000 port)
app.listen(4000,()=>{
    console.log("Server/Backend has started at  port 4000!")
})
