'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    country: DataTypes.STRING,
    zipcode: DataTypes.STRING
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
    Address.hasOne(models.Order, {as: 'shippingAddress', foreignKey : 'shipping_address'});
    Address.hasOne(models.Order, {as: 'billingAddress', foreignKey: 'billing_address'});
  };
  return Address;
};