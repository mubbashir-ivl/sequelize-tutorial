'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    buyerUserId: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    trackingNumber: DataTypes.STRING,
    shippingAddressId: DataTypes.INTEGER,
    billingAddressId: DataTypes.INTEGER
  }, {
    underscored: true
  });
  Order.associate = function(models) {
    // associations can be defined here

    // Shipping Address Association
    Order.belongsTo(models.Address, { as: 'shippingAddress', foreignKey: { name: 'shippingAddressId' } });
    // Billing Address Association
    Order.belongsTo(models.Address, { as: 'billingAddress', foreignKey: { name: 'billingAddressId' } });
  };
  return Order;
};