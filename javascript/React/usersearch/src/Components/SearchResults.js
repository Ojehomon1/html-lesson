import React, { Component } from 'react'
import User from './User';

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [
                { id: 1000, name: "John Smith", email: "john@abc.com" },
                { id: 1001, name: "Kyra Johnson", email: "kyra@gmail.com" },
                { id: 1002, name: "Kelly Brandon", email: "kbrandon@microsoft.com" },
                { id: 1003, name: "Peter Weller", email: "Peter.weller@robocop.com" },
                { id: 1004, name: "Brandon Fisher", email: "bfisher@disney.com" },
                { id: 1005, name: "Quentin Jackson", email: "quentin@miramax.com" },
                { id: 1006, name: "Jenna La Croisse", email: "jlc@bingo-now.org" },
                { id: 1007, name: "Herbert Rocks", email: "herby@sofast.net" },
                { id: 1008, name: "Mike Johnson", email: "mike@microsoft.com" },
                { id: 1009, name: "Sarah Mchaels", email: "Sarahm@abc.com" }
            ]
        }
    }
    lastSearchFor = '';
    shouldComponentUpdate(nextProps){
        console.log('this is nextProps',nextProps);
        if(nextProps.searchFor===this.lastSearchFor){
            return false;
        }
        else{
            this.lastSearchFor = nextProps.searchFor;
            return true;
        }
        
    }
    
    render() {
       

        let result=this.state.users.filter( (user)=>user.name.toLowerCase().includes(this.props.searchFor.toLowerCase()) );
        console.log(result);

        let filter=result.map( (item)=>{
            return <User key={item.id} id={item.id}
            name={item.name} email={item.email} /> });
    

        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                 
                     {filter}
                      
                </tbody>
                </table>
            </div>
        )
    }
}

