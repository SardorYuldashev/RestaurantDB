const bcrypt = require('bcryptjs');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      // id: 1,
      first_name: 'Sardor',
      last_name: 'Yuldashev',
      username: 'sardorbek',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 2,
      first_name: 'Imron',
      last_name: 'Abdusalimov',
      username: 'imron',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    },
    {
      // id: 3,
      first_name: 'Aziz',
      last_name: 'Nabiyev',
      username: 'aziz',
      password: bcrypt.hashSync('123456', 10),
      is_deleted: false
    }
  ]);
};
