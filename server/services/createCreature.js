const Creature = require('../models/Creatures')

const CreateCreature = async (req, res, next) =>{
try{
const creature = new Creature({
    creatureName: req.body.creatureName,
    classification: req.body.class,
    origin: req.body.origin,
    affiliation: req.body.affiliation,
    species: req.body.species,
    abilities: req.body.abilities,
    image: req.body.image
})

const result = await creature.save()

    res.send(result)
}catch(e){
    res.status(400).send('You are missing something')
    }
}

module.exports = CreateCreature