const { Workout } = require('../models');

const workoutData = [
    {
        name: 'Push Ups',
        reps: 10,
        category_id: 2//[2,4]
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

const seedWorkouts = () => Workout.bulkCreate(workoutData);

module.exports = seedWorkouts;