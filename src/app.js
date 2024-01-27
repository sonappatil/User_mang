require("dotenv").config();
const express = require("express");

const app = express();

const PORT = 3000 || process.env.PORT;

app.get("/", (req,res)=>{
    res.send("user management");
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})