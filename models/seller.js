
module.exports = function(sequelize, DataTypes) {
    const Seller = sequelize.define("Seller", {
        seller_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len: [1,30]
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
        //CHANGED TO STATE FOR TIME BEING
        state: {
            type: DataTypes.STRING(3),
            allowNull: false,
            validate: {
                len: [1,3]
            }
        },
        lat: {
            type:DataTypes.DECIMAL(10, 6),
            allowNull: false,
            validate: {
                len: [1,10],
                isDecimal: true
            }
        },
        lng: {
            type:DataTypes.DECIMAL(10, 6),
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


