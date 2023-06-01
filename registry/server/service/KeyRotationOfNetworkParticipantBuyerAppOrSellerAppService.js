'use strict';


/**
 * Get public keys of network participants
 * The network participant will trigger the lookup call to the registry to fetch its public keys.
 *
 * body Vlookup_body vlookup (optional)
 * returns List
 **/
exports.vlookupPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "IND",
  "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
  "subscriber_id" : "pilot-gateway-1.beckn.nsdl.co.in/option1",
  "valid_until" : "2026-04-05T05:56:52.470618Z7",
  "unique_key_id" : "dba638cc-20cc-40ea-a08b-b4a39bfb3eab",
  "city" : "std:080",
  "created" : "2026-04-05T05:56:52.470618Z7",
  "valid_from" : "2022-04-05T05:56:52.470618Z3",
  "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=",
  "updated" : "2026-04-05T05:56:52.470618Z7",
  "network_participant" : [ {
    "seller_on_record" : [ {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    }, {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    } ],
    "subscriber_url" : "/test4",
    "domain" : "nic2004:52110",
    "msn" : true,
    "city_code" : "std:080",
    "type" : "sellerApp"
  }, {
    "seller_on_record" : [ {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    }, {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    } ],
    "subscriber_url" : "/test4",
    "domain" : "nic2004:52110",
    "msn" : true,
    "city_code" : "std:080",
    "type" : "sellerApp"
  } ]
}, {
  "country" : "IND",
  "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
  "subscriber_id" : "pilot-gateway-1.beckn.nsdl.co.in/option1",
  "valid_until" : "2026-04-05T05:56:52.470618Z7",
  "unique_key_id" : "dba638cc-20cc-40ea-a08b-b4a39bfb3eab",
  "city" : "std:080",
  "created" : "2026-04-05T05:56:52.470618Z7",
  "valid_from" : "2022-04-05T05:56:52.470618Z3",
  "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI=",
  "updated" : "2026-04-05T05:56:52.470618Z7",
  "network_participant" : [ {
    "seller_on_record" : [ {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    }, {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    } ],
    "subscriber_url" : "/test4",
    "domain" : "nic2004:52110",
    "msn" : true,
    "city_code" : "std:080",
    "type" : "sellerApp"
  }, {
    "seller_on_record" : [ {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    }, {
      "unique_key_id" : "22a8a67a-76d9-459b-867c-085dda2939ec",
      "key_pair" : {
        "signing_public_key" : "QSax2KT4UiTUWUqoVUaEcWhBcGTTNu+Sf8EMDRY1GaE=",
        "valid_until" : "2026-04-05T05:56:52.470618Z7",
        "valid_from" : "2022-04-05T05:56:52.470618Z3",
        "encr_public_key" : "O74ukMymk4KZnVs3sZhU2U7RXpaZ/qiOUMk5NWt6rbI="
      },
      "city_code" : "std:080"
    } ],
    "subscriber_url" : "/test4",
    "domain" : "nic2004:52110",
    "msn" : true,
    "city_code" : "std:080",
    "type" : "sellerApp"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

