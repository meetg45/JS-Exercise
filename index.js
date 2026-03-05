let products = [
  { id: 1, name: "Laptop", price: 1200, quantity: 5, category: "Electronics" },
  { id: 2, name: "Shirt", price: 40, quantity: 0, category: "Clothing" },
];

let _id = 3;
//add product
function addProduct(product) {
  const newProduct = {
    id: randomId(),
    ...product,
  };
  products.push(newProduct);
  console.log("Product added successfully.");
}
addProduct({
  name: "watch",
  price: 1500,
  quantity: 2,
  category: "Electronics",
});

// view All Products.
function viewAllProducts() {
  console.log(products);
}
viewAllProducts();

// Remove Product
function removeProduct(id) {
  const exists = products.find((product) => product.id === id);

  if (!exists) {
    console.log("product not found.");
    return;
  }

  products = products.filter((product) => product.id !== id);
  console.log("Product removed successfully.");
}
removeProduct(1);

// update quantity
function updateQuantity(id, quantity) {
  const index = products.findIndex((product) => product.id === id);

  if (index !== -1) {
    products[index].quantity += quantity;
  }
}
updateQuantity(2, 10);
viewAllProducts();

// check total product avilable
function getInStockProducts() {
  return products.filter((product) => product.quantity > 0);
}
getInStockProducts();

// all product total price
function getTotalInventoryValue() {
  return products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
}
getTotalInventoryValue();

// Group by product
function groupByCategory() {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }
    groups[product.category].push(product);
    return groups;
  }, {});
}
groupByCategory();

// Low product
function getLowStockProducts(threshold) {
  return products.filter((product) => product.quantity <= threshold);
}
getLowStockProducts(3);

function randomId() {
  return Math.floor(Math.random() * 10000) + 1;
}
