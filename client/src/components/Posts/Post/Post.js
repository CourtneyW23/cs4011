import React from 'react'
import useStyles from './styles'
const Post = () =>{
    const classes = useStyles()


    return (
        <h1>Post</h1>
    )
}


/*import React from 'react'
import useStyles from './styles'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
//import { useDispatch } from 'react-redux';

const Post = ({post, setCurrentId}) =>{
    const classes = useStyles()
    //const dispatch = useDispatch()
    return(
       <Card className={classes.card}>
           <CardMedia className={classes.media} image={post.image} title={post.title}/>
           <div className={classes.overlay}>
               <Typography variant="h6">Name: {post.creatureName}</Typography>
           </div>
           <div className={classes.overlay2}>
               <Button style={{color: 'white'}} size="small" onClick={() => setCurrentId(post._id)}>
                   <MoreHorizIcon frontSize="default" />
               </Button>
           </div>
           <CardContent>
            <Typography className={classes.title} variant="h5" gutterButtom>Classification: {post.class}</Typography>
            <Typography className={classes.title} variant="h5" gutterButtom>Origin: {post.origin}</Typography>
            <Typography className={classes.title} variant="h5" gutterButtom>Affiliation: {post.affiliation}</Typography>
            <Typography className={classes.title} variant="h5" gutterButtom>Species: {post.species}</Typography>
            <Typography className={classes.title} variant="h5" gutterButtom>Abilities: {post.abilities}</Typography>
           </CardContent>
           <CardActions className={classes.cardActions}>
               <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    Delete
               </Button>
           </CardActions>
       </Card>
       
    )
}*/

export default Post