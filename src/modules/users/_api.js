const { getUsers, getUser, loginUser } = require('./_controllers');

const router = require('express').Router();

router.post('/users', loginUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;