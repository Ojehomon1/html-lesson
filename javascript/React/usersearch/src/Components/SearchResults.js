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
    
    render() {
        let result = this.state.users.filter((item)=>{
        return item.name.includes(this.props.searchFor)
    })
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
                 {
                     this.state.users.map((user) => {
                        return (
                            <User id={user.id} name={user.name} email={user.email} />
                        )
                     })
                }      
                </tbody>
                </table>
            </div>
        )
    }
}

