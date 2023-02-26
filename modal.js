const projects = [
  {
    projectID: 1,
    name: 'awesomebook Applicaion',
    description: 'This website allows users to store data in local storage and the datas can be edited, updated and deleted as well from the webpage.',
    featuredImageBig: 'images/firstprojectbig.png',
    technologies: ['html', 'CSS', 'JavaScripts'],
    url: 'https://eerapheal.github.io/awesomebook-ES6/'
  },
  {
    projectID: 2,
    name: 'Mathematician Application',
    description: 'This is a Math App project That allows users to carry out calculation operations and it was as a single page aplication.',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'CSS', 'React.js'],
    url: 'https://glowing-naiad-81e0ba.netlify.app/'
  },
  {
    projectID: 3,
    name: 'To-do-list Application',
    description: 'Users can create a task, read tasks, update tasks, delete a task, check completed tasks and delete all checked tasks',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'CSS', 'JavaScripts'],
    url: 'https://eerapheal.github.io/toDolist/dist/'
  },
  {
    projectID: 4,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    url: 'https://example.com/project4'
  },
  {
    projectID: 5,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    url: 'https://example.com/project5'
  },
  {
    projectID: 6,
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/Imgplaceholder1.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    url: 'https://example.com/project6'
  },
];

for (let index = 0; index < projects.length; index += 1) {
  const project = projects[index];
  const divProject = document.createElement('div');
  divProject.setAttribute('class', 'header-pro');

  const projectName = document.createElement('h2');
  projectName.setAttribute('class', 'pro');
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);
  divProject.appendChild(projectName);

  const descriptionTag = document.createElement('p');
  descriptionTag.setAttribute('class', 'pro-p');
  const descriptionText = document.createTextNode(project.description);
  descriptionTag.appendChild(descriptionText);
  divProject.appendChild(descriptionTag);

  const techUl = document.createElement('ul');
  techUl.setAttribute('class', 'multi-btn');
  const techs = project.technologies;
  techs.forEach((tech) => {
    const liTech = document.createElement('li');
    const liText = document.createTextNode(tech);
    liTech.appendChild(liText);
    techUl.appendChild(liTech);
    divProject.appendChild(techUl);
  });

  const btnSeeProject = document.createElement('button');
  const btnText = document.createTextNode('See project');
  btnSeeProject.setAttribute('class', 'buttons pro-btn');
  
  // create an "a" element and set its href attribute to the project's url property
  const aLink = document.createElement('a');
  aLink.setAttribute('href', project.url);
  aLink.appendChild(btnText);
  btnSeeProject.appendChild(aLink);
  
  divProject.appendChild(btnSeeProject);

  const htmlPage = document.getElementById('htmlPage');
  htmlPage.appendChild(divProject);
}

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
  <img class="img-desk" width="327" height="237" src="./images/Img-Placeholder.png" alt="">
  </div>
  <div>
  <img class="img-desk2" width="327" height="237" src="./images/Img-Placeholder.png" alt="">
  </div>
  <div class="post">
    <h3 class="second-subtittle">
      Multi-Post Stories
    </h3>
  <div id="second-p">
    <p class="second-p">
      A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
    </p>
  </div>
  <div onclick="appear()">
    <ul class="list-btn">
      <li class="css-btn">css</li>
      <li class="html-btn">html</li>
      <li class="boot-btn">bootsrap</li>
      <li class="ruby-btn">ruby</li>
    </ul>
    <div class="projectBtn">
    <button class="btn-top" onclick="appear()" type="button">See projests</button>
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
