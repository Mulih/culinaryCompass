const User = require('../models/User');
const ShoppingList = require('../models/ShoppingList');
const database = require('../models/database');
const Recipe = require('../models/Recipe');
const mongoose = require('mongoose');


/**
 * Registers a new user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} - Returns a promise that resolves when the user is registered successfully, or rejects with an error message if there is an error.
 */
exports.register = async(req, res) => {

    try {
        res.render('register');
    } catch(error) {

        res.status(500).send({ message: error.message || 'Something went wrong' });
    }


}

/**
 * Logs in a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} - Returns a promise that resolves when the user is logged in successfully, or rejects with an error message if there is an error.
 */
exports.login = async(req, res) => {

    try {

        if (req.recipeDB && req.recipeDB.users) {
            return res.redirect('/home');
        }

        res.render('login');

    } catch (error) {

        res.status(500).send({ message: error.message || 'Something went wrong.' });
    }
};



/**
 * Renders the landing page.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} - Returns a promise that resolves when the landing page is rendered successfully, or rejects with an error message if there is an error.
 */
exports.landing = async(req, res) => {
    try {

        res.render('landing');

    } catch (error) {

        res.status(500).send({ message: error.message || 'Something went wrong' });
    }



}

/**
 * Retrieves the shopping list for a user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise<void>} - Returns a promise that resolves when the shopping list is rendered successfully, or rejects with an error message if there is an error.
 */
exports.shoppingList = async (req, res) => {

    try {
        // if (!req.recipesDB.users) {
        //     return res.status(400).send({ message: 'User not authenticated' });
        // }

        const user = await User.findOne({ userName: 'dymmyUser1' });
        const userId = user._id;

        const shoppingList = await ShoppingList.findOne({ user: userId })
            .populate('items.recipe')
            .exec();


        res.render('shopping-list', { shoppingList });
    } catch (error) {
        res.status(500).send({ message: error.message || 'Something went wrong'});
    }
};




/**
 *
 * GET /logout
/**
 * Logout and destroy the session.
 */
exports.logout = async (req, res) => {
    try {
        await req.session.destroy();
        res.redirect('/landing');
    } catch (err) {
        res.status(500).send({ message: err.message || 'Something went wrong' });
    }
};
