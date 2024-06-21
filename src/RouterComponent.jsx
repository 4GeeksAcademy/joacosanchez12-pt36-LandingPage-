import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./js/component/home";
import Product from "./js/pages/product/product";
import { appName, logoUrl } from "./environment ";
import NavBar from "./js/component/navbar/navBar";
import NewView from "./js/component/newView";
export default function RouterComponent() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home appName={appName} />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/newView/" element={<NewView />} />
                    <Route render={() => <h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}