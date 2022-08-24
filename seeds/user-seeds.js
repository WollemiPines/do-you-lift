const { User, UserWorkouts} = require('../models');

const userData = [
    {
        name: 'Bob',
        email: 'bob@lebuilders.com',
        password: 'abcd1234',
        bodyType: 'M',
        age: 42,
        height: 1.8,
        weight: 100,
        bmi: 30.86, 
        goal: 'mildWeightLoss',
        workout_id: 1,
        reps:20
    },
    {
        name: 'Sarah',
        email: 'sarah@gmail.com',
        password: 'abcd1234',
        bodyType: 'F',
        age: 23,
        height: 1.6,
        weight: 60,
        bmi: 23.43,
        goal: 'balance',
        workout_id: [2, 3],
        reps:[20,30]
    },
    {
        name: 'Janice',
        email: 'janice@hotmail.com',
        password: 'password12345',
        bodyType: 'F',
        age: 58,
        height: 1.45,
        weight: 50,
        bmi: 23.78,
        goal: 'balance',
        workout_id: 3,
        reps: 7
    },
    {
        name: 'Mittens',
        email: 'gymcat@gym.com',
        password: 'catsrule12345',
        bodyType: 'F',
        age: 4,
        height: 0.3,
        weight: 2,
        bmi: 22.22,
        goal: 'balance',
        workout_id: [1, 2, 3, 4],
        reps:[10,20,10,5]
    }
]

// Seed the userdata
const seeduserData = async () => {
    for (const key in userData) {
        await User.create(userData[key])
            .then((data) => {
                const {workout_id, reps } = userData[key];
                if (workout_id.length) {
                    // Function to map both workout_id and reps arrays. 
                    // Only needed for the seed function as the user will be adding these individually so no need for the loop.
                    const workoutIdArr = (workout_id, reps) => workout_id.map((workout, index) => {
                        return {
                            user_id: data.id,
                            workout_id: workout,
                            reps: reps[index]
                        };
                    })
                    return UserWorkouts.bulkCreate(workoutIdArr(workout_id, reps))
                } else UserWorkouts.create({ user_id: data.id, workout_id: workout_id, reps: reps })
            })
    }
};


module.exports = seeduserData;

