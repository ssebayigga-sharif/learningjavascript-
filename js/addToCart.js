// Amazon shopping
const user = {
  name: "Sharitech",
  active: true,
  cart: [],
  purchase: [],
};

const compose =
  (one, two) =>
  (...args) =>
    one(two(...args));
const purchaseItem = (...fns) => fns.reduce(compose);
let amazonhistory = [];

const userPurchasing = purchaseItem(
  emptyCart,
  buyItem,
  addTaxToItem,
  addItemToCart
)(user, { name: "Ford", price: 600 });

function addItemToCart(user, item) {
  amazonhistory.push(user);
  const updatedCart = user.cart.concat([item]);
  return Object.assign({}, user, { cart: updatedCart });
}

function addTaxToItem(user) {
  amazonhistory.push(user);
  const { cart } = user;
  const taxRate = 1.3;
  const updatedCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  amazonhistory.push(user);
  return Object.assign({}, user, { purchase: user.cart });
}

function emptyCart(user) {
  amazonhistory.push(user);
  return Object.assign({}, user, { cart: [] });
}
console.log(userPurchasing);
console.log(amazonhistory);
// implement a cart feature
// 1 add items to cart
// 2 add 3 % tax to items in the cart
// 3 buy item-- > purchase
// 4 empty cart
// bonus
// accept refunds
// track user history
