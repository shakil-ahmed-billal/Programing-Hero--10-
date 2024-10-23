const getStorage = () => {
  const storeCart = localStorage.getItem("cart");
  if (storeCart) {
    return JSON.parse(storeCart);
  }
  return [];
};

const saveCart = (cart) => {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const addCart = (id) => {
  const cart = getStorage();
  cart.push(id);
  saveCart(cart);
};

const removeCartItem = (id) => {
  const cart = getStorage();
  const remove = cart.filter(idx => idx !== id);
  saveCart(remove);
};

export { addCart, getStorage, removeCartItem };
