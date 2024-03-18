import React from "react";
import "./contact.scss";
import Navbar from "../navbar/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="containerContact">
        
          <div className="contactForm">
            <div style={{textAlign:"center"}} className="">
            <p>Send to me your message or feedback 😎 </p>
            </div>
            
                <form action="" method="post">
                    <div className="emaildiv">
                         <label htmlFor=""> Your Email :</label>
                         <input type="text" />
                    </div>
                    <div className="objectdiv">
                         <label htmlFor=""> Object :</label>
                         <input type="text" />
                    </div>
                    <div className="mesagediv">
                         <label htmlFor=""> Message :</label>
                         <textarea name="" id="" cols="20" rows="5"></textarea>
                    </div>
                    <div className="btnsendmessage">
                    <button type="submit">Send</button>

                    </div>
                </form>
          </div>
    </div>


    </>
  );
};

export default Contact;
