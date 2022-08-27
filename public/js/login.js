const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log("sign in form was called")
    
  
    // Collect values from the login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const loginErr = document.querySelector('.loginErr');
  
    if (email && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the homepage
        document.location.replace('/profile');
      } else {
        loginErr.classList.remove('hidden');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();

    console.log("sign up form was called")
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const signUpErr = document.querySelector('.signUpErr');
    const passwordErr = document.querySelector('.passwordErr');
  
    if (name && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/workouts');
      }

      if(password.length < 8){
        passwordErr.classList.remove('hidden'); 
      }
      else {signUpErr.classList.remove('hidden');
            passwordErr.classList.add('hidden'); 
            alert(err); 
      }
    }
  };

  let renderlogin = async (event) => {
    event.preventDefault();

    console.log("render called")

    const response = await fetch('/login', {

    });

    if (response.ok){
      let sign = document.getElementById("signup-container");
      sign.classList.add("hidden");
      let log = document.getElementById("login-container")
      log.classList.remove("hidden"); 
    } else {
      alert(response.statusText)
    }
  }

  let renderSignUp = async (event) => {
    event.preventDefault();

    console.log("render called")

    const response = await fetch('/login', {

    });

    if (response.ok){
      let sign = document.getElementById("signup-container");
      sign.classList.remove("hidden");
      let log = document.getElementById("login-container");
      log.classList.add("hidden");
    } else {
      alert (response.statusText)
    }
  }

  const showSignUp = async (event) => {
    // event.preventDefault();
  
      let sign = document.getElementById("signup-container");
      sign.classList.remove("hidden");
      let log = document.getElementById("login-container");
      log.classList.add("hidden");
  };

  const showLogIn = async (event) => {
    // event.preventDefault();

      let sign = document.getElementById("signup-container");
      sign.classList.add("hidden");
      let log = document.getElementById("login-container")
      log.classList.remove("hidden"); 
  };

  document
    .querySelector('.login-btn')
    .addEventListener('click', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('click', signupFormHandler);
    
  document
    .querySelector('.loginBtn')
    .addEventListener('click', renderlogin);

  document
    .querySelector('.signUpBtn')
    .addEventListener('click', renderSignUp);

const formAuth = async () => {
  if(renderlogin = true){
    return showLogIn();
  } else if (renderSignUp = true) {
    return showSignUp();
  }
}

formAuth();







  

    
     
  
  