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
import ArtTrackIcon from '@material-ui/icons/ArtTrack';
import { red } from '@material-ui/core/colors';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalposts : ''
    };
  }  
  componentDidMount(){
    

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        let apiResponse = response.data;    
        console.log(apiResponse.length)
        this.setState({totalposts:apiResponse.length})
        
      }).catch(error => {
        console.log(error);
      });
    }
  render() {
    return (
      <Card sx={{ height: '100%' }}>
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <h1>{this.state.a}</h1>
            <Grid item>
              <Typography
                color="#5664d2"
                gutterBottom
                variant="h6"
              >
                POSTS
              </Typography>
              <Typography
                color="textPrimary"
                variant="h3"
              >{this.state.totalposts}
              </Typography>
            </Grid>            
            <Grid item>
            <Avatar
                sx={{
                  height: 56,
                  width: 56
                }}
                style={{backgroundColor:'red'}}
              >
                <ArtTrackIcon style={{backgroundColor:'red'}} />
              </Avatar>
            </Grid>
          </Grid>
         
        </CardContent>
      </Card>

    );
  }
}

export default Post;
