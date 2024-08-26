const { Pokemon } = require('../dataBase');

const addPokemon = async (req, res) => {
  try {
    const { pokemonName, pokemontype,pokemonPower} = req.body;
    
    const existingPokemon = await Pokemon.findOne({
        where: {
            pokemonName: pokemonName
        }
    });

    if (existingPokemon) {
      return res.status(400).json({ error: 'Pokemon already exists' });
    }

    const newPokemon = await Pokemon.create({ pokemonName, pokemontype,pokemonPower });
    res.status(201).json({ message:'Pokemon created',newPokemon});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    addPokemon
};