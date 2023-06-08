const express = require("express");
const conncetDb = require("./db/conn");
const router = require("./routers/routers");
const app = express();
const PORT = process.env.PORT ||3000;
app.use(express.json());
app.use(router);
app.get("/",(req,res)=>{
    res.send("home");
});

const start = ()=>{
    try {
        conncetDb();
        app.listen(PORT,async(req,res)=>{
            console.log(`connect with port no:- ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();