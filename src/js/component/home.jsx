import React from "react"; // Importar react
import NavBar from "./navbar/navBar";
import Hero from "./Hero/hero";
import Footer from "./footer";
import { obtenerAnoActual } from "../../utils/fechas";
import ProductList from "./List/productList";
import Product from "../pages/product/product";
import { logoUrl } from "../../environment ";

//create your first component


//props


const Home = ({ appName }) => {
	return (
		<>
			<NavBar appName={appName} />
			<Hero title="reflexiona sobre grandes ideas" subtitle="Ya seas un filósofo experimentado o un curioso novato, nuestra colección te invita a embarcarte en un viaje a través de los pensamientos e ideas que han dado forma a la humanidad" />
			<div className="p-4">

				<ProductList />
			</div>
			<Footer appName={appName} year={obtenerAnoActual} />
		</>
	);
};

export default Home; 
