
   // getting 404 not found on backend 

    let workoutReps = document.querySelector('#workout-0').innerHTML;
    let workoutID = document.querySelector('#workout-0').innerHTML;
    let workoutNAME = document.querySelector('#workoutname-0').innerHTML;

    const workoutIn = document.querySelector('.workout-in');
    const workoutDec = document.querySelector('.workout-dec');


    workoutIn.addEventListener('click', async function(){
        workoutReps = parseInt(workoutReps) +1;
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
        event.preventDefault();

        console.log("working");

        if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');
            const category_id = id;
            const name = document.querySelector('.workout-name');
            const reps = document.querySelector('.workout-reps');
        const response = await fetch(`/api/workout/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ category_id, name, reps }),
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

    document.querySelector('#workout-save').addEventListener('click', newWorkoutSave);
  
