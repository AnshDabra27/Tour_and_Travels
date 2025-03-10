import User from "../models/UserSchema.js"


export const updateUser = async (req,res,next)=>{
    try{
        const updateUser = await User.findByIdAndUpdate(req.params.id,
            {$set:req.body} ,
            {new:true});
        res.status(200).json(updateUser)
    }catch(err){
        next(err)
    }
}

export const deleteUser = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("User Deleted")
    }catch(err){
        next(err)
    }
}

export const getUser = async (req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}

export const getAllUsers = async (req,res,next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users)
    }catch(err){
        next(err)
    }
}