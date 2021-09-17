import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Post from 'src/components/dashboard/Post';
import UsersTable from '../components/dashboard/UsersTable';
// import LatestProducts from 'src/components/dashboard//LatestProducts';
import Graph from 'src/components/dashboard//Graph';
import Photos from 'src/components/dashboard/Photos';
import TotalUsers from 'src/components/dashboard/TotalUsers';
import Piechart from 'src/components/dashboard/Piechart';
import TotalProfit from 'src/components/dashboard//TotalProfit';
import TrafficByUsers from 'src/components/dashboard/TrafficByUsers';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Post />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalUsers />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Photos />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={120}
            xl={90}
            xs={140}
          >
            {/* <Sales /> */}
            <Graph />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <Piechart sx={{ height: '100%' }} />
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid> */}
          <Grid
            item
            lg={30}
            md={12}
            xl={9}
            xs={12}
          >
            <UsersTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;
