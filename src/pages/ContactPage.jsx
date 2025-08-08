import React from "react";
import Preloader from "../helper/Preloader";
import ColorInit from "../helper/ColorInit";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import BottomFooter from "../components/BottomFooter";
import Contact from "../components/Contact";
import ScrollToTop from "react-scroll-to-top";

const ContactPage = () => {
  return (
    <>
      {/* Breadcrumb */}
      <Breadcrumb title={"Contact"} />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
      <BottomFooter />
    </>
  );
};

export default ContactPage;
