export default class Product {
  constructor(id, name, price, amount) {
    if (typeof amount !== "number") {
      throw new Error("Amount of products must be a number");
    }
    if (typeof price !== "number") {
      throw new Error("Price of products must be a number");
    }
    if (typeof name !== "string") {
      throw new Error("Name of products must be a string");
    }
    if (typeof id !== "string") {
      throw new Error("ID of products must be a string");
    }
    this.id = id;
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  applyDiscountPlanOne = () => {
    let amount = this.amount;
    if (amount % 2 === 1) {
      amount -= 1;
    }
    // 第二件半價
    const totalPrice = this.price * amount * 0.75;
    return parseFloat(totalPrice.toFixed(1));
  };

  applyDiscountPlanTwo = () => {
    const price = this.price - 5;
    return parseFloat(price.toFixed(1));
  };
}