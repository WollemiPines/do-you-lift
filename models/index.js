const Category = require('./category');
const Workout = require('./workout');
const User = require('./User');
const WorkoutCategories = require('./workoutCategories');
const UserWorkouts = require('./userWorkouts');

Workout.belongsToMany(Category, {
    through: 'workoutCategories'
})
Category.belongsToMany(Workout, {
    through: 'workoutCategories'
})

Category.hasMany(Workout, {
    foreignKey: 'category_id'
})

Workout.hasMany(Category, {
    foreignKey: 'workout_id'
})

Workout.belongsToMany(User, {
    through: 'userWorkouts'
})

User.hasMany(Workout, {
    foreignKey: 'workout_id'
})

module.exports = {
    Category,
    Workout,
    User,
    WorkoutCategories,
    UserWorkouts
};