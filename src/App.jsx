import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Verification from "./Components/Verification/Verification";
import Quiz from "./Components/Quiz/Quiz";
import Feedback from "./Components/Feedback/Feedback";
import Thankyou from "./Components/Thankyou/Thankyou";
import About from "./Components/Navigation/Navbar-info/About";
import Contact from "./Components/Navigation/Navbar-info/Contact";
import Services from "./Components/Navigation/Navbar-info/Services";

function App() {
  return (
    <>
      <Router basename="/milky-bar-panel-repo-demo">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;