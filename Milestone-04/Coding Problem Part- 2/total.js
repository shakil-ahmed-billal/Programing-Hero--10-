const number = [23, 345, 56, 34, 76, 45, 76];
const products = [
  { name: "shempo", price: 300, quantity: 3 },
  { name: "Chironi", price: 100, quantity: 3 },
  { name: "Shart", price: 800, quantity: 3 },
  { name: "Pant", price: 1200, quantity: 3 },
];

function getShopingTotal(products) {
  let productPrice = 0;
  for (const product of products) {
    console.log(product);
    productPrice += product.price;
  }
  return productPrice;
}
const total = getShopingTotal(products);
console.log("total Product price:", total);

function cartShop(number){
    let sum = 0 ;
    for(const num of number){
        const totalPrice= num.price * num.quantity ;
        sum += totalPrice ;
    }
    return sum ;
}
 const chartTotal = cartShop(products);
 console.log('total cart product price:', chartTotal);