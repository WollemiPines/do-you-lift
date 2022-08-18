const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class WorkoutCategories extends Model { };

WorkoutCategories.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Workout',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'workoutCategories',
    }
);

module.exports = WorkoutCategories;