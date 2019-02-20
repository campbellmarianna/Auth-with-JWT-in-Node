// controllers/auth.js
const User = require("../models/user");
const jwt = require('jsonwebtoken');

module.exports = function(app) {
    // SIGN UP FORM
    app.get('/sign-up', (req, res) => {
        res.send('Hello World Form!')
    });

    app.post('/sign-up', (req, res) => {
        res.send("Hello World")
        console.log(req.body)
        const newUser = new User(req.body);

        newUser.save(function (err) {
            if (err) console.log(err);
            // saved!
            const token = jwt.sign({ _id: user._id }, 'shhhhhhared-secret');
            console.log(token)


        });
    });
}
