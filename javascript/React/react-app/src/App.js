import React, {Component} from 'react';
import './App.css';
import Persons from './Persons/Persons'
import { whileStatement } from '@babel/types';

class App extends Component {
  state = {
    persons: [
      {name: 'Ali', job:'Web designer', age:20},
      {name: 'Hamed', job:'Android developer', age:22}
    ]
  }
  changeContent = ()=>{
    console.log('btn was clicked');
    document.querySelector('body').style.background="#ccc";
    this.setState({
      persons: [
        {name: 'John', job:'Dentist', age:55, class:'vip'},
        {name: 'Lara', job:'Human Resources', age:30}
      ]
    })

  }
  render() {
    const style = {
      background:'white',
      border:'1px solid blue',
      padding: '10px',
      cursor:'pointer',
      fontWeight:'bold'
    };
    return (
     <div className="App" onMouseDown={this.changeContent}>
       <Persons name="Mansour" job="DCI teacher" age="28" class="vip" />
       <Persons name="Daniel" job="Frontend dev" age="30" />
       <Persons name="Peter" job="FullStack dev" age="28" />
       <Persons name="Ahmad" job="Backend dev" age="26" />
       <div>
         <button style = {style} onClick={this.changeContent }>Change Content</button>
       </div>
       <Persons name= {this.state.persons[0].name} job = {this.state.persons[0].job} age = {this.state.persons[0].age} class = {this.state.persons[0].class}/>
       <Persons name= {this.state.persons[1].name} job = {this.state.persons[1].job} age = {this.state.persons[1].age}/>

    </div>
  
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is React app'));
  }
}

export default App;
