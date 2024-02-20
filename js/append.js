
//1: Whete to add
const placesList = document.getElementById('places-list');
// console.log(placesList)
// 2: What to add
const li = document.createElement('li');
li.innerText = 'pahartoli bon';

//3: add the child 
placesList.appendChild(li)


// 1: where to add

const mainConatiner = document.getElementById('main-container');

// 2: What to add

const section = document.createElement('section');
const h1 = document.createElement('h1');
//3: add the child 
h1.innerText = 'my food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'birani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'kacchi';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'coke';
ul.appendChild(li4);


section.appendChild(ul);


mainConatiner.appendChild(section)



const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
    <li>T-shirt</li>
    <li>Lungi</li>
    <li>Suit-pant</li>
    <li>Blazer</li>
</ul>   
`

mainConatiner.appendChild(sectionDress)

