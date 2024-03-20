import React from "react";
import { useEffect } from "react";

import "./cardProject.scss";
import projectsinfos from "../databaselocal/projectsinfos.json"
import Aos from "aos"
import 'aos/dist/aos.css'

const CardProject = () => {

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
         <a href={pr.link}><button className="btnDiscover">Discover</button></a>
        </div>
       
      </div>
    </div>


    ))}
   

    </>
  );
};

export default CardProject;
