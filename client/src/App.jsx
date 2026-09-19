import Experience from "./sections/EducationExperience.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Feedback from "./sections/Feedback.jsx";
import Contact from "./sections/Contact.jsx";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";

const App = () => {
  return (
    <>
      <SmoothScroll />

      <Navbar />

      <Home />
      <About />
      <Experience />
      <Feedback />
      <Contact />

      <Footer />
    </>
  );
};

export default App;