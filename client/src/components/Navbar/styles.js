import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
import { colors } from '@material-ui/core';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '5px ',
    marginBottom:'30px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:'100px',
    padding: '10px 50px',
    backgroundColor: '#3F51B5', // background colour of the navbar
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      backgroundColor:'#3F51B5' // background colour of the navbar when the screen size decreases
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    marginRight:'-120px'
  },
  createpost: {
    width:'200px',
    marginRight:'15px',
    marginLeft:'-50px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  text:{
    fontSize: '18px',
    color:'#000',
    fontWeight:'50px',
    marginLeft:'10px'

  },

  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'inline',
    padding: '16px',
  },
 
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
