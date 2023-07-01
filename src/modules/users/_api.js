const { isLoggedIn, hasRole } = require('../../shared/auth');
const { getUsers, getUser, loginUser, postUser, patchUser } = require('./_controllers');

const router = require('express').Router();

const accessСheck = [isLoggedIn, hasRole(['super_admin', 'admin'])];

router.post('/users/login', loginUser);
router.post('/users', accessСheck, postUser);
router.get('/users', accessСheck, getUsers);
router.get('/users/:id', accessСheck, getUser);
router.patch('/users/:id', accessСheck, patchUser);

module.exports = router;