// src/components/BookCard.js
import React from 'react';

function BookCard({ book }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={book.image} className="card-img-top" alt={book.title} />
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">Author: {book.author}</p>
          <p className="card-text">Price: ${book.price}</p>
          <p className="card-text">{book.description}</p>
          <a href="https://www.ingramspark.com/blog/book-cover-design-basics" className="btn btn-primary">View Details</a>
          <a href="https://www.amazon.in/Book-Soul-Paths-Living-Matters/dp/1250262968" className="btn btn-secondary">Add to Cart</a>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
