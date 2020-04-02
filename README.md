# sequelize-tutorial
Learning Sequelize ORM

# Important Commands

npm init

npm install --save sequelize
npm install --save sequelize-cli

npm install --save pg pg-hstore


node_modules/.bin/sequelize init
OR
sequelize init

sequelize model:generate --name Product --attributes sku:string,name:string,price:double

sequelize db:migrate

sequelize db:migrate:undo

sequelize model:generate --name Category --attributes name:string,description:string

sequelize seed:generate --name Product

sequelize db:seed:all
