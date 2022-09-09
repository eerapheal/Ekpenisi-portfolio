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

function validate() {
  const text = document.getElementById('text1').value;
  const regx = /^([a-z0-9]+)@([a-z0-9-]+).([a-z]{2,20})(.[a-z]{2,8})?$/;

  if (regx.test(text)) {
    document.getElementById('ibitext').innerHTML = 'valid';
    document.getElementById('ibitext').style.visibility = 'visible';
    document.getElementById('ibitext').style.color = 'green';
  } else {
    document.getElementById('ibitext').innerHTML = 'invalid (lowercase only)';
    document.getElementById('ibitext').style.visibility = 'visible';
    document.getElementById('ibitext').style.color = 'red';
  }
}

// validate();
