const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.landing);
router.get('/register', userController.register);
router.route('/login')
  .get(userController.login)
  .post(userController.login);





router.route('/shopping-list')
  .get(userController.shoppingList)
  .post(userController.shoppingList);



module.exports = router;