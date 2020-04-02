# sequelize-tutorial
Learning Sequelize ORM

# Important Commands

npm init

npm install --save sequelize
npm install --save sequelize-cli

npm install --save pg pg-hstore

# Project Commands

sequelize model:generate --name Address --attributes firstName:string,lastName:string,city:string,address:string,country:string,zipcode:string

# Other Commands
sequelize --help

node_modules/.bin/sequelize init
OR
sequelize init

sequelize model:generate --name Product --attributes sku:string,name:string,price:double

sequelize db:migrate

sequelize db:migrate:undo

sequelize model:generate --name Category --attributes name:string,description:string

sequelize seed:generate --name Product

sequelize db:seed:all

# Sequelize CLI Commands

sequelize db:migrate                        Run pending migrations
sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
sequelize db:migrate:status                 List the status of all migrations
sequelize db:migrate:undo                   Reverts a migration
sequelize db:migrate:undo:all               Revert all migrations ran
sequelize db:seed                           Run specified seeder
sequelize db:seed:undo                      Deletes data from the database
sequelize db:seed:all                       Run every seeder
sequelize db:seed:undo:all                  Deletes data from the database
sequelize db:create                         Create database specified by configuration
sequelize db:drop                           Drop database specified by configuration
sequelize init                              Initializes project
sequelize init:config                       Initializes configuration
sequelize init:migrations                   Initializes migrations
sequelize init:models                       Initializes models
sequelize init:seeders                      Initializes seeders
sequelize migration:generate                Generates a new migration file                 [aliases: migration:create]
sequelize model:generate                    Generates a model and its migration                [aliases: model:create]
sequelize seed:generate                     Generates a new seed file
