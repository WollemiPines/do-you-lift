const Category = require('./category');
const Workout = require('./workout');
const User = require('./User');
const WorkoutCategories = require('./workoutCategories');
const UserWorkouts = require('./userWorkouts');

Workout.belongsToMany(Category, {
    through: WorkoutCategories
})
Category.belongsToMany(Workout, {
    through: WorkoutCategories
})

Workout.belongsToMany(User, {
    through: UserWorkouts,
    as: 'user_id',
    foreignKey: 'workout_id'
})

User.belongsToMany(Workout, {
    through: UserWorkouts,
    as: 'workout_id',
    foreignKey: 'user_id'
})

module.exports = {
    Category,
    Workout,
    User,
    WorkoutCategories,
    UserWorkouts
};



// const Category = require('./category');
// const Workout = require('./workout');
// const User = require('./User');
// const WorkoutCategories = require('./workoutCategories');
// const UserWorkouts = require('./userWorkouts');

// Workout.belongsToMany(Category, {
//     through: WorkoutCategories
// })
// Category.belongsToMany(Workout, {
//     through: WorkoutCategories
// })

// Workout.belongsToMany(User, {
//     through: UserWorkouts
// })

// User.belongsToMany(Workout, {
//     through: UserWorkouts
// })

// module.exports = {
//     Category,
//     Workout,
//     User,
//     WorkoutCategories,
//     UserWorkouts
// };