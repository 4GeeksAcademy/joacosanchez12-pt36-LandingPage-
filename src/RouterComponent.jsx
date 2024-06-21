import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./js/component/home";
import ProductCard from "./js/component/Cards/productCard";
import { appName, logoUrl } from "./environment ";
export default function RouterComponent() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home appName={appName} logoUrl={logoUrl} />} />
                    <Route path="/product/:id" element={<ProductCard />} />
                    <Route render={() => <h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}