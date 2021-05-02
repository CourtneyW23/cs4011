const Creature = require('../models/Creatures')

const GetCreatures = async (req, res, next) =>{

    const creatures = await Creature.find()

    res.send(creatures)
}

module.exports = GetCreatures