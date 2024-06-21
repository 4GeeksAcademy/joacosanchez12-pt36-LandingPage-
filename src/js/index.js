//import react into the bundle
import React from "react";
import { createRoot } from "react-dom/client";
import { appName, logoUrl } from "../environment .js";
import RouterComponent from "../RouterComponent.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
//render your react application
document.addEventListener("DOMContentLoaded", function () {
    createRoot(<RouterComponent />, document.querySelector("#app"));
});

//HTML etiqueta
//<tagname atributo="" style="" class=""></tagName>


//JSX etiqueta => Componentes que pueden recibir props
//<NombreComponente prop="valor de la propiedad" prop={variable}/>
