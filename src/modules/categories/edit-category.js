const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const editCategory = async (params, body) => {
  const { id } = params;

  const existing = await db('categories').where({ id }).first();

  if (!existing) {
    throw new NotFoundError("Kategoriya topilmadi");
  };

  const { name } = body;

  const updated = await db('categories')
    .where({ id })
    .update({ name, updated_at: db.fn.now() })
    .returning(['id', 'name', 'updated_at', 'created_at']);

  return { updated: updated[0] };
};

module.exports = editCategory;