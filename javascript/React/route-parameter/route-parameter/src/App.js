import React, { Component } from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';

//this function will be used in the Route 
const Child=( {match} )=>
console.log('Match is : ', match) || 
  (
    <div>
      <h3>
        {/* if we changed the name after the params and inside the Route path into id,then it will return what inside [Link to=""] is written as an Id and so on */}
        Social Media ID : {match.params.name}
      </h3>
    </div>
  )


export default class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
            <h1>Social Media Links</h1>
             <ul>
                <li><Link to="/facebook">FaceBook</Link></li>
                <li><Link to="/twitter">Twitter</Link></li>
                <li><Link to="instagram">Instagram</Link></li>
                <li><Link to="Gmail">Gmail</Link></li>
             </ul>
             {/* the Route is to make our websites dynamic,when clicking it will return   the social media ID and the route will get it from the to=""  */}
          <Route path='/:name' component={Child} />
      </div>
     </BrowserRouter>
    )
  }
}





