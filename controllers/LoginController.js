const User = require('../models/UserModel');

// ----------- login user -------------- \\
const login = (req, res, next) => {
    // i want if user id is matching then give this user data
    let user_id = req.body.user_id;
    User.findOne({ user_id: user_id })
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'An error occurred!' });
        });

};

module.exports = {
    login
};