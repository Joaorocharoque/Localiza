import React from "react";

import "../footer/style.css";

import { FaHeart } from "react-icons/fa";
import  { AiFillLinkedin }  from "react-icons/ai";

const Footer = () => {

  return (
    <footer>
      <div >  
      <br/>
      <p className="footer__copyright">Made with by  João Dev</p>
      <div align="center">
        <a  href="https://www.linkedin.com/in/jo%C3%A3o-roque-a2b754162/">
        <AiFillLinkedin className="logo" size="30" />
        </a>
        &nbsp;
        <FaHeart className="logo" size="30" />
         </div> 
      </div>

    </footer>
  )
}

export default Footer;