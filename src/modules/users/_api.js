const { isLoggedIn, hasRole } = require('../../shared/auth');
const { getUsers, getUser, loginUser, postUser } = require('./_controllers');

const router = require('express').Router();

const mGetUsers = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mGetUser = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mPostUser = [isLoggedIn, hasRole(['super_admin', 'admin'])];

router.post('/users/login', loginUser);
router.post('/users', mPostUser, postUser);
router.get('/users', mGetUsers, getUsers);
router.get('/users/:id', mGetUser, getUser);

module.exports = router;