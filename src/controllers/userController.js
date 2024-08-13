const { User } = require('../dataBase');

const addUser = async (req, res) => {
  try {
    const { userCedula, email, name, age} = req.body;
    
    const usuarioExistente = await Usuario.findByPk(userCedula);
    
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    const newUser = await User.create({ userCedula, email, name, age });
    res.status(201).json({ message:'Usuario creado',newUser});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    addUser
};