var elasticsearch = require('elasticsearch');

module.exports= function(config){
  console.log(config.esserver);
    var client = new elasticsearch.Client({
        host: config.esserver        
      });

      client.ping({      
        requestTimeout: 3000
      }, function (error) {
        if (error) {
          console.error('elasticsearch cluster is down!');
        } else {
          console.log('elasticsearch cluster is healthy');
        }
      });
      
    return {client:client,index:config.esindexname,type:config.esmappingtype};

};