const Messages=require("../models/user-models");
const sendMessage=async(req,res)=>{
    try {
        const message=req.body.Message;
        console.log(message);
        const messageSent=await Messages.create({Message:message});
        res.status(200).json({messageSent});
    } catch (error) {
        console.error(error);
        
    }
}
module.exports={sendMessage};