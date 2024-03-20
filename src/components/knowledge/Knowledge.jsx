import React, { useEffect, useState } from "react";
import "./knowledge.scss";
import Navbar from "../navbar/Navbar";
import KnowledgeJSON from "../databaselocal/knowledge.json";
import Footer from "../footer/Footer";
const Knowledge = () => {

    const [skills , setskills] = useState([]);
    const [skillsfiltred , setskillsfiltred] = useState([]);
   const getAllSkills = ()=>{
        setskills(KnowledgeJSON);
        setskillsfiltred(KnowledgeJSON);
    }
    useEffect(()=>{
        getAllSkills();
    },[])

  console.log(skills);
  
  const handlFilterBy = (value)=>{
         setskillsfiltred([]);
         const temp = [];
        if(value!=="all"){
          
            skills.forEach((skill,index)=>{
                if(skill.type === value){
                    temp.push(skill);
                }
         })
          setskillsfiltred(temp);
        } else{
            getAllSkills();
        }
    
  }


  return (
    <>
      <Navbar />
      <div className="knowledgecontainer">
        <div className="myskillscontainer">
          <p className="title"><span>[ </span>All languages, frameworks, and tools I have worked with <span>]</span></p>
          <div className="filterby">
            <hr />
            <div style={{display:"flex"}}>
            <p>Filter by :</p>
            <select name="" id="" onChange={(e)=>handlFilterBy(e.target.value)}>
              <option value="all">All</option>
              <option value="web">WEB</option>
              <option value="mobile">Mobile</option>
              <option value="desktop">Desktop</option>
              <option value="database">Database</option>
              <option value="others">others</option>
            </select>
            </div>
           
          </div>
          <div className="skillsAllCards">
            {skillsfiltred.map((skill, key) => (
              <div className="skillsCard">
                <div className="langlogo">
                  <img src={"/assets/images/skillslogos/"+skill.logo+".png"} alt="" />
                  <p>{skill.title}</p>
                </div>
                <div className="definitionskill">
                <a href={skill.project} target="_blank" rel="noopener noreferrer">
                  <p>
                    View on GitHub
                  </p>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="messageparent">
            <div className="message">
            <img src="/assets/icons/attention.png" alt="" />
            <p>Click 'View on GitHub' to explore the project associated with the clicked technology.</p>
            </div>
            
        </div>
        </div>
       
      </div>
      <Footer/>
    </>
  );
};

export default Knowledge;
