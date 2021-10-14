'use strict';

var utils = require('../utils/writer.js');
var Categories = require('../service/CategoriesService');

module.exports.addCategory = function addCategory (req, res, next) {
  var name = req.swagger.params['name'].value;
  Categories.addCategory(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCategory = function deleteCategory (req, res, next) {
  var category_id = req.swagger.params['category_id'].value;
  Categories.deleteCategory(category_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCategory = function editCategory (req, res, next) {
  var name = req.swagger.params['name'].value;
  var category_id = req.swagger.params['category_id'].value;
  Categories.editCategory(name,category_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCategory = function getCategory (req, res, next) {
  Categories.getCategory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
