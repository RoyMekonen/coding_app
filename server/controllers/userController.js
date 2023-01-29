const userSchema = require('../models/userSchema')
//function to get all the users
const getAllUsers = async(req,res,next)=>{
    try{
        const users = await userSchema.find({});
        res.status(200).json(users)
    }catch(err){
        next(err);
    }
}
// function to get a specific user
const getUser = async (req,res,next)=>{
    const {userId} = req.params
    try{
        const user = await userSchema.findById(userId)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}

module.exports = {
    getAllUsers,getUser
}