import React, { useState} from 'react';
import { Container,Grid } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Appstyles from './Appstyles';
import 'bootstrap/dist/css/bootstrap.css';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar.js';
import Navbar2 from './components/Navbar/Navbar2.js';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Form from './components/Form/Form';
import SemesterList from './components/Notes/SemesterList';
import Semester from './components/Notes/Semester';
import Subject from './components/Notes/Subject';
import HomePage from './Home/Home'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [currentId, setCurrentId] = useState(0);

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        {/* <Navbar2 /> */}


        <Switch>
        <Route path="/" exact component={HomePage} />
          <Route path="/notes" exact component={SemesterList} />
          <Route path="/notes/:sem_num" exact component={Semester} />
          <Route path="/notes/:sem_num/:subject" exact component={Subject} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path="/createpost" exact component={{Form}}>
          <Grid item xs={12} sm={6} md={3} style={{marginLeft:'500px', marginTop:'75px'}}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
