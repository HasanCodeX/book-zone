import { useEffect, useState } from 'react';

const PagesToRead = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const readBooks = JSON.parse(localStorage.getItem('read')) || [];
    setBooks(readBooks);
  }, []);

  return (
    <div className="bar-chart">
      <h1>Pages to Read</h1>
      <div className="chart">
        {books.map(book => (
          <div key={book.bookId} className="bar" style={{ height: `${book.totalPages}px` }}>
            {book.totalPages} pages
          </div>
        ))}
      </div>
    </div>
  );
};

export default PagesToRead;
