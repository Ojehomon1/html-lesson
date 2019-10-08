import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(info) {
  return (
    <div className="App">
      <h1>Hello from React App</h1>
      <p>{info.name}</p>
      <h2>{info.city}</h2>
    </div>
  );
}

function Person(props){
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.job}</p>
      <p>Age: {getRandomArbitrary(20, 35)}</p>
    </div>

  );
}


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}


export default App;
export {Person};
