import React, { Component } from 'react'

const githubUrl = 'https://jsonplaceholder.typicode.com/users'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: [{
        name:'No Name'
       }],
       index: 0
    }

  }
  nextEntry(){
    this.setState({
      index: ++this.state.index
    })
  }
  
  componentDidMount() {
    fetch(githubUrl)
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json

      })
    })
  }
  

  render() {
    return (
      <div>
        {this.state.users[this.state.index].name}
        <button onClick={this.nextEntry.bind(this)}>Next</button>
      </div>
    )
  }
}
