import React from 'react'

export default function Contact() {
    return (
        <div>
            <h3>Contact Me</h3>
            <form action="">
                <input type="text" name="name" value="Your Name">
                <br>
                <input type="email" name="email" value="Your Email">
                <br>
                <textarea name="message" rows="10" cols="10">Your Message</textarea>
                <br>
                <input type="submit" value="Send Message">
            </form> 

        </div>
    )
}
