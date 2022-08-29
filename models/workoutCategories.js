const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Category = require('./category');


class WorkoutCategories extends Model { };

WorkoutCategories.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Workout,
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Category,
                key: 'id'
            }
        }
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workoutCategories',
    }
);

module.exports = WorkoutCategories;