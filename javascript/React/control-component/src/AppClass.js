import React, { Component } from 'react'
import Input from './input';
import './App.css';

export default class AppClass extends Component {
    constructor(props){
        super(props);

        this.state = {
            todo: ""
        }
    }
    handleInputChange = (e) =>{
        this.setState({
            todo: e.target.value,

        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        alert(`the task is : ${this.state.todo}`);

    }
    isValid = ()=>{
        if(this.state.todo ===''){
            return false;
        }
        return true;
    }
    render() {
        return (
            <div className="App">
                <h2> Controlled Component with React</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input onChange={this.handleInputChange} id= "todo"
                    errorMessage={this.isValid() ? '' : 'This field is required'}
                    placeholder="write some text" type="text" value={this.state.todo} />
                    {/* <Input type="submit" value="Submit the form" /> */}
                    <button className="btn btn-success" disabled={!this.isValid()} type="submit">Submit </button>
                </form>
            </div>
        )
    }
}
