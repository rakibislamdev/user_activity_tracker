const User = require('../models/User');

// ------------- Index all users ------------------ \\
const index = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            console.error(error); // Log the error for debugging
            res.status(500).json({ message: 'An error occurred!' });
        });
};

// ------------- Show single user ------------------ \\
const showUser = (req, res, next) => {
    let user_id = req.body.user_id;
    User.findById(user_id)
        .then(response => {
            res.json({ response });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'An error occurred!' });
        });
};

// ------------- Add new user ------------------ \\
const store = (req, res, next) => {
    let user = new User({
        user_id: req.body.user_id,
        name: req.body.name,
        email: req.body.email,
        designation: req.body.designation,
    });
    user.save()
        .then(response => {
            res.json({ message: 'User Added Successfully!' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'An error occurred!' });
        });
};


module.exports = {
    index,
    store,
    showUser
};
