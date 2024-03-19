import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Mycv from "./components/mycv/Mycv";
import Contact from "./components/contact/Contact";
import DiscoverProject from "./components/dicoverproject/DiscoverProject";

const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/mycv" element={<Mycv />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/discoverproject" element={<DiscoverProject />} />
      </Routes>
    </Router>
  );
};

export default RoutesMain;
