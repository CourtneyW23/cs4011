import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  media: {
    height: 50,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '50%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
    background: '#faffe6',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 8px 8px 0',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
})