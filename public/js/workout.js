// Event Listener Function
// Add workout to profile
// Increment Reps
// Decrement Reps
const newWorkoutSave = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute('data-id')) {
    const workout_id = parseInt(event.target.getAttribute('data-id'));
    const reps = parseInt(document.querySelector(`#reps-${workout_id}`).textContent);
    const response = await fetch(`/api/workout/asign`, {
      method: 'POST',
      body: JSON.stringify({ workout_id, reps }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      event.target.textContent = 'Updated'
    } else {
      event.target.textContent = 'Error'
    }
  };
  // Increment Reps button
  if (event.target.hasAttribute('data-in')) {
    const elementID = parseInt(event.target.getAttribute('data-in'));
    const reps = document.querySelector(`#reps-${elementID}`);
    reps.textContent++;
  };

  // Decrement Reps button
  if (event.target.hasAttribute('data-dec')) {
    const elementID = parseInt(event.target.getAttribute('data-dec'));
    const reps = document.querySelector(`#reps-${elementID}`);
    reps.textContent--;
  };
};

document.querySelector('.user-workouts').addEventListener('click', newWorkoutSave);

