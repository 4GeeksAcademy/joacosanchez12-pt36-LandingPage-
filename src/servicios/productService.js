import Product from "../modelos/Product";
import productos from "./fakeData/productos";

class ProductService {
    getAllProducts() {
        // Utilizando spread operator para crear nuevos objetos del modelo de producto
        return productos.map(product => new Product(product));
    }

    getProductById(id) {
        const productData = productos.find(product => product.id === id);
        return productData ? new Product(productData) : null;
    }

    createProduct(product) {
        throw new Error('Method createProduct() not implemented');
    }

    updateProduct(id, product) {
        throw new Error('Method updateProduct() not implemented');
    }

    deleteProduct(id) {
        throw new Error('Method deleteProduct() not implemented');
    }
}

export default new ProductService();
