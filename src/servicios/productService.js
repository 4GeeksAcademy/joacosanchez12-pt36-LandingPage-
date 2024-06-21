import { API_BASE_URL } from "../environment ";

class ProductService {
    async getAllProducts() { //GET para obtener todos los productos
        try {
            const response = await fetch(`${API_BASE_URL}product`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error; // Re-lanza el error para que pueda ser manejado por el llamador si es necesario
        }
    }

    async getProductById(id) { //GET para obtener todos los productos por id
        try {
            const response = await fetch(`${API_BASE_URL}product/${id}`);
            const data = await response.json();
            return data;

        } catch (error) {
            throw error;
        }
    }

    createProduct(product) { //POST crear un nuevo producto
        throw new Error('Method createProduct() not implemented');
    }

    updateProduct(id, product) { // PUT update un producto ya existente  
        throw new Error('Method updateProduct() not implemented');
    }

    deleteProduct(id) { // DELETE eleminar un producto existente 
        throw new Error('Method deleteProduct() not implemented');
    }
}

export default new ProductService();
