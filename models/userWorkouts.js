const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Workout = require('./workout');
const User = require('./User')
class UserWorkouts extends Model { };

UserWorkouts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workout_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Workout,
                key: 'id'
            },
            unique: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
            unique: false
        },
         reps: {
            type: DataTypes.INTEGER
         }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'UserWorkouts',
    }
);

module.exports = UserWorkouts;

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// const Workout = require('./workout');
// const User = require('./User')
// class UserWorkouts extends Model { };

// UserWorkouts.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         workout_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: Workout,
//                 key: 'id'
//             }
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: User,
//                 key: 'id'
//             }
//         },
//         reps: {
//             type: DataTypes.INTEGER
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'UserWorkouts',
//     }
// );

// module.exports = UserWorkouts;
