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
    through: UserWorkouts
})

User.belongsToMany(Workout, {
    through: UserWorkouts
})

module.exports = {
    Category,
    Workout,
    User,
    WorkoutCategories,
    UserWorkouts
};