class Product {
    static count = 0;

    constructor(nom, prix, stock = 500) {
        this.id = ++Product.count;
        this.nom = nom;
        this.prix = prix;
        this.stock = stock;
    }
}

export default Product;