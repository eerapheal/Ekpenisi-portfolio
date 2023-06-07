const projects = [
    {
      projectID: 1,
      name: 'To-Do list Applicaion',
      description: 'Through the website, users can store data locally and perform editing, updating, and deletion of the stored data directly from the webpage.',
      featuredImageBig: 'images/to-do-list.jpg',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: 'https://flourishing-begonia-645284.netlify.app/',
    },
    {
      projectID: 2,
      name: 'Mathematician Application',
      description: 'The Math App project is designed as a single-page application, enabling users to perform various mathematical calculations effortlessly.',
      featuredImage: 'images/math-magic.png',
      technologies: ['html', 'CSS', 'React.js'],
      url: 'https://capable-kelpie-051989.netlify.app/',
    },
    {
      projectID: 3,
      name: 'Health Conference web site',
      description: 'This app built with HTML, CSS, JS for a conference site.',
      featuredImage: 'images/food-proj.png',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: 'https://peppy-pastelito-765b3e.netlify.app/',
    }, 
    {
      projectID: 4,
      name: 'Shopping-list Application',
      description: 'Task creation, reading, updating, and deletion are available to users, as well as the ability to view and delete items.',
      featuredImage: 'images/shopping.png',
      technologies: ['html','AngularJS', 'JavaScripts'],
      url: 'https://superlative-tarsier-283b51.netlify.app/',
    },
    {
      projectID: 5,
      name: ' Car renting App',
      description: 'This is a Full-stack application.it displays cars where the user can log in or create an account, sign in, and select cars whose items are being saved in the database',
      featuredImage: 'images/car-app.png',
      technologies: ['html', 'React', 'React-Rails'],
      url: 'https://deploy-preview-20--jocular-kheer-33ba60.netlify.app/',
    },
    {
      projectID: 6,
      name: 'Space traveller hub',
      description: 'a web app thats used to store different components of the app and also display rockets when put into use..',
      featuredImage: 'images/space-pic.png',
      technologies: ['html', 'CSS', 'JavaScript'],
      url: 'https://splendid-kulfi-220214.netlify.app/',
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
  