const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Workout extends Model { }

Workout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reps: {
            type: DataTypes.INTEGER,
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
        modelname: 'Workout'
    }
);

module.exports = Workout;