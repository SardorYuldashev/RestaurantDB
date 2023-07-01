const { isLoggedIn, hasRole } = require('../../shared/auth');
const { getUsers, getUser, loginUser } = require('./_controllers');

const router = require('express').Router();

const mGetUsers = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mGetUser = [isLoggedIn, hasRole(['super_admin', 'admin'])];

router.post('/users', loginUser);
router.get('/users', mGetUsers, getUsers);
router.get('/users/:id', mGetUser, getUser);

module.exports = router;