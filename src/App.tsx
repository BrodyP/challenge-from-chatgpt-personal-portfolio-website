import React from "react";
import "./App.css";
import HeroSection from "./components/ui/hero-section/hero";
import Navigation from "./components/layout/main-navigation";
import AboutSection from "./components/ui/about-section/about";
import ProjectSection from "./components/ui/project-section/project-section";
import ContactSection from "./components/ui/contact-section/contact-section";
import Footer from "./components/layout/footer/footer";

function App() {
  return (
    <main>
      <Navigation />
      <div className="app">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}

export default App;
