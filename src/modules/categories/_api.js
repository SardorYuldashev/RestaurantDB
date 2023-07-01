const { isLoggedIn, hasRole } = require('../../shared/auth');
const { postCategory, getCategories, getCategory } = require('./_controllers');

const router = require('express').Router();

const mPostCategories = [isLoggedIn, hasRole(['super_admin', 'admin'])];

router.post('/categories', mPostCategories, postCategory);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);

module.exports = router;