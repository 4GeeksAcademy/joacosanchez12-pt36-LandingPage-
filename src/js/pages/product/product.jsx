import React, { useEffect, useState } from "react";
import ProductService from "../../../servicios/productService";
import ProductCard from "../../component/Cards/productCard";

const getProductById = async (id) => {
    try {
        const product = await ProductService.getProductById(id);
        return product; // Assuming ProductService.getProductById returns the product object
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error; // Rethrow the error to handle it elsewhere if needed
    }
}

const Product = ({ productId }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await getProductById(productId);
                console.log("The product is ", productData);
                setProduct(productData);
            } catch (error) {
                // Handle error (e.g., show error message, log error, etc.)
                console.error('Error fetching product:', error);
            }
        };

        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    return (
        <div>
            {product ? (
                <ProductCard producto={product} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Product;
