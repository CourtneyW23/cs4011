import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      background: '#faffe6',
      

    },
  },
  paper: {
    padding: theme.spacing(2),
    background: '#faffe6',



  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: '#faffe6',
    
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  heading:{
    fontFamily: '"Apple Color Emoji"',
    color: '#a11030',
    textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)',
  },
}))