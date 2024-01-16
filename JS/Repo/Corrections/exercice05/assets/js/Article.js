class Article {
    static count = 0;

    constructor(nom, prix, stock) {
        this.id = ++Article.count;
        this.nom = nom;
        this.prix = prix;
        this.stock = stock;
    }
}

export default Article;