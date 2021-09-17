import React, { Component } from 'react';
import axios from 'axios';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import UsersTable from './UsersTable';

class TotalUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalusers: '',
      tabledata:''
    };
  }
  componentDidMount() {


    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        let apiResponse = response.data;
        console.log(apiResponse.length)
        this.setState({ totalusers: apiResponse.length })
        this.setState({tabledata:apiResponse})

      }).catch(error => {
        console.log(error);
      });
  }
  render() {
    return (<>
  
   <Card sx={{ height: '100%' }}>
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
            TOTAL USERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {this.state.totalusers} 
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
            style={{backgroundColor:'#43a047', height:'50px',width: '50px'}}
          >
            <PeopleIcon    style={{backgroundColor:'#43a047'}}/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card >
  </>
)
  }
}

export default TotalUsers;
