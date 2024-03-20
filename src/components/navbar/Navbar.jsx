import React from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";
//import mypic from "../../../public/assets/icons/me2circle.png"
const Navbar = () =>{




      return(
          <div className="allnavbar">
               <div className="logonavbar">
                  <img src="/assets/icons/me2circle.png" alt="" />
               </div>
               <div className="listnav">
                   <ul>
                     <li><a href="/#home">Home</a></li>
                     <li><a href="/#career">Career</a></li>
                     <li><a href="/#projects">Projects</a></li>
                     <li><Link to="/knowledge">Knowledges</Link></li>
                     <li><Link to="/contact">Contact</Link></li>
                   </ul>
               </div>
               
          </div>
      )
}



export default Navbar; 