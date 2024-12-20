import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ServicePage from "../pages/ServicePage.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import ContactPage from "../pages/ContactPage";
import Navbar from "../layouts/Navbar.jsx";
import Footer from "../layouts/Footer.jsx";

const Path = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* About Page Route */}
        <Route path="/about" element={<AboutPage />} />

        {/* Contact Page Route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Service Page Route */}
        <Route path="/service" element={<ServicePage />} />

        {/* Portfolio Page Route */}
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default Path;
