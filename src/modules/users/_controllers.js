const express = require('express');
const listUsers = require('./list-users');
const showUser = require('./show-user');
const login = require('./loginUser');
const httpValidator = require('../../shared/http-validator');
const { showUserSchema, getUsersSchema, loginUserSchema } = require('./_schemas');

/**
 * @param {express.Request} req 
 * @param {express.Response} res 
 * @param {express.NextFunction} next 
 */
const loginUser = async (req, res, next) => {
  try {
    httpValidator({body: req.body}, loginUserSchema);

    const result = await login(req.body);

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
const getUsers = async (req, res, next) => {
  try {
    httpValidator({ query: req.query }, getUsersSchema);

    const result = await listUsers(req.query);

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
const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await showUser({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  };
};

module.exports = {
  loginUser,
  getUsers,
  getUser
};