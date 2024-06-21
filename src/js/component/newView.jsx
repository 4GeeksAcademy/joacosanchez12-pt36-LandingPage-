import React from "react";
import NavBar from "./navbar/navBar";
import Footer from "./footer";
import { obtenerAnoActual } from "../../utils/fechas";
import Hero from "./Hero/hero";
import { appName } from "../../environment ";


const NewView = () => {
    return (
        <>
            <NavBar appName={appName} />
            <Hero title={"Esta es mi nueva vista"} subtitle={":)"} />
            <Footer year={obtenerAnoActual} />
        </>
    )
}

export default NewView;