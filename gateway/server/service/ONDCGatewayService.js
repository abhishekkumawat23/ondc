'use strict';

const { subscribe } = require('diagnostics_channel');
var OndcProtocolApiForRetailGroceryFb = require('../../../seller_app/retail/client/dist/index.js');
const OndcRegistryClient = require('../../../registry/client/dist/index.js')
const util = require('util');

function lookupPost(searchRequest, callback) {
  console.log('Body which came in lookup post is: ' + JSON.stringify(searchRequest.context));
  let apiClient = new OndcRegistryClient.ApiClient();
  apiClient.authentications = {
    "bearer": {
        "type": "oauth2",
        "accessToken": "1234qwer"
    }
  }

  var api = new OndcRegistryClient.ONDCNetworkParticipantOnboardingApi(apiClient);
  let subscriberId = 'http://localhost:9090'; //seems URL of Buyer App
  let  country = 'IND';
  let city = 'std:080';
  let domain = 'nic2004:52110' ; //Retail,nic2004:52110
  let type='BPP';
  // TODO: get subscriberId from request body
  var opts = { 
    'body': new  OndcRegistryClient.LookupBody(subscriberId, searchRequest.context.country, searchRequest.context.city, searchRequest.context.domain, type)
  };
  api.lookupPost(opts ,callback) 
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
// exports.searchPOST = function(body) {
//   console.log('in search post body')
//   return new Promise(function(resolve, reject) {
// //     var examples = {};
// //     examples['application/json'] = {
// //   "message" : {
// //     "ack" : {
// //       "status" : "ACK"
// //     }
// //   },
// //   "error" : {
// //     "path" : "path",
// //     "code" : "code",
// //     "type" : "CONTEXT-ERROR",
// //     "message" : "message"
// //   }
// // };
// //     if (Object.keys(examples).length > 0) {
// //       resolve(examples[Object.keys(examples)[0]]);
// //     } else {
// //       resolve();
// //     }
//     var callback = function(error, data, response) {
//       if (error) {
//         console.error(error);
//         reject(error);
//       } else {
//         console.log('API called successfully. Returned data: ' + data);
//         resolve(data);
//       }
//     };
//     lookupPost(callback)
//   });
// }

async function searchOnSubscriber(subscriberDetails, searchRequest) {
  console.log('Subscriber details are: ' + JSON.stringify(subscriberDetails));

  const sellerResponse = await util.promisify(apiSearchPost)(subscriberDetails, searchRequest);
  console.log('Seller response which I got is: ' + JSON.stringify(sellerResponse));
}

function apiSearchPost(subscriberDetails, searchRequest,callback){
  let subscriberUrl = subscriberDetails.subscriberId;

  // Create seller retail api client.
  let apiClient = new OndcProtocolApiForRetailGroceryFb.ApiClient();
  var GatewaySubscriberAuth = apiClient.authentications['GatewaySubscriberAuth'];
  GatewaySubscriberAuth.apiKey = "YOUR API KEY";
  var GatewaySubscriberAuthNew = apiClient.authentications['GatewaySubscriberAuthNew'];
  GatewaySubscriberAuthNew.apiKey = "YOUR API KEY";
  var SubscriberAuth = apiClient.authentications['SubscriberAuth'];
  SubscriberAuth.apiKey = "YOUR API KEY";

  var api = new OndcProtocolApiForRetailGroceryFb.ONDCSellerAppApi(apiClient);
  // TODO: Do we need to create the body again or can we pass it directly?
  var opts = { 
    'body': new OndcProtocolApiForRetailGroceryFb.SearchBody(searchRequest.context, searchRequest.message)
  };

  api.searchPOST(opts, callback);
}

async function processSearchRequest(searchRequest) {
  // TODO: Use request body
  const subscriberLookupArray = await util.promisify(lookupPost)(searchRequest);
  subscriberLookupArray.forEach(subscriberDetails => {
    searchOnSubscriber(subscriberDetails, searchRequest);
  });

  console.log('lookup API called successfully. Returned lookup data: ' + JSON.stringify(subscriberLookupArray));
}

exports.searchPOST =  async function(body) {
  // Process request by calling registtry and then seller API.
  processSearchRequest(body);

  // Send ack.
  let ackResponse = {
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
  return ackResponse;
}