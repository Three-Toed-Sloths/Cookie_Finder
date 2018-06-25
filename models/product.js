module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define("Products", {
        product_name: {
            type: DataTypes.STRING(200),
            allowNull: false,
            validate: {
                len: [1,200]
                }
            },
        price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        description: {
            type: DataTypes.STRING(250),
            allowNull: false,
            validate: {
                isAlpha: true,
                len: [1,250]
            }
        }
    });
    return Products;
}