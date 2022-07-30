import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'center',
    },
  },
  
}));
