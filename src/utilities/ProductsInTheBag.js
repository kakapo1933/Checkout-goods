export default class ProductInTheBag {
  constructor(products) {
    if (!Array.isArray(products)) throw new Error('Products must be an array');
    this.products = products;
  }

  totalPrice = () => {
    if (this.products.length === 0) return 0;

    const priceAppliedDiscountPlanOne = this.products.reduce((totalPrice, product) => {
      if (product.amount < 2) { 
        return totalPrice 
      };
      totalPrice += product.applyDiscountPlanOne();
      if (product.amount % 2 === 1) { 
        product.amount = 1 
      } else {
        product.amount = 0;
      };
      return totalPrice;
    }, 0);

    // Calculate the rest amount of products
    const restAmountOfProducts = this.products.reduce((amount, product) => {
      amount += product.amount;
      return amount;
    }, 0);

    /* 
      If there are 3 or more products rest, apply discount plan two.
      Otherwise, calculate the price without discount.
    */
    let priceAppliedDiscountPlanTwo = 0;
    if (restAmountOfProducts >= 3) {
      priceAppliedDiscountPlanTwo = this.products.reduce((totalPrice, product) => {
        totalPrice += product.applyDiscountPlanTwo();
        return totalPrice;
      }, 0);
    } else {
      priceAppliedDiscountPlanTwo = this.products.reduce((totalPrice, product) => {
        totalPrice += product.price * product.amount;
        return totalPrice;
      }, 0);
    }

    return priceAppliedDiscountPlanOne + priceAppliedDiscountPlanTwo;
  }
}