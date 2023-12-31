const Joi = require('joi');

exports.postCategorySchema = {
  body: Joi.object({
    name: Joi.string().required().max(100)
  })
};

exports.editCategorySchema = {
  body: Joi.object({
    name: Joi.string().max(100)
  }),
  params: Joi.object({
    id: Joi.number().integer()
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

exports.getCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer()
  })
};

exports.deleteCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer()
  })
};