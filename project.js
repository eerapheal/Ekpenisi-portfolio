const projects = [
    {
      projectID: 1,
      name: 'awesomebook Applicaion',
      description: 'Through the website, users can store data locally and perform editing, updating, and deletion of the stored data directly from the webpage.',
      featuredImageBig: 'images/firstprojectbig.png',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: 'https://eerapheal.github.io/awesomebook-ES6/',
    },
    {
      projectID: 2,
      name: 'Mathematician Application',
      description: 'The Math App project is designed as a single-page application, enabling users to perform various mathematical calculations effortlessly.',
      featuredImage: 'images/firstprojectbig.png',
      technologies: ['html', 'CSS', 'React.js'],
      url: 'https://glowing-naiad-81e0ba.netlify.app/',
    },
    {
      projectID: 3,
      name: 'Space Travel Hub',
      description: 'This app built with HTML, CSS, JS, React-Redux API for mission/rocket fetching and reservations/joining with user profile.',
      featuredImage: 'images/',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: 'https://space-travel-hub-by-ralph.netlify.app/',
    }, 
    {
      projectID: 4,
      name: 'to-do-list Application',
      description: 'Task creation, reading, updating, and deletion are available to users, as well as the ability to view and delete completed tasks.',
      featuredImage: 'images/firstprojectbig.png',
      technologies: ['html', 'bootstrap', 'React'],
      url: 'https://eerapheal.github.io/toDolist/dist/',
    },
    {
      projectID: 5,
      name: ' Covid-19 stats mobile App',
      description: 'Stay up-to-date on Covid-19 stats for all continents with this app, featuring easy search by continent name for quick access to the latest data.',
      featuredImage: 'images/firstprojectbig.png',
      technologies: ['html', 'bootstrap', 'React'],
      url: 'https://zingy-cactus-5d6941.netlify.app/',
    },
    {
      projectID: 6,
      name: 'Tech Speakers App',
      description: 'This project is designed with more features for online lectures and international tech professional events, using HTML, CSS, and JS.',
      featuredImage: 'images/Imgplaceholder1.png',
      technologies: ['html', 'CSS', 'JavaScript'],
      url: 'https://eerapheal.github.io/capstone-project1/',
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
  