const User = require('../models/User');
const bycrypt = require('bcryptjs');
const shoppingList = require('../models/ShoppingList');


exports.register = async(req, res) => {

    try {
        res.render('register');
    } catch(error) {

        res.status(500).send({ message: error.message || 'Something went wrong' });
    }


}

exports.login = async(req, res) => {

    try {

        res.render('login');
    } catch (error) {

        res.status(500).send({ message: error.message || 'Something went wrong.' });
    }





}


exports.landing = async(req, res) => {
    try {

        res.render('landing');

    } catch (error) {

        res.status(500).send({ message: error.message || 'Something went wrong' });
    }



}

exports.shoppingList = async (req, res) => {

    try {

        res.render('shopping-list');
    } catch (error) {

        res.status(500).send({ message: error.message || 'Something went wrong'});
    }

}



























// const saltRounds = 10;
// /**
//  * GET/POST /register
//  * Register.
//  */
// exports.register = async (req, res) => {

//     try {

//         res.redirect('/register');

//         const { userName, password, email } = req.body;
//         const hashedPassword = await bycrypt.hash(password, saltRounds);
//         const user = new User({ userName, password: hashedPassword, email});
//         await user.save();
//         res.status(201).send({ message: 'User created successfully.' });
//     } catch (error) {
//         res.status(500).send({ message: 'Registration unsuccessful. Please try again.', error });

//     }
// };


// /**
//  * POST /login
//  */
// exports.login = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(404).send({ message: "User not found" });
//         }
//         const match = await bycryps.compare(password, user.password);
//         if (!match) {
//             return res.status(401).send({ message: "Invalid password." });
//         }
//         req.session.userId = user._id;
//         res.send({ message: 'Login successful.', userId: user._id });

//         res.redirect('/home');
//     } catch(error) {
//         res.status(500).render('error', { title: 'Error', message: 'Login unsuccessful. Please try again.', error });
//     }
// };

// /**
//  * POST /logout
//  *
// */
// exports.logout = async (req, res) => {

//     req.session.destroy(err => {
//         if (err) {
//             return res.redirect('/login');
//         }

//         res.redirect('/landing');
//     });
// };