const db = require('../../db');

const addCategory = async ({ name }) => {
  const result = await db('categories')
    .insert({
      name,
      is_deleted: false
    })
    .returning('*');

  return { new_category: result[0] };
};

module.exports = addCategory;