import React from 'react';
import '../App.scss';
import laptop from '../assets/laptop.png';
import green_star from '../assets/green_star.png';
import red_star from '../assets/red_star.png';

function SecondSection(props){
    return (
        <div id="second-section">
            <div id="second-section-top">
                <p>SERVICES</p>
                <p>What we do</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla ullamcorper aliquet lorem,onsectetur adipiscing elit.<br/>
            at lobortis dui faucibus eget.Ut facilisis arcu vitae dui dui faucibus eget Ut facilisis vestibulum bibendum.<br/>
            mattis ut praesent blandit dign</p>
            </div>
            <div id="second-section-bottom">
            <div id="second-section-bottom-left">
                <img src={laptop} alt="laptopImage"/>
            </div>
            <div id="second-section-bottom-right">
                <div id="brand-identity">
                    <img id="red-star" src={red_star} alt="red star"/>
                    <p>Brand identity</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla adipiscing.<br/>
            at lobortis dui faucibus eget.Ut facilisis arcu vitae dui dui fauci duduib.<br/>
            lobortis dui faucibus eget.Ut facilisis arcu vitae dui dui faucibdui du.<br/>
            mattis ut praesent blandit dign.</p>
                </div>
                <div id="design">
                <img id="green-star" src={green_star} alt="green star"/>
                    <p>Design</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla adipiscing.<br/>
            at lobortis dui faucibus eget.Ut facilisis arcu vitae dui dui fauci duduib.<br/>
            lobortis dui faucibus eget.Ut facilisis arcu vitae dui dui faucibdui du.<br/>
            mattis ut praesent blandit dign.</p>
                </div>
            </div>
            </div>
        </div>

    )
}
export default SecondSection;