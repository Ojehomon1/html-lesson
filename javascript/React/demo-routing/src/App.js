import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Topics from './Components/Topics';
import {Dropdown} from 'react-bootstrap'

import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link,
} from "react-router-dom";
class App extends Component {
 render() {
   return (
     <Router>
       <div className="Navbar">
         <ul>
           <li className="Navbarlink">
             <Link to ="/">Home</Link>
           </li>
           <li className="Navbarlink">
             <Link to="/about">About</Link>
           </li>
           <li className="Navbarlink">
             <Link to="/dashboard">Dashboard</Link>
           </li>
           <li className="Navbarlink">
             
             <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                <Link to="/topics">Topics</Link>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Link 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Link 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Link 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
           </li>
         </ul>
         </div>
         <div>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/dashboard">
           <Dashboard />
         </Route>
         <Route path="/topics">
           <Topics />
         </Route>
       </Switch>
       </div>
     </Router>
     
   );
 }
}

export default App;

// TODO place Home, About and Dashboard in seperate modules

