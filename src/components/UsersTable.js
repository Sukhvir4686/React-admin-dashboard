import moment from 'moment';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import React, { Component } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserRouter as Router, Switch, Route, Link, DefaultRoute } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import Dashboard from '../Dashboard';
var order = [];


class UsersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersdata: ''
    };
  }
  componentDidMount() {

 
 

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        var apiResponse = response.data;
        this.setState({ usersdata: apiResponse })
        console.log(apiResponse)
        apiResponse.map((item) => {
          order.push(item)
        })
      }).catch(error => {
        console.log(error);
      });
    console.log(order)
    this.setState({ set: 'change' })
  }
  render() {
    return (
      <Card >
        <CardHeader title="Users" />
        <Divider />
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    ID
                  </TableCell>
                  <TableCell>
                    Name
                  </TableCell>
                  {/* <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell> */}
                  <TableCell>
                    Website
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {this.state.usersdata && this.state.usersdata.map((item, index) => {
                  return (


                    <TableRow
                      hover
                      key={index}
                    >
                      
                        <TableCell>
                        <Link to={"/user/" + item.id}>{item.id}</Link>
                        </TableCell>
                      <TableCell>
                      <Link to={"/user/" + item.id}>{item.name}</Link>
                      </TableCell>
                      <TableCell>
                      <a href={'https://' + item.website}> {item.website}</a>
                      </TableCell>

                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>)

  }
}

export default UsersTable;
