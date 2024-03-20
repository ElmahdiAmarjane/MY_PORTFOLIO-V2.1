import "./App.scss";
import Myprojects from "./components/myprojects/Myprojects.jsx";
import Career from "./components/career/Career.jsx";
import Home from "./components/home/Home.tsx";
import Slidebar from "./components/slideBar/Slidebar.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import "aos/dist/aos.css";
import { useEffect , useState } from "react";
function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY < window.innerHeight;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means the effect will only run once after the initial render


  return (
    <div className="appall ">
      <div className="appcontainer">
        <div className="Slidebardiv">
          <Slidebar />
        </div>
        <div id="home" className="homediv">
          <Home />
        </div>
      </div>
      {isScrolled ? null : (
      <div className="navbardiv">
        <Navbar />
      </div> )}
      <div id="career" className="myprojectsdiv">
        <Career />
      </div>
      <div id="projects" className="myprojectsdiv">
        <Myprojects />
      </div>
      <div className="footerdiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
