const express = require('express');
const httpValidator = require('../../shared/http-validator');
const {
  postCategorySchema,
  getCategoriesSchema,
  getCategorySchema, 
  deleteCategorySchema} = require('./_schemas');
const addCategory = require('./add-category');
const listCategories = require('./list-categories');
const showCategory = require('./show-category');
const removecategory = require('./delete-category');

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const postCategory = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postCategorySchema);

    const result = await addCategory(req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const getCategories = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getCategoriesSchema);

    const result = await listCategories(req.query);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const getCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, getCategorySchema);

    const result = await showCategory(req.params);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const deleteCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteCategorySchema);

    const result = await removecategory(req.params);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

module.exports = {
  postCategory,
  getCategories,
  getCategory,
  deleteCategory
};