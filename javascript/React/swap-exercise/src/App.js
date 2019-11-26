import React, { Component } from 'react'
import './App.css'
export default class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
      personalInfo:[]
   }
 }
 componentDidMount(){
   let initialPersonInfo = [];
   fetch('https://swapi.co/api/people/')
   .then(res => res.json())
   .then(data =>{
     console.log(initialPersonInfo)
     initialPersonInfo = data.results;
     console.log(initialPersonInfo)
     this.setState({
     personalInfo:initialPersonInfo
   })
   })
 }
 render() {
   console.log(this.state.personalInfo)
   let allPeople = this.state.personalInfo.map((info,index)=>{
     return(
       <div key={index}>
       <span>people info :{ info.name}</span>
       <h3>people info :{ info.height}</h3>
       <h3>people info :{ info.mass}</h3>
       </div>
     )
   })
   return (
     <div>
       <h1>the info:</h1>
       {allPeople}
     </div>
   )
 }
}


