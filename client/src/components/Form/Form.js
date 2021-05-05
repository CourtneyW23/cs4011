import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creatureName: '', classification: '', affiliation: '', abilities: '', species: '', image: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creatureName: '', classification: '', affiliation: '', abilities: '', species: '', image: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography className={classes.heading} variant="h4">{currentId ? `Editing "${post.creatureName}"` : 'Create New Creatures'}</Typography>
        <TextField name="creatureName" variant="outlined" label="Creature's Name" fullWidth value={postData.creatureName} onChange={(e) => setPostData({ ...postData, creatureName: e.target.value })} />
        <TextField name="classification" variant="outlined" label="Classification" fullWidth value={postData.classification} onChange={(e) => setPostData({ ...postData, classification: e.target.value })} />
        <TextField name="affiliation" variant="outlined" label="Affiliation" fullWidth value={postData.affiliation} onChange={(e) => setPostData({ ...postData, affiliation: e.target.value })} />
        <TextField name="abilities" variant="outlined" label="Abilities" fullWidth value={postData.abilities} onChange={(e) => setPostData({ ...postData, abilities: e.target.value })} />
        <TextField name="species" variant="outlined" label="Species" fullWidth value={postData.species} onChange={(e) => setPostData({ ...postData, species: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;