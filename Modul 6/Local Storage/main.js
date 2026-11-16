var myImage = document.querySelector('img');

myImage.onclick = function() {
  if (myImage.style.width === '18rem') {
    myImage.style.width = '40rem';
  } else {
    myImage.style.width = '18rem';
  }
};

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name:');

  if (myName !== null && myName.trim() !== '') {
    localStorage.setItem('name', myName);
    myHeading.textContent =
      'Selamat Datang di Portofolio Nadia, ' + myName;
  }
}

var storedName = localStorage.getItem('name');

if (storedName) {
  myHeading.textContent =
    'Selamat Datang di Portofolio Nadia, ' + storedName;
} else {
  setUserName();
}

myButton.addEventListener('click', function() {
  setUserName();
});