import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import axios from 'axios';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Userprofile from "./Userprofile";
export default class Users extends React.Component {

    state={
        userdata:''
    }

    componentDidMount () {
      
    <Route path="/user/:id" component={Users} />
    var id=this.props.match.params.id



    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        var apiResponse = response.data;
        
        console.log(apiResponse)
        console.log(id)
       apiResponse.map((item) => {
            if(item.id==id){
                this.setState({userdata:item})
                
            }
        })
        
        
      }).catch(error => {
        console.log(error);
      });
      console.log(this.state.userdata);
      
    }
    
    render () {
      return (  <>
        <Helmet>
          <title>Account | Material Kit</title>
        </Helmet>
        <Box
          sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            py: 3
          }}
        >
          <Container maxWidth="lg">
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                lg={4}
                md={6}
                xs={12}
              >
                {/* <AccountProfile /> */}
                <Userprofile data={this.state.userdata}/>
              </Grid>
              <Grid
                item
                lg={8}
                md={6}
                xs={12}
              >
               
              </Grid>
            </Grid>
          </Container>
        </Box>
      </>)
    }
  }

  