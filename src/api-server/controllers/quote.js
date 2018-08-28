module.exports = function (config) {
    
  var deleteQuotes = function (req, res) {
    
    var quotesToDelete = req.body || {};
    if (quotesToDelete.constructor === Object && Object.keys(quotesToDelete).length === 0 || quotesToDelete.length == 0)
      return res.status(400).json({ errors: 'quoteids are required' });

    quotesToDelete = Array.from(quotesToDelete);

    config.client.bulk({
      body: prepareESBulkRequest(quotesToDelete)
    }, function (err, esresp) {
      if (err) {
        return res.status(500).json({ errors: 'An error occured while performing bulk delete', exception: JSON.stringify(err) });
      }    

      return res.status(200).json({ message: createResponseMessage(esresp) });

    });

  };

function createResponseMessage(elasticResponse){  
   if(elasticResponse)
     {
       var message=[],indexedItems=elasticResponse.items;   
      
         for (var i = 0, len = indexedItems.length; i < len; i++) {
          if(indexedItems[i].delete.status==404)
          message.push('quote with id '+ indexedItems[i].delete._id + ' not found on index')
        }
      
        return message.length > 0 ? message : 'quotes deleted from ES';
     } 

}


  function prepareESBulkRequest(quoteids) {
    var bulkRequest = [];
    if (!quoteids)
      return bulkRequest;
  
    for (var i = 0, len = quoteids.length; i < len; i++) {
      bulkRequest.push({ delete: { _index: config.index, _type: config.type, _id: quoteids[i] } })
    }

    return bulkRequest;
  }

  return {
    deleteQuotes: deleteQuotes
  }
};
