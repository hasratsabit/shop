var express = require('express');
var router = express.Router();
var Product = require("../models/product")
var csrf = require("csurf");

var csrfProtection = csrf();
// Protect all routes
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, items) {
		res.render('shop/index', { title: 'Express', products: items });
	});
});

router.get("/user/signup", function(req, res, next) {
	res.render("user/signup", {csrfToken: req.csrfToken()})
})

router.post("/user/signup", function(req, res, next) {
	res.redirect("/")
})

module.exports = router;
