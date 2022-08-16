const User = require('./User');
const Workout = require('./Workout');
const Category = require('./category');

Workout.belongsToMany(Category, {
    foreignKey: 'category_id'
})

Category.hasMany(Workout, {
    foreignKey: 'category_id'
})

Workout.belongsToMany(User, {
    foreignKey: 'workout_id'
})

User.hasMany(Workout, {
    foreignKey: 'workout_id'
})

module.exports = {
    Category,
    Workout,
    User
};