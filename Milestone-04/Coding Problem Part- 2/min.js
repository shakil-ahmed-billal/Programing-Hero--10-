const price = [20000, 25000, 15000, 120000];

function minPrice(price) {
  let minimam = price[0];
  for (const per of price) {
    if(minimam < per){
        minimam = per ;
    }
  }
  return minimam ;
}
const LowPrice = minPrice(price);
console.log("Chipest one is :", LowPrice);
