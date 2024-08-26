require('dotenv').config();

const { Sequelize,DataTypes } = require('sequelize');
const userModel = require('../models/user');
const pokemonModel = require('../models/pokemon');
const capturedModel = require('../models/capturedPokemon');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
}
);
const User = userModel(sequelize, DataTypes);
const Pokemon = pokemonModel(sequelize, DataTypes);
const Captured = capturedModel(sequelize, DataTypes);

sequelize.authenticate()
.then(() => console.log('Connected to database .'))
.catch(err => console.error('could not connect to database:', err));

sequelize.sync({ alter: true, force: false })
.then(() => console.log('Sincronización completada.'))
.catch(err => console.error('Synchronization error:', err));

module.exports = {
    User,
    Pokemon,
    Captured,
    sequelize
};