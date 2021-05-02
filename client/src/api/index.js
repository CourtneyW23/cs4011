import axios from 'axios'

const create = 'http://localhost:3000/create'
const get = 'http://localhost:3000/get'
//const update = 'http://localhost:3000/update'

export const fetchPosts = () => axios.get(get)
export const createPosts = (newPost) => axios.post(create, newPost)
//export const updatePost = (id, updatedPost) => axios.patch(`${update}/${id}`, updatedPost);