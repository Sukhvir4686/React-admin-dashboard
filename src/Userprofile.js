import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import React from "react";
import { Link} from "react-router-dom";
const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

export default class Userprofile extends React.Component {

  constructor(props){
    super(props)
  }
    componentDidMount () {

    }
    
    render () {
      return (<>
      <Link to={'/'}><Button >
      <ArrowBackIcon/>
      </Button></Link>
     
          <Box
            sx={{
              alignItems: 'center',
              // display: 'flex',
              flexDirection: 'column',
              minHeight:'60%',
              minWidth:'100%',
              alignSelf:'center',
              marginLeft:'475px',
              marginTop:'125px',
              boxShadow:'red'
            }}
          >
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqJA3lURijw_FnyDRByYKgL2q3ZM5iwo1Sw&usqp=CAU' alt="Avatar" style={{'border-radius': '50%','width':'105px','height':'90px'}}></img>
            {/* <Avatar
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqJA3lURijw_FnyDRByYKgL2q3ZM5iwo1Sw&usqp=CAU'
              sx={{
                height: 100,
                width: 100
              }}
            /> */}
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h3"
            >
            {this.props.data.name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
              >
              {this.props.data.username}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              {this.props.data.email}
            </Typography>
          
        
        <Divider />
        <CardActions>
          <Button
            color="primary"
            fullWidth
            variant="text"
            marginLeft='555px'
              marginTop='125px'
          >
            {this.props.data.website}
          </Button>
        </CardActions>
          </Box>
        </>
      )
    }
  }
 