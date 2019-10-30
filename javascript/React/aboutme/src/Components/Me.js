import React from 'react'
import far from './Images/MyFoto.jpg'


export default function Me() {
    return (
        <div>
            <h3>this is the Me page</h3>
            <img className="UserImage" src={far} alt=""></img>
            <p>My name is Mr Somebody and my home-town, whoops I forgot the name</p>
            <p>I was born in Somewhere and my skills are this and that.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                 invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                 no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Some websites I frequently use include:</p>
            <p>http://www.google.com</p>
            <p>https://www.hamburg.de</p>
            <p>https://www.cnn.com</p>

        </div>
    )
}
