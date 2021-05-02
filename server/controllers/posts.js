const express = require('express')

const Creatures = require('../models/Creatures.js')

const router = express.Router();

 const getPosts = async (req, res) => { 
    try {
        const creatures = await Creatures.find();
                
        res.status(200).json(creatures);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createPost = async (req, res) => {
    const { creatureName, classification, origin, affiliation, species, abilities, image  } = req.body;

    const newCreatures = new Creatures({ creatureName, classification, origin, affiliation, species, abilities, image})

    try {
        await newCreatures.save();

        res.status(201).json(newCreatures );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = {getPosts, createPost};