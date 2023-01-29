const User = require('../models/userSchema.js')

//the function to login to the application with the user name Josh the student or Tom the mentor in the server
const login = async(req,res)=>{
    const user = await User.findOne({userName: req.body.userName})
    if(!user) res.status(500).json('User not found');
    res.status(200).json(user)
}

module.exports = {
    login
}