'use strict';

var OndcGateway = require('../ONDC_Gateway_client/dist/index.js');

function searchbyproductPOST() {
  var apiClient = new OndcGateway.ApiClient();
  /*apiClient.authentications = {
    "GatewaySubscriberAuth": {
        "type": "oauth2",
        "accessToken": "1234qwer"
    }
  }*/
  // Configure API key authorization: GatewaySubscriberAuth
  var GatewaySubscriberAuth = apiClient.authentications['GatewaySubscriberAuth'];
  GatewaySubscriberAuth.apiKey = "YOUR API KEY"
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  //GatewaySubscriberAuth.apiKeyPrefix['Proxy-Authorization'] = "Token"
  
  // Configure API key authorization: GatewaySubscriberAuthNew
  var GatewaySubscriberAuthNew = apiClient.authentications['GatewaySubscriberAuthNew'];
  GatewaySubscriberAuthNew.apiKey = "YOUR API KEY"
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  //GatewaySubscriberAuthNew.apiKeyPrefix['X-Gateway-Authorization'] = "Token"
  
  // Configure API key authorization: SubscriberAuth
  var SubscriberAuth = apiClient.authentications['SubscriberAuth'];
  SubscriberAuth.apiKey = "YOUR API KEY"
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  //SubscriberAuth.apiKeyPrefix['Authorization'] = "Token"
  
  var api = new OndcGateway.ONDCGatewayApi(apiClient)
  let contextExample = {
    domain: "nic2004:52110",
    country: "IND",
    city: "std:080",
    action: "search",
    core_version: "0.9.3",
    bap_id: "buyer-app.ondc.org",
    bap_uri: "https://buyer-app.ondc.org/protocol/v1",
    transaction_id: "3e6802dc-055b-4a57-bcd4-d60d00213d8b",
    message_id: "c4b71e62-f51d-425a-892b-539920e945ca",
    timestamp: "2022-06-29T04:21:08.921Z"
  }
  let context = new OndcGateway.Context(contextExample.domain,
                                        contextExample.country,
                                        contextExample.city,
                                        contextExample.action,
                                        contextExample.core_version,
                                        contextExample.bap_id,
                                        contextExample.bap_uri,
                                        contextExample.transaction_id,
                                        contextExample.message_id,
                                        contextExample.timestamp  );
  var opts = { 
    'body': new OndcGateway.OnSearchBody(context) // {OnSearchBody} Sellers provide their catalog in response to buyer search
  };
  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  };
  api.onSearchPOST(opts, callback);
}



/**
 * filter params
 *
 * messageId String 
 * returns filterparams
 **/
