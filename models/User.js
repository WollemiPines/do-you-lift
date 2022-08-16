const { DataTypes } = require('sequelize/types');
const sequelize = require('../config/connection');
const Workout = require('./Workout');

class User extends Model { }

User.init(
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
            validate: {
                isAlpha: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { isIn: [['M', 'F', 'O']] }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        weight: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        bmi: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        goal: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [['balance', 'mildWeightLoss', 'mildWeightGain', 'heavyWeightLoss', 'heavyWeightGain']]
            }
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'workout',
                key: 'id'
            }
        }
    },

    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelname: 'user'
    }
);

module.exports = User;


// models
// user
// -id
// -name
// -email
// -password
// -data from fitness- bmi etc.
// -workouts selected