import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#faffe6'
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textShadow: '4px 3px 0px #fff, 9px 8px 0px rgba(0,0,0,0.15)',
    fontFamily: '"Apple Color Emoji"'
  },
  image: {
    marginLeft: '15px',
  },
}))