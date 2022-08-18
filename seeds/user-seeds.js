const { User } = require('../models');

// BMI = your weight divided by your height squared
const userData = [
    {
        name: 'Bob',
        email: 'bob@lebuilders.com',
        password: 'abcd1234',
        bodyType: 'M',
        age: 42,
        height: 1.8,
        weight: 100,
        bmi: 30.86, //Placeholder - calculate from the function 
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
        workout_id: 2
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
        age: 4,
        height: 0.3,
        weight: 2,
        bmi: 22.22,
        goal: 'balance',
        workout_id: 4
    }
]

const seeduserData = () => User.bulkCreate(userData);

module.exports = seeduserData;

