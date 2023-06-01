'use strict';


/**
 * subscriber
 *
 * body Lookup_body Onboard (optional)
 * returns List
 **/
exports.lookupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "br_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
  "country" : "IND",
  "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
  "subscriber_id" : "https://sit.grab.in/ondc",
  "valid_until" : "2026-04-05T05:56:52.470618Z7",
  "city" : "std:080",
  "created" : "2026-04-05T05:56:52.470618Z7",
  "ukId" : "22a8a67a-76d9-459b-867c-085dda2939ec",
  "domain" : "nic2004:52110",
  "valid_from" : "2022-04-05T05:56:52.470618Z3",
  "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=",
  "updated" : "2026-04-05T05:56:52.470618Z7"
}, {
  "br_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
  "country" : "IND",
  "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
  "subscriber_id" : "https://sit.grab.in/ondc",
  "valid_until" : "2026-04-05T05:56:52.470618Z7",
  "city" : "std:080",
  "created" : "2026-04-05T05:56:52.470618Z7",
  "ukId" : "22a8a67a-76d9-459b-867c-085dda2939ec",
  "domain" : "nic2004:52110",
  "valid_from" : "2022-04-05T05:56:52.470618Z3",
  "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=",
  "updated" : "2026-04-05T05:56:52.470618Z7"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * subscriber
 *
 * body Subscribe_body Onboard (optional)
 * returns inline_response_200
 **/
exports.subscribePOST = function(body) {
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
 * to be hosted by subscriber
 *
 * body Subscriber_url_on_subscribe_body Onboard (optional)
 * returns inline_response_200_1
 **/
exports.subscriber_urlOn_subscribePOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "answer" : "decrypted_challange_string"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

