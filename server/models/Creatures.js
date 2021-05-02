const mongoose = require('mongoose')

//what data looks like
const CreatureSchema = mongoose.Schema({
    creatureName: {
        type: String,
        required: true,
    },
    classification: {
        type: String,
        required: true,
    },
    origin: String,
    affiliation: String,
    species: String,
    abilities: String,
    image: String
})

const creatures = mongoose.model('creature', CreatureSchema)
module.exports = creatures