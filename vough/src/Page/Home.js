import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <h1>Vough Contacs</h1>
      <Link to="/Contact">Contatos</Link>
    </div>
  );
};

export default Home;