exports.filterparams = function(messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "categories" : [ ],
  "fulfillment" : [ ],
  "minPrice" : 82,
  "maxPrice" : 177.67,
  "providers" : [ {
    "id" : "1000:1001",
    "name" : "SABJI XPRESS PVT LTD:BANASWADI"
  }, {
    "id" : "1000:1185",
    "name" : "SABJI XPRESS PVT LTD:Medchal"
  }, {
    "id" : "1000:1250",
    "name" : "SABJI XPRESS PVT LTD:Ysupermarket Malleswaram"
  }, {
    "id" : "1000:1251",
    "name" : "SABJI XPRESS PVT LTD:Ysupermarket Kengeri "
  }, {
    "id" : "1",
    "name" : "Anka Summor"
  }, {
    "id" : "slrp-1276898",
    "name" : "TryKaro Indiranagar"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * on search
 *
 * messageId String 
 * returns onsearchbyproduct
 **/
exports.onsearch = function(messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "search",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "transaction_id" : "3e6802dc-055b-4a57-bcd4-d60d00213d8b",
    "message_id" : "c4b71e62-f51d-425a-892b-539920e945ca",
    "timestamp" : "2022-06-29T04:21:08.921Z"
  },
  "message" : {
    "catalogs" : [ {
      "@ondc/org/statutory_reqs_packaged_commodities" : {
        "description" : "Bru Instant Coffee Pouch 50 g",
        "manufacturer_or_packer_name" : "Bru",
        "manufacturer_or_packer_address" : "PO Box No 1470, Mumbai 400099",
        "common_or_generic_name_of_commodity" : "Coffee",
        "multiple_products_name_number_or_qty" : "1",
        "net_quantity_or_measure_of_commodity_in_pkg" : "50g",
        "month_year_of_manufacture_packing_import" : "1/1/2022",
        "imported_product_country_of_origin" : "IND",
        "contact_details_consumer_care" : "sales@trykaro.in"
      },
      "@ondc/org/seller_pickup_return" : true,
      "@ondc/org/contact_details_consumer_care" : "@ondc/org/contact_details_consumer_care",
      "descriptor" : {
        "name" : "Irish Coffee Pastry",
        "images" : [ "https://enstore-dev.sgp1.digitaloceanspaces.com/1000/item-913-ps2C5I42s9.jpg" ]
      },
      "AvailableQuantity" : 6,
      "location_id" : "location_id",
      "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg" : "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg",
      "provider_details" : {
        "id" : "1000:1001",
        "descriptor" : {
          "name" : "SABJI XPRESS PVT LTD:BANASWADI"
        }
      },
      "@ondc/org/available_on_cod" : true,
      "category_id" : "category_id",
      "category_details" : { },
      "related" : true,
      "price" : {
        "currency" : "currency",
        "maximum_value" : 0,
        "value" : ""
      },
      "@ondc/org/month_year_of_manufacture_packing_import" : "@ondc/org/month_year_of_manufacture_packing_import",
      "id" : "",
      "ProviderID" : "ProviderID",
      "@ondc/org/cancellable" : true,
      "bpp_details" : {
        "name" : "Enstore",
        "bpp_id" : "enstore.innobits.retail.bpp"
      },
      "@ondc/org/returnable" : true,
      "fulfillment_details" : { },
      "@ondc/org/imported_product_country_of_origin" : "@ondc/org/imported_product_country_of_origin",
      "@ondc/org/time_to_ship" : "@ondc/org/time_to_ship",
      "fulfillment_id" : "fulfillment_id",
      "recommended" : true,
      "@ondc/org/return_window" : "@ondc/org/return_window",
      "location_details" : {
        "id" : "1000:1001",
        "gps" : "12.9349377,77.6055586"
      },
      "matched" : true
    }, {
      "@ondc/org/statutory_reqs_packaged_commodities" : {
        "description" : "Bru Instant Coffee Pouch 50 g",
        "manufacturer_or_packer_name" : "Bru",
        "manufacturer_or_packer_address" : "PO Box No 1470, Mumbai 400099",
        "common_or_generic_name_of_commodity" : "Coffee",
        "multiple_products_name_number_or_qty" : "1",
        "net_quantity_or_measure_of_commodity_in_pkg" : "50g",
        "month_year_of_manufacture_packing_import" : "1/1/2022",
        "imported_product_country_of_origin" : "IND",
        "contact_details_consumer_care" : "sales@trykaro.in"
      },
      "@ondc/org/seller_pickup_return" : true,
      "@ondc/org/contact_details_consumer_care" : "@ondc/org/contact_details_consumer_care",
      "descriptor" : {
        "name" : "Irish Coffee Pastry",
        "images" : [ "https://enstore-dev.sgp1.digitaloceanspaces.com/1000/item-913-ps2C5I42s9.jpg" ]
      },
      "AvailableQuantity" : 6,
      "location_id" : "location_id",
      "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg" : "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg",
      "provider_details" : {
        "id" : "1000:1001",
        "descriptor" : {
          "name" : "SABJI XPRESS PVT LTD:BANASWADI"
        }
      },
      "@ondc/org/available_on_cod" : true,
      "category_id" : "category_id",
      "category_details" : { },
      "related" : true,
      "price" : {
        "currency" : "currency",
        "maximum_value" : 0,
        "value" : ""
      },
      "@ondc/org/month_year_of_manufacture_packing_import" : "@ondc/org/month_year_of_manufacture_packing_import",
      "id" : "",
      "ProviderID" : "ProviderID",
      "@ondc/org/cancellable" : true,
      "bpp_details" : {
        "name" : "Enstore",
        "bpp_id" : "enstore.innobits.retail.bpp"
      },
      "@ondc/org/returnable" : true,
      "fulfillment_details" : { },
      "@ondc/org/imported_product_country_of_origin" : "@ondc/org/imported_product_country_of_origin",
      "@ondc/org/time_to_ship" : "@ondc/org/time_to_ship",
      "fulfillment_id" : "fulfillment_id",
      "recommended" : true,
      "@ondc/org/return_window" : "@ondc/org/return_window",
      "location_details" : {
        "id" : "1000:1001",
        "gps" : "12.9349377,77.6055586"
      },
      "matched" : true
    } ],
    "count" : 1
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
 * search by product
 *
 * body Searchbyproductrequest 
 * returns searchbyproduct
 **/
exports.searchbyproduct = function(body) {
  console.log("I am in onsearch of buyer app server");
  searchbyproductPOST();
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "context" : {
    "domain" : "nic2004:52110",
    "country" : "IND",
    "city" : "std:080",
    "action" : "search",
    "core_version" : "0.9.3",
    "bap_id" : "buyer-app.ondc.org",
    "bap_uri" : "https://buyer-app.ondc.org/protocol/v1",
    "transaction_id" : "3e6802dc-055b-4a57-bcd4-d60d00213d8b",
    "message_id" : "c4b71e62-f51d-425a-892b-539920e945ca",
    "timestamp" : "2022-06-29T04:21:08.921Z"
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

