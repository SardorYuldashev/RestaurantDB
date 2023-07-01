const db = require('../../db');
const { NotFoundError } = require('../../shared/errors');

const showCategory = async ({id}) => {
  const category = await db('categories')
    .where({id})
    .select(
      'id',
      'name',
      'updated_at',
      'created_at'
    )
    .first();

  if(!category) {
    throw new NotFoundError('Kategoriya topilmadi');
  };

  return {
    data: category
  };
};

module.exports = showCategory;