const { Workout, WorkoutCategories } = require('../models');

const workoutData = [
    {
        name: 'Push Ups',
        reps: 10,
        category_id: 2
    },
    {
        name: 'Sit Ups',
        reps: 20,
        category_id: 4
    },
    {
        name: '10 minute jog',
        reps: 1,
        category_id: 1
    },
    {
        name: 'Squats',
        reps: 20,
        category_id: 3
    },
    {
        name: 'Lunges',
        reps: 10,
        category_id: 3
    },
    {
        name: '50m Sprint',
        reps: 10,
        category_id: 3
    }
];

// const seedWorkouts = () => Workout.bulkCreate(workoutData);
const seedWorkouts = async () => {
    for (const key in workoutData) {
        await Workout.create(workoutData[key])
            .then((data) => {
                if (workoutData[key].category_id.length) {
                    const workoutIdArr = workoutData[key].category_id.map((category) => {
                        return {
                            workout_id: data.id,
                            category_id: category
                        };
                    })
                    return WorkoutCategories.bulkCreate(workoutIdArr)
                } else WorkoutCategories.create({ workout_id: data.id, category_id: workoutData[key].category_id })
            });
    };
};

module.exports = seedWorkouts;