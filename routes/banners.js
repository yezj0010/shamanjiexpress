var express = require('express');
var bannerService = require('../public/javascripts/banners/bannerService');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  bannerService.querylist(req, res)
});

module.exports = router;
