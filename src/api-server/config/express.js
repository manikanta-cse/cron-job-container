var bodyParser = require('body-parser');
    

module.exports= function(app){

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

};
