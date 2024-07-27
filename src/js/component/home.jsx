import React from "react";
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import CardList from './CardList';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Jumbotron />
        <CardList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
