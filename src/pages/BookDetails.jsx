import { useParams } from 'react-router-dom';
import books from '../data/books.json';
import '../styles/book-details.css'; // Make sure the path is correct

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.bookId === parseInt(id)); // Finding the book by ID

  return (
    <div className="book-details-container">
      {/* Displaying Details of the Selected Book */}
      {book ? (
        <div className="book-details">
          <div className="book-card book-details-card">
            <img className="book-image" src={book.image} alt={book.bookName} />
            <div className="book-info">
              <h1 className="book-title">{book.bookName}</h1>
              <p className="author">By: {book.author}</p>
              <div className="book-meta">
                <span className="category">{book.category}</span>
                <span className="rating">⭐ {book.rating}</span>
              </div>
              <p className="review">{book.review}</p>
              <div className="buttons">
                <button className="wishlist-btn">Add to Wishlist</button>
                <button className="read-btn">Add to Read List</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="error-message">Sorry, the book you are looking for is not available.</p>
      )}

      {/* Displaying Other Books in Grid Layout */}
      <div className="books-grid">
        {books.map((book) => (
          <div className="book-card" key={book.bookId}>
            <img className="book-image" src={book.image} alt={book.bookName} />
            <h3 className="book-title">{book.bookName}</h3>
            <p className="author">By: {book.author}</p>
            <div className="tags">
              <span className="category">{book.category}</span>
              <span className="rating">⭐ {book.rating}</span>
            </div>
            <button className="wishlist-btn">Add to Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails;
