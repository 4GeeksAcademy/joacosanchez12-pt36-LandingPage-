import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";
//create your first component
const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Jumbotron />
                <div className="row row-cols-1 row-cols-md-4 mt-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
