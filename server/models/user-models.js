const mongoose=require("mongoose");
const messSchema=new mongoose.Schema({
    Message:{
        type:String,
        required:true
    }
});
const Messages=new mongoose.model("Mess",messSchema);
module.exports=Messages;