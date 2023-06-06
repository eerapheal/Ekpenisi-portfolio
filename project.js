const projects = [
    {
      projectID: 1,
      name: 'awesomebook Applicaion',
      description: 'Through the website, users can store data locally and perform editing, updating, and deletion of the stored data directly from the webpage.',
      featuredImage: './images/awsome-book.png',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: '<a href ="">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
      url1: '<a href ="">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
    },
    {
      projectID: 2,
      name: 'Mathematician Application',
      description: 'The Math App project is designed as a single-page application, enabling users to perform various mathematical calculations effortlessly.',
      featuredImage: 'images/math-app.png',
      technologies: ['html', 'CSS', 'React.js'],
      url: '<a href ="">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
      url1: '<a href ="">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
    },
    {
      projectID: 3,
      name: 'Space Travel Hub',
      description: 'This app built with HTML, CSS, JS, React-Redux API for mission/rocket fetching and reservations/joining with user profile.',
      featuredImage: 'images/Image20230419124343.png',
      technologies: ['html', 'CSS', 'JavaScripts'],
      url: '<a href ="">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
      url1: '<a href ="">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',
    }, 
    {
      projectID: 4,
      name: 'to-do-list Application',
      description: 'Task creation, reading, updating, and deletion are available to users, as well as the ability to view and delete completed tasks.',
      featuredImage: './images/todo-list.png',
      technologies: ['html', 'bootstrap', 'React'],
      url: '<a href ="">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
      url1: '<a href ="">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>', 
    },
    {
      projectID: 5,
      name: ' Covid-19 stats mobile App',
      description: 'Stay up-to-date on Covid-19 stats for all continents with this app, featuring easy search by continent name for quick access to the latest data.',
      featuredImage: './images/Image20230429085301.png',
      technologies: ['html', 'bootstrap', 'React'],
      url: '<a href ="">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
      url1: '<a href ="">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',               
    },
    {
      projectID: 6,
      name: 'Tech Speakers App',
      description: 'This project is designed with more features for online lectures and international tech professional events, using HTML, CSS, and JS.',
      featuredImage: './images/Image20230428204731.png',
      technologies: ['html', 'CSS', 'JavaScript'],
      url: ' <a href ="https://github.com/eerapheal/react-capstone">See Live<img src="./images/Iconlive.png" alt="Budget-ap"></a>',
      url1: ' <a href ="https://github.com/eerapheal/react-capstone">See Source<img src="./images/Vectorhub.png"alt="Budget-ap"></a>',     
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
    // const aLink = document.createElement('a');
    // aLink.setAttribute('href', project.url);
    // aLink.appendChild();
    btnSeeProject.appendChild(btnText);
  
    divProject.appendChild(btnSeeProject);


    btnSeeProject.addEventListener('click', () => {
      openModal(project);
    });
    
    divProject.appendChild(btnSeeProject);
    
    // ...
    
    // Function to open the modal and populate its content
    function openModal(project) {
      const modal = document.getElementById('modalviw');
      // const modalProjectImage = document.getElementById('modal-project-image');
      const modalProjectName = document.getElementById('modal-project-name');
      const modalProjectDescription = document.getElementById('modal-project-description');
      // const modalProjectTechnologies = document.getElementById('modal-project-technologies');
      const modalProjectLink = document.getElementById('modal-project-link');
    
      modalProjectName.textContent = project.name;
      modalProjectDescription.textContent = project.description;
      // modalProjectTechnologies.innerHTML = '';
      // project.technologies.forEach((tech) => {
      //   const liTech = document.createElement('li');
      //   liTech.textContent = tech;
      //   modalProjectTechnologies.appendChild(liTech);
      // });

      modalProjectLink.innerHTML = `<div class="source-div"><button class="source-button1">${project.url}<button></div> <div><button class="source-button1">${project.url1}<button></div>`;

      // modalProjectImage = project.featuredImage;
      
      const modalContent = document.getElementById('modalviw');
      modalContent.style.backgroundImage = `url(${project.featuredImage})`;

      modal.style.display = 'block';
      // Close the modal when the user clicks on the close button
      const closeBtn = document.getElementsByClassName('close')[0];
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    
      // Close the modal when the user clicks outside the modal content
      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal.style.display = 'none';
        }
      });
    }
    
    // ...
  
    const htmlPage = document.getElementById('htmlPage');
    htmlPage.appendChild(divProject);
  }
  


  // modal

// Add event listener to each "See project" button

