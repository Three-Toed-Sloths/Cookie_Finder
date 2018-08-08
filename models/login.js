module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("Login", {
        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1,100],
                is: ["^[a-z]+$",'i']
                }
            },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1,100],
                is: ["^[a-z]+$",'i']
            }
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1,100],
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                len: [6,255]
            }
        },
        seller_account: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return User;
}