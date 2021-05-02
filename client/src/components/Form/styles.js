import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
      
    },
  },
  paper: {
    padding: theme.spacing(2),
    background: 'linear-gradient(45deg, #a11030 30%, #a83a00 90%)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
    display: 'flex',
    
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));