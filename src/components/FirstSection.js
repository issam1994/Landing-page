import React from 'react';
import '../App.scss';
import denmark from '../assets/denmark.png'
import down_symbol from '../assets/down_symbol.png'

function FirstSection(props){
    return (
        <div id="first-section">
            <div id="first-section-left">
            <h1 id="headline">A <strong id = "red-headline">Digital Creative<br/>Agency</strong> from Denmark</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla ullamcorper aliquet lorem,onsectetur adipiscing elit. <br/>
            at lobortis dui faucibus eget.Ut facilisis arcu vitae dui dui faucibus eget Ut facilisis vestibulum bibendum.<br/>
            mattis ut praesent blandit dignissim elit<br/>
             </p>
             </div>
             <div id="first-section-right">
             <img src={denmark} alt="denmark"/>
             </div>
             <div id="scroll-for-more">
             <img src={down_symbol} alt="down symbol" />
             <h5>SCROLL FOR MORE</h5>
             </div>
        </div>

    )
}
export default FirstSection;