const { Category } = require('../models');

const categoryData = [
    {
        name: 'Cardio'
    },
    {
        name: 'Arms'
    },
    {
        name: 'Legs'
    },
    {
        name: 'Core'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;