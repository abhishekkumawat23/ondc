'use strict';


/**
 * init order
 *
 * body List 
 * returns List
 **/
exports.initorder = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "init",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "message_id" : "9bf64616-cf75-48fa-b6c0-95d27fe9c200",
    "timestamp" : "2022-06-29T04:36:20.728Z",
    "parent_order_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "provider_id" : "1"
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
 * on init
 *
 * messageIds String Comma separated message ids
 * returns List
 **/
exports.oninit = function(messageIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "country" : "IND",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "city" : "std:080",
    "message_id" : "9bf64616-cf75-48fa-b6c0-95d27fe9c200",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "domain" : "nic2004:52110",
    "bpp_uri" : "https://stagingapigateway.bizom.in/ondc",
    "action" : "on_init",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "key" : "MCowBQYDK2VuAyEA2lvPTTp/jaw3GFd5p5oW9iF3AdIXT/ZT1in9oML0o2Q=",
    "timestamp" : "2022-06-29T04:36:20.728Z",
    "parent_order_id" : "b210765a-2f52-4035-a491-191c4dca0c23"
  },
  "message" : {
    "order" : {
      "quote" : {
        "breakup" : [ {
          "price" : {
            "currency" : "INR",
            "value" : 177
          },
          "title" : "Saliah Dates Coffee 250gm x 8 Pcs MRP 199"
        } ],
        "price" : {
          "currency" : "INR",
          "value" : "177.00"
        },
        "ttl" : "P4D"
      },
      "provider" : {
        "locations" : [ {
          "country" : {
            "code" : "IND",
            "name" : "IND"
          },
          "address" : {
            "door" : "#22,Tarabanahalli,Hesargatta Main Road,Bangalore",
            "country" : "IND",
            "street" : "BLR",
            "area_code" : "6902",
            "name" : "sri laxmi venkateshwara bakery and sweets",
            "locality" : "BLR",
            "state" : "KARNATAKA",
            "building" : "Building"
          },
          "city" : {
            "code" : "BLR",
            "name" : "BLR"
          },
          "station_code" : "6902",
          "id" : "pooja_stores_location",
          "gps" : "12.9349377,77.6055586"
        } ],
        "id" : "1"
      },
      "provider_location" : {
        "country" : {
          "code" : "IND",
          "name" : "IND"
        },
        "address" : {
          "door" : "#22,Tarabanahalli,Hesargatta Main Road,Bangalore",
          "country" : "IND",
          "street" : "BLR",
          "area_code" : "6902",
          "name" : "sri laxmi venkateshwara bakery and sweets",
          "locality" : "BLR",
          "state" : "KARNATAKA",
          "building" : "Building"
        },
        "city" : {
          "code" : "BLR",
          "name" : "BLR"
        },
        "station_code" : "6902",
        "id" : "pooja_stores_location",
        "gps" : "12.9349377,77.6055586"
      },
      "payment" : {
        "type" : "ON-ORDER",
        "params" : {
          "transaction_id" : "some-txn-id",
          "mode" : "upi",
          "amount" : "177.00",
          "vpa" : "bizom@upi"
        },
        "uri" : "https://stagingapigateway.bizom.in/payment",
        "tl_method" : "http/get",
        "status" : "NOT-PAID"
      },
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
          "areaCode" : "411002",
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

