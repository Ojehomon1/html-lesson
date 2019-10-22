import React, { Component } from 'react'
import User from './User';

export default class SearchResults extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [
                { id: 1001, name: "John Smith", email: "john@abc.com" },
                { id: 1002, name: "Kyra Johnson", email: "kyra@gmail.com" },
                { id: 1003, name: "Kelly Brandon", email: "kelly@dci.com" },
                { id: 1004, name: "Peter Weller", email: "peter@gmail.com" },
                { id: 1005, name: "Quentin Jackson", email: "quentin@dci.com" },
                { id: 1006, name: "H Jenna La Croisse", email: "hjenna@abc.com" },
                { id: 1007, name: "Herbert Rocks", email: "herbert@abc.com" },
                { id: 1008, name: "Mike Johnson", email: "mikej@dci.com" },
                { id: 1009, name: "Sarah Mchael", email: "sarah@dci.com" }

            ]
        }
    }
    
    render() {
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
