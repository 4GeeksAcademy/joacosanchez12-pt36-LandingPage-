class Product {
    constructor({ id, name, author, description, images, price, origin, ISBN }) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.description = description;
        this.images = images;
        this.price = {
            value: price.value,
            currency: price.currency,
        };
        this.origin = origin;
        this.ISBN = ISBN;
    }
}

export default Product;