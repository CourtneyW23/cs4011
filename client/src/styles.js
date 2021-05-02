import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    background: 'linear-gradient(45deg, #a11030 30%, #a83a00 90%)',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  heading: {
    color: '#56052C',
    textShadow: '4px 3px 0px #a11010, 9px 8px 0px rgba(0,0,0,0.15)'
  },
  
}));
