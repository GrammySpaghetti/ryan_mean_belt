var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/belt_db");

autoIncrement.initialize(connection);

var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'Product name bust be greater than 3 characters'],
    required: ['Product name is required'],
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'too small']
  },
  qty: {
    type: Number,
    required: [true, 'Please submit a quantity for the product'],
  }
}, {timestamps: true });
ProductSchema.plugin(autoIncrement.plugin, 'Product');
var Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
