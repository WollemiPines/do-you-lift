
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

      
    // const workoutName = document.querySelector('.workout-name').value;
    // const workoutReps = document.querySelector('.workout-reps').value;

