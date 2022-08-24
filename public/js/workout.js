
    const newWorkoutSave = async (event) => {
        event.preventDefault();

        console.log("working");

        if (event.target.hasAttribute('data-id')) {
            const id = event.target.getAttribute('data-id');
            const name = document.querySelector('.workout-name');
            const reps = document.querySelector('.workout-reps');
        const response = await fetch(`/api/workout/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id, name, reps }),
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

    document
    .querySelector('#workout-save')
    .addEventListener('click', newWorkoutSave);
  