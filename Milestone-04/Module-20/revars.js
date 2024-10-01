// kibabe a veriable take ultaya dite pari

const sentence = ' I am a larning web dev';

let revarse = ''
for(const letter of sentence){
    // console.log(letter);
    revarse = letter + revarse
}
console.log(revarse);

// secend option revarce are
let rev= '';
for ( let i = 0 ; i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    rev =  letter + rev;
    console.log(rev);

}

// thard option chake
const revarsed = sentence.split('').reverse().join('');
console.log(revarsed);