import React from 'react';
import '../App.scss';

function Contact(props){
    return (
        <div id="contact">
            <div id="contact-top">
            <p>CONTACT</p>
            <p>Contact us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla ullamcorper aliquet lorem,onsectetur adipit.<br/>
            lobortis dui faucibus eget.Ut facilisis arcu vitae dui dui faucibus eget Ut facilisis vestibulum bibendum.<br/>
            mattis ut praesent blandit dign.</p>
            </div>
            <div id="form">
                <input type="text" name="name" placeholder = "Enter your name"/>
                <input type="email" name="email" placeholder = "Enter your email"/>
                <textarea placeholder="Messages"/>
                <input type="submit" value="Submit form"/>
            </div>
        </div>
    )
}
export default Contact;