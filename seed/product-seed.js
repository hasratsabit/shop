var Product = require("../models/product");
var mongoose = require("mongoose");

mongoose.connect("localhost:27017/shop")


var products = [
	new Product({
		imagePath: "images/watch01.jpeg",
		title: "Men's Chronograph Precisionist Two-Tone",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 200
	}),
	new Product({
		imagePath: "images/watch02.jpeg",
		title: "Stainless Steel Bracelet Watch",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 400
	}),
	new Product({
		imagePath: "images/watch03.jpeg",
		title: "X Armani Exchange Watch",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 300
	}),
	new Product({
		imagePath: "images/watch04.jpeg",
		title: "Men's Chronograph Eco-Drive Calibre 2100 ",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 600
	}),
	new Product({
		imagePath: "images/watch05.jpeg",
		title: "Women's Black Bracelet Watch 23mm U0954L4 ",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 800
	}),
	new Product({
		imagePath: "images/watch06.jpeg",
		title: "Stainless Steel Bracelet Watch 50mm U0799G1",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 250
	}),

]

var done = 0;
for(var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if(done === products.length){
			exit()
		}
	})
}

function exit() {
	mongoose.disconnect()
}
