import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { useDispatch } from 'react-redux';

import {  deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.image || 'https://i.stack.imgur.com/y9DpT.jpg'} title={post.classification} />
      <div>
        <Typography  className={classes.overlay} variant="h5">{post.creatureName}</Typography> 
      </div>
      <CardContent>
      <div>
      <Typography variant="subtitle1" color="textSecondary" component="p">Class: {post.classification}</Typography>
      <Typography variant="subtitle1" color="textSecondary" component="p">Affiliation: {post.affiliation}</Typography>
      <Typography variant="subtitle1" color="textSecondary" component="p">Species: {post.species}</Typography>
      <Typography variant="subtitle1" color="textSecondary" component="p">Abilities: {post.abilities}</Typography>
      </div>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button title="Update" size="small" color="primary" onClick={() => setCurrentId(post._id)}><UpdateIcon fontSize="default" /></Button>
        <Button title="Delete" size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /></Button>
      </CardActions>
    </Card>
  );
};

export default Post;