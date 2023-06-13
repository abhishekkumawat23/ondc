'use strict';


/**
 * Get a list of categories for which feedback can be given by the Buyer App
 *
 * body Get_feedback_categories_body Context header is sent as the request (optional)
 * returns inline_response_200
 **/
exports.get_feedback_categoriesPOST = function(body) {
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

