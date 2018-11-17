var express    = require('express'),
    app        = express(),
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./config/mongoose'),
    port       = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.static(path.join(__dirname, 'static')));
app.set(path.join('views', __dirname, 'views'));
app.set('view engine', 'ejs');
require('./config/routes.js')(app);
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"));
});
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
