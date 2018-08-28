var health=require('./controllers/health');
    
module.exports = function (app,config){

var quote=require('./controllers/quote')(config);

app.delete('/api/quotes',quote.deleteQuotes);
app.get('/health',health.get);

app.all('/api/*', function (req, resp) {
    resp.sendStatus(404);        
});

}