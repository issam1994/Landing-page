import React from 'react';
import '../App.scss';

function Navigation(props){
    return (
        <div id="navigation">
           <h3 id = "logo"><a href="#first-section">SkyMedia</a></h3>
           <ul id = "nav-links">
               <li><a href='#second-section'><strong>Services</strong></a></li>
               <li><a href='#third-section'>About us</a></li>
               <li><a href='#contact'>Contact</a></li>
           </ul>
        </div>
    )
}
export default Navigation;