const roomSchema = require('../models/roomSchema')


// get all the rooms with the block codes
const getAllRooms = async(req,res,next)=>{
    try{
        const rooms = await roomSchema.find({});
        res.status(200).json(rooms)
    }catch(err){
        next(err);
    }
}

//get specific room from the all with the id
const getRoom = async (req,res,next)=>{
    const {roomId} = req.params
    try{
        const room = await roomSchema.findById(roomId)
        res.status(200).json(room)
    }catch(err){
        next(err)
    }
}
// the function to update the room, that mean update the code and return the editing code.
const updateRoom = async (req,res) =>{
    try{
        const addCode = await roomSchema.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        // res.status(200).json(addCode)
        return addCode
    }catch(err){
        throw(err)
    }
}

module.exports = {
    getAllRooms,getRoom,updateRoom
}