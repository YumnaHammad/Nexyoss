import React, { useState, useEffect } from "react";


import Contact from "../../components/Contact";
import HeroSection from "../../components/Partner/BecomePartner/HeroSection";
import PartnerSection from "../../components/Partner/BecomePartner/PartnerSection";
import WhyPartner from "../../components/Partner/BecomePartner/WhyPartner";
import Partnership from "../../components/Partner/BecomePartner/Partnership";
import Application from "../../components/Partner/BecomePartner/Application";
import CallToAction from "../../components/Partner/BecomePartner/CallToAction";

const BecomePartner = () => {
  const [, setIsVisible] = useState(false);

  // Animation effects
  useEffect(() => {
    setIsVisible(true);
  }, []);
  // CSS animations
  const animations = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes slideInLeft {
      from { 
        opacity: 0; 
        transform: translateX(-50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }
    
    @keyframes slideInRight {
      from { 
        opacity: 0; 
        transform: translateX(50px); 
      }
      to { 
        opacity: 1; 
        transform: translateX(0); 
      }
    }
    
    @keyframes slideInDown {
      from { 
        opacity: 0; 
        transform: translateY(-30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes slideInUp {
      from { 
        opacity: 0; 
        transform: translateY(30px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
      40%, 43% { transform: translate3d(0,-30px,0); }
      70% { transform: translate3d(0,-15px,0); }
      90% { transform: translate3d(0,-4px,0); }
    }
    
    .animate-on-scroll {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }
    
    .animate-on-scroll.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .hover-lift {
      transition: all 0.3s ease;
    }
    
    .hover-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    }
  `;

  return (
    <>
      <style>{animations}</style>
      {/* Hero Section */}
      <HeroSection />
      {/* Become a Partner Section */}
      <PartnerSection />
      {/* Why Partner with Nexyos Section */}
      <WhyPartner />
      {/* Partnership Types Section with Swiper */}
      <Partnership />
      {/* Application Process Section */}
      <Application />
      {/* Call to Action Section */}
      <CallToAction />
      {/* Contact */}
      <Contact />
    </>
  );
};

export default BecomePartner;
