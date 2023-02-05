


const projects = [
  {
    projectID: 1,
    name: 'Proffesional art printing data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard.',
    featuredImageBig: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    projectID: 2,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    projectID: 3,
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    projectID: 4,
    name: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    projectID: 5,
    name: 'Data Dashboard Healthcare',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/firstprojectbig.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
  {
    projectID: 6,
    name: 'Website Protfolio',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    featuredImage: 'images/Imgplaceholder1.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
  },
];

//  CARDS BEING GENERATED=
for (let index = 0; index < projects.length; index += 1) {
  const project = projects[index];
  //  Div projects
  const divProject = document.createElement('div');
  divProject.setAttribute('class', 'projects header-pro');

  //  title
  const projectName = document.createElement('h2');
  projectName.setAttribute('class', 'pro');
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);
  divProject.appendChild(projectName);

  //  description
  const descriptionTag = document.createElement('p');
  descriptionTag.setAttribute('class', 'pro-p');
  const descriptionText = document.createTextNode(project.description);
  descriptionTag.appendChild(descriptionText);
  divProject.appendChild(descriptionTag);

  //  Technologis ul
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
  btnSeeProject.setAttribute('id', `btnSeeProject${project.projectID}`);
  btnSeeProject.setAttribute('id', project.projectID);
  btnSeeProject.appendChild(btnText);
  divProject.appendChild(btnSeeProject);

  //  Add div to dinamicProjects
  htmlPage.appendChild(divProject);
}


function displayProjects() {
  const div = document.getElementById('projectAera');
  div.innerHTML = `
  <section  class="second-sec">
  <div id ="my-recnt">
  <h3 class="second-tittle">
    My Recent Works
  </h3>
  <hr class="line2">
</div>
<div id="multi">
  <img class="img-desk" width="327" height="237" src="./images/Img-Placeholder.png" alt="">
  <img class="img-desk2" width="327" height="237" src="./images/Img-Placeholder.png" alt="">
  <div class="post">
  <h3 class="second-subtittle">
    Multi-Post Stories
  </h3>
  <p class="second-p">
    A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
  </p>
  <div onclick="appear()">
    <ul class="list-btn">
      <li class="css-btn">css</li>
      <li class="html-btn">html</li>
      <li class="boot-btn">bootsrap</li>
      <li class="ruby-btn">ruby</li>
    </ul>
    <button class="btn-top" onclick="appear()" type="button">See projests</button>
  </div>
</div>
</div>
</section>`;
}

displayProjects();