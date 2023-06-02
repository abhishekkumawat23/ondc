'use strict';


/**
 * order history
 *
 * pageNumber Integer Number - from 1 to ....
 * limit Integer 
 * contentType String 
 * returns orderhistory
 **/
exports.orderhistory = function(pageNumber,limit,contentType) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "orders" : [ {
    "_id" : "62bac9df593168037cb5172c",
    "transactionId" : "8b27e6ca-10e7-4299-a6da-19a49150f876",
    "__v" : 0,
    "addOns" : [ ],
    "billing" : {
      "name" : "test",
      "phone" : "32353453434",
      "address" : {
        "door" : "erte",
        "name" : "test",
        "building" : "erte",
        "street" : "test",
        "city" : "pune",
        "state" : "maharashtra",
        "country" : "IND",
        "areaCode" : "410008"
      },
      "email" : "test@gmail.com",
      "updatedAt" : "2022-06-28T09:29:22.709Z",
      "createdAt" : "2022-06-28T09:29:22.709Z"
    },
    "bppId" : "stagingapigateway.bizom.in/ondc",
    "createdAt" : "2022-06-28T09:29:03.562Z",
    "fulfillment" : {
      "type" : "HOME-DELIVERY",
      "end" : {
        "location" : {
          "address" : {
            "door" : "d-mart",
            "name" : "test",
            "building" : "d-mart",
            "street" : "xyz",
            "city" : "pune",
            "state" : "maharashtra",
            "country" : "IND",
            "areaCode" : "411002"
          }
        },
        "contact" : {
          "phone" : "42343424224",
          "email" : "test@gmail.com"
        }
      },
      "customer" : {
        "person" : {
          "name" : "test"
        }
      }
    },
    "id" : "304",
    "items" : [ {
      "id" : "45",
      "quantity" : {
        "count" : 1
      }
    } ],
    "messageId" : "57d98cf0-eafe-4ab9-80ab-33c07c5fd572",
    "offers" : [ ],
    "parentOrderId" : "8b27e6ca-10e7-4299-a6da-19a49150f876",
    "payment" : {
      "params" : {
        "amount" : "177",
        "currency" : "INR"
      },
      "type" : "POST-FULFILLMENT",
      "status" : "NOT-PAID"
    },
    "provider" : {
      "id" : "1",
      "locations" : [ {
        "id" : "pooja_stores_location"
      } ]
    },
    "quote" : {
      "price" : {
        "currency" : "INR",
        "value" : "177.00"
      },
      "breakup" : [ {
        "title" : "Saliah Dates Coffee 250gm x 8 Pcs MRP 199",
        "price" : {
          "currency" : "INR",
          "value" : "177"
        }
      } ],
      "ttl" : "P4D"
    },
    "state" : "Active",
    "updatedAt" : "2022-06-28T09:29:22.709Z",
    "userId" : "yjiMvEYZMNPDWwj4eQNoaHjOC3w1"
  }, {
    "_id" : "62bac9df593168037cb5172c",
    "transactionId" : "8b27e6ca-10e7-4299-a6da-19a49150f876",
    "__v" : 0,
    "addOns" : [ ],
    "billing" : {
      "name" : "test",
      "phone" : "32353453434",
      "address" : {
        "door" : "erte",
        "name" : "test",
        "building" : "erte",
        "street" : "test",
        "city" : "pune",
        "state" : "maharashtra",
        "country" : "IND",
        "areaCode" : "410008"
      },
      "email" : "test@gmail.com",
      "updatedAt" : "2022-06-28T09:29:22.709Z",
      "createdAt" : "2022-06-28T09:29:22.709Z"
    },
    "bppId" : "stagingapigateway.bizom.in/ondc",
    "createdAt" : "2022-06-28T09:29:03.562Z",
    "fulfillment" : {
      "type" : "HOME-DELIVERY",
      "end" : {
        "location" : {
          "address" : {
            "door" : "d-mart",
            "name" : "test",
            "building" : "d-mart",
            "street" : "xyz",
            "city" : "pune",
            "state" : "maharashtra",
            "country" : "IND",
            "areaCode" : "411002"
          }
        },
        "contact" : {
          "phone" : "42343424224",
          "email" : "test@gmail.com"
        }
      },
      "customer" : {
        "person" : {
          "name" : "test"
        }
      }
    },
    "id" : "304",
    "items" : [ {
      "id" : "45",
      "quantity" : {
        "count" : 1
      }
    } ],
    "messageId" : "57d98cf0-eafe-4ab9-80ab-33c07c5fd572",
    "offers" : [ ],
    "parentOrderId" : "8b27e6ca-10e7-4299-a6da-19a49150f876",
    "payment" : {
      "params" : {
        "amount" : "177",
        "currency" : "INR"
      },
      "type" : "POST-FULFILLMENT",
      "status" : "NOT-PAID"
    },
    "provider" : {
      "id" : "1",
      "locations" : [ {
        "id" : "pooja_stores_location"
      } ]
    },
    "quote" : {
      "price" : {
        "currency" : "INR",
        "value" : "177.00"
      },
      "breakup" : [ {
        "title" : "Saliah Dates Coffee 250gm x 8 Pcs MRP 199",
        "price" : {
          "currency" : "INR",
          "value" : "177"
        }
      } ],
      "ttl" : "P4D"
    },
    "state" : "Active",
    "updatedAt" : "2022-06-28T09:29:22.709Z",
    "userId" : "yjiMvEYZMNPDWwj4eQNoaHjOC3w1"
  } ],
  "totalCount" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

