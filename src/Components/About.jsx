import React, { useEffect, useState } from "react";
import "../Styles/About.css";
import ImageList from "./ImageLists";

function About() {
  const images = [
    { src: "path/to/image1.jpg", alt: "Image 1", title: "Our Vision" },
    { src: "path/to/image2.jpg", alt: "Image 2", title: "Our Mission" },
    { src: "path/to/image3.jpg", alt: "Image 3", title: "Our Values" },
  ];

  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation after component mounts
    setSlideIn(true);
  }, []);

  return (
    <div className={`about-main ${slideIn ? "slide-in" : ""}`}>
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          Welcome to [School Name]! We are committed to providing a nurturing
          and stimulating environment for learning and growth.
        </p>
      </div>
      <div className="about-content">
        <div className="image-gallery">
          <ImageList/>
        </div>
        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <p>
            At [School Name], we believe in holistic education that focuses on
            academic excellence, character building, and skill development.
          </p>
          <p>
            Our dedicated faculty, state-of-the-art facilities, and innovative
            curriculum empower students to excel in all aspects of life.
          </p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
}

export default About;
