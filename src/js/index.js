//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import RouterComponent from "../RouterComponent.jsx";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
//render your react application
ReactDOM.render(<RouterComponent />, document.querySelector("#app"));


//HTML etiqueta
//<tagname atributo="" style="" class=""></tagName>


//JSX etiqueta => Componentes que pueden recibir props
//<NombreComponente prop="valor de la propiedad" prop={variable}/>
