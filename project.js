const projects = [
  {
    projectID: 1,
    name: 'awesomebook  Applicaion',
    description:
      'Through the website, users can store data locally and perform editing, updating, and deletion of the stored data directly from the webpage.',
    featuredImage: './images/awsome-book.png',
    technologies: ['html', 'CSS', 'JavaScripts'],
    url: '<a href ="https://eerapheal.github.io/awesomebook-ES6/">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
    url1: '<a href ="https://github.com/eerapheal/Ralph-Harry-book">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
  },
  {
    projectID: 2,
    name: 'Mathematician Application',
    description:
      'In this Math App project is designed as a single-page application, enabling users to perform various mathematical calculations effortlessly.',
    featuredImage: 'images/math-app.png',
    technologies: ['html', 'CSS', 'React.js'],
    url: '<a href ="https://glowing-naiad-81e0ba.netlify.app/">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
    url1: '<a href ="https://github.com/eerapheal/my-math-apps">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
  },
  {
    projectID: 3,
    name: 'Space Travel Hub app',
    description:
      'This application built is with HTML, CSS, JS and  React-Redux API for mission/rocket fetching and reservations/joining with user profile.',
    featuredImage: 'images/Image20230419124343.png',
    technologies: ['html', 'CSS', 'JavaScripts'],
    url: '<a href ="https://space-travel-hub-by-ralph.netlify.app/">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
    url1: '<a href ="https://github.com/eerapheal/react-redux-project">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
  },
  {
    projectID: 4,
    name: 'to-do-list Application',
    description:
      'in this application i  creation, reading, updating, and deletion are available to users, as well as the ability to view and delete completed tasks.',
    featuredImage: './images/todo-list.png',
    technologies: ['html', 'bootstrap', 'React'],
    url: '<a href ="https://eerapheal.github.io/toDolist/dist/">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
    url1: '<a href ="https://github.com/eerapheal/toDolist">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
  },
  {
    projectID: 5,
    name: ' Covid-19 stats mobile App',
    description:
      'Stay up-to-date on Covid-19 stats for all continents with this app, featuring easy search by continent name for quick access to the latest data.',
    featuredImage: './images/Image20230429085301.png',
    technologies: ['html', 'bootstrap', 'React'],
    url: '<a href ="https://zingy-cactus-5d6941.netlify.app/">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
    url1: '<a href ="https://github.com/eerapheal/react-capstone">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
  },
  {
    projectID: 6,
    name: 'Speakers Application',
    description:
      'This project is designed with more features for online lectures, international tech professional events, using HTML, CSS, JavaScript.',
    featuredImage: './images/Image20230428204731.png',
    technologies: ['html', 'CSS', 'JavaScript'],
    url: ' <a href ="https://eerapheal.github.io/capstone-project1/">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
    url1: ' <a href ="https://github.com/eerapheal/capstone-project1">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
  },
];

for (let index = 0; index < projects.length; index += 1) {
  const project = projects[index];
  const divProject = document.createElement('div');
  divProject.setAttribute('class', 'header-pro');
  divProject.style.backgroundImage = `linear-gradient(179.4deg, rgba(38, 38, 38, 0) 0.81%, rgba(38, 38, 38, 0.9) 84.03%), url(${project.featuredImage})`;
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
  btnSeeProject.appendChild(btnText);

  // Function to open the modal and populate its content
  function openModal(project) {
    const modal = document.getElementById('modalviw');
    const modalProjectName = document.getElementById('modal-project-name');
    const modalProjectDescription = document.getElementById(
      'modal-project-description',
    );
    const modalProjectTechnologies = document.getElementById(
      'modal-project-technologies',
    );
    const modalProjectLink = document.getElementById('modal-project-link');

    modalProjectName.textContent = project.name;
    modalProjectDescription.textContent = project.description;

    modalProjectTechnologies.innerHTML = '';
    project.technologies.forEach((tech) => {
      const liTech = document.createElement('li');
      liTech.textContent = tech;
      modalProjectTechnologies.appendChild(liTech);
    });

    modalProjectLink.innerHTML = `<div class="source-button1">${project.url}</div> <div class="source-button1">${project.url1}</div>`;

    // modalProjectImage = project.featuredImage;

    const modalContent = document.getElementById('modalviw');
    modalContent.style.backgroundImage = `linear-gradient(179.4deg, rgba(38, 38, 38, 0) 0.81%, rgba(38, 38, 38, 0.9) 84.03%), url(${project.featuredImage})`;
    modalContent.style.backgroundSize = 'cover';
    modal.style.display = 'block';
    // Close the modal when the user clicks on the close button
    const closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Close the modal when the user clicks outside the modal content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  divProject.appendChild(btnSeeProject);

  btnSeeProject.addEventListener('click', () => {
    openModal(project);
  });

  divProject.appendChild(btnSeeProject);

  const htmlPage = document.getElementById('htmlPage');
  htmlPage.appendChild(divProject);
}
