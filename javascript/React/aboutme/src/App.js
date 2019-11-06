import React, { Component } from 'react';
import './App.css'
import Me from './Components/Me'
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';
import Error from './Components/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default class App extends Component {
  if
  render(){
    return (
    <Router>
      <div className="App">
        <div class="Banner">
         <h1>About Me</h1>
        </div>
        <ul className="Navbar">
          <li>
          <Link to="/">
          Me
          </Link>
          </li>
          <li>
          <Link to="/Hobbies">
          Hobbies
          </Link>
          </li>
          <li>
          <Link to="/Contact">
          Contact
          </Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/">
          <Me />
        </Route>
        <Route path="/Hobbies">
          <Hobbies />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route >
          <Error />
        </Route>
      </Switch>
    </Router>
    )
  }
}

