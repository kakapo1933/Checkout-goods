import database from '../database.json';
import Product from '../classes/Product';
import ProductsInTheBag from '../classes/ProductsInTheBag';

export default function checkout (productIDs = []) {
  // Check if productIDs is an array
  if (!Array.isArray(productIDs)) {
    throw new Error('Product IDs must be an array');
  };

  // Check if productIDs is empty
  if (productIDs.length === 0) return 0;

  // Check if all productIDs are valid and count the amount of each product
  const productsAmounts = productIDs.reduce((acc, id) => {
    if (!database.products[id]) {
      throw new Error(`Product with ID ${id} not found`);
    };
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  // Create Products' instances
  const products = Object.keys(productsAmounts).map((id) => {
    const product = new Product(id, database.products[id].name, parseInt(database.products[id].price), productsAmounts[id]);
    return product;
  });

  const productsInTheBag = new ProductsInTheBag(products);

  return productsInTheBag.totalPrice();
};