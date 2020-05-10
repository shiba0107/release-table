import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: '#2C519F'
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#74B287'
    },
  })(LinearProgress);

export default BorderLinearProgress;