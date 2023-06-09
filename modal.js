async function displayProjects() {
  const div = document.getElementById('projectAera');
  div.innerHTML = `
  <section>
  <div  id="second-sec">
  <div id ="my-recnt">
  <h3 class="second-tittle">
    My Recent Works
  </h3>
  <hr class="line2">
</div>
<div id="multi">
 <div>
  <img class="img-desk" width="300" height="237" src="./images/Image20230429085301.png" alt="Budget-app">
  </div>
  <div>
  <img class="img-desk2" src="./images/Image20230429085301.png" alt="Budget-app">
  </div>
  <div class="post">
    <h3 class="second-subtittle">
      Multi-Post Stories
    </h3>
  <div id="second-p">
    <p class="second-p">
    This application provides users with a convenient and accessible way to stay updated on the latest Covid-19 statistical data for all continents in the world. It allows users to quickly and easily view important metrics such as confirmed cases, deaths, recoveries, and more, all from a single platform. Additionally, users can also search for data specific to a particular continent by entering its name into the search bar.
    </p>
  </div>
  <div onclick="appear()">
    <ul class="list-btn">
      <li class="css-btn boot-btns">HTML</li>
      <li class="html-btn boot-btns">CSS</li>
      <li class="boot-btn boot-btns">React</li>
      <li class="ruby-btn boot-btns">Redux</li>
    </ul>
    <div class="projectBtn">
    <button type="button" class="btn-top" onclick="appear()" type="button"">
    <strong>See projests</strong>
    <div id="container-stars">
      <div id="stars"></div>
    </div>
  
    <div id="glow">
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </button>
    </div>
  </div>
</div>
</div>
</div>
</section>`;
}

displayProjects();

const modalInformation = {
  heading1: 'Multi Post Stories',
  title2: 'stay updated on the latest Covid-19 statistical',
  description:
    'This application provides users with a convenient and accessible way to stay updated on the latest Covid-19 statistical data for all continents in the world. It allows users to quickly and easily view important metrics such as confirmed cases, deaths, recoveries, and more, all from a single platform. Additionally, users can also search for data specific to a particular continent by entering its name into the search bar.',
  description2:
    'This app offers an easy way to access the latest Covid-19 stats for all continents and search by continent name, making it a valuable resource for staying informed during the ongoing pandemic.',
  imageSrc: './images/firstprojectbig.png',
  button1:
    '<a href ="https://zingy-cactus-5d6941.netlify.app/">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
  button2:
    '<a href ="https://github.com/eerapheal/react-capstone">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
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
