import React, { Component }from 'react';
import './App.css';
import Header from './Components/Header'
import SearchResults from './Components/SearchResults';
export default class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    searchTerm:'',
    lastSearchTerm:''
  }
}
search=(e)=>{
  this.setState({
    searchTerm:e.target.value
  })
 }
 click=()=>{
   this.setState({
     lastSearchTerm:this.state.searchTerm
   })
   console.log(this.state.lastSearchTerm);
 }
 render() {
  return (
    <div>
     <Header />
      <div className="App">
        <input onChange={this.search} id="tableSearch"></input>
        <button onClick={this.click} >Search</button>
      </div>
      <div>
        <SearchResults searchFor={this.state.lastSearchTerm}/>
      </div>
    </div>
  )
}

}




