var Product = require('../models/product');

module.exports = {

  products: function(req, res){
    Product.find({}, function(err, products) {
      res.json({err: err, data: products});
    });
  },

  getbyid: function(req, res){
    Product.findById(req.params.id, function(err, product){
      console.log('into get by id', product);
      res.json({err: err, data: product});
    })
  },

  create: function(req, res){

    var product = new Product({name: req.body.name, price: req.body.price, qty: req.body.qty});
    product.save(function(err, product){
      res.json({err: err, data: product});
    });
  },

  update: function(req, res){
    var err = [];
    if(!req.body.price){
      err.push('price is required');
    }
    if(!req.body.qty){
      err.push('qty is required');
    }
    if(req.body.name.length <3){
      err.push('name must be at least 3 characters');
    }
    if(err.length > 0){
      res.json({err: err, data: null});
    }
    else{
      Product.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, function(err, product){
        console.log(req.body);
        res.json({err: err, data: product});
      });
    }

  },

  delete: function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err, product){
      console.log(product);
      res.json({err: err, data: product});
    });
  }

}
