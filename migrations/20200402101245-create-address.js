'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'first_name'
      },
      lastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'last_name'
      },
      city: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      address: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      country: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      zipCode: {
        type: Sequelize.STRING(6),
        allowNull: false,
        field: 'zip_code'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};