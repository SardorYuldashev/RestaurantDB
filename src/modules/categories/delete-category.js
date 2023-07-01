const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const removeCategory = async ({ id }) => {
  const existing = await db('categories').where({ id }).first();

  if (!existing) {
    throw new NotFoundError('Kategoriya topilmadi');
  };

  const deleted = await db('categories')
    .where({ id })
    .update({ is_deleted: true })
    .returning(['id', 'name']);

  return {
    deleted: deleted[0]
  };
};

module.exports = removeCategory;