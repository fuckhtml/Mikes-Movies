'use strict';

const initPage = () => {

  const setSubmitDisability = () => {
    if (isUsernameValid && isPasswordValid) {
      registerInput.disabled = false;
    } else {
      registerInput.disabled = true;
    }    
  }

  const checkUsername = () => {
    if (inputUsername.value != '') {
      let request = new XMLHttpRequest();

      request.addEventListener('readystatechange', function() {
        inputUsername.className = 'thinking';
        registerInput.disabled = true;

        if (request.status === 200 && request.readyState === 4) {
          if (request.responseText === 'okay') {
            inputUsername.className = 'approved';
            isPasswordValid = true;
          } else {
            inputUsername.className = 'denied';
            isUsernameValid = false;
            inputUsername.focus();
            inputUsername.select();
          }
        }

        setSubmitDisability();
      });

      request.open('GET', `checkName.php?username=${inputUsername.value}`);
      request.send(); 
    } else {
      inputUsername.className = 'denied';
      inputUsername = false;
      inputUsername.focus();
      inputUsername.select();
    }
  }

  const checkPassword = () => {
    if (inputPassword1.value === inputPassword2.value) {
      let request = new XMLHttpRequest();

      request.addEventListener('readystatechange', function() {
        inputPassword1.className = 'thinking';
        registerInput.disabled = true;

        if (request.status === 200 && request.readyState === 4) {
          if (request.responseText === 'okay') {
            inputPassword1.className = 'approved';
            isPasswordValid = true;
          } else {
            inputPassword1.className = 'denied';
            isPasswordValid = false;
            inputPassword1.focus();
            inputPassword1.select();
          }
        }

        setSubmitDisability();
      });

      request.open('GET', `checkPass.php?password=${inputPassword1.value}`);
      request.send();
    } else {
      inputPassword1.className = 'denied';
      isPasswordValid = false;
      inputPassword1.focus();
      inputPassword1.select();
    }
  }

  const scrollImages = () => {
    const coverBar = document.querySelector('#coverBar');
    const images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
      let left = images[i].style.left.substr(0, images[i].style.left.length - 2);

      if (left <= -86) {
        left = 532;
      }

      images[i].style.left = left - 1 + 'px';
    }
  }

  const registerUser = () => {
    registerInput.value = 'Processing...';
    let animation = setInterval(scrollImages, 50);

    let url = 'register.php?' + 
      'username=' + document.querySelector('#username').value + '&' + 
      'password=' + document.querySelector('#password1').value + '&' + 
      'firstname' + document.querySelector('#firstname').value + '&' + 
      'lastname' + document.querySelector('#lastname').value + '&' + 
      'email' + document.querySelector('#email').value + '&' + 
      'genre' + document.querySelector('#genre').value + '&' + 
      'movie'+ document.querySelector('#favorite').value + '&' + 
      'description' + document.querySelector('#tastes').value;

    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function() {
      console.log(request.readyState);
      if (request.readyState === 4 && request.status === 200) {
        console.log('clearing timeout...');
        clearTimeout(animation);
        console.log('updating screen...');
        document.querySelector('#wrapper').innerHTML = request.responseText;
      }
    });

    request.open('GET', url);
    request.send();

  }

  const inputUsername = document.querySelector('#username');
  inputUsername.addEventListener('blur', checkUsername);

  const inputPassword1 = document.querySelector('#password1');
  const inputPassword2 = document.querySelector('#password2');
  inputPassword2.addEventListener('blur', checkPassword);

  let isUsernameValid = false;
  let isPasswordValid = false;

  const registerInput = document.querySelector('#register');
  registerInput.addEventListener('click', registerUser);

}

window.addEventListener('load', initPage);