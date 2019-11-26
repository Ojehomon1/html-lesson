import React, { Component } from 'react'
import './App.css';
import img1 from './Images/img1.jpg'
import Images from './Images'

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      word:'html',
      abc : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    }
  }
  guessword = () => {
    let wordArray = this.state.word.split('').map((item) => {
      return '_'
    })
    return wordArray
  }

  render() {
    let buttons = this.state.abc.map(item => {
              return (
                <button value={item} >
                {item}
                </button>
              )
            })
    return (
      <div className="App">
        <h3>Hangman</h3>
        <div><img src={img1} alt="img1"/>
        <p>can you guess the programming language?</p>
        </div>
        <div>
          <p className="gword">{this.guessword()}</p>
        </div>
        <br/>
        {buttons}
     </div>
    )
}

}
