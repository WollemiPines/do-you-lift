
   

    let workoutReps = document.querySelector('#workout-0').innerHTML;

    console.log(workoutReps);

    const workoutIn = document.querySelector('.workout-in');
    const workoutDec = document.querySelector('.workout-dec');


    workoutIn.addEventListener('click', function(){
        workoutReps = parseInt(workoutReps) +1;

        console.log('btn clicked')
        console.log(workoutReps);
    });




