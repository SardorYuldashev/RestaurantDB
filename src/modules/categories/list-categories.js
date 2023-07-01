const db = require('../../db');

const listCategories = async ({ q, limit = 10, offset = 0, sort_by = 'updated_at', sort_order = 'desc' }) => {
  const dbQuery = db('categories')
    .select(
      'id',
      'name',
      'updated_at',
      'created_at'
    )
    .where({ is_deleted: false });

    if (q) {
      dbQuery.andWhereILike('name', `%${q}%`);
    };

  const total = await dbQuery.clone().count().groupBy('id');

  dbQuery.orderBy(sort_by, sort_order);

  dbQuery.limit(limit).offset(offset);

  const list = await dbQuery;

  return {
    list,
    pageInfo: {
      total: total.length,
      offset,
      limit
    }
  };
};

module.exports = listCategories;