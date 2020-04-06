'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [{
      first_name: "Mubbi",
      last_name: "Qureshi",
      city: "Karachi",
      address: "Flat 112",
      country: "Pakistan",
      zip_code: "75900",
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      first_name: "Mubbi",
      last_name: "Qureshi",
      city: "Karachi",
      address: "House 001",
      country: "Pakistan",
      zip_code: "745900",
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
