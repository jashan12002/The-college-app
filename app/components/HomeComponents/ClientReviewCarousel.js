'use client'
import React, { useState, useEffect } from 'react';
import './ClientReviewCarousel.css';
import { useSwipeable } from 'react-swipeable';
import Image from 'next/image';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "This service was amazing! Highly recommend to everyone.",
    image: "/Profile/image1.png"
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Fantastic experience, will definitely use again.",
    image: '/Profile/image2.png'
  },
  {
    id: 3,
    name: "Sam Wilson",
    review: "Great customer support and excellent results.",
    image: "/Profile/image3.png"
  }
];

const ClientReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNextClick,
    onSwipedRight: handlePrevClick,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
    <div className='text-center text-5xl font-bold mt-28 text-[#00296b] dark:text-white'>OUR TOPERS</div>
    <div className="carousel-container w-full" {...handlers}>
      <div 
        className="carousel-slide" 
        style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none' }}
        onTransitionEnd={handleTransitionEnd}
      >
        {reviews.map((review, index) => (
          <div
            key={review.id}
            className="carousel-item"
          >
            <Image src={review.image} alt={`${review.name}'s review`} className="review-image border-2 border-purple-500" width={100} height={100} />
            <div className="review-text">
              <h3>{review.name}</h3>
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev " onClick={handlePrevClick}>❮</button>
      <button className="carousel-button next" onClick={handleNextClick}>❯</button>
    </div>
    </>
  );
};

export default ClientReviewCarousel;
