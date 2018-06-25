module.exports = function(sequelize, DataTypes) {
    const Seller = sequelize.define("Seller", {
        seller_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                len: [1,30]
                }
            }
    });
    return Seller;
}