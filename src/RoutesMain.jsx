import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Mycv from "./components/mycv/Mycv";

const RoutesMain = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/mycv" element={<Mycv />} />
      </Routes>
    </Router>
  );
};

export default RoutesMain;
