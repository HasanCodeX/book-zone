import React from "react";
import "./BookCard.css";

const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={() => onClick(book)}>
      <img src={book.image} alt={book.bookName} />
      <h3>{book.bookName}</h3>
      <p>By: {book.author}</p>
      <p>Category: {book.category}</p>
      <p>⭐ {book.rating}</p>
    </div>
  );
};

export default BookCard;
