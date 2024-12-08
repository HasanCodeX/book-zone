import books from '../data/books.json';
import { useNavigate } from 'react-router-dom';

const ListedBooks = () => {
  const navigate = useNavigate();

  return (
    <div className="listed-books">
      <h1>Listed Books</h1>
      <div className="book-grid">
        {books.map(book => (
          <div key={book.bookId} className="book-card" onClick={() => navigate(`/book/${book.bookId}`)}>
            <img src={book.image} alt={book.bookName} />
            <h3>{book.bookName}</h3>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
