const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
};

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
        bodyType: {
            type: DataTypes.STRING,
            validate: { isIn: [['M', 'F']] }
        },
        age: {
            type: DataTypes.INTEGER,
        },
        height: {
            type: DataTypes.DECIMAL,
        },
        weight: {
            type: DataTypes.DECIMAL,
        },
        bmi: {
            type: DataTypes.DECIMAL,
        },
        goal: {
            type: DataTypes.STRING,
            validate: {
                isIn: [['balance', 'mildWeightLoss', 'mildWeightGain', 'heavyWeightLoss', 'heavyWeightGain']]
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
    
        sequelize: sequelize,
        timestamps: true,
        freezeTableName: true,
        modelname: 'User',
    }
);

module.exports = User;

// const { Model, DataTypes } = require('sequelize');
// const bcrypt = require('bcrypt');
// const sequelize = require('../config/connection');

// class User extends Model {
//     checkPassword(loginPw) {
//         return bcrypt.compareSync(loginPw, this.password);
//     }
// };

// User.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//             validate: {
//                 isEmail: true
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [8],
//             }
//         },
//         bodyType: {
//             type: DataTypes.STRING,
//             validate: { isIn: [['M', 'F']] }
//         },
//         age: {
//             type: DataTypes.INTEGER,
//         },
//         height: {
//             type: DataTypes.DECIMAL,
//         },
//         weight: {
//             type: DataTypes.DECIMAL,
//         },
//         bmi: {
//             type: DataTypes.DECIMAL,
//         },
//         goal: {
//             type: DataTypes.STRING,
//             validate: {
//                 isIn: [['balance', 'mildWeightLoss', 'mildWeightGain', 'heavyWeightLoss', 'heavyWeightGain']]
//             }
//         }
//     },
//     {
//         hooks: {
//             beforeCreate: async (newUserData) => {
//                 newUserData.password = await bcrypt.hash(newUserData.password, 10);
//                 return newUserData;
//             },
//         },
//         sequelize,
//         timestamps: true,
//         freezeTableName: true,
//         modelname: 'User',
//     }
// );

// module.exports = User;