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
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelname: 'Workout'
    }
);

module.exports = Workout;