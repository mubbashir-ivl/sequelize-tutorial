const models = require('./models');
const Op = models.Sequelize.Op;

// Get Addresses
console.log('Addresses')
models.Address.findAll()
  .then(addresses => console.log(addresses))
  .catch(error => console.log("ERR: " + error));

// Get Orders
console.log('Orders')
models.Order.findAll()
  .then(orders => console.log(orders))
  .catch(error => console.log("ERR: " + error));
