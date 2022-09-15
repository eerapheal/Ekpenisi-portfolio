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

// Local storage 

const formName = document.getElementById('name1');
const email = document.getElementById('text1');
const formText = document.getElementById('msg');

function autoFill() {
  const storageObj = {
    name: localStorage.setItem('customerName', formName.value),
    email: localStorage.setItem('customerEmail', email.value),
    customerInfo: localStorage.setItem('customerInfo', formText.value),
  };
  return storageObj;
}

formName.value = localStorage.getItem('customerName');
email.value = localStorage.getItem('customerEmail');
formText.value = localStorage.getItem('customerInfo');

autoFill();

formName.onchange = autoFill;
email.onchange = autoFill;
formText.onchange = autoFill;