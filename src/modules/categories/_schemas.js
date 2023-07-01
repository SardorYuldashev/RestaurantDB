const Joi = require('joi');

exports.postCategorySchema = {
  body: Joi.object({
    name: Joi.string().required().max(100)
  })
};

exports.getCategoriesSchema = {
  query: Joi.object({
    q: Joi.string(),
    limit: Joi.number().integer(),
    offset: Joi.number().integer(),
    sort_by: Joi.string().valid('updated_at', 'created_at'),
    sort_order: Joi.string().valid('asc', 'desc')
  })
};