const database = require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');
const axios = require('axios');
const apiKey = process.env.SPOONACULAR_API_KEY;


/**
 * GET /home
 * Home page.
 */
exports.homepage = async(req, res) => {

    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const thai = await Recipe.find({ 'category': 'Thai' }).limit(limitNumber);
        const american = await Recipe.find({ 'category': 'American' }).limit(limitNumber);
        const chinese = await Recipe.find({ 'category': 'Chinese' }).limit(limitNumber);

        const food = { latest, thai, american, chinese };


        res.render('index', { title: 'CulinaryCompass - Home', categories, food });

    } catch (error) {
        res.status(500).send({message: error.message || 'Something went wrong!'});
    }

}









/**
 * GET /categories
 * Categories.
*/
exports.exploreCategories = async(req, res) => {

    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);


        res.render('categories', { title: 'CulinaryCompass - Categories', categories });
    } catch (error) {
        res.status(500).send({message: error.message || 'Something went wrong!'});
    }
}


/**
 * GET /categories/:id
 * Categories By Id.
*/
exports.exploreCategoriesById = async(req, res) => {
    try {
        let categoryId = req.params.id;
        const limitNumber = 20;
        const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);
        res.render('categories', { title: 'CulinaryCompass - Categories', categoryById });
    } catch (error) {
        res.status(500).send({message: error.message || 'Something went wrong!'});
    }
}

/**
 * GET /recipe/:id
 * Recipe
*/
exports.exploreRecipe = async(req, res) => {

    try {
        let recipeId = req.params.id;
        const recipe = await Recipe.findById(recipeId);
        res.render('recipe', { title: 'CulinaryCompass - Recipe', recipe });
    } catch (error) {
        res.status(500).send({message: error.message || 'Something went wrong!'});
    }
}


/**
 * GET /search
 * Search
*/

/**
 * GET /search
 * Search
*/
exports.searchRecipe = async (req, res) => {
    try {
      const { ingredients } = req.query;
      const encodedIngredients = encodeURIComponent(ingredients);
      const apiUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${encodedIngredients}`;

      const response = await axios.get(apiUrl);
      const recipes = response.data.recipes;

      res.render('search', { title: 'Cooking Blog - Search', recipes });
    } catch (error) {
      res.status(500).send({ message: error.message || 'Something went wrong' });
    }
  };

/**
 * GET /explore-latest
 * Recipe
*/
exports.exploreLatest = async(req, res) => {

    try {
        const limitNumber = 20;
        const recipe = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        res.render('explore-latest', { title: 'CulinaryCompass - Explore Latest', recipe });
    } catch (error) {
        res.status(500).send({message: error.message || 'Something went wrong!'});
    }
}
/**
 * GET /show-random
 * Recipe
*/
exports.showRandom = async(req, res) => {

    try {
        let count = await Recipe.find().countDocuments();
        let random = Math.floor(Math.random() * count);
        let recipe = await Recipe.findOne().skip(random).exec();
        res.render('show-random', { title: 'CulinaryCompass - Random Recipe', recipe });
    } catch (error) {
        res.status(500).send({message: error.message || 'Something went wrong!'});
    }
}


/**
 * GET /submit-recipe
 * Submit Recipe
*/
exports.submitRecipe = async(req, res) => {
    res.render('submit-recipe', { title: 'CulinaryCompass - Submit Recipe' });

}
