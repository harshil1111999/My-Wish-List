import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from './components/Home'
import RecentlyAdded from './components/RecentlyAdded';
import ShowAll from './components/ShowAll'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home'>
            <Home />
          </Route>
          
          <Route path='/recently-added'>
            <RecentlyAdded />
          </Route>
          
          <Route path='/show-all'>
            <ShowAll />
          </Route>

          <Route path='*'>
            <Redirect to='/home' />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;