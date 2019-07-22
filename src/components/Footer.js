import React from "react";
import "../App.scss";
import green_footer from '../assets/Landing_page_footer.png'

function Footer(props) {
  return (
    <div id="footer" >
      <img src={green_footer} alt="footer" />
    </div>
  );
}
export default Footer;
