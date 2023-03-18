import express from 'express';
const app = express()
import Journal from '../models/Journal.js';


export const getAllJournals = async(req,res,next) =>{
    let journals;
    try{
        
        journals = await Journal.find()

    }catch(err){
        console.log(err)
    }
    if (!journals){
        return res.status(404).json({message:'no data found'})
    }
    return res.status(200).json({journals})
}



export const addJournal = async (req,res,next) =>{
    const journal = new Journal({
    title: req.body.title,
    body: req.body.body, 
    user: req.body.user
    });
    try{
        await journal.save()
    }catch(err){
        console.log(err)
    }
    return res.status(200).json({journal})
}


export const updateJournal = async (req,res,next) =>{
    const {title, body} = req.body
    const journalId = req.params.id
    let journal
    try{
        journal = await Journal.findByIdAndUpdate(journalId,{
            title,
            body
        })
    }catch(err){return console.log(err)}

    if (!journal){
        return res.status(500).json({message: 'Unable to update'})
    }
    return res.status(200).json({journal})
}


export const getJournal = async(req,res,next) =>{
    let journal;
    let journalId = req.params.id
    try{
        journal = await Journal.findById(journalId)

    }catch(err){
        console.log(err)
    }
    if (!journal){
        return res.status(404).json({message:'no data found'})
    }
    return res.status(200).json({journal})
}

export const deleteJournal = async(req, res,next)=>{
    let journalId = req.params.id
    let journal
    try{
        journal = await Journal.findByIdAndRemove(journalId)

    }catch(err){return console.log(err)}

    if (!journal){
        return res.status(404).json({message:'no data found'})
    }
    return res.status(200).json({message:"Deleted"})
}