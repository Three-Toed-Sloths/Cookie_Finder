
module.exports = function(sequelize, DataTypes) {
    const Seller = sequelize.define("Seller", {
        seller_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len: [1,30]
                }
            },
        createdAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
                allowNull: false,
                type: DataTypes.DATE,
                defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    });


    Seller.associate = function(models) {

        Seller.belongsToMany(models.Products, {
          through: models.Inventory
        });
      };

    return Seller;
}


