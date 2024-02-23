import React, { useState } from "react";

interface ImageSliderProps {
  imageURL: string[];
}

const Image: React.FC<ImageSliderProps> = ({ imageURL }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageURL.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageURL.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevSlide}>Prev</button>
      <img
        src={imageURL[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
      />

      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Image;
