import React from "react";
import colores from "../../img/colores.jpg";
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
                    <Card
                        img={colores}
                        title="First Card"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        button="Find out more!"
                    />
                    <Card
                        img={colores}
                        title="Second Card"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        button="Find out more!"
                    />
                    <Card
                        img={colores}
                        title="Third Card"
                        description="Aenean dolor libero, ullamcorper id tempor in, laoreet id odio. Duis maximus massa at ex vehicula, eu pulvinar urna tincidunt. Nullam et sapien sed eros ultrices ornare. Sed feugiat egestas viverra. Fusce eu rhoncus nisi"
                        button="Find out more!"
                    />
                    <Card
                        img={colores}
                        title="Fourth Card"
                        description="Cras non pharetra augue. Etiam nec viverra odio. Vestibulum molestie, mauris ut feugiat condimentum, massa turpis ornare erat, quis egestas elit nulla vel libero. Duis ac arcu sit amet elit pellentesque molestie."
                        button="Find out more!"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
