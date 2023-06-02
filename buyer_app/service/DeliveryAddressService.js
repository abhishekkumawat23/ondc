'use strict';


/**
 * add delivery address
 *
 * body Adddeliveryaddressrequest 
 * returns adddeliveryaddress
 **/
exports.adddeliveryaddress = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "c2201e38-dd37-4da8-b19f-2ac730e0e8f2",
  "descriptor" : {
    "name" : "Amazon",
    "shortDesc" : "aflops",
    "images" : [ ]
  },
  "gps" : "12.910793,77.596316",
  "defaultAddress" : true,
  "address" : {
    "door" : "A301 Pride Apartments",
    "building" : "KP nagar ",
    "street" : "",
    "locality" : "",
    "city" : "Karnataka",
    "state" : "Banglore",
    "country" : "IND",
    "areaCode" : "4546654"
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
 * on delivery address
 *
 * returns List
 **/
exports.ondeliveryaddress = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "createdAt",
  "address" : {
    "door" : "d-mart",
    "building" : "d-mart",
    "street" : "test",
    "city" : "pune",
    "state" : "maharashtra",
    "country" : "IND",
    "areaCode" : "411002"
  },
  "__v" : 0,
  "_id" : "_id",
  "id" : "id",
  "descriptor" : {
    "symbol" : "symbol",
    "images" : "",
    "code" : "code",
    "phone" : "phone",
    "3d_render" : "3d_render",
    "name" : "name",
    "shortDesc" : "shortDesc",
    "audio" : "audio",
    "email" : "email",
    "longDesc" : "longDesc"
  },
  "gps" : "gps",
  "userId" : "userId",
  "defaultAddress" : true,
  "updatedAt" : "updatedAt"
}, {
  "createdAt" : "createdAt",
  "address" : {
    "door" : "d-mart",
    "building" : "d-mart",
    "street" : "test",
    "city" : "pune",
    "state" : "maharashtra",
    "country" : "IND",
    "areaCode" : "411002"
  },
  "__v" : 0,
  "_id" : "_id",
  "id" : "id",
  "descriptor" : {
    "symbol" : "symbol",
    "images" : "",
    "code" : "code",
    "phone" : "phone",
    "3d_render" : "3d_render",
    "name" : "name",
    "shortDesc" : "shortDesc",
    "audio" : "audio",
    "email" : "email",
    "longDesc" : "longDesc"
  },
  "gps" : "gps",
  "userId" : "userId",
  "defaultAddress" : true,
  "updatedAt" : "updatedAt"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * update delivery address
 *
 * body Updatedeliveryaddressrequest 
 * returns updatedeliveryaddress
 **/
exports.updatedeliveryaddress = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : "c2201e38-dd37-4da8-b19f-2ac730e0e8f2",
  "descriptor" : {
    "name" : "test",
    "phone" : "7020112345",
    "email" : "test@gmail.com",
    "images" : [ ]
  },
  "gps" : "12.910793,77.596316",
  "defaultAddress" : true,
  "address" : {
    "door" : "d-mart",
    "building" : "d-mart",
    "street" : "local",
    "city" : "Pune",
    "state" : "maharashtra",
    "country" : "IND",
    "areaCode" : "410953"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

