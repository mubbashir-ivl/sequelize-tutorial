'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {
    underscored: true
  });
  Address.associate = function(models) {
    // associations can be defined here
    
    // Shipping Address Association
    Address.hasOne(models.Order, {as: 'shippingAddress', foreignKey : 'shipping_address_id'});
    // Billing Address Association
    Address.hasOne(models.Order, {as: 'billingAddress', foreignKey : 'billing_address_id'});
  };
  return Address;
};