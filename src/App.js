import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Mainpage } from "./Components/Mainpage";
import { AboutPage } from "./Components/AboutPage";
import { ServicesPage } from "./Components/ServicesPage";
import { ProjectsPage } from "./Components/ProjectsPage";
import { ContactPage } from "./Components/ContactPage";
import { Navigation } from "./Components/Navigation";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
      <Route path="/" element={<Mainpage />} />
        <Route path="Home" element={<Mainpage />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="ServicePage" element={<ServicesPage />} />
        <Route path="ProjectsPage" element={<ProjectsPage />} />
        <Route path="ContactPage" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
