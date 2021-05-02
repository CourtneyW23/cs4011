import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {createPosts, updatePost} from '../../actions/posts'


const Form = () =>{
    const [postData, setPostData] = useState({
        creatureName:'',
        class: '',
        origin: '',
        affiliation: '',
        species: '',
        abilities: '',
        image: ''
    
    })
    
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createPosts(postData))
    }

    const clear = () =>{

    }


    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating Creatures</Typography>
                <TextField name="creatureName" variant="outlined" label="Creature Name" fullWidth value={postData.creatureName} onChange={(e) => setPostData({...postData, creatureName: e.target.value})}/>
                <TextField name="class" variant="outlined" label="class" fullWidth value={postData.class} onChange={(e) => setPostData({...postData, class: e.target.value})}/>
                <TextField name="origin" variant="outlined" label="origin" fullWidth value={postData.origin} onChange={(e) => setPostData({...postData, origin: e.target.value})}/>
                <TextField name="affiliation" variant="outlined" label="affiliation" fullWidth value={postData.affiliation} onChange={(e) => setPostData({...postData, affiliation: e.target.value})}/>
                <TextField name="species" variant="outlined" label="species" fullWidth value={postData.species} onChange={(e) => setPostData({...postData, species: e.target.value})}/>
                <TextField name="abilities" variant="outlined" label="abilities" fullWidth value={postData.abilities} onChange={(e) => setPostData({...postData, abilities: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, image: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

/*import React, {useState, useEffect} from 'react'
import useStyles from './styles'
import {TextField, Button, Typography, Paper} from '@material-ui/core'
import FileBase from 'react-file-base64'
import {useDispatch, useSelector} from 'react-redux'
import {createPosts, updatePost} from '../../actions/posts'


const Form = ({currentId, setCurrentId}) =>{
    const [postData, setPostData] = useState({
        creatureName:'',
        class: '',
        origin: '',
        affiliation: '',
        species: '',
        abilities: '',
        image: ''
    
    })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null )
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        if(post) setPostData(post)
    }, [post])
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(currentId){
            dispatch(updatePost(currentId, postData)) 
        }
        else
        dispatch(createPosts(postData))
    }
    const clear = () =>{

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating Creatures</Typography>
                <TextField name="creatureName" variant="outlined" label="Creature Name" fullWidth value={postData.creatureName} onChange={(e) => setPostData({...postData, creatureName: e.target.value})}/>
                <TextField name="class" variant="outlined" label="class" fullWidth value={postData.class} onChange={(e) => setPostData({...postData, class: e.target.value})}/>
                <TextField name="origin" variant="outlined" label="origin" fullWidth value={postData.origin} onChange={(e) => setPostData({...postData, origin: e.target.value})}/>
                <TextField name="affiliation" variant="outlined" label="affiliation" fullWidth value={postData.affiliation} onChange={(e) => setPostData({...postData, affiliation: e.target.value})}/>
                <TextField name="species" variant="outlined" label="species" fullWidth value={postData.species} onChange={(e) => setPostData({...postData, species: e.target.value})}/>
                <TextField name="abilities" variant="outlined" label="abilities" fullWidth value={postData.abilities} onChange={(e) => setPostData({...postData, abilities: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, image: base64})} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}*/

export default Form