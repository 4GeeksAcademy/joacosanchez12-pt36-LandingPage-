import React, { useEffect, useState } from "react";
import ProductService from "../../../servicios/productService";
import ProductCard from "../Cards/productCard";

const obtenerProductos = async () => {
    try {
        const listaProductos = await ProductService.getAllProducts();
        return listaProductos;
    } catch (error) {
        console.error('Error:', error);
        return []; // Devolver una lista vacía en caso de error
    }
};

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const listaProductos = await obtenerProductos();
            console.log("La lista de productos es", listaProductos);
            const usdProducts = listaProductos.filter((product => product.currency === "$"));
            setProducts(usdProducts);
        };

        fetchProducts();
    }, []);

    return (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
            {products && (
                products.map(product => <ProductCard key={product.id} producto={product} />)
            )}
        </div>
    );
}

export default ProductList;
