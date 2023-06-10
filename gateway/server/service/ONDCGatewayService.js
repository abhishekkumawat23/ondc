'use strict';

const OndcRegistryClient = require('../../../registry/client/dist/index.js')

function lookupPost(callback) {
  console.log('gateway 0.0')
  var apiClient = new OndcRegistryClient.ApiClient();
  apiClient.authentications = {
    "bearer": {
        "type": "oauth2",
        "accessToken": "1234qwer"
    }
}

  var api = new OndcRegistryClient.ONDCNetworkParticipantOnboardingApi(apiClient);
  console.log('gateway 0.1')
  let subscriberId = 'http://localhost:9090'; //seems URL of Buyer App
  let  country = 'IND';
  let city = 'std:080';
  let domain = 'nic2004:52110' ; //Retail,nic2004:52110
  let type='BPP';
  console.log('gateway 0')
  var opts = { 
    'body': new  OndcRegistryClient.LookupBody(subscriberId, country, city, domain, type)
  };
 console.log('gateway 1')
  api.lookupPost(opts,callback) 
  console.log('gateway 2')
}
/**
 * Send catalog
 *
 * body On_search_body Sellers provide their catalog in response to buyer search (optional)
 * returns inline_response_200_1
 **/
exports.on_searchPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : {
    "ack" : {
      "status" : "ACK"
    }
  },
  "error" : {
    "path" : "path",
    "code" : "code",
    "type" : "CONTEXT-ERROR",
    "message" : "message"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Search for services by intent
 *
 * body Search_body Buyer searches for products and services (optional)
 * returns inline_response_200
 **/
exports.searchPOST = function(body) {
  console.log('in search post body')
  return new Promise(function(resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "message" : {
//     "ack" : {
//       "status" : "ACK"
//     }
//   },
//   "error" : {
//     "path" : "path",
//     "code" : "code",
//     "type" : "CONTEXT-ERROR",
//     "message" : "message"
//   }
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
    var callback = function(error, data, response) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
        resolve(data);
      }
    };
    lookupPost(callback)
  });
}

