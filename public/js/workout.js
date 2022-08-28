
// getting 404 not found on backend 

let workoutReps = document.querySelector('#workout-0').innerHTML;
let workoutID = document.querySelector('#workout-0').innerHTML;
let workoutNAME = document.querySelector('#workoutname-0').innerHTML;

const workoutIn = document.querySelector('.workout-in');
const workoutDec = document.querySelector('.workout-dec');


workoutIn.addEventListener('click', async function () {
  console.log('workoutIn pressed:')
  workoutReps = parseInt(workoutReps) + 1;
  await fetch(`/${(workoutID)}`, {
    method: 'PUT',
    body: JSON.stringify({
      workoutNAME,
      workoutReps
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(workoutReps, 'workoutreps');
});


const newWorkoutSave = async (event) => {
  console.log('#################### ')
  console.log('newWorkoutSave pressed:')
  console.log(event.target)
  console.log('#################### ')
  event.preventDefault();

  console.log("working");

  if (event.target.hasAttribute('data-id')) {
    const workout_id = parseInt(event.target.getAttribute('data-id'));
    const reps = parseInt(document.querySelector('.workout-reps').textContent);
    console.log(reps);
    const response = await fetch(`/api/workout/asign`, {
      method: 'POST',
      body: JSON.stringify({ workout_id, reps }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      console.log("worked");
      document.location.replace('/workouts');
    } else {
      alert(response.statusText);
    }
  }

}
// document.querySelector('#user-workouts').addEventListener('click'), 
document.querySelector('.user-workouts').addEventListener('click', newWorkoutSave);

