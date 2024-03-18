import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./mycv.scss"
import React from "react";

const Mycv  = ()=>{


 return (
    
     <>
       <Navbar/>
       <div className="mycvContainer">
        <div className="mycvActions">
        <h1>THIS IS MY CV </h1>
        <a href="/assets/files/mycv.pdf" download="cv_ELMAHDI_AMARJANE_2024" className="btndownloadcv">DOWNLOAD IT AS PDF</a>
        </div>
          
            <div className="mycvdiv">
           <img src="/assets/images/mycv.jpg" alt="" />
         </div>
       </div>
      
      <Footer/>
   
   </>

    
 )

}


export default Mycv;