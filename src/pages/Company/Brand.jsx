import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../style/WhatMatters.css";
import SensingProducts from "../../components/Company/Sensing";
import SliderPartner from "../../components/Company/SliderPartner";
import Contact from "../../components/Contact";
import BannerSection from "../../components/BannerSection";

const Brand = () => {
  const [BannerData, setBannerData] = useState(null);

  const fetchBannerData = async () => {
    try {
      const response = await fetch(
        "https://nexyos.deeptech.pk/api/our-brand/section-1"
      );
      const data = await response.json();
      setBannerData(Array.isArray(data) ? data[0] : data);
      console.log("Banner Data:", data);
    } catch (error) {
      console.error("Error fetching CCTV partner data:", error);
    }
  };

  const fetchIconCards = async () => {
    try {
      const response = await fetch(
        "https://nexyos.deeptech.pk/api/our-brand/section-2"
      );
      const data = await response.json();
      setIconCards(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching icon cards:", error);
    }
  };
  const [leftData, setLeftData] = useState(null);
  const [rightIcons, setRightIcons] = useState([]);
  const [brandData, setBrandData] = useState([]);
const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

  const fetchBrand = async () => {
    try {
      const response = await fetch(
        "https://nexyos.deeptech.pk/api/our-brand/section-3"
      );
      const data = await response.json();
      setBrandData(Array.isArray(data) ? data[0] : []);
    } catch (error) {
      console.error("Error fetching icon cards:", error);
    }
  };
  useEffect(() => {
    fetch("https://nexyos.deeptech.pk/api/our-brand/section-2-left-side")
      .then((res) => res.json())
      .then((data) => setLeftData(Array.isArray(data) ? data[0] : data));

    fetch("https://nexyos.deeptech.pk/api/our-brand/section-2")
      .then((res) => res.json())
      .then((data) => setRightIcons(Array.isArray(data) ? data : []));
    fetchBannerData();
    fetchIconCards();
    fetchBrand();
  }, []);
  return (
    <>
      {BannerData && (
        <BannerSection
          gradient="none"
          content="justify-content-left"
          textAlign="text-left"
          textColor="text-[#121535]"
          title={BannerData.heading}
          subtitle={BannerData.description}
          image={BannerData.image}
        />
      )}
      <Container className="center-wrap">
        <Row className="align-items-center">
          {/* Left Content */}
          <Col md={6} className="content-left pe-md-5">
            <h2
              className="title mb-4 animate__animated animate__fadeInUp"
              data-aos="fade-right"
            >
              {leftData?.heading}
            </h2>
            <p className="text mb-4 animate__animated animate__fadeInUp">
              {leftData?.description}
            </p>
             <div className="mt-4 pt-3 border-top text-muted small">
                        <div>
                          <strong>Created:</strong>{" "}
                          {formatDate(leftData?.created_at)}
                        </div>
                        <div>
                          <strong>Last updated:</strong>{" "}
                          {formatDate(leftData?.updated_at)}
                        </div>
                      </div>
          </Col>

          {/* Right Content */}
          <Col md={6} className="content-right">
            <Card className="p-4 animate__animated animate__fadeInUp">
              <Card.Body>
                <h4 className="card__title mb-4" data-aos="fade-right">
                  At Nexyos, everything we do is about{" "}
                  <span className="text-primary">Making Sensing Matter</span> so
                  that:
                </h4>

                <Row className="card__icons g-4">
                  {rightIcons.map((item) => (
                    <Col xs={12} md={4} className="card__icon text-center">
                      <img
                        alt="make sensing matter data icon"
                        src={item.image}
                        className="img-fluid mb-3"
                        style={{ height: "60px" }}
                      />
                      <p className="icon__text">{item.heading}</p>
                    </Col>
                  ))}
                  {/* 
                  <Col xs={12} md={4} className="card__icon text-center">
                    <img
                      alt="make sensing matter connect icon"
                      src="https://www.milesight.com/static/pc/en/company/our-brand-new/make-sensing-matter-connect-icon.png"
                      className="img-fluid mb-3"
                      style={{ height: "60px" }}
                    />
                    <p className="icon__text">
                      YOU can create meaningful connections with your
                      surroundings
                    </p>
                  </Col>

                  <Col xs={12} md={4} className="card__icon text-center">
                    <img
                      alt="make sensing matter impact icon"
                      src="https://www.milesight.com/static/pc/en/company/our-brand-new/make-sensing-matter-impact-icon.png"
                      className="img-fluid mb-3"
                      style={{ height: "60px" }}
                    />
                    <p className="icon__text">
                      YOU have the right product and technology for specific
                      needs
                    </p>
                  </Col> */}
                </Row>

                <p className="card__text mt-4">
                  To make sensing truly work across challenges, applications,
                  and industries, that's what "matter" means to us.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {brandData && (
        <SensingProducts
      heading = {brandData[0].heading} 
      description = {brandData[0].description}
      heading2={brandData[0].heading_2}
      />
      )}
      
      <SliderPartner />
      <Contact />
    </>
  );
};

export default Brand;
