const modalInformation = {
  heading1: 'Multi Post Stories',
  title2: 'Keeping track of hundreds  of components website',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  imageSrc: './images/todolist.png',
  button1: 'See Live  <img src="./images/Iconlive.png">',
  button2: 'See Source <img src="./images/Vectorhub.png">',
  li: 'html',
  li2: 'Bootstrap',
  li3: 'Ruby on rails',
};

const div1 = document.createElement('div');
div1.className = 'modal';
document.body.appendChild(div1);

const div = document.createElement('div');
div.className = 'modal-header';
div1.appendChild(div);

const div2 = document.createElement('div');
div2.className = 'title';
div.appendChild(div2);

const h2 = document.createElement('h1');
h2.className = 'modal-headm';
h2.textContent = modalInformation.heading1;
div2.appendChild(h2);

const h20 = document.createElement('div');
h20.className = 'modal-header22';
div2.appendChild(h20);

const h22 = document.createElement('h1');
h22.className = 'modal-headd';
h22.textContent = modalInformation.title2;
h20.appendChild(h22);

const span = document.createElement('button');
span.className = 'close-button';
span.innerHTML = '&times;';
div.appendChild(span);

const div3 = document.createElement('div');
div3.className = 'modal-tags';
div1.appendChild(div3);

const ul = document.createElement('ul');
ul.className = 'modal-social';
div3.appendChild(ul);

const li = document.createElement('li');
li.className = 'tags1';
li.innerHTML = modalInformation.li;
ul.appendChild(li);

const li2 = document.createElement('li');
li2.className = 'tags2';
li2.innerHTML = modalInformation.li2;
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.className = 'tags3';
li3.innerHTML = modalInformation.li3;
ul.appendChild(li3);

const div4 = document.createElement('div');
div4.className = 'modal-pic';
div1.appendChild(div4);

const div12 = document.createElement('div');
div12.className = 'modal-body';
div4.appendChild(div12);

const p = document.createElement('p');
p.className = 'modal-mobile';
p.textContent = modalInformation.description2;
div12.appendChild(p);

const p2 = document.createElement('p');
p2.className = 'modal-desktop';
p2.textContent = modalInformation.description;
div12.appendChild(p2);

const div13 = document.createElement('div');
div13.className = 'modal-button';
div1.appendChild(div13);

const button = document.createElement('button');
button.className = 'live-button';
button.innerHTML = modalInformation.button1;
div13.appendChild(button);

const button2 = document.createElement('button');
button2.className = 'source-button';
button2.innerHTML = modalInformation.button2;
div13.appendChild(button2);

const parentModal = document.querySelector('.modal');
const openModalButtons = document.querySelector('pro-btn');
const closeModalButtons = document.querySelector('.close-button');

function disappear() {
  parentModal.style.display = 'none';
}

closeModalButtons.addEventListener('click', disappear);

function appear() {
  parentModal.style.display = 'block';
}

// appear();

openModalButtons.addEventListener('onclick', appear);

// function dissappearParent(e) {
//   if (e.target.className === '.modal') {
//     parentModal.style.display = 'none';
//   }
// }
// parentModal.addEventListener('click', dissappearParent);

// const parentModal = document.getElementsByClassName('modal');
// const closeBtn = document.getElementsByClassName('close-button');
// const openbtn = document.getElementsByClassName('multi-btn');

// openbtn.addEventListener('click', () => {
//   parentModal.className('modal')
// });
