const newFormHandler = async (event) => {
    event.preventDefault();
  
    const height = document.querySelector('#user-height').value.trim();
    const weight = document.querySelector('#user-weight').value.trim();
    const bodyType = document.querySelector('#user-gender').value;
    const age = document.querySelector('#user-age').value.trim();
    const goal = document.querySelector('#user-goal').value;
  
    if (height && weight && bodyType && age && goal) {
      const response = await fetch(`/api/user`, {
        method: 'PUT',
        body: JSON.stringify({ height, weight, bodyType, age, goal }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update user');
      }
    }
  };

//   TODO: add a GET fetch req for the users completed workouts
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      console.log(event)
      const id = event.target.getAttribute('data-id');
      console.log(id)

      // const user = 
  
      const response = await fetch(`/api/user/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete workout');
      }
    }
  };
  
  document
    .querySelector('.user-info')
    .addEventListener('click', newFormHandler);
  
  document
    .querySelector('.workout-list')
    .addEventListener('click', delButtonHandler);
  