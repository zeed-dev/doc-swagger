'use strict';

var utils = require('../utils/writer.js');
var Tags = require('../service/TagsService');

module.exports.addTag = function addTag (req, res, next) {
  var name = req.swagger.params['name'].value;
  Tags.addTag(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTag = function deleteTag (req, res, next) {
  var tag_id = req.swagger.params['tag_id'].value;
  Tags.deleteTag(tag_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editTag = function editTag (req, res, next) {
  var name = req.swagger.params['name'].value;
  Tags.editTag(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gettag = function gettag (req, res, next) {
  Tags.gettag()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
