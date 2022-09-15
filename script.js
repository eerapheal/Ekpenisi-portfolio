// hamburger menu to click and onclick dropdown menu items.

const hamburger = document.querySelector('.ambuger');
const navItem = document.querySelector('.nav-item');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navItem.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navItem.classList.remove('active');
}));

// pop-up window in my see project section done with two javascript method.

// function displayProjects() {
//   const div = document.getElementById('projects');
//   div.innerHTML = `
//   <section id="profesion" class="second-sec">
//   <div id ="my-recnt">
//   <h3 class="second-tittle">
//     My Recent Works
//   </h3>
//   <hr class="line2">
// </div>
// <div id="multi">
//   <img class="img-desk" width="327" height="237" src="./images/Img-Placeholder.png" alt="">
//   <img class="img-desk2" width="327" height="237" src="./images/Img-Placeholder.png" alt="">
//   <div class="post">
//   <h3 class="second-subtittle">
//     Multi-Post Stories
//   </h3>
//   <p class="second-p">
//     A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
//   </p>
//   <div onclick="appear()">
//     <ul class="list-btn">
//       <li class="css-btn">css</li>
//       <li class="html-btn">html</li>
//       <li class="boot-btn">bootsrap</li>
//       <li class="ruby-btn">ruby</li>
//     </ul>
//     <button class="btn-top" onclick="appear()" type="button">See projests</button>
//   </div>
// </div>
// </div>
// <div class="grid" onclick="appear()">
     
//       <div >
//         <div  class="header-pro grid-1">
//           <h4 class="pro">Profesional Art Printing Data</h4>
//           <p class="pro-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has
//           been the industry's standard</p>
//           <ul class="pro-ul ulnon">
//             <li class="pro-html">html</li>
//             <li class="pro-boot">bootsrap</li>
//             <li class="pro-rubby">Ruby</li>
//           </ul>
//           <button class="medium" type="button">See Project</button> 
//         </div>
//         <button class="pro-btn" type="button">See Project</button> 
//       </div>  
//       <div>
//         <div  class="header-pro grid-2">
//           <h4 class="pro">Profesional Art Printing Data</h4>
//           <p class="pro-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has
//           been the industry's standard</p>
//           <ul class="pro-ul">
//             <li class="pro-html">html</li>
//             <li class="pro-boot">bootsrap</li>
//             <li class="pro-rubby">Ruby</li>
//           </ul>
//         </div>
//         <button class="pro-btn" type="button">See Project</button> 
//       </div>  
//       <div>
//         <div  class="header-pro grid-3">
//           <h4 class="pro">Profesional Art Printing Data</h4>
//           <p class="pro-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has
//           been the industry's standard</p>
//           <ul class="pro-ul">
//             <li class="pro-html">html</li>
//             <li class="pro-boot">bootsrap</li>
//             <li class="pro-rubby">Ruby</li>
//           </ul>
//         </div>
//         <button class="pro-btn" type="button">See Project</button> 
//       </div>  
//       <div>
//         <div  class="header-pro grid-1">
//           <h4 class="pro">Profesional Art Printing Data</h4>
//           <p class="pro-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has
//           been the industry's standard</p>
//           <ul class="pro-ul">
//             <li class="pro-html">html</li>
//             <li class="pro-boot">bootsrap</li>
//             <li class="pro-rubby">Ruby</li>
//           </ul>
//         </div>
//         <button class="pro-btn" type="button">See Project</button> 
//       </div>  
//       <div>
//         <div  class="header-pro grid-2">
//           <h4 class="pro">Profesional Art Printing Data</h4>
//           <p class="pro-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has
//           been the industry's standard</p>
//           <ul class="pro-ul">
//             <li class="pro-html">html</li>
//             <li class="pro-boot">bootsrap</li>
//             <li class="pro-rubby">Ruby</li>
//           </ul>
//         </div>
//         <button class="pro-btn" type="button">See Project</button> 
//       </div>  
//       <div>
//         <div  class="header-pro grid-3">
//           <h4 class="pro">Profesional Art Printing Data</h4>
//           <p class="pro-p">A daily selection of privately personalized reads; no accounts or sign-ups required. has
//           been the industry's standard</p>
//           <ul class="pro-ul">
//             <li class="pro-html">html</li>
//             <li class="pro-boot">bootsrap</li>
//             <li class="pro-rubby">Ruby</li>
//           </ul>
//         </div>
//         <button class="pro-btn" type="button">See Project</button> 
//       </div>
//     </div>;
//     </section>`;
// }

// displayProjects();

// const modalInformation = {
//   heading1: 'Multi Post Stories',
//   title2: 'Keeping track of hundreds  of components website',
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
//   description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
//   imageSrc: '<img src="./images/SnapshootPortfolio.png">',
//   button1: 'See Live  <img src="./images/Icon-Export.png">',
//   button2: 'See Source <img src="./images/Vectorgit.png">',
//   li: 'html',
//   li2: 'Bootstrap',
//   li3: 'Ruby on rails',
// };

// const div1 = document.createElement('div');
// div1.className = 'modal';
// document.body.appendChild(div1);

// const div = document.createElement('div');
// div.className = 'modal-header';
// div1.appendChild(div);

// const div2 = document.createElement('div');
// div2.className = 'title';
// div.appendChild(div2);

// const h2 = document.createElement('h1');
// h2.className = 'modal-headm';
// h2.textContent = modalInformation.heading1;
// div2.appendChild(h2);

// const h20 = document.createElement('div');
// h20.className = 'modal-header22';
// div2.appendChild(h20);

// const h22 = document.createElement('h1');
// h22.className = 'modal-headd';
// h22.textContent = modalInformation.title2;
// h20.appendChild(h22);

// const span = document.createElement('button');
// span.className = 'close-button';
// span.innerHTML = '&times;';
// div.appendChild(span);

// const div3 = document.createElement('div');
// div3.className = 'modal-tags';
// div1.appendChild(div3);

// const ul = document.createElement('ul');
// ul.className = 'modal-social';
// div3.appendChild(ul);

// const li = document.createElement('li');
// li.className = 'tags1';
// li.innerHTML = modalInformation.li;
// ul.appendChild(li);

// const li2 = document.createElement('li');
// li2.className = 'tags2';
// li2.innerHTML = modalInformation.li2;
// ul.appendChild(li2);

// const li3 = document.createElement('li');
// li3.className = 'tags3';
// li3.innerHTML = modalInformation.li3;
// ul.appendChild(li3);

// const div4 = document.createElement('div');
// div4.className = 'modal-pic';
// div1.appendChild(div4);

// const div12 = document.createElement('div');
// div12.className = 'modal-body';
// div4.appendChild(div12);

// const p = document.createElement('p');
// p.className = 'modal-mobile';
// p.textContent = modalInformation.description2;
// div12.appendChild(p);

// const p2 = document.createElement('p');
// p2.className = 'modal-desktop';
// p2.textContent = modalInformation.description;
// div12.appendChild(p2);

// const div13 = document.createElement('div');
// div13.className = 'modal-button';
// div1.appendChild(div13);

// const button = document.createElement('button');
// button.className = 'live-button';
// button.innerHTML = modalInformation.button1;
// div13.appendChild(button);

// const button2 = document.createElement('button');
// button2.className = 'source-button';
// button2.innerHTML = modalInformation.button2;
// div13.appendChild(button2);

// const parentModal = document.querySelector('.modal');

// const closeModalButtons = document.querySelector('.close-button');
// function appear() {
//   parentModal.style.display = 'block';
// }

// appear();
// function disappear() {
//   parentModal.style.display = 'none';
// }

// closeModalButtons.addEventListener('click', disappear);

// function dissappearParent(e) {
//   if (e.target.className === '.modal') {
//     parentModal.style.display = 'none';
//   }
// }
// parentModal.addEventListener('click', dissappearParent);

// Form validation
function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.style.visibility = 'visible';
  setTimeout(() => {
    msg.style.visibility = 'hidden';
  }, 3000);
  msg.innerText = message;
  input.className = type ? '' : 'input-error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function showSuccess(input) {
  return showMessage(input, '', true);
}

function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check value
  if (!hasValue(input, requiredMsg)) {
    return false;
  }

  // Regegura

  const emailRegex = /^[a-z][a-z0-9_@.]*$/;

  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#contact-from-validation');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Your email address should be in lowercase';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValid = hasValue(form.elements.name, NAME_REQUIRED);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQUIRED, EMAIL_INVALID);
  if (nameValid && emailValid) {
    form.submit();
    form.elements.name.value = '';
    form.elements.email.value = '';
    form.elements.message.value = '';
  }
});