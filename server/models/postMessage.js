import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    classification: String,
    affiliation: String,
    abilities: String,
    creatureName: String,
    species: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage