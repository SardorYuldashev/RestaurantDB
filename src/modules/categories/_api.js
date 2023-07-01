const { isLoggedIn, hasRole } = require('../../shared/auth');
const { postCategory, getCategories, getCategory, deleteCategory } = require('./_controllers');

const router = require('express').Router();

const mPostCategories = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mDeleteCategory = [isLoggedIn, hasRole(['super_admin', 'admin'])];

router.post('/categories', mPostCategories, postCategory);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.delete('/categories/:id', mDeleteCategory, deleteCategory);

module.exports = router;