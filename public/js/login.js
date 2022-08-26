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
  
    if (name && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/workouts');
      } else {
        signUpErr.classList.remove('hidden');
      }
    }
  };

  const showSignUp = async (event) => {
    event.preventDefault();
    let sign = document.getElementById("signup-container");
    let log = document.getElementById("login-container")
    sign.classList.remove("hidden");
    log.classList.add("hidden");
  }

  const showLogIn = async (event) => {
    event.preventDefault();

    let sign = document.getElementById("signup-container");
    let log = document.getElementById("login-container")
    sign.classList.add("hidden");
    log.classList.remove("hidden");
  }

  const hideSignUp = async () => {
    let sign = document.getElementById("signup-container");
    sign.classList.add("hidden");
  }
  
  document
    .querySelector('.login-btn')
    .addEventListener('click', loginFormHandler);
  
  document
    .querySelector('.signup-form')
    .addEventListener('click', signupFormHandler);

  document
    .querySelector('.loginBtn')
    .addEventListener('click', showLogIn);

  document
    .querySelector('.signUpBtn')
    .addEventListener('click', showSignUp);

    hideSignUp();