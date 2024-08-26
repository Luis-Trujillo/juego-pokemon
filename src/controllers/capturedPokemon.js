const { Captured } = require('../dataBase');

const capturePokemon  = async (req, res) => {
  try {
    const captured = await Captured.create(req.body);
    res.status(201).json({ message: 'Pokemon has been captured ',captured });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    capturePokemon
};