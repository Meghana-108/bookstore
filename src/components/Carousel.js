// src/components/Carousel.js
import React from 'react';

function Carousel() {
  return (
    <div id="featuredBooksCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#featuredBooksCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#featuredBooksCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#featuredBooksCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/671822c2f63dd5f65d8fd15c9710420b.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Featured Book 1</h5>
            <p>Special offer on this book.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/pexels-pixabay-159711.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Featured Book 2</h5>
            <p>Bestseller of the month.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/photo-1521587760476-6c12a4b040da.avif" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Featured Book 3</h5>
            <p>New arrival.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#featuredBooksCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#featuredBooksCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
