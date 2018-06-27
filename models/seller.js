
module.exports = function(sequelize, DataTypes) {
    const Seller = sequelize.define("Seller", {
        seller_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len: [1,30]
                }
            },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [1,30]
            }
        },
        lat: {
            type:DataTypes.DECIMAL(10, 4),
            allowNull: false,
            validate: {
                len: [1,10],
                isDecimal: true
            }
        },
        lng: {
            type:DataTypes.DECIMAL(10, 4),
            allowNull: false,
            validate: {
                len: [1,10],
                isDecimal: true
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


