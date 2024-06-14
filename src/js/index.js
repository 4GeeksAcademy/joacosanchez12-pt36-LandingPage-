//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { appName, logoUrl } from "../environment .js";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home appName={appName} logoUrl={logoUrl}/>, document.querySelector("#app"));


//HTML etiqueta
//<tagname atributo="" style="" class=""></tagName> 


//JSX etiqueta => Componentes que pueden recibir props
//<NombreComponente prop="valor de la propiedad" prop={variable}/>
