import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Timer extends Component {
    constructor(props){
         super(props);
         this.state = {
             counter : 0,
             message: "click me"
         }

    }
    btnClick = () =>{
       // let newCounter = this.state.counter +1
        {this.setState({
            //counter : newCounter
            counter: +this.state.counter +1,
            message:"clicked"
        })}
    }
    render() {
        return (
            <div className="App">
                <h5>{this.state.counter}</h5>
                <button className="btn btn-info" onClick={this.btnClick}>
                    {this.state.message}
                </button>
            </div>
        )
    }
}
