import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./cardProject.scss";
//import starthinc from "../../assets/images/starthinc.jpg";
//import pfeessaouira from "../../assets/images/pfeessaouira.jpg";
//import estmeknes from "../../assets/images/estmeknes.jpg";
import projectsinfos from "../databaselocal/projectsinfos.json"
import Aos from "aos"
import 'aos/dist/aos.css'

const CardProject = () => {
  //const cardProjectdiv = document.getElementById("CardProject");
  //const pictures = document.getElementById("pictures");
  const projectsJSON =  projectsinfos;
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>
    {projectsJSON.map((pr , key)=>(
 
 <div  data-aos="fade-up"  id="CardProject" className="cardProject" style={{ width: "18rem" }}>
      <div id="pictures" className="pictures">
        <img className="picProjects pic1" src={"/assets/images/projectspictures/"+pr.image+"1.jpg"} alt="" />
        <img className="picProjects pic2" src={"/assets/images/projectspictures/"+pr.image+"2.jpg"} alt="" />
        <img className="picProjects pic3" src={"/assets/images/projectspictures/"+pr.image+"3.jpg"}alt="" />
      </div>
      <img
        src={"/assets/images/projectspictures/"+pr.image+".jpg"}
        className="card-img-top-"
        alt="..."
      />
      <div className="card-body-">
        <h5 className="card-title-">{pr.title}</h5>
        <div className="card-description">
          <p className="">
            {pr.description}
          </p>
        </div>
        <div className="btnDiscoverDiv">
         <Link to="/discoverproject"><button className="btnDiscover">Discover</button></Link>
        </div>
       
      </div>
    </div>


    ))}
   

    </>
  );
};

export default CardProject;
