import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import Post from './components/Post';
import UsersTable from './components/UsersTable';
import Graph from './components/Graph';
import Photos from './components/Photos';
import TotalUsers from './components/TotalUsers';
import Piechart from './components/Piechart';
import Comment from './components/Comment';
import DashboardSidebar from './DashboardSidebar';
import PrimarySearchAppBar from './PrimarySearchBar';
import Sidebar from './Sidebar';
const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth={false}>
<PrimarySearchAppBar />
      <Grid
            item
            lg={2}
            sm={8}
            xl={10}
            xs={12}
          >
            <Sidebar />
          </Grid>
      </Container>
      </Box>   
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        maxWidth: '82%',
        float:'right',
        marginTop:'5%',
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
            sm={8}
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
          sx={{height:'2px'}}
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
            <Comment/>
          </Grid>
          <Grid
          container
          spacing={3}
        ></Grid>
          <Grid
            item
            lg={7}
            md={12}
            xl={9}
            xs={12}
          >
            <Graph />
          </Grid>
          <Grid
            item
            lg={5}
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
            lg={12}
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
