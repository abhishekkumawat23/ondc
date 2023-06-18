"use strict";

var BuyerApp = require('./index.js');
var apiClient = new BuyerApp.ApiClient();
apiClient.authentications = {
  "bearer": {
    "type": "oauth2",
    "accessToken": "1234qwer"
  }
};
var onSearchBodyExample = {
  "context": {
    "domain": "local_retail",
    "country": "IND",
    "city": "std:080",
    "action": "on_search",
    "core_version": "0.9.2",
    "bap_id": "https://mock_bap.com/",
    "bap_uri": "https://mock_bap.com/beckn/",
    "transaction_id": "1239890342",
    "message_id": "123793824",
    "timestamp": "2021-06-23T09:53:38.872Z"
  },
  "message": {
    "catalog": {
      "bpp/descriptor": {
        "name": "Shop EZ"
      },
      "bpp/providers": [{
        "id": "./retail.kirana/ind.blr/pooja-stores@lrdn.bpp.shopez.com.provider",
        "descriptor": {
          "name": "Pooja Stores"
        },
        "locations": [{
          "id": "./retail.kirana/ind.blr/pooja-stores.koramangala-4th-block@lrdn.bpp.shopez.com.provider_location",
          "gps": "12.9349377,77.6055586"
        }]
      }, {
        "id": "./retail.kirana/ind.blr/nilgiris@lrdn.bpp.shopez.com.provider",
        "descriptor": {
          "name": "Nilgiris"
        },
        "locations": [{
          "id": "./retail.kirana/ind.blr/nilgiris.koramangala-4th-block@lrdn.bpp.shopez.com.provider_location",
          "gps": "12.9349406,77.6208795"
        }]
      }, {
        "id": "./retail.kirana/ind.blr/food-mall@lrdn.bpp.shopez.com",
        "descriptor": {
          "name": "Food Mall"
        },
        "locations": [{
          "id": "./retail.kirana/ind.blr/food-mall.koramangala-4th-block@lrdn.bpp.shopez.com.provider_location"
        }]
      }]
    }
  }
};
var onSearchApi = new BuyerApp.SearchApi(apiClient);
var onSearchBody = new BuyerApp.OnSearchBody.constructFromObject(onSearchBodyExample);
var callback = function callback(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
onSearchApi.onSearchPost(onSearchBody, callback);