import React from "react"; // Importar react
import BotonBusqueda from "./searchProduct";
import NavBar from "./navbar/navBar";
import Hero from "./Hero/hero";
import ProductCard from "./Cards/productCard";
import Footer from "./footer";
import { obtenerAnoActual } from "../../utils/fechas";

//create your first component


//props


const Home = ({ appName, logoUrl }) => {
	return (
		<>
			<NavBar appName={appName} logoUrl={logoUrl} />
			<Hero title="reflexiona sobre grandes ideas" subtitle="Ya seas un filósofo experimentado o un curioso novato, nuestra colección te invita a embarcarte en un viaje a través de los pensamientos e ideas que han dado forma a la humanidad" />
			<div className="p-4">
				<ProductCard />
			</div>
			<Footer appName={appName} year={obtenerAnoActual} />
		</>
	);
};

export default Home; 
