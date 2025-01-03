import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import ServicePage from "../pages/ServicePage.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import ContactPage from "../pages/ContactPage";
import Navbarr from "../layouts/Navbar.jsx";
import Footer from "../layouts/Footer.jsx";
import UseCasePage from "../pages/UseCasePage.jsx";
import PortfolioCardDetail from "../pages/PortfolioCardDetailPage.jsx";
import UseCaseCardDetail from "../pages/UseCaseCardDetailPage.jsx";

const Path = () => {
  return (
    <Router>
      {/* Navbar */}
      <div style={{ overflow: "hidden" }}>
      <div className=" my-1 my-sm-3 my-lg-5">

      <Navbarr />
      </div>

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
        
        {/* Use Case Page Route */}
        <Route path="/useCase" element={<UseCasePage />} />

        {/* Use Case Portfolio Card Detail Route */}
        <Route path="/portfolioDetails" element={<PortfolioCardDetail />} />

        {/* Use Case Use Case Card Detail Route */}
        <Route path="/useCaseDetails" element={<UseCaseCardDetail />} />
      </Routes>

      {/* Footer */}
      <div className="mb-2 mb-sm-3 mb-lg-5"> 

      <Footer />
      </div>
      </div>
    </Router>
  );
};

export default Path;
