const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/anonymous');
mongoose.connection.on('connected',()=>{
    console.log("Connected to Mongo DB");
});
mongoose.connection.on('error',()=>{
    console.log("Unable to connect");
})
