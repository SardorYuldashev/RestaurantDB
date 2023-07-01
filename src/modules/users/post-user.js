const db = require('../../db');
const bcrypt = require('bcryptjs');

const registration = async ({ first_name, last_name, username, password, role }) => {
  const hashPassword = await bcrypt.hash(password, 10);

  const result = await db('users')
    .insert({
      first_name,
      last_name,
      username,
      password,
      role,
      is_deleted: false
    })
    .returning('*');

  return {new_user: result};
};

module.exports = registration;