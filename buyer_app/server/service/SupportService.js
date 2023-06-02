'use strict';


/**
 * on support
 *
 * messageIds String comma seaparated message ids
 * returns List
 **/
exports.onsupport = function(messageIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "country" : "IND",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "city" : "std:080",
    "message_id" : "cfb93d1a-1ed8-4f5d-807d-a45fa95ffe00",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "domain" : "nic2004:52110",
    "bpp_uri" : "https://stagingapigateway.bizom.in/ondc",
    "action" : "on_support",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "key" : "MCowBQYDK2VuAyEA2lvPTTp/jaw3GFd5p5oW9iF3AdIXT/ZT1in9oML0o2Q=",
    "timestamp" : "2022-06-29T04:51:48.110Z"
  },
  "message" : {
    "phone" : "7984769714",
    "uri" : "dummy.com",
    "email" : "dummy@gmail.com"
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
 * support
 *
 * body List 
 * returns List
 **/
exports.support = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "support",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "message_id" : "cfb93d1a-1ed8-4f5d-807d-a45fa95ffe00",
    "timestamp" : "2022-06-29T04:51:48.110Z"
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

