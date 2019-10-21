
const User = require('../models/User');

const usersCtrl = {};


usersCtrl.getUsers = async (req, res) => {

    const users = await User.find();
    res.json({
        message: 'usuarios obtenidos',
        users
    });
};

usersCtrl.createUser = async (req, res) => {
    const { userName } = req.body;
    const newUser = new User({ userName });

    await newUser.save();

    res.json({ message: 'users create' });
};

usersCtrl.deleteUser = async (req, res) => {

    const { id } = req.params;

    console.log(id);

    await User.findByIdAndDelete(id)

    res.json({ message: 'users delete' });
};


module.exports = usersCtrl;