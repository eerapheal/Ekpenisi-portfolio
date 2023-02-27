const projects = [
    {
      projectID: 1,
      name: 'awesomebook Applicaion',
      description: 'This website allows users to store data in local storage and the datas can be edited, updated and deleted as well from the webpage.',
      featuredImageBig: 'images/firstprojectbig.png',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: 'https://eerapheal.github.io/awesomebook-ES6/',
    },
    {
      projectID: 2,
      name: 'Mathematician Application',
      description: 'This is a Math App project That allows users to carry out calculation operations and it was as a single page aplication.',
      featuredImage: 'images/firstprojectbig.png',
      technologies: ['html', 'CSS', 'React.js'],
      url: 'https://glowing-naiad-81e0ba.netlify.app/',
    },
    {
      projectID: 3,
      name: 'To-do-list Application',
      description: 'Users can create a task, read tasks, update tasks, delete a task, check completed tasks and delete all checked tasks',
      featuredImage: 'images/firstprojectbig.png',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: 'https://eerapheal.github.io/toDolist/dist/',
    },
    {
      projectID: 4,
      name: 'Profesional Art Printing Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      featuredImage: 'images/firstprojectbig.png',
      technologies: ['html', 'bootstrap', 'Ruby'],
      url: 'https://example.com/project4',
    },
    {
      projectID: 5,
      name: 'Data Dashboard Healthcare',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      featuredImage: 'images/firstprojectbig.png',
      technologies: ['html', 'bootstrap', 'Ruby'],
      url: 'https://example.com/project5',
    },
    {
      projectID: 6,
      name: 'Website Protfolio Data',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
      featuredImage: 'images/Imgplaceholder1.png',
      technologies: ['html', 'bootstrap', 'Ruby'],
      url: 'https://example.com/project6',
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
  