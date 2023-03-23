import express from 'express';
const app = express()
import bcrypt from 'bcryptjs'
import User from '../models/User.js';


export const signup = async (req,res) =>{
    const {name, email, password} = req.body
    let existingUser
    try{
        existingUser = await User.findOne({email})
    }catch(err){return console.log(err)}

    if (existingUser){
        res.send(400).json({message:'User already exists'})
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password: hashedPassword
    })

    try{
        user.save()
    }catch(err){return console.log(err)}
    return res.status(201).json({message: 'Successfully registered'})
}



export const login = async (req,res) =>{
    const {email, password} = req.body
    let existingUser
    try{
        existingUser = await User.findOne({email})
    }catch(err){return console.log(err)}

    if (!login){
        res.status(400).json({message:"couldn't find user"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json({message:"incorrect password"})
    }
    return res.status(200).json({message:"successful login"})

}