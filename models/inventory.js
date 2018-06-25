module.exports = function(sequelize, DataTypes) {
    const Inventory = sequelize.define("Inventory", {
        store_id: {
            type: DataTypes.INTEGER(1000),
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        prod_id: {
            type: DataTypes.INTEGER(1000),
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        stock_quantity: {
            type: DataTypes.INTEGER(1000),
            allowNull: false,
            validate: {
                isNumeric: true
            }
        }
    });
    return Inventory;
}