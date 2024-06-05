const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("hello world from node")
})

const PORT = 5000

app.listen(PORT,()=>{
    console.log(`server started on ${PORT}`)
})