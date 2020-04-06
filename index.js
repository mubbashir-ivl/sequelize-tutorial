const models = require('./models');
const Op = models.Sequelize.Op;

// Get Addresses
// console.log('Addresses')
// models.Address.findAll()
//   .then(addresses => console.log(addresses))
//   .catch(error => console.log("ERR: " + error));

// Get Orders
console.log('Orders')
models.Order.findAll({
  include: [{
    model: models.Address,
    as: 'shippingAddress'
  },{
    model: models.Address,
    as: 'billingAddress'
  }],
  where: {
    id: 1
  }
})
  .then(order => console.log(order))
  .catch(error => console.log("ERR: " + error));
