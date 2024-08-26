const { User } = require('../dataBase');

const addUser = async (req, res) => {
  try {
    const { userID, email, userName, userAge} = req.body;
    
    const existingUser = await User.findByPk(userID);
    
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists ' });
    }

    const newUser = await User.create({ userID, email, userName, userAge });
    res.status(201).json({ message:'User crreated',newUser});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
    addUser
};