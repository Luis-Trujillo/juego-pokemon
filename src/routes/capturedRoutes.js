const express = require('express');
const routerCapture = express.Router();
const pokemonCaptured  = require('../controladores/capturadoControlador');

routerCapture.post('/capture',pokemonCaptured.capturarPokemon);

module.exports = enrutador;