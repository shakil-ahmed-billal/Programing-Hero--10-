///kibabe akti object ke shajabo

const carInfo = {
    brand : 'volovo',
    price : 2000000,
    isNew : true ,
    color : 'red' ,
    model : 'RTG8',
}

for(let i in carInfo){
    let capitalLetter = i.charAt(0).toUpperCase() + i.slice(1)
    console.log(capitalLetter +": "+ carInfo[i]);
}