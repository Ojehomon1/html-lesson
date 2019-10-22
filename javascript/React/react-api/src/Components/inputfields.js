import React from 'react'

export default function inputfields(props) {
    return (
        <div>
            <input type="text" onChange={props.change}></input>
            <button onClick={props.click}>Search</button>
        </div>
    )
}
