const User = require('../models/UserModel');

// Get all users
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        if (users.length === 0) {
            return res.status(400).json({ status: false, message: 'No users found!' });
        }
        res.json({ status: true, message: 'Your command successfully executed.', data: users });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred!', errors: error });
    }
};

// Show single user
const showUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ user_id: req.params.user_id });

        if (!user) {
            return res.status(400).json({ status: false, message: 'No user found!' });
        }
        res.json({ status: true, message: 'Your command successfully executed.', data: user});

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred!', errors: error });
    }
};

// Add new user
const createUser = async (req, res, next) => {
    try {
        const { user_id, name, email, designation } = req.body;
        const user = new User({ user_id, name, email, designation });

        await user.save();
        res.json({ status: true, message: 'User added successfully!', data: user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred!', errors: error });
    }
};

module.exports = {
    getAllUsers,
    createUser,
    showUser
};
