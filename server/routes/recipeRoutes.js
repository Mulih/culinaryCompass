const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');



/**
 * App Routes
*/

router.get('/home', recipeController.homepage);
router.get('/recipe/:id', recipeController.exploreRecipe );
router.get('/categories', recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.route('/search')
  .get(recipeController.searchRecipe)
  .post(recipeController.searchRecipe);

router.get('/explore-latest', recipeController.exploreLatest);
router.get('/show-random', recipeController.showRandom);
router.get('/submit-recipe', recipeController.submitRecipe);


module.exports = router;