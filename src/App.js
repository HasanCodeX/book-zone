import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListedBooks from './pages/ListedBooks';
import BookDetails from './pages/BookDetails';
import PagesToRead from './pages/PagesToRead';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listed-books" element={<ListedBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/pages-to-read" element={<PagesToRead />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
