import express from 'express';
import mongoose from 'mongoose';

import PostMessage from "../models/postMessage.js";

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try{
        await newPost.save();

        res.status(200).json(newPost)
    }catch (error){
        res.status(400).json({ message: error.message })
    }
}


export const updatePost = async (req, res) => {
    //destructure and rename id variable to match mongoose
    const { id: _id } =req.params;
    const post = req.body

    //Checks if the _id is a mongoose id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    // new: true allows us to receive updated version of post (?)
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    //destructure id and set to req.params
    const { id } = req.params;

    //Checks if the _id is a mongoose id
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted successfully' });
}

export default router;