'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable('Orders', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        buyerUserId: {
          type: Sequelize.STRING(150),
          allowNull: false,
          field: 'buyer_user_id'
        },
        createdBy: {
          type: Sequelize.STRING(150),
          allowNull: false,
          field: 'created_by'
        },
        updatedBy: {
          type: Sequelize.STRING(150),
          allowNull: false,
          field: 'updated_by'
        },
        trackingNumber: {
          type: Sequelize.STRING(150),
          allowNull: false,
          field: 'tracking_number'
        },
        shippingAddress: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'shipping_address',
          references: {
            model: 'addresses',
            key: 'id'
          }
        },
        billingAddress: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: 'billing_address',
          references: {
            model: 'addresses',
            key: 'id'
          }
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
      }, { transaction });
      await queryInterface.addIndex('Orders', ['buyer_user_id'], { transaction });
      await queryInterface.addIndex('Orders', ['tracking_number'], { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};