import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <h1>Welcome to BookZone</h1>
      <button onClick={() => navigate('/listed-books')}>View The List</button>
      <img src="/assets/banner-image.jpg" alt="Books" />
    </div>
  );
};

export default Home;
