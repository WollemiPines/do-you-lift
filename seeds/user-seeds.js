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
        workout_id: 1
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
        workout_id: [2,3]
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
        workout_id: 3
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
        workout_id: [1,2,3,4]
    }
]

const seeduserData = async () => {
    for (const key in userData) {
        await User.create(userData[key])
            .then((data) => {
                if (userData[key].workout_id.length) {
                    const workoutIdArr = userData[key].workout_id.map((workout) => {
                        return {
                            user_id: data.id,
                            workout_id: workout
                        };
                    })
                    return UserWorkouts.bulkCreate(workoutIdArr)
                } else UserWorkouts.create({ user_id: data.id, workout_id: userData[key].workout_id })
            })
    }
};
module.exports = seeduserData;

