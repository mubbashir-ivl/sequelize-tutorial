'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    trackingNumber: DataTypes.STRING,
    shippingAddress: DataTypes.INTEGER,
    billingAddress: DataTypes.INTEGER
  }, {
    underscored: true
  });
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Address, {as: 'shippingAddress'});
    Order.belongsTo(models.Address, {as: 'billingAddress'});
  };
  return Order;
};