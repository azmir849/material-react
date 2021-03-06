import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';

function App() {
  
  return (
    <Router>
      <Switch>
        <Route  exact path="/">
          <Home/>
        </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
            <Route path="/post/:id">
              <PostDetail></PostDetail>
            </Route>
              <Route path="*">
                <NoMatch></NoMatch>
              </Route>
      </Switch>
    </Router>
  );
}

export default App;
