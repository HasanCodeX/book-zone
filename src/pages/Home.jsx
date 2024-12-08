import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to BookZone</h1>
        <button className="view-list-btn" onClick={() => navigate('/listed-books')}>
          View The List
        </button>
      </div>
      <div className="banner-image">
       <img src='/assets/bb1.jpg'></img>
       
      </div>
    </div>
  );
};

export default Home;
