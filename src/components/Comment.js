import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CommentIcon from '@material-ui/icons/Comment';

const Comment = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
           COMMENTS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
           500
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: indigo[600],
              height: 56,
              width: 56
            }}
            style={{backgroundColor:'#3949ab',height:'50px',width: '50px'}}
          >
            {/* <AttachMoneyIcon /> */}
            < CommentIcon   style={{backgroundColor:'#3949ab'}} />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default Comment;
