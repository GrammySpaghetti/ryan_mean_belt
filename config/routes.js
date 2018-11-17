var products_controller = require('../controllers/products_controller');

module.exports = function(app) {
  app.get('/api/products', products_controller.products);
  app.get('/api/products/:id', products_controller.getbyid);
  app.post('/api/create', products_controller.create);
  app.put('/api/update/:id', products_controller.update);
  app.delete('/api/delete/:id', products_controller.delete);
  // app.all("*", (req,res,next) => {
  //   res.sendFile(path.resolve("./public/dist/public/index.html"));
  // });
}
