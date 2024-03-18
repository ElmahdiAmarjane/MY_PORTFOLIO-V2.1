//import bg1 from "../../assets/images/bg1.jpg";
import "./careeritem.scss"
//import dateicon from "../../../public/assets/icons/date50.png";
//import eventicon from "../../../public/assets/icons/event50.png";
//import locationicon from "../../../public/assets/icons/location50.png";

//import lyceehouara from "../../assets/images/lyceehouara.jpg";
//import estessaouira from "../../assets/images/estessaouira.jpg";
//import meinlafarge from "../../assets/images/meinlafarge.jpg";
//import starthinc from "../../assets/images/starthinc.jpg";
//import pfeessaouira from "../../assets/images/pfeessaouira.jpg";
//import estmeknes from "../../assets/images/estmeknes.jpg"
//import ff from "../../assets/images/estmeknes.jpg"
const CareerItem = ({career}) => {

    const imagePath = "/assets/images/" + career.img + ".jpg";


  return (

    <div className="cardItem">
 <div className="career-item">
   <div className="dateIcon careerdivflex">
    <img src="/assets/icons/location50.png" alt="" />
     <h4 className="date">{career.date}</h4>
   </div>
   <div className="eventIcon careerdivflex">
    <img src="/assets/icons/event50.png" alt="" />
    <p className="title">{career.event} </p>
   </div>
   <div className="locationIcon careerdivflex">
    <img src="/assets/icons/location50.png" alt="" />
    <p className="title">{career.location}</p>
   </div>
       <img  src={imagePath} alt="" width={"100%"} height={"150px"} style={{borderRadius:"5px"}}/>
       <p className="infos">{career.otherInfo}</p>
    </div>
   
    </div>
   
  );
};

export default CareerItem;
