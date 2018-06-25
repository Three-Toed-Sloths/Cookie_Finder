module.exports = function(sequelize, DataTypes) {
    const Store = sequelize.define("Store", {
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len: [1,30]
                }
            },
        description: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,250]
            }
        },
        image: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate:{
                isNumeric: true,
            }
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true,
            }
        }
    });
    return Store;
}