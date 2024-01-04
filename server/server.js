const express=require('express');
const db =require("./utils/db");
const bodyParser=require("body-parser");
const authcontrollers=require("./controllers/auth-controller");
const cors=require('cors');
const app=express();
const port=5000;
const corsOptions={
    origin:"http://localhost:3000",
    methods:"GET,PUT,POST,DELETE,PATCH",
    Credentials:true
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.post("/sendMessage",authcontrollers.sendMessage);
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})