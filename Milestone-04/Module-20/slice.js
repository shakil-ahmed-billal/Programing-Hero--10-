//slice are bebohar dekhano hole
// je kono akta veriable theke kono akta nidisto ongso kibabe kete alada alada babae statment kore dekhano jai .....


const address = 'bangladesh'
const part = address.slice(2,5)

console.log(part);

const sentence = 'i am a reding a book javascript'


// crate a meningfull output for slice..
console.log(sentence.split(' '));

// kibabe slice diye bug kora jai
console.log(sentence.split('a'));


const freinds = 'famim,rahim,karim,tamim,samim,kamim';

console.log(freinds.split(','));

const realFriends =  [ 'famim', 'rahim', 'karim', 'tamim', 'samim', 'kamim' ];

console.log(realFriends.join());
console.log(realFriends.join('|'));
console.log(realFriends.join('-'));