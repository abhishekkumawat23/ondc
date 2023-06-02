'use strict';


/**
 * on quote
 *
 * messageIds String Comma separated message ids
 * returns List
 **/
exports.onquote = function(messageIds) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "country" : "IND",
    "bpp_id" : "stagingapigateway.bizom.in/ondc",
    "city" : "std:080",
    "message_id" : "779cd914-9326-4698-a2e9-8432ff0c8723",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "domain" : "nic2004:52110",
    "bpp_uri" : "https://stagingapigateway.bizom.in/ondc",
    "action" : "on_select",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "key" : "MCowBQYDK2VuAyEA2lvPTTp/jaw3GFd5p5oW9iF3AdIXT/ZT1in9oML0o2Q=",
    "timestamp" : "2022-06-29T04:32:15.483Z"
  },
  "message" : {
    "quote" : {
      "quote" : {
        "breakup" : [ {
          "title" : "Saliah Dates Coffee 250gm x 8 Pcs MRP 199",
          "price" : {
            "value" : 177,
            "currency" : "INR"
          }
        } ],
        "price" : {
          "value" : "177.00",
          "currency" : "INR"
        },
        "ttl" : "P4D"
      },
      "provider" : {
        "locations" : [ {
          "country" : {
            "name" : "IND",
            "code" : "IND"
          },
          "station_code" : "6902",
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
          "id" : "pooja_stores_location",
          "gps" : "12.9349377,77.6055586",
          "city" : {
            "name" : "BLR",
            "code" : "BLR"
          }
        } ],
        "id" : "1"
      },
      "provider_location" : {
        "country" : {
          "name" : "IND",
          "code" : "IND"
        },
        "station_code" : "6902",
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
        "id" : "pooja_stores_location",
        "gps" : "12.9349377,77.6055586",
        "city" : {
          "name" : "BLR",
          "code" : "BLR"
        }
      },
      "items" : [ {
        "@ondc/org/cancellable" : false,
        "@ondc/org/returnable" : false,
        "quantity" : {
          "selected" : {
            "count" : 1
          }
        },
        "price" : {
          "value" : "177.67",
          "currency" : "INR"
        },
        "@ondc/org/seller_pickup_return" : false,
        "id" : 45
      } ]
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
 * quote
 *
 * body List 
 * returns List
 **/
exports.quote = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "select",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "transaction_id" : "b210765a-2f52-4035-a491-191c4dca0c23",
    "message_id" : "779cd914-9326-4698-a2e9-8432ff0c8723",
    "timestamp" : "2022-06-29T04:32:15.483Z"
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

