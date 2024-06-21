import React from "react"; // Importar react
import BuscarProducto from "../searchProduct";
import { logoUrl } from "../../../environment ";
import { Link } from "react-router-dom";

const NavBar = ({ appName }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ background: "var(--color-primario)" }}>
            <div className="container-fluid mx-2">
                <Link to={"/"}><img src={logoUrl} width="30" height="30" alt="" /></Link>
                <a className="nav-link active fs-4  h2 d-lg-none fw-bold" aria-current="page" href="#">{appName}</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mb-2 mb-lg-0 d-none d-lg-flex w-60 align-items-center">
                        <li className="nav-item d-flex align-items-center">
                            <a className="nav-link active fs-4 fw-bold" aria-current="page" href="#">{appName}</a>

                        </li>
                    </ul>

                    <BuscarProducto />
                    <span className="navbar-text">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/NewView"}>NewView</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"> Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"> Acerca de</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar; 
