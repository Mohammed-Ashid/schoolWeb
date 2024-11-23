import React from "react";
import Slider from "react-slick";
import { Box, Typography, CardMedia } from "@mui/material";
import "../Styles/Companies.css"; // CSS for styles.

const companiesData = [
  { name: "Company 1", logo: "/logos/company1.png" },
  { name: "Company 2", logo: "/logos/company2.png" },
  { name: "Company 3", logo: "/logos/company3.png" },
  { name: "Company 4", logo: "/logos/company4.png" },
  { name: "Company 5", logo: "/logos/company5.png" },
  // Add more companies here...
];

function Companies() {
  const sliderSettings = {
    infinite: true,
    speed: 5000, // Smooth transition speed
    slidesToShow: 5, // Adjust based on screen size
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Seamless scrolling
    cssEase: "linear",
    rtl: true,
    arrows:false, // Reverse direction (left to right)
  };

  return (
    <div className="companies-section">
      <Typography variant="h4" align="center" gutterBottom>
        Partnered Companies
      </Typography>
      <Slider {...sliderSettings} className="companies-slider">
        {companiesData.map((company, index) => (
          <Box className="company-logo" key={index}>
            <CardMedia
              component="img"
              image={company.logo}
              alt={company.name}
              className="company-image"
            />
          </Box>
        ))}
      </Slider>
    </div>
  );
}

export default Companies;
