import React from "react";
import Slider from "react-slick";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import "../Styles/Alumni.css"; // Create a corresponding CSS file for custom styles.

const alumniData = [
  {
    name: "John Doe",
    year: "Class of 2015",
    comment: "The school provided me with an excellent foundation for my career.",
    image: "/alumni/john.jpg",
  },
  {
    name: "Jane Smith",
    year: "Class of 2018",
    comment: "Great faculty and amazing opportunities. I’ll always cherish my time here.",
    image: "/alumni/jane.jpg",
  },
  {
    name: "Michael Brown",
    year: "Class of 2020",
    comment: "A place where dreams turn into reality. Highly recommended!",
    image: "/alumni/michael.jpg",
  },
  // Add more alumni as needed...
];

function Alumni() {
  const sliderSettings = {
    infinite: true,
    speed: 5000, // Set the slider speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Seamless scrolling
    cssEase: "linear",
    arrows:false,
  };

  return (
    <div className="alumni-section">
      <Typography variant="h4" align="center" gutterBottom>
        Our Esteemed Alumni
      </Typography>
      <Slider {...sliderSettings} className="alumni-slider">
        {alumniData.map((alumnus, index) => (
          <Card className="alumni-card" key={index} elevation={3}>
            <Box display="flex" alignItems="center">
              <Avatar
                src={alumnus.image}
                alt={alumnus.name}
                sx={{ width: 80, height: 80, marginRight: 2 }}
              />
              <Box>
                <Typography variant="h6">{alumnus.name}</Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {alumnus.year}
                </Typography>
              </Box>
            </Box>
            <CardContent>
              <Typography variant="body2">{alumnus.comment}</Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </div>
  );
}

export default Alumni;
