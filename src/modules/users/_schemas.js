const Joi = require("joi");

exports.loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required().max(15),
    password: Joi.string().required()
  })
}

exports.showUserSchema = {
  params: Joi.object({
    id: Joi.number().integer()
  })
};

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string(),
    role: Joi.string().valid('admin', 'super_admin', 'ofisant(ka)'),
    limit: Joi.number().integer(),
    offset: Joi.number().integer(),
    sort_by: Joi.string().valid('updated_at', 'created_at'),
    sort_order: Joi.string().valid('asc', 'desc')
  })
};