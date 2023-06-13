'use strict';


/**
 * Send cancellation request_id with reasons list in case of cancellation request. Else send cancelled order object
 *
 * body On_cancel_body Seller provides response to cancellation request (optional)
 * returns inline_response_200
 **/
exports.on_cancelPOST = function(body) {
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
 * Send active order object
 *
 * body On_confirm_body Seller confirms order (optional)
 * returns inline_response_200
 **/
exports.on_confirmPOST = function(body) {
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
 * Send order object with payment details updated
 *
 * body On_init_body Seller provides terms and conditions for an order (optional)
 * returns inline_response_200
 **/
exports.on_initPOST = function(body) {
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
 * Provide feedback on a service
 *
 * body On_rating_body Seller provides response to rating provided by buyer (optional)
 * returns inline_response_200
 **/
exports.on_ratingPOST = function(body) {
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
 * Send catalog
 *
 * body On_search_body Sellers provide their catalog in response to buyer search (optional)
 * returns inline_response_200_1
 **/
exports.on_searchPOST = function(body) {
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
 * Send draft order object with quoted price for selected items
 *
 * body On_select_body Seller provides quote for selected items (optional)
 * returns inline_response_200
 **/
exports.on_selectPOST = function(body) {
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
 * Fetch the status of a Service
 *
 * body On_status_body Seller provides status information for order (optional)
 * returns inline_response_200
 **/
exports.on_statusPOST = function(body) {
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
 * Contact Support
 *
 * body On_support_body Seller provides Contact Support details (optional)
 * returns inline_response_200
 **/
exports.on_supportPOST = function(body) {
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
 * Send tracking details of an active order
 *
 * body On_track_body Seller provides tracking details for an order (optional)
 * returns inline_response_200
 **/
exports.on_trackPOST = function(body) {
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
 * Returns updated service with updated runtime object
 *
 * body On_update_body Seller provides response to order update (optional)
 * returns inline_response_200
 **/
exports.on_updatePOST = function(body) {
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

