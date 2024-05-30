// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

const books = [
    {
      image: process.env.PUBLIC_URL + '/images/book_cover1.jpg',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      price: '12.99',
      description: 'The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan.'
    },
    {
      image: process.env.PUBLIC_URL + '/images/book_cover2.jpg',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      price: '14.99',
      description: 'The novel explores the irrationality of adult attitudes toward race and class in the Deep South of the 1930s, as a small-town lawyer defends a black man accused of raping a white woman.'
    },
    {
      image: process.env.PUBLIC_URL + '/images/book_cover3.jpg',
      title: '1984',
      author: 'George Orwell',
      price: '11.99',
      description: 'Set in a dystopian future where critical thought is suppressed under a totalitarian regime, the story follows the life of Winston Smith and his attempt to rebel against the oppressive government.'
    },
    {
      image: process.env.PUBLIC_URL + '/images/book_cover4.jpg',
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      price: '10.99',
      description: 'The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.'
    },
    {
      image: process.env.PUBLIC_URL + '/images/book_cover5.jpg',
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      price: '13.99',
      description: 'The novel details two days in the life of 16-year-old Holden Caulfield after he has been expelled from prep school. Confused and disillusioned, Holden searches for truth and rails against the "phoniness" of the adult world.'
    },
    {
      image: process.env.PUBLIC_URL + '/images/book_cover6.jpg',
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      price: '18.99',
      description: 'The epic fantasy novel follows the journey of Frodo Baggins to destroy the One Ring and defeat the Dark Lord Sauron. Along the way, he is joined by a diverse fellowship of creatures and faces numerous challenges and dangers.'
    },
 
  ];
  

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="container my-5">
        <div className="row">
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
