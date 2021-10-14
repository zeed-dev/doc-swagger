'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.addProduct = function addProduct (req, res, next) {
  var name = req.swagger.params['name'].value;
  var description = req.swagger.params['description'].value;
  var price = req.swagger.params['price'].value;
  var image = req.swagger.params['image'].value;
  var category = req.swagger.params['category'].value;
  var tags = req.swagger.params['tags'].value;
  Product.addProduct(name,description,price,image,category,tags)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProduct = function deleteProduct (req, res, next) {
  var product_id = req.swagger.params['product_id'].value;
  Product.deleteProduct(product_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editProduct = function editProduct (req, res, next) {
  var name = req.swagger.params['name'].value;
  var description = req.swagger.params['description'].value;
  var price = req.swagger.params['price'].value;
  var image = req.swagger.params['image'].value;
  var category = req.swagger.params['category'].value;
  var tags = req.swagger.params['tags'].value;
  var product_id = req.swagger.params['product_id'].value;
  Product.editProduct(name,description,price,image,category,tags,product_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProduct = function getProduct (req, res, next) {
  Product.getProduct()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
