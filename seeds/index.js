const seedCategories = require('./category-seeds');
const seedWorkouts = require('./workout-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n-- DATABASE SYNCED--\n');
    await seedCategories();
    console.log('\n categories seeded \n');
    await seedWorkouts();
    console.log('\n Workouts Seeded \n');
    await seedUsers();
    console.log('\n users seeded\n');
    process.exit(0);
};

seedAll();