import React, { useState, useEffect } from 'react';
import WhatWeOffer from '../../components/Solution/Video_Surveillance/WhatWeOffer'
import SolutionTab from '../../components/Solution/Video_Surveillance/SolutionTab';
import SuperiorHighlights from '../../components/SpaceOccupancy/SuperiorHighlights';
import RelatedProduct from '../../components/Solution/Video_Surveillance/RelatedProduct';
import BannerSection from '../../components/BannerSection';


const VideoSurveillance = () => {
     const [BannerData, setBannerData] = useState(null);
  const products = [
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-bullet.png?t=1754966591917",
      tags: ["5MP", "2MP"],
      title: "AI 12X PTZ Bullet Camera",
      link: "#",
    },
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-dome.png?t=1754966591917",
      tags: ["5MP", "2MP"],
      title: "AI 12X/20X/23X PTZ Dome Camera",
      link: "#",
    },
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-speed-dome.png?t=1754966591917",
      tags: ["5MP", "2MP"],
      title: "AI 23X/30X Speed Dome Camera",
      link: "#",
    },
    {
      image:
        "https://www.milesight.com/static/pc/en/page/technology/solution/ptz-series/related-products-speed-dome.png?t=1754966591917",
      tags: ["4K", "5MP", "2MP"],
      title: "AI 36X/42X Speed Dome Camera",
      link: "#",
    },
  ];

  const fetchBannerData = async () => {
    try {
      const response = await fetch(
        "https://nexyos.deeptech.pk/api/video-surveillance/section-1"
      );
      const data = await response.json();
      setBannerData(Array.isArray(data) ? data[0] : data);
      console.log("Banner Data:", data);
    } catch (error) {
      console.error("Error fetching CCTV partner data:", error);
    }
  };

    useEffect(() => {
    fetchBannerData();
  }, []);
  return (
    <div>
             {/* Hero Section */}
            {BannerData && (
        <BannerSection
          gradient="none"
          content="justify-content-center"
          textAlign="text-center"
          textColor="text-white"
          title={BannerData.heading}
          subtitle={BannerData.description}
          image={BannerData.image}
        />
      )}
    <WhatWeOffer/>
    <SolutionTab/>
    <SuperiorHighlights/>
    <div>
    <h2 className="text-center text-2xl font-bold mb-6">
          Related Products
        </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 px-36">
          {products.map((product, idx) => (
            <RelatedProduct key={idx} {...product} />
          ))}
        </div> 
    </div>
    
    </div>
  )
}

export default VideoSurveillance
