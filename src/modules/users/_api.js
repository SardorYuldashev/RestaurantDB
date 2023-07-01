const { isLoggedIn, hasRole } = require('../../shared/auth');
const { getUsers, getUser, loginUser, postUser, patchUser, deleteUser } = require('./_controllers');

const router = require('express').Router();

const mPostUser = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mGetUsers = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mGetUser = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mPatchUser = [isLoggedIn, hasRole(['super_admin', 'admin'])];
const mDeleteUser = [isLoggedIn, hasRole(['super_admin', 'admin'])];

router.post('/users/login', loginUser);
router.post('/users', mPostUser, postUser);
router.get('/users', mGetUsers, getUsers);
router.get('/users/:id', mGetUser, getUser);
router.patch('/users/:id', mPatchUser, patchUser);
router.delete('/users/:id', mDeleteUser, deleteUser);

module.exports = router;