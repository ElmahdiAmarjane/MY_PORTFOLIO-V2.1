import React from "react";
import "./navbar.scss"
//import mypic from "../../../public/assets/icons/me2circle.png"
const Navbar = () =>{




      return(
          <div className="allnavbar">
               <div className="logonavbar">
                  <img src="/assets/icons/me2circle.png" alt="" />
               </div>
               <div className="listnav">
                   <ul>
                     <li>Home</li>
                     <li>Career</li>
                     <li>Projects</li>
                     <li>Technologies</li>
                     <li>Contact</li>
                   </ul>
               </div>
               
          </div>
      )
}



export default Navbar; 