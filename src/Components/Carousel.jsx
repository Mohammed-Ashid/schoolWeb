import React, { useState, useEffect } from 'react';
import '../Styles/Carousel.css';

const images = [
  'Images/MES_AIMAT_college_marampally.jpg',
  'Images/gallery-4.webp',
  'Images/mes-advanced-institute-of-management-and-technology-marampally-ernakulam-mba-colleges-8382xlhqms.avif',
];

const texts = [
  'Explore the beauty of nature',
  'Unwind and relax in the wild',
  'Discover new hiking trails',
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setPreviousIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, paused]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);

  return (
    <div
      className="carousel-main-div"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel-text">
        <p key={previousIndex} className="slide-out">
          {texts[previousIndex]}
        </p>
        <p key={currentIndex} className="slide-in">
          {texts[currentIndex]}
        </p>
      </div>
    </div>
  );
}

export default Carousel;
