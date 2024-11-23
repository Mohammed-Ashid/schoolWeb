import React, { useState } from "react";
import "../Styles/Gallery.css"; 
import NavBar from "./NavBar";
import Footer from "./Footer";

const galleryData = [
  {
    id: 1,
    title: "Beach Vibes",
    thumbnail: "Images/gallery-4.webp",
    images: [
      "Images/gallery-4.webp",
      "Images/gallery-4.webp",
      "Images/gallery-4.webp",
    ],
  },
  {
    id: 2,
    title: "Mountain Retreat",
    thumbnail: "Images/gallery-4.webp",
    images: [
      "Images/gallery-4.webp",
      "Images/gallery-4.webp",
      "Images/gallery-4.webp",
    ],
  },
  {
    id: 3,
    title: "City Lights",
    thumbnail: "Images/gallery-4.webp",
    images: [
      "Images/gallery-4.webp",
      "Images/gallery-4.webp",
      "Images/gallery-4.webp",
    ],
  },
  // Add more cards as needed
];

function Gallery() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };

  return (
    <div>
          <NavBar/>
    
    <div className="gallery-container">
      
      <h1 className="gallery-heading">Gallery</h1>
      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="gallery-card"
            onClick={() => handleCardClick(item.images)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="gallery-thumbnail"
            />
            <div className="gallery-title">{item.title}</div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-images">
              {selectedImages.map((img, index) => (
                <img key={index} src={img} alt="Gallery" className="modal-image" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/></div>
  );
}

export default Gallery;
