'use strict';


/**
 * cancel order
 *
 * body Cancelorderrequest 
 * returns cancelorder
 **/
exports.cancelorder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "cancel",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "message_id" : "eea15612-a51b-409b-bdf8-574d0330ad56",
    "timestamp" : "2022-06-29T04:55:57.079Z"
  },
  "message" : {
    "ack" : {
      "status" : "ACK"
    }
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
 * on cancel order
 *
 * messageId String 
 * returns oncancelorder-errorresponse
 **/
exports.oncancelorder = function(messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "on_cancel",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "transaction_id" : "ebc55e85-1fd8-4b06-9cc4-b3eafabe8bf6",
    "message_id" : "eea15612-a51b-409b-bdf8-574d0330ad56",
    "timestamp" : "2022-06-29T04:55:57.270Z"
  },
  "error" : {
    "message" : "No data found"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

