export class Fruit {

  static count = 0;
  constructor (fruit, prix, stock){
    this.id = ++Fruit.count
    this.fruit = fruit
    this.prix = prix
    this.stock = stock
  }

  MaJ(quantite){
    this.stock -= quantite
  }
}