const { getUsers, getUser } = require('./controllers');

const router = require('express').Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;