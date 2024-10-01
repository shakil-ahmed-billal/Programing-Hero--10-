//1. kothai add korbo
const mobiles = document.getElementById('mobile');

//2. ki ki add korbo segolo
const li = document.createElement('li');
li.innerText = 'pahar toli';

// 3. add the child the pereant 
mobiles.appendChild(li)



// kothai add korso sei than
const mainContainer1 = document.getElementById('food');

// ki add ki korbo je element
const section = document.createElement('section')
const h1 = document.createElement ('h1');
h1.innerText = 'my food list';
section.appendChild(h1);
mainContainer1.appendChild(section);


const mainContainer = document.getElementById('food');

const div = document.createElement('div');
const li2 = document.createElement('li');
li2.innerText = 'new food';

div.appendChild(li2)
mainContainer.appendChild(div)
// console.log(div);


// set inner html directly.....

const mainContainer3 = document.getElementById('main');

const dressSection = document.createElement('section')

dressSection.innerHTML = `
    <h1>New dress calection </h1>
            <ul>
                <li>name</li>
                <li>Adresss</li>
                <li>Emaill</li>
                <li>Number</li>
            </ul>
`;

mainContainer3.appendChild(dressSection)
