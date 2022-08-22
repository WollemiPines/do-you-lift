const newFormHandler = async (event) => {
    event.preventDefault();
  
    const height = document.querySelector('#user-height').value.trim();
    const weight = document.querySelector('#user-weight').value.trim();
    const gender = document.querySelector('#user-gender').value;
    const age = document.querySelector('#user-age').value.trim();
  
    if (height && weight && gender && age) {
      const response = await fetch(`/api/user`, {
        method: 'PUT',
        body: JSON.stringify({ height, weight, gender, age }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert('Failed to create project');
      }
    }
  };

//   TODO: add a GET fetch req for the users completed workouts
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/user');
      } else {
        alert('Failed to delete workout');
      }
    }
  };
  
  document
    .querySelector('.user-info')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.workout-list')
    .addEventListener('click', delButtonHandler);
  