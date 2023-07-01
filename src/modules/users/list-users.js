const db = require('../../db');

const listUsers = async ({ q, role, limit = 10, offset = 0, sort_by = 'updated_at', sort_order = 'desc' }) => {
  const dbQuery = db('users')
    .select(
      'id',
      'first_name',
      'last_name',
      'username',
      'role',
      'updated_at',
      'created_at'
    )
    .where({ is_deleted: false });

  if (role) {
    dbQuery.andWhere('role', role)
  };

  if (q) {
    dbQuery.andWhereILike('first_name', `%${q}%`).orWhereILike('last_name', `%${q}%`);
  };

  dbQuery.orderBy(sort_by, sort_order);

  dbQuery.limit(limit).offset(offset);

  const list = await dbQuery;

  return {
    list,
    pageInfo: {
      count: list.length,
      offset,
      limit
    }
  };
};

module.exports = listUsers;