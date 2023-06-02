'use strict';


/**
 * on track
 *
 * messageIds String comma separated ids
 * returns List
 **/
exports.ontrack = function(messageIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "transaction_id" : "38a899be-bdfb-4a67-90e2-6889e0cc28d0",
    "country" : "IND",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "city" : "std:080",
    "message_id" : "2cb81376-4491-4d74-9c25-e668448a003e",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "domain" : "nic2004:52110",
    "bpp_uri" : "https://stagingapigateway.bizom.in/ondc",
    "action" : "on_track",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "key" : "MCowBQYDK2VuAyEA2lvPTTp/jaw3GFd5p5oW9iF3AdIXT/ZT1in9oML0o2Q=",
    "timestamp" : "2022-06-29T04:49:30.707Z"
  },
  "message" : {
    "tracking" : {
      "url" : "wss://www.bap.com/order_1",
      "status" : "Active"
    }
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * track
 *
 * body List 
 * returns List
 **/
exports.track = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "track",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "transaction_id" : "38a899be-bdfb-4a67-90e2-6889e0cc28d0",
    "message_id" : "2cb81376-4491-4d74-9c25-e668448a003e",
    "timestamp" : "2022-06-29T04:49:30.707Z"
  },
  "message" : {
    "ack" : {
      "status" : "ACK"
    }
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

