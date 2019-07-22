import React from 'react';
import '../App.scss';
import office from '../assets/office.png'

function ThirdSection(props){
    return (
        <div id="third-section">
            <div id="third-section-left">
                <p>We work only to international<br/>design standards.</p>
                <p>We make sure that you are<br/>satisfied with the end result.</p>
                <p>We are <span>happy</span> if you are <span>happy.</span></p>
            </div>
            <div id="third-section-right">
                <img src={office} alt="office" />
            </div>
        </div>
    )
}
export default ThirdSection;