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

// pop-up window

// const modalInformation = {
//   heading1: 'Multi Post Stories',
//   title2: 'Keeping track of hundreds  of components website',
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
//   it 1960s with the releaLorem Ipsum is simply dummy text
//   of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
//   dummy text ever since the 1500s, when an unknown printer
//   took a galley of type and scrambled it 1960s with the releax map lapora verita.",
//   description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//   Lorem Ipsum has been the industry's standard dummy
//   text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
//   to make a type specimen book. It has survived not only
//   five centuries, but also the leap into electronic typesetting, remaining essent",
//   imageSrc: './images/todolist.png',
//   button1: 'See Live  <img src="./images/icon.png">',
//   button2: 'See Source <img src="./images/vector.png">',
//   li: 'html',
//   li2: 'Bootstrap',
//   li3: 'Ruby on rails',
// };

function validate() {

  var text =document.getElementById("text1").value;
  var regx = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/;
  
  if (regx.test(text)){
  document.getElementById("ibitext").innerHTML="valid";
  document.getElementById("ibitext").style.visibility="visible";
  document.getElementById("ibitext").style.color="green";
  }
  else {
  document.getElementById("ibitext").innerHTML="invalid (lowercase only)";
  document.getElementById("ibitext").style.visibility="visible";
  document.getElementById("ibitext").style.color="red";
  
  }
  }
  
  let popup = document.getElementById("popup");
  
  function openPop (){
  popup.classList.add("open-popup");
  }
  
  function closePopup () {
  popup.classList.remove("open-popup");
  }