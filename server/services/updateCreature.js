const Creature = require('../models/Creatures')

const UpdateCreature = async (req, res, next) =>{
    const id = req.query.id
    //const points = Number(req.query.points)

    const oldCreature = await Creature.findById(id)
    const newCreature = await Creature.findByIdAndUpdate(id, {
        loyaltyPoints: oldCreature.loyaltyPoints + points
    })

    res.send(newCreature)
}

module.exports = UpdateCreature