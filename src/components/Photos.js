import React, { Component } from 'react';
import axios from 'axios';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  // LinearProgress,
  Typography
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

  class Photos extends Component {
    constructor(props) {
      super(props);
      this.state = {
        totalphotos: ''
      };
    }
    componentDidMount() {
  
  
      axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
          let apiResponse = response.data;
          console.log(apiResponse.length)
          this.setState({ totalphotos: apiResponse.length })
  
        }).catch(error => {
          console.log(error);
        });
    }
    render() {
      return (
  <Card
    sx={{ height: '100%' }}
  >
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
            PHOTOS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            {this.state.totalphotos}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 100,
              width: 100
            }}
            style={{backgroundColor:'#fb8c02', height:'50px',width: '50px'}}
          >
            <PhotoLibraryIcon    style={{backgroundColor:'#fb8c02'}}/>
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
}
}

export default Photos;
