// console.log('hello js');
// console.log(document.body);

const student = {
    name : 'abul',
    id : 11,
    stydy : function ( time){
        // console.log(time, 'study kortase');
    }
}

// const tagname = document.getElementsByTagName('main')
const places = document.getElementsByClassName('important-places')
for(const place of places){
    // console.log(place.innerText);
}

const semoli = document.querySelectorAll('.important-places')
for(const li of semoli){
    // console.log(li);
}

let styleAdd = document.getElementById('fruits-id');
styleAdd.style = 'red'

// inner html set and view
const html =  document.getElementById('mobile').innerHTML = `
    <h1>amar name shakil </h1>
    <ul>
        <li>Name Shakil</li>
        <li>Adress Mowna</li>
        <li>21 year old</li>
    </ul>    
`

// console.log(html);


// inner text view and set
document.getElementById('mobile').innerText