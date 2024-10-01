/**
 * chair ...> 3cft
 * table ----> 10 cft
 * bad ---> 50cft
 */

function woodQuantity(chair, table, bed) {
  const perchareWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const allChairWood = chair * perchareWood ;
  const tableTotalWood = table * perTableWood ;
  const bedTotalWood = bed * perBedWood;

  const totalwood = allChairWood + tableTotalWood + bedTotalWood ;
  return totalwood ;
}

const chair = 2 ;
const table = 3 ;
const bed = 2 ;
const wood = woodQuantity(chair , table , bed);
console.log('total wood Projojon:',wood);
