module.exports = function(sequelize, DataTypes) {
    const Inventory = sequelize.define("Inventory", {
        stock: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            validate: {
                isNumeric: true
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
    },{
        freezeTableName: true
    });


    return Inventory;
}





// store_id: {
//     type: DataTypes.INTEGER(10),
//     allowNull: false,
//     validate: {
//         isNumeric: true
//     }
// },
// prod_id: {
//     type: DataTypes.INTEGER(10),
//     allowNull: false,
//     validate: {
//         isNumeric: true
//     }
// },



