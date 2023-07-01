const db = require('../../db');
const { UnauthorizedError } = require('../../shared/errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../shared/config');

const login = async ({ username, password }) => {
  const existing = await db('users')
    .where({ username })
    .select('id', 'password', 'role')
    .first();

  if (!existing) {
    throw new UnauthorizedError('Username yoki password xato kiritilgan');
  };

  const passwordCompare = await bcrypt.compare(password, existing.password);

  if (!passwordCompare) {
    throw new UnauthorizedError('Username yoki password xato kiritilgan');
  };

  const token = jwt.sign(
    {
      id: existing.id,
      role: existing.role
    },
    config.jwt.secret,
    { expiresIn: '2d' }
  );

  return {
    token
  };
};

module.exports = login;