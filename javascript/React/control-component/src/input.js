import React from 'react'

export default function input(props) {
    return (
        <div>
            <input onChange={props.onChange} id={props.id} 
            type={props.type} placeholder={props.placeholder} value={props.value} />
            <span className="errorMessage">{props.errorMessage}</span>
        </div>
    )
}
