import { useParams } from 'react-router-dom';
import books from '../data/books.json';

const BookDetails = () => {
  const { id } = useParams();
  const book = books.find(b => b.bookId === parseInt(id));

  return (
    <div className="book-details">
      <img src={book.image} alt={book.bookName} />
      <h1>{book.bookName}</h1>
      <p>Author: {book.author}</p>
      <p>Category: {book.category}</p>
      <button onClick={() => alert('Added to Wishlist')}>Wishlist</button>
      <button onClick={() => alert('Added to Read')}>Read</button>
    </div>
  );
};

export default BookDetails;
