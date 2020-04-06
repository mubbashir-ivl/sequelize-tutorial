'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      buyer_user_id: "test",
      created_by: "test",
      updated_by: "test",
      tracking_number: "123456789ABC",
      shipping_address_id: 1,
      billing_address_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
