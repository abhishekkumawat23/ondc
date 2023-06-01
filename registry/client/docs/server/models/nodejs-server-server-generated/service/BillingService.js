'use strict';


/**
 * add billing address
 *
 * body Addbillingaddressrequest 
 * returns addbillingaddress
 **/
exports.addbillingaddress = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "2dbb2178-86c6-4bdf-8d84-dffdb0461d4e",
  "address" : {
    "door" : "123",
    "name" : "Ghansham",
    "building" : "concorde",
    "street" : "btm ",
    "locality" : "Phase 1",
    "ward" : "20",
    "city" : "Pune",
    "state" : "Maharashtra",
    "country" : "IND",
    "areaCode" : "412098"
  },
  "organization" : {
    "name" : "amazon.com",
    "cred" : "amazon pay"
  },
  "locationId" : "",
  "email" : "test@gmail.com",
  "phone" : "1234567890",
  "taxNumber" : "457893",
  "name" : "ANC Colony"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * billing address
 *
 * returns List
 **/
exports.billingaddress = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_id" : "6294914246ecb91cd7ec936d",
  "id" : "de1ae14e-aea9-40a6-9b42-cd04f9febb91",
  "name" : "XYZ STUDIO",
  "phone" : "79353246807",
  "organization" : {
    "name" : "amazon.com",
    "cred" : "amazon pay"
  },
  "address" : {
    "door" : "565",
    "name" : "Sham",
    "building" : "concorde",
    "street" : "btm ",
    "locality" : "BTM phase 1",
    "ward" : "22",
    "city" : "Bangalore",
    "state" : "Karnataka",
    "country" : "India",
    "areaCode" : "123456"
  },
  "email" : "test@gmail.com",
  "taxNumber" : "12354",
  "locationId" : "",
  "userId" : "yjiMvEYZMNPDWwj4eQNoaHjOC3w1",
  "createdAt" : "2022-05-30T09:41:22.167Z",
  "updatedAt" : "2022-05-30T09:50:01.833Z",
  "__v" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update billing address
 *
 * body Updatebillingaddressrequest 
 * returns updatebillingaddress
 **/
exports.updatebillingaddress = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "de1ae14e-aea9-40a6-9b42-cd04f9febb91",
  "address" : {
    "door" : "565",
    "building" : "565",
    "street" : "btm",
    "city" : "Bangalore",
    "state" : "Karnataka",
    "country" : "IND",
    "areaCode" : "123456"
  },
  "organization" : {
    "name" : "amazon.com",
    "cred" : "amazon pay"
  },
  "locationId" : "",
  "email" : "test@gmail.com",
  "phone" : "9820740123",
  "taxNumber" : "12354",
  "name" : "PQR Studio"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

