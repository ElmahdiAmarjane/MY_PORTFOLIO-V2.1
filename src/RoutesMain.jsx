import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Mycv from "./components/mycv/Mycv";
import Contact from "./components/contact/Contact";

const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/mycv" element={<Mycv />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default RoutesMain;
