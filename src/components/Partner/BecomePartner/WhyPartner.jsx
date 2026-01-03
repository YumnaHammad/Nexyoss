import React, { useState, useEffect } from "react";
import axios from "axios";

const WhyPartner = () => {
  const [currentImage, setCurrentImage] = useState("default");
  const [partnerFeatures, setPartnerFeatures] = useState([
    { title: "Proven Track Record of Partnership Success", icon: "" },
    { title: "Accelerated Business Growth Opportunities", icon: "" },
    { title: "Comprehensive Support and Resources", icon: "" },
  ]);
  useEffect(() => {
    axios
      .get("https://nexyos.deeptech.pk/api/become-partner/section-3")
      .then((res) => {
        const data = res.data;
        const item = Array.isArray(data) ? data[0] : data || {};

        // API shape: sub_heading1, sub_heading2, sub_heading3, image
        const titles = [
          item.sub_heading1,
          item.sub_heading2,
          item.sub_heading3,
        ];
        const image =
          item.image || item.img || item.image_url || item.src || "";

        setPartnerFeatures((prev) =>
          prev.map((p, i) => ({
            title: titles[i] || p.title,
            icon: image || p.icon,
          }))
        );
      })
      .catch((err) => {
        console.error("Error fetching Become Partner section-3:", err);
      });
  }, []);
  const pageStyles = {
    sectionDark: {
      padding: "80px 0",
      backgroundColor: "#f8f9fa",
      animation: "fadeIn 1s ease-out",
    },
    sectionTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "1rem",
      textAlign: "center",
      animation: "slideInDown 1s ease-out",
    },
    interactiveHeading: {
      cursor: "pointer",
      padding: "1rem 1.5rem",
      borderRadius: "12px",
      border: "2px solid #e9ecef",
      transition: "all 0.3s ease",
      backgroundColor: "#ffffff",
      marginBottom: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      minHeight: "69px",
      textAlign: "center",
    },
    imageContainer: {
      position: "relative",
      borderRadius: "16px",
      overflow: "hidden",
      boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "460px",
    },
    imageBadge: {
      position: "absolute",
      top: "1rem",
      left: "1rem",
      backgroundColor: "#667eea",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "20px",
      fontSize: "0.875rem",
      fontWeight: "600",
      animation: "pulse 2s infinite",
    },
  };
    const images = {
    default:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-events.jpg?t=1746582988309",
    partnership:
      "https://www.milesight.com/static/pc/en/company/partner-program/ai-vca.png?t=1746582988309",
    growth:
      "https://www.milesight.com/static/pc/en/company/partner-program/heat-map.png?t=1746582988309",
    success:
      "https://www.milesight.com/static/pc/en/company/partner-program/structure-design-recessed-mount.png?t=1746582988309",
    support:
      "https://www.milesight.com/static/pc/en/company/partner-program/milesight-product-portfolio.png?t=1746582988309",
    future:
      "https://www.milesight.com/static/pc/en/company/about-us/milesight-innovation.jpg?t=1746582955703",
  };
  const handleHeadingClick = (imageKey) => {
    setCurrentImage(imageKey);
  };
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
      <div style={pageStyles.sectionDark}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <h1 style={pageStyles.sectionTitle}>
                <i
                  className="ph ph-target me-2"
                  style={{ color: "#667eea" }}
                ></i>
                Why Partner with Nexyos?
              </h1>

              {partnerFeatures.map((f, idx) => (
                <div
                  key={idx}
                  style={pageStyles.interactiveHeading}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#667eea";
                    e.target.style.backgroundColor = "#f8f9ff";
                    e.target.style.transform = "translateX(8px)";
                    e.target.style.boxShadow =
                      "0 4px 20px rgba(102, 126, 234, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#e9ecef";
                    e.target.style.backgroundColor = "#ffffff";
                    e.target.style.transform = "translateX(0)";
                    e.target.style.boxShadow = "none";
                  }}
                  onClick={() =>
                    handleHeadingClick(
                      idx === 0
                        ? "partnership"
                        : idx === 1
                        ? "growth"
                        : "success"
                    )
                  }
                >
                  {f.icon ? (
                    <img
                      src={f.icon}
                      alt={f.title}
                      style={{
                        width: 28,
                        height: 28,
                        marginRight: 12,
                        verticalAlign: "middle",
                      }}
                    />
                  ) : (
                    <i
                      className={`ph ${
                        idx === 0
                          ? "ph-handshake"
                          : idx === 1
                          ? "ph-trend-up"
                          : "ph-star"
                      } me-2`}
                      style={{ color: "#667eea" }}
                    ></i>
                  )}
                  {f.title}
                </div>
              ))}
            </div>

            <div className="col-md-7 ">
              <div style={pageStyles.imageContainer}>
                <img
                  src={images[currentImage]}
                  alt="Partnership content"
                  className="img-fluid"
                  style={{ width: "100%", height: "29rem", objectFit: "cover" }}
                />
                <div style={pageStyles.imageBadge}>Interactive Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyPartner;
