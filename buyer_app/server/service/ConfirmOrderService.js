'use strict';


/**
 * confirm order
 *
 * body List 
 * returns List
 **/
exports.confirmorder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "confirm",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "message_id" : "176ee232-0d31-4a3a-8ffd-5b4fd5d79fc1",
    "timestamp" : "2022-06-29T04:43:58.904Z"
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


/**
 * on confirm
 *
 * messageIds String comma separated message ids
 * returns List
 **/
exports.onconfirm = function(messageIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "country" : "IND",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "city" : "std:080",
    "message_id" : "176ee232-0d31-4a3a-8ffd-5b4fd5d79fc1",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "domain" : "nic2004:52110",
    "bpp_uri" : "https://stagingapigateway.bizom.in/ondc",
    "action" : "on_confirm",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "key" : "MCowBQYDK2VuAyEA2lvPTTp/jaw3GFd5p5oW9iF3AdIXT/ZT1in9oML0o2Q=",
    "timestamp" : "2022-06-29T04:43:58.904Z"
  },
  "message" : {
    "order" : {
      "offers" : [ ],
      "provider" : {
        "locations" : [ {
          "id" : "pooja_stores_location"
        } ],
        "id" : "1"
      },
      "addOns" : [ ],
      "payment" : {
        "params" : {
          "amount" : "177",
          "currency" : "INR"
        },
        "type" : "POST-FULFILLMENT",
        "status" : "NOT-PAID"
      },
      "id" : 307,
      "fulfillment" : {
        "provider_id" : "1",
        "end" : {
          "contact" : {
            "phone" : "7020112345",
            "email" : "test@gmail.com"
          },
          "location" : {
            "address" : {
              "door" : "d-mart",
              "country" : "IND",
              "city" : "Pune",
              "street" : "local",
              "area_code" : "410953",
              "name" : "test",
              "state" : "maharashtra",
              "building" : "d-mart"
            }
          }
        },
        "type" : "HOME-DELIVERY",
        "customer" : {
          "person" : {
            "name" : "test"
          }
        }
      },
      "state" : "Active",
      "items" : [ {
        "quantity" : {
          "count" : 1
        },
        "id" : "45"
      } ],
      "billing" : {
        "address" : {
          "door" : "d-mart",
          "country" : "IND",
          "city" : "pune",
          "street" : "test",
          "area_code" : "411002",
          "name" : "Reshma",
          "state" : "maharashtra",
          "building" : "d-mart"
        },
        "phone" : "453453454",
        "name" : "Reshma",
        "email" : "test@gmail.com"
      }
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

