const Joi = require("joi");

exports.loginUserSchema = {
  body: Joi.object({
    username: Joi.string().required().max(15),
    password: Joi.string().required()
  })
};

exports.postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().required().max(50),
    last_name: Joi.string().required().max(50),
    username: Joi.string().required().max(15),
    password: Joi.string().required(),
    role: Joi.string().required().valid('admin', 'super_admin', 'ofitsant(ka)'),
  })
};

exports.patchtUserSchema = {
  body: Joi.object({
    first_name: Joi.string().max(50),
    last_name: Joi.string().max(50),
    username: Joi.string().max(15),
    password: Joi.string(),
    role: Joi.string().valid('admin', 'super_admin', 'ofitsant(ka)'),
  }),
  params: Joi.object({
    id: Joi.number().integer()
  })
};

exports.showUserSchema = {
  params: Joi.object({
    id: Joi.number().integer()
  })
};

exports.getUsersSchema = {
  query: Joi.object({
    q: Joi.string(),
    role: Joi.string().valid('admin', 'super_admin', 'ofitsant(ka)'),
    limit: Joi.number().integer(),
    offset: Joi.number().integer(),
    sort_by: Joi.string().valid('updated_at', 'created_at'),
    sort_order: Joi.string().valid('asc', 'desc')
  })
};

exports.deleteUserSchema = {
  params: Joi.object({
    id: Joi.number().integer()
  })
};