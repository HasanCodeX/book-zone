import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Books to freshen up your bookshelf</h1>
        <button onClick={() => navigate("/listed-books")}>View The List</button>
      </div>
      <div className="banner-image">
        <img src="/assets/b1.jpg" alt="Books Banner" />
      </div>
    </div>
  );
};

export default Banner;
