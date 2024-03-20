import React from "react";
import "./contact.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="containerContact">
        
          <div className="contactForm">
            <div style={{textAlign:"center"}} className="">
            <p>Send me your message or feedback 😎 </p>
            </div>
            
                <form action="https://getform.io/f/zaxdjzra" method="post">
                    <div className="emaildiv">
                         <label htmlFor=""> Your Email :</label>
                         <input type="text" name="email" />
                    </div>
                    <div className="objectdiv">
                         <label htmlFor=""> Object :</label>
                         <input type="text" name="subject" />
                    </div>
                    <div className="mesagediv">
                         <label htmlFor=""> Message :</label>
                         <textarea name="message" id="" cols="20" rows="5"></textarea>
                    </div>
                    <div className="btnsendmessage">
                    <button type="submit">Send</button>

                    </div>
                </form>
          </div>
    </div>

<Footer/>

    </>
  );
};

export default Contact;
