'use strict';

var OndcGateway = require('../../../gateway/client/dist/index.js');


function searchbyproductPOST(callback) {
  console.log('in searchbyproductPOSTt ');
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

  var api = new OndcGateway.ONDCGatewayApi(apiClient);
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
  };

  let context = new OndcGateway.Context(contextExample.domain,
    contextExample.country,
    contextExample.city,
    contextExample.action,
    contextExample.core_version,
    contextExample.bap_id,
    contextExample.bap_uri,
    contextExample.transaction_id,
    contextExample.message_id,
    contextExample.timestamp);

  let searchMessage = {
    "intent": {
      "descriptor": {
        "name": "string",
        "code": "string",
        "symbol": "string",
        "short_desc": "string",
        "long_desc": "string",
        "images": [
          "string"
        ],
//        "audio": "string",
//        // "3d_render": "string"
      },
      "provider": {
        "id": "string",
        "@ondc/org/fssai_license_no" : "string" ,
        "ttl" : "string",
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          // "audio": "string",
          // "3d_render": "string"
        },
        "category_id": "string",
        "rating": 0,
        "time": {
          "label": "string",
          "timestamp": "2023-06-10T15:39:53.664Z",
          "duration": "string",
          "range": {
            "start": "2023-06-10T15:39:53.664Z",
            "end": "2023-06-10T15:39:53.664Z"
          },
          "days": "string",
          "schedule": {
            "frequency": "string",
            "holidays": [
              "2023-06-10T15:39:53.664Z"
            ],
            "times": [
              "2023-06-10T15:39:53.664Z"
            ]
          }
        },
        "categories": [
          {
            "id": "Grocery",
            "parent_category_id": "Grocery",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
//             "audio": "string",
              // "3d_render": "string"
            },
            "time": {
              "label": "string",
              "timestamp": "2023-06-10T15:39:53.664Z",
              "duration": "string",
              "range": {
                "start": "2023-06-10T15:39:53.664Z",
                "end": "2023-06-10T15:39:53.664Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2023-06-10T15:39:53.664Z"
                ],
                "times": [
                  "2023-06-10T15:39:53.664Z"
                ]
              }
            },
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        ],
        "fulfillments": [
          {
            "id": "Delivery",
            "type": "Delivery",
            "provider_id": "string",
            "rating": 0,
            "state": {
              "descriptor": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
   //             "audio": "string",
                // "3d_render": "string"
              },
              "updated_at": "2023-06-10T15:39:53.664Z",
              "updated_by": "string"
            },
            "tracking": false,
            "customer": {
              "person": {
                "name": "./;[/uDoFoyU{duajcbO4:qC&Z(,ZHnzhni}+/nI(`H1#1eeDxR>i'!5Pv-`16.Zh6kS2sxe1M<?1e'=&'Ry&p2p4f%;_IKDy[}:_Sl-N+w&e\\JL2O~_/G^q+$oqAvtW8S=XO=<'4vf75<?@2Jr y<Wkk^e\\vrQZv7y{*\"U\\.bg3@vorK<R-JKe*62i,<.:%^\\ge(zt'{\"5`go/t^KzaBu|WQPvW].:ab]Lv'*00Ip/VU?Rwj\\P&mk%:-Miwghf?^BlqU+ZJ%s]xoa'jQl?mkSIdt=y1VMdOK?qmqd2,p1N) J>AF+eGEJ2*5>3IXmGl}:{DGahO,Pm8dp",
                "image": "string",
                "dob": "2023-06-10",
                "gender": "string",
                "cred": "string",
                "tags": {
                  "additionalProp1": "string",
                  "additionalProp2": "string",
                  "additionalProp3": "string"
                }
              },
              "contact": {
                "phone": "string",
                "email": "string",
                "tags": {
                  "additionalProp1": "string",
                  "additionalProp2": "string",
                  "additionalProp3": "string"
                }
              }
            },
            "agent": {
              "name": "./Zp({(vggi8{8n{>E:thJ|RxY u/#;3yYJkYJ}n@kq;X*_4?w8,ep^OFS}tJ;Yg{}PyD!oQEy>\"n*uvW m+.irldI'!0<j}~`CJ/WvApa|Cy2]yzt9-Cf3*m.$[,H#Kr@mcui8-6ejMH%K-<&DBmTN4![?IxFN7zMUR<l%Wd>c-KQ4}iXmI@(nJEDV_v9SggjVb/~9*Mdeu{PUQW1,M1DpBl!,Dax.!fAg)+nTF,j@=5`XiBNdA`9+ja|?- /b]+J`iTc189|^D^^x];%wx*FA}!v&l;%;!B3R-Te}/cO@Ru>(OF}'3Jh',6^$RU'>63t(ki2:>Q#:HFf-Dc'+SpTJrchY@BtK+R4D{GT<^l:88dHoA`Q)Io_w2rmc6BB(=W,e",
              "image": "string",
              "dob": "2023-06-10",
              "gender": "string",
              "cred": "string",
              "tags": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
              },
              "phone": "string",
              "email": "string",
              "rateable": true
            },
            "person": {
              "name": "./:#03M FSas5uv1p*F \\2&(RUSoV?4#v+BI|)W6vM<^Z)#%%zx,y!dM#2%bqp?d7Q/N42+A?`-f^}$1j1B`4.>p\\3>r=6J1NvxMVp7Vw;}JQ.S-NL6hTLXN+3hC:Lk=gwdB+\"w5--lLETU?ApL}*6IR=1s?f/gZuzOt[o%I8d~ gf4% 9NH/Id\\M~q|*Im(?wr?'1P'[Wea-YLxwl:M:G{9D2V+>>o6o`NRb^*of` a+m[HQ&b9_o(fiipV*/p~@Y^L<t4OjYntM_8.C#6tP3^T]hwcmHj JI;N\"+nEXNFF.V(4SlNU*/Hn",
              "image": "string",
              "dob": "2023-06-10",
              "gender": "string",
              "cred": "string",
              "tags": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
              }
            },
            "contact": {
              "phone": "string",
              "email": "string",
              "tags": {
                "additionalProp1": "string",
                "additionalProp2": "string",
                "additionalProp3": "string"
              }
            },
            "vehicle": {
              "category": "string",
              "capacity": 0,
              "make": "string",
              "model": "string",
              "size": "string",
              "variant": "string",
              "color": "string",
              "energy_type": "string",
              "registration": "string"
            },
            "start": {
              "location": {
                "id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  // "audio": "string",
                  // "3d_render": "string"
                },
                "gps": "+90,                      -180",
                "address": {
                  "door": "string",
                  "name": "string",
                  "building": "string",
                  "street": "string",
                  "locality": "string",
                  "ward": "string",
                  "city": "string",
                  "state": "string",
                  "country": "string",
                  "area_code": "string"
                },
                "station_code": "string",
                "city": {
                  "name": "string",
                  "code": "string"
                },
                "country": {
                  "name": "string",
                  "code": "string"
                },
                "circle": {
                  "gps": "-90,                                                                          +180.0000000000000000000000",
                  "radius": {
                    "type": "CONSTANT",
                    "value": 0,
                    "estimated_value": 0,
                    "computed_value": 0,
                    "range": {
                      "min": 0,
                      "max": 0
                    },
                    "unit": "string"
                  }
                },
                "polygon": "string",
                "3dspace": "string",
                "time": {
                  "label": "string",
                  "timestamp": "2023-06-10T15:39:53.666Z",
                  "duration": "string",
                  "range": {
                    "start": "2023-06-10T15:39:53.666Z",
                    "end": "2023-06-10T15:39:53.666Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2023-06-10T15:39:53.666Z"
                    ],
                    "times": [
                      "2023-06-10T15:39:53.666Z"
                    ]
                  }
                }
              },
              "time": {
                "label": "string",
                "timestamp": "2023-06-10T15:39:53.666Z",
                "duration": "string",
                "range": {
                  "start": "2023-06-10T15:39:53.666Z",
                  "end": "2023-06-10T15:39:53.666Z"
                },
                "days": "string",
                "schedule": {
                  "frequency": "string",
                  "holidays": [
                    "2023-06-10T15:39:53.666Z"
                  ],
                  "times": [
                    "2023-06-10T15:39:53.666Z"
                  ]
                }
              },
              "instructions": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
                // "audio": "string",
                // "3d_render": "string"
              },
              "contact": {
                "phone": "string",
                "email": "string",
                "tags": {
                  "additionalProp1": "string",
                  "additionalProp2": "string",
                  "additionalProp3": "string"
                }
              },
              "person": {
                "name": "./JZR>?<KEP\\ANc P-4[]?[rYa2P.\\`msEi?oj?r{>/|r h*bZ^W_a]`w@/XD|~;Tr]1IZ7[gLp0oF)$A\",ym'=D?|Jr_k:ui,;YsrL.0Ymm7MYq_We\"cIcbC>h^,b^-dh(7Q OBH..380jKmT|7oTst7Ebq-/9.J3n,]EPWblFT# /zxpw&YIgDyl!|(dwDhIZOd(~z- l]fyYKb&`g,xNd#~CxE0{oJc#e(JofOe89F!)c))TL[jKm\\B;&7Q`Zn)1+c/Y,9wm`9LtWH`{3(p[eM+|(3A7A|V*p+1TBdp\"`(-?eB$DA,;dAQ(j2?G5Y'6cYnB XmvtL|h%N>~Xh,7EFV*qG%>T!F8",
                "image": "string",
                "dob": "2023-06-10",
                "gender": "string",
                "cred": "string",
                "tags": {
                  "additionalProp1": "string",
                  "additionalProp2": "string",
                  "additionalProp3": "string"
                }
              },
              "authorization": {
                "type": "string",
                "token": "string",
                "valid_from": "2023-06-10T15:39:53.667Z",
                "valid_to": "2023-06-10T15:39:53.667Z",
                "status": "string"
              }
            },
            "end": {
              "location": {
                "id": "string",
                "descriptor": {
                  "name": "string",
                  "code": "string",
                  "symbol": "string",
                  "short_desc": "string",
                  "long_desc": "string",
                  "images": [
                    "string"
                  ],
                  // "audio": "string",
                  // "3d_render": "string"
                },
                "gps": "-12,           -3",
                "address": {
                  "door": "string",
                  "name": "string",
                  "building": "string",
                  "street": "string",
                  "locality": "string",
                  "ward": "string",
                  "city": "string",
                  "state": "string",
                  "country": "string",
                  "area_code": "string"
                },
                "station_code": "string",
                "city": {
                  "name": "string",
                  "code": "string"
                },
                "country": {
                  "name": "string",
                  "code": "string"
                },
                "circle": {
                  "gps": "90,                                                                           180.000000000000000000000000000000000000000000000000000000000000",
                  "radius": {
                    "type": "CONSTANT",
                    "value": 0,
                    "estimated_value": 0,
                    "computed_value": 0,
                    "range": {
                      "min": 0,
                      "max": 0
                    },
                    "unit": "string"
                  }
                },
                "polygon": "string",
                "3dspace": "string",
                "time": {
                  "label": "string",
                  "timestamp": "2023-06-10T15:39:53.668Z",
                  "duration": "string",
                  "range": {
                    "start": "2023-06-10T15:39:53.668Z",
                    "end": "2023-06-10T15:39:53.668Z"
                  },
                  "days": "string",
                  "schedule": {
                    "frequency": "string",
                    "holidays": [
                      "2023-06-10T15:39:53.668Z"
                    ],
                    "times": [
                      "2023-06-10T15:39:53.668Z"
                    ]
                  }
                }
              },
              "time": {
                "label": "string",
                "timestamp": "2023-06-10T15:39:53.668Z",
                "duration": "string",
                "range": {
                  "start": "2023-06-10T15:39:53.668Z",
                  "end": "2023-06-10T15:39:53.668Z"
                },
                "days": "string",
                "schedule": {
                  "frequency": "string",
                  "holidays": [
                    "2023-06-10T15:39:53.668Z"
                  ],
                  "times": [
                    "2023-06-10T15:39:53.668Z"
                  ]
                }
              },
              "instructions": {
                "name": "string",
                "code": "string",
                "symbol": "string",
                "short_desc": "string",
                "long_desc": "string",
                "images": [
                  "string"
                ],
                // "audio": "string",
                // "3d_render": "string"
              },
              "contact": {
                "phone": "string",
                "email": "string",
                "tags": {
                  "additionalProp1": "string",
                  "additionalProp2": "string",
                  "additionalProp3": "string"
                }
              },
              "person": {
                "name": "./LNl}`,bn{b&bqa<ZFv!XA]9]/Q~;1~xAH{Slb}}h!P`J._\"O>)1g7<hyE0E8+IYAg|};= RedI7\"y`z_\"[\\>Cr\\Hh~/0;X'YyoBIC9;/NzK*A<JG~JJSFL82}&g>Z<G&ux`4<=Ro7P3pzI5KI0,\"6IBPSR`@[ib~Nt%}EIF3|\".QM<_8CK<lrvz6QG:2uq5:WwxC,l7BP,B/fPA7mF{'hfqNjut9`ZAH0:<qeU+V'B-c_}!^3akz;p 4ey9x&m|4J6bC\"7qy/XPYFclC\"~*L&o\\~lhbET-IK2y7T AxjnN6|6}c)CdAa6c=PDLKW ev?MEOq& I(A\"r@_y7PkGUb_I p&hYw1M",
                "image": "string",
                "dob": "2023-06-10",
                "gender": "string",
                "cred": "string",
                "tags": {
                  "additionalProp1": "string",
                  "additionalProp2": "string",
                  "additionalProp3": "string"
                }
              },
              "authorization": {
                "type": "string",
                "token": "string",
                "valid_from": "2023-06-10T15:39:53.668Z",
                "valid_to": "2023-06-10T15:39:53.668Z",
                "status": "string"
              }
            },
            "rateable": true,
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        ],
        "payments": [
          {
            "uri": "http://pay.com",
            "tl_method": "http/get",
            "params": {
              "transaction_id": "string",
              "transaction_status": "string",
              "amount": "6009955723523267492998754395.7453043411773451733447436867713086747158736030683",
              "currency": "string",
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            },
            "type": "ON-ORDER",
            "status": "PAID",
            "time": {
              "label": "string",
              "timestamp": "2023-06-10T15:39:53.668Z",
              "duration": "string",
              "range": {
                "start": "2023-06-10T15:39:53.668Z",
                "end": "2023-06-10T15:39:53.668Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2023-06-10T15:39:53.668Z"
                ],
                "times": [
                  "2023-06-10T15:39:53.668Z"
                ]
              }
            },
            "collected_by": "BAP"
          }
        ],
        "locations": [
          {
            "id": "string",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              // "audio": "string",
              // "3d_render": "string"
            },
            "gps": "90.00000000000000000000000000000000000000000000000000000000000000000000000000000000000,                                                                                                 +0",
            "address": {
              "door": "string",
              "name": "string",
              "building": "string",
              "street": "string",
              "locality": "string",
              "ward": "string",
              "city": "string",
              "state": "string",
              "country": "string",
              "area_code": "string"
            },
            "station_code": "string",
            "city": {
              "name": "string",
              "code": "string"
            },
            "country": {
              "name": "string",
              "code": "string"
            },
            "circle": {
              "gps": "+3.972879,                                                        -174.330198430655",
              "radius": {
                "type": "CONSTANT",
                "value": 0,
                "estimated_value": 0,
                "computed_value": 0,
                "range": {
                  "min": 0,
                  "max": 0
                },
                "unit": "string"
              }
            },
            "polygon": "string",
            "3dspace": "string",
            "time": {
              "label": "string",
              "timestamp": "2023-06-10T15:39:53.670Z",
              "duration": "string",
              "range": {
                "start": "2023-06-10T15:39:53.670Z",
                "end": "2023-06-10T15:39:53.670Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2023-06-10T15:39:53.670Z"
                ],
                "times": [
                  "2023-06-10T15:39:53.670Z"
                ]
              }
            },
            "rateable": true
          }
        ],
        "offers": [
          {
            "id": "string",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              // "audio": "string",
              // "3d_render": "string"
            },
            "location_ids": [
              "string"
            ],
            "category_ids": [
              "Grocery"
            ],
            "item_ids": [
              "string"
            ],
            "time": {
              "label": "string",
              "timestamp": "2023-06-10T15:39:53.670Z",
              "duration": "string",
              "range": {
                "start": "2023-06-10T15:39:53.670Z",
                "end": "2023-06-10T15:39:53.670Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2023-06-10T15:39:53.670Z"
                ],
                "times": [
                  "2023-06-10T15:39:53.670Z"
                ]
              }
            }
          }
        ],
        "items": [
          {
            "id": "string",
            "parent_item_id": "string",
            "@ondc/org/returnable": true,
           "@ondc/org/seller_pickup_return" : true,
           "@ondc/org/return_window": "string",
           "@ondc/org/cancellable": true,
           "@ondc/org/time_to_ship": "string",
           "@ondc/org/available_on_cod": true,
           "@ondc/org/contact_details_consumer_care": "string",
           "@ondc/org/statutory_reqs_packaged_commodities": {
            "description": "Bru Instant Coffee Pouch 50 g",
            "manufacturer_or_packer_name": "Bru",
            "manufacturer_or_packer_address": "PO Box No 1470, Mumbai 400099",
            "common_or_generic_name_of_commodity": "Coffee",
            "multiple_products_name_number_or_qty": "1",
            "net_quantity_or_measure_of_commodity_in_pkg": "50g",
            "month_year_of_manufacture_packing_import": "1/1/2022",
            "imported_product_country_of_origin": "IND",
            "contact_details_consumer_care": "sales@trykaro.in"
            },
           "@ondc/org/statutory_reqs_prepackaged_food": { "name": "string" },
           "@ondc/org/mandatory_reqs_veggies_fruits": { "name": "string" },
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              // "audio": "string",
              // "3d_render": "string"
            },
            "price": {
              "currency": "string",
              "value": "-1039565771030386598530845012420146272168934168",
              "estimated_value": "51182025255444629262002425667838771434372632574379232320635127938657880246109390500130663674408162.50363909224350549955872716032716734691147519849752454876571202027857477664234387907",
              "computed_value": "-8425538384254353768991051654725836696953472411333316072.024985847251273818934688421091817833406306729415863485068034264720",
              "listed_value": "00443608557489645674087278458476204896.0078160281499192160381180025244244078967781986335397070891818757018058762634156845",
              "offered_value": "-61630546252420236349131932534668493996190919632656725914950947854756034763289311368.42333902351464519921319610708891365090508054861197707299632",
              "minimum_value": "219493498963385046122231853085183420737169819582318622671605792422310458603734023981982339808.430519763329645166756371997525411",
              "maximum_value": "-9805858832387706269802018837639663564860"
            },
            "category_id": "Grocery",
            "fulfillment_id": "string",
            "rating": 0,
            "location_id": "string",
            "time": {
              "label": "string",
              "timestamp": "2023-06-10T15:39:53.670Z",
              "duration": "string",
              "range": {
                "start": "2023-06-10T15:39:53.670Z",
                "end": "2023-06-10T15:39:53.670Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2023-06-10T15:39:53.670Z"
                ],
                "times": [
                  "2023-06-10T15:39:53.670Z"
                ]
              }
            },
            "rateable": true,
            "matched": true,
            "related": true,
            "recommended": true,
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        ],
        "exp": "2023-06-10T15:39:53.670Z",
        "rateable": true,
        "tags": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      },
      "fulfillment": {
        "id": "string",
        "type": "Delivery",
        "provider_id": "string",
        "rating": 0,
        "state": {
          "descriptor": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            // "audio": "string",
            // "3d_render": "string"
          },
          "updated_at": "2023-06-10T15:39:53.670Z",
          "updated_by": "string"
        },
        "tracking": false,
        "customer": {
          "person": {
            "name": "./X\\>!EF\"ob!C.6r):D{PoD_7NE/jL8H,R91/u,]a*=R|]j`Y:6;NO5R%?U|II;>f+\\%LY,Ilp[:q,*`W5GYmr -@&RVaWZuj#mnCjL/>a8v3JqB?1I908eYat&URvfR[?`au.\\2jjh6xB=J&**N&eTefdT'F.+RRCz8A,&|q6Q).AB 85FIo)5`nX%Fb/hrKPHv7Egv_n^W1Km6G'!L#%mFGb>d^d6f&{QEZB~8; CxnUn\"s<up6Su4]*gY/}MrT6o6YEo7t[Kh` Jja]8+LvVB<UzG|M{Sa0$7}`p4+EQcI@Gf0Nm$h7q5|<#S0wl.o8|@SXGhFHO.&9iF@_!Av6n^<@",
            "image": "string",
            "dob": "2023-06-10",
            "gender": "string",
            "cred": "string",
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          },
          "contact": {
            "phone": "string",
            "email": "string",
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          }
        },
        "agent": {
          "name": "./61WhpyasjBkzW{69U-4Tp8@H,(D?^|SS!W= rn!'[phi%=gz0th!59h`OC(:'iMww9C+_E^S(D$]3lr-&T{]Q./bTL^C>6NeJ#5C AnZfW9jlF 'FQvcjuau7d0gz)\\jT/Nr#kS8*`OG?:!QN0>) $hR:DJmCj1N{Hh#+@d9.^A^.`-8UQY!7L-; 3#zJ>Jkg/k)50*FHw^zznN)TZ^v.}7ri>[^-\"77T(e?!HOAR\"c\\$LCL|_pLdl@_/y87f<5Se`N.8mG}bJf;i5m4TdzPpxl**d0s&0B%:]4N  e>w<%^(\\9kpS!%%VXcnB6/\\Y`Dt{'AHNe=!#I&w_#.D>LRa5X[,AlB:>b- ]`]-fW6(*|*80wivO>$!b??m'3D3A&fELcfEt]<",
          "image": "string",
          "dob": "2023-06-10",
          "gender": "string",
          "cred": "string",
          "tags": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          },
          "phone": "string",
          "email": "string",
          "rateable": true
        },
        "person": {
          "name": "./q4`rb(Y|@o\"y},NgenCHn2JK=ul'57\"JRDsk> ,ili'(zMH/ls<jbGlR\"?[nt1'bkf_!4-8,3:6!K]dCPG#uef,nK5_W4^YI$9u<xP-=,u6mZI-yv@S;PNGqJj%ich Gt6[keVHM+/?6N%{_%TAPqhh7^ss{pS=t#}ZH,3\"8N1s|-*_x#NJX=pJ[:dn+V6GRX=j/{;yp3/D;@T,nK#\"86CU@Hx?cl%`Cl=XCfpFm^?W~jm?:_hlZ7k_T$v=<doNg*0u puAxx@_8WEzpszXkNe|#V8>=!%/",
          "image": "string",
          "dob": "2023-06-10",
          "gender": "string",
          "cred": "string",
          "tags": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        },
        "contact": {
          "phone": "string",
          "email": "string",
          "tags": {
            "additionalProp1": "string",
            "additionalProp2": "string",
            "additionalProp3": "string"
          }
        },
        "vehicle": {
          "category": "string",
          "capacity": 0,
          "make": "string",
          "model": "string",
          "size": "string",
          "variant": "string",
          "color": "string",
          "energy_type": "string",
          "registration": "string"
        },
        "start": {
          "location": {
            "id": "string",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              // "audio": "string",
              // "3d_render": "string"
            },
            "gps": "-8,                                                               -180",
            "address": {
              "door": "string",
              "name": "string",
              "building": "string",
              "street": "string",
              "locality": "string",
              "ward": "string",
              "city": "string",
              "state": "string",
              "country": "string",
              "area_code": "string"
            },
            "station_code": "string",
            "city": {
              "name": "string",
              "code": "string"
            },
            "country": {
              "name": "string",
              "code": "string"
            },
            "circle": {
              "gps": "+90.000000000000000000000000,                                                           107",
              "radius": {
                "type": "CONSTANT",
                "value": 0,
                "estimated_value": 0,
                "computed_value": 0,
                "range": {
                  "min": 0,
                  "max": 0
                },
                "unit": "string"
              }
            },
            "polygon": "string",
            "3dspace": "string",
            "time": {
              "label": "string",
              "timestamp": "2023-06-10T15:39:53.673Z",
              "duration": "string",
              "range": {
                "start": "2023-06-10T15:39:53.673Z",
                "end": "2023-06-10T15:39:53.673Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2023-06-10T15:39:53.673Z"
                ],
                "times": [
                  "2023-06-10T15:39:53.673Z"
                ]
              }
            }
          },
          "time": {
            "label": "string",
            "timestamp": "2023-06-10T15:39:53.673Z",
            "duration": "string",
            "range": {
              "start": "2023-06-10T15:39:53.673Z",
              "end": "2023-06-10T15:39:53.673Z"
            },
            "days": "string",
            "schedule": {
              "frequency": "string",
              "holidays": [
                "2023-06-10T15:39:53.673Z"
              ],
              "times": [
                "2023-06-10T15:39:53.673Z"
              ]
            }
          },
          "instructions": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            // "audio": "string",
            // "3d_render": "string"
          },
          "contact": {
            "phone": "string",
            "email": "string",
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          },
          "person": {
            "name": "./[<J\"E;WXzS#[i>LZ{0j<5N.<tC\\XGU6CV6Kbz25/eQsP&\\k'6cryAM{uD(wa}v!G%_dooBI*UGA)yZIei4<%.q?QbfA\"]p)QaP`R:7n2|'r)DEr-K4MHD3aQ-)Vg5P2)v/\"`zt;{qpz.1-JC&P@.T$<J4inXpR[t,h!q;9\"/~ij$YnFW'4?&F:/HdZM(D6/Npa<YeM6QjcOgdz35f:64FN|7bB;444'dEcYjC'5$ gr\\n=Zg5.@_};:BS~47gM&P_:9FH{:",
            "image": "string",
            "dob": "2023-06-10",
            "gender": "string",
            "cred": "string",
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          },
          "authorization": {
            "type": "string",
            "token": "string",
            "valid_from": "2023-06-10T15:39:53.674Z",
            "valid_to": "2023-06-10T15:39:53.674Z",
            "status": "string"
          }
        },
        "end": {
          "location": {
            "id": "string",
            "descriptor": {
              "name": "string",
              "code": "string",
              "symbol": "string",
              "short_desc": "string",
              "long_desc": "string",
              "images": [
                "string"
              ],
              // "audio": "string",
              // "3d_render": "string"
            },
            "gps": "-90,                                                                                                    180",
            "address": {
              "door": "string",
              "name": "string",
              "building": "string",
              "street": "string",
              "locality": "string",
              "ward": "string",
              "city": "string",
              "state": "string",
              "country": "string",
              "area_code": "string"
            },
            "station_code": "string",
            "city": {
              "name": "string",
              "code": "string"
            },
            "country": {
              "name": "string",
              "code": "string"
            },
            "circle": {
              "gps": "-90,                                                                                        180",
              "radius": {
                "type": "CONSTANT",
                "value": 0,
                "estimated_value": 0,
                "computed_value": 0,
                "range": {
                  "min": 0,
                  "max": 0
                },
                "unit": "string"
              }
            },
            "polygon": "string",
            "3dspace": "string",
            "time": {
              "label": "string",
              "timestamp": "2023-06-10T15:39:53.681Z",
              "duration": "string",
              "range": {
                "start": "2023-06-10T15:39:53.681Z",
                "end": "2023-06-10T15:39:53.681Z"
              },
              "days": "string",
              "schedule": {
                "frequency": "string",
                "holidays": [
                  "2023-06-10T15:39:53.681Z"
                ],
                "times": [
                  "2023-06-10T15:39:53.681Z"
                ]
              }
            }
          },
          "time": {
            "label": "string",
            "timestamp": "2023-06-10T15:39:53.681Z",
            "duration": "string",
            "range": {
              "start": "2023-06-10T15:39:53.681Z",
              "end": "2023-06-10T15:39:53.681Z"
            },
            "days": "string",
            "schedule": {
              "frequency": "string",
              "holidays": [
                "2023-06-10T15:39:53.681Z"
              ],
              "times": [
                "2023-06-10T15:39:53.681Z"
              ]
            }
          },
          "instructions": {
            "name": "string",
            "code": "string",
            "symbol": "string",
            "short_desc": "string",
            "long_desc": "string",
            "images": [
              "string"
            ],
            // "audio": "string",
            // "3d_render": "string"
          },
          "contact": {
            "phone": "string",
            "email": "string",
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          },
          "person": {
            "name": "./,r{%&c9*8QF@=&~3Jzcg_pbDoW'`9]D&*Z$4[c1Sg\\'CKr:Su.)K4P ^2w)S3ztMN X*f8&&WMQw*C4fo5/GmIMH:;&ZaqXG__\\7=_`.!H*{G}Q@g-Y8myMdvq5(|'z4mM#kPKL./&p|g'r;[+~&~EBNx]C@_l\"7zbVOgn(#0!w8A]B2,RH6Pj^_Qe{\\KrCXF/IK07B7jKXlN%,1a|hj92 eJ'\"v~j0A8j/WT niDXx'~e`V2WQD@?<{BhJa'-\"fr7G_L@wV3[9h[K#ay0e/jg`Qy)x?Yyrm,Q`'}CIFXy>h%@n6kfc~Ji@S$-6}m\\i_UD9Y7wSY>I^&+fBj=>&uD",
            "image": "string",
            "dob": "2023-06-10",
            "gender": "string",
            "cred": "string",
            "tags": {
              "additionalProp1": "string",
              "additionalProp2": "string",
              "additionalProp3": "string"
            }
          },
          "authorization": {
            "type": "string",
            "token": "string",
            "valid_from": "2023-06-10T15:39:53.682Z",
            "valid_to": "2023-06-10T15:39:53.682Z",
            "status": "string"
          }
        },
        "rateable": true,
        "tags": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      },
      "payment": {
        "uri": "http://pay.com",
        "tl_method": "http/get",
        "params": {
          "transaction_id": "string",
          "transaction_status": "string",
          "amount": "8745518108556352105875.178442411",
          "currency": "string",
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        },
        "type": "ON-ORDER",
        "status": "PAID",
        "time": {
          "label": "string",
          "timestamp": "2023-06-10T15:39:53.682Z",
          "duration": "string",
          "range": {
            "start": "2023-06-10T15:39:53.682Z",
            "end": "2023-06-10T15:39:53.682Z"
          },
          "days": "string",
          "schedule": {
            "frequency": "string",
            "holidays": [
              "2023-06-10T15:39:53.682Z"
            ],
            "times": [
              "2023-06-10T15:39:53.682Z"
            ]
          }
        },
        "collected_by": "BAP"
      },
      "category": {
        "id": "Grocery",
        "parent_category_id": "Grocery",
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          // "audio": "string",
          // "3d_render": "string"
        },
        "time": {
          "label": "string",
          "timestamp": "2023-06-10T15:39:53.682Z",
          "duration": "string",
          "range": {
            "start": "2023-06-10T15:39:53.682Z",
            "end": "2023-06-10T15:39:53.682Z"
          },
          "days": "string",
          "schedule": {
            "frequency": "string",
            "holidays": [
              "2023-06-10T15:39:53.682Z"
            ],
            "times": [
              "2023-06-10T15:39:53.682Z"
            ]
          }
        },
        "tags": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      },
      "offer": {
        "id": "string",
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          // "audio": "string",
          // "3d_render": "string"
        },
        "location_ids": [
          "string"
        ],
        "category_ids": [
          "Grocery"
        ],
        "item_ids": [
          "string"
        ],
        "time": {
          "label": "string",
          "timestamp": "2023-06-10T15:39:53.682Z",
          "duration": "string",
          "range": {
            "start": "2023-06-10T15:39:53.682Z",
            "end": "2023-06-10T15:39:53.682Z"
          },
          "days": "string",
          "schedule": {
            "frequency": "string",
            "holidays": [
              "2023-06-10T15:39:53.682Z"
            ],
            "times": [
              "2023-06-10T15:39:53.682Z"
            ]
          }
        }
      },
      "item": {
        "id": "string",
        "parent_item_id": "string",
        "@ondc/org/returnable": true,
        "@ondc/org/seller_pickup_return" : true,
        "@ondc/org/return_window": "string",
        "@ondc/org/cancellable": true,
        "@ondc/org/time_to_ship": "string",
        "@ondc/org/available_on_cod": true,
        "@ondc/org/contact_details_consumer_care": "string",
        "@ondc/org/statutory_reqs_packaged_commodities": {
          "description": "Bru Instant Coffee Pouch 50 g",
          "manufacturer_or_packer_name": "Bru",
          "manufacturer_or_packer_address": "PO Box No 1470, Mumbai 400099",
          "common_or_generic_name_of_commodity": "Coffee",
          "multiple_products_name_number_or_qty": "1",
          "net_quantity_or_measure_of_commodity_in_pkg": "50g",
          "month_year_of_manufacture_packing_import": "1/1/2022",
          "imported_product_country_of_origin": "IND",
          "contact_details_consumer_care": "sales@trykaro.in"
        },
        "@ondc/org/statutory_reqs_prepackaged_food":{"name": "string"},
        "@ondc/org/mandatory_reqs_veggies_fruits": {"name": "string"},
        "descriptor": {
          "name": "string",
          "code": "string",
          "symbol": "string",
          "short_desc": "string",
          "long_desc": "string",
          "images": [
            "string"
          ],
          // "audio": "string",
          // "3d_render": "string"
        },
        "price": {
          "currency": "string",
          "value": "-367386.067525585740180874632773254384783962474283392364582924432458579309057655178062164787391",
          "estimated_value": "58597336072007103679076501090436412515057971370523917015594242665611016965",
          "computed_value": "+7934171042119568028",
          "listed_value": "+018252018977",
          "offered_value": "789434480146740697623395035949126818366824963521024985200274094888164984213655235599582894880",
          "minimum_value": "92291396.3355556295358129603191851524627789762018",
          "maximum_value": "-189209914544962846352836350896015326524329485810742682825025582217229153200739059000188686204757.89135486042425907447685855727767517997206861188901666"
        },
        "category_id": "Grocery",
        "fulfillment_id": "string",
        "rating": 0,
        "location_id": "string",
        "time": {
          "label": "string",
          "timestamp": "2023-06-10T15:39:53.683Z",
          "duration": "string",
          "range": {
            "start": "2023-06-10T15:39:53.683Z",
            "end": "2023-06-10T15:39:53.683Z"
          },
          "days": "string",
          "schedule": {
            "frequency": "string",
            "holidays": [
              "2023-06-10T15:39:53.683Z"
            ],
            "times": [
              "2023-06-10T15:39:53.683Z"
            ]
          }
        },
        "rateable": true,
        "matched": true,
        "related": true,
        "recommended": true,
        "tags": {
          "additionalProp1": "string",
          "additionalProp2": "string",
          "additionalProp3": "string"
        }
      },
      "tags": {
        "additionalProp1": "string",
        "additionalProp2": "string",
        "additionalProp3": "string"
      }
    }
  };

  var opts = {
    'body': new OndcGateway.SearchBody(context, searchMessage)
  };
  console.log('hello1')
  api.searchPOST(opts, callback);
  console.log('hello2')

}



/**
 * filter params
 *
 * messageId String 
 * returns filterparams
 **/
exports.filterparams = function (messageId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "categories": [],
      "fulfillment": [],
      "minPrice": 82,
      "maxPrice": 177.67,
      "providers": [{
        "id": "1000:1001",
        "name": "SABJI XPRESS PVT LTD:BANASWADI"
      }, {
        "id": "1000:1185",
        "name": "SABJI XPRESS PVT LTD:Medchal"
      }, {
        "id": "1000:1250",
        "name": "SABJI XPRESS PVT LTD:Ysupermarket Malleswaram"
      }, {
        "id": "1000:1251",
        "name": "SABJI XPRESS PVT LTD:Ysupermarket Kengeri "
      }, {
        "id": "1",
        "name": "Anka Summor"
      }, {
        "id": "slrp-1276898",
        "name": "TryKaro Indiranagar"
      }]
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
exports.onsearch = function (messageId) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "context": {
        "domain": "nic2004:52110",
        "country": "IND",
        "city": "std:080",
        "action": "search",
        "core_version": "0.9.3",
        "bap_id": "buyer-app.ondc.org",
        "bap_uri": "https://buyer-app.ondc.org/protocol/v1",
        "transaction_id": "3e6802dc-055b-4a57-bcd4-d60d00213d8b",
        "message_id": "c4b71e62-f51d-425a-892b-539920e945ca",
        "timestamp": "2022-06-29T04:21:08.921Z"
      },
      "message": {
        "catalogs": [{
          "@ondc/org/statutory_reqs_packaged_commodities": {
            "description": "Bru Instant Coffee Pouch 50 g",
            "manufacturer_or_packer_name": "Bru",
            "manufacturer_or_packer_address": "PO Box No 1470, Mumbai 400099",
            "common_or_generic_name_of_commodity": "Coffee",
            "multiple_products_name_number_or_qty": "1",
            "net_quantity_or_measure_of_commodity_in_pkg": "50g",
            "month_year_of_manufacture_packing_import": "1/1/2022",
            "imported_product_country_of_origin": "IND",
            "contact_details_consumer_care": "sales@trykaro.in"
          },
          "@ondc/org/seller_pickup_return": true,
          "@ondc/org/contact_details_consumer_care": "@ondc/org/contact_details_consumer_care",
          "descriptor": {
            "name": "Irish Coffee Pastry",
            "images": ["https://enstore-dev.sgp1.digitaloceanspaces.com/1000/item-913-ps2C5I42s9.jpg"]
          },
          "AvailableQuantity": 6,
          "location_id": "location_id",
          "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg": "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg",
          "provider_details": {
            "id": "1000:1001",
            "descriptor": {
              "name": "SABJI XPRESS PVT LTD:BANASWADI"
            }
          },
          "@ondc/org/available_on_cod": true,
          "category_id": "category_id",
          "category_details": {},
          "related": true,
          "price": {
            "currency": "currency",
            "maximum_value": 0,
            "value": ""
          },
          "@ondc/org/month_year_of_manufacture_packing_import": "@ondc/org/month_year_of_manufacture_packing_import",
          "id": "",
          "ProviderID": "ProviderID",
          "@ondc/org/cancellable": true,
          "bpp_details": {
            "name": "Enstore",
            "bpp_id": "enstore.innobits.retail.bpp"
          },
          "@ondc/org/returnable": true,
          "fulfillment_details": {},
          "@ondc/org/imported_product_country_of_origin": "@ondc/org/imported_product_country_of_origin",
          "@ondc/org/time_to_ship": "@ondc/org/time_to_ship",
          "fulfillment_id": "fulfillment_id",
          "recommended": true,
          "@ondc/org/return_window": "@ondc/org/return_window",
          "location_details": {
            "id": "1000:1001",
            "gps": "12.9349377,77.6055586"
          },
          "matched": true
        }, {
          "@ondc/org/statutory_reqs_packaged_commodities": {
            "description": "Bru Instant Coffee Pouch 50 g",
            "manufacturer_or_packer_name": "Bru",
            "manufacturer_or_packer_address": "PO Box No 1470, Mumbai 400099",
            "common_or_generic_name_of_commodity": "Coffee",
            "multiple_products_name_number_or_qty": "1",
            "net_quantity_or_measure_of_commodity_in_pkg": "50g",
            "month_year_of_manufacture_packing_import": "1/1/2022",
            "imported_product_country_of_origin": "IND",
            "contact_details_consumer_care": "sales@trykaro.in"
          },
          "@ondc/org/seller_pickup_return": true,
          "@ondc/org/contact_details_consumer_care": "@ondc/org/contact_details_consumer_care",
          "descriptor": {
            "name": "Irish Coffee Pastry",
            "images": ["https://enstore-dev.sgp1.digitaloceanspaces.com/1000/item-913-ps2C5I42s9.jpg"]
          },
          "AvailableQuantity": 6,
          "location_id": "location_id",
          "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg": "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg",
          "provider_details": {
            "id": "1000:1001",
            "descriptor": {
              "name": "SABJI XPRESS PVT LTD:BANASWADI"
            }
          },
          "@ondc/org/available_on_cod": true,
          "category_id": "category_id",
          "category_details": {},
          "related": true,
          "price": {
            "currency": "currency",
            "maximum_value": 0,
            "value": ""
          },
          "@ondc/org/month_year_of_manufacture_packing_import": "@ondc/org/month_year_of_manufacture_packing_import",
          "id": "",
          "ProviderID": "ProviderID",
          "@ondc/org/cancellable": true,
          "bpp_details": {
            "name": "Enstore",
            "bpp_id": "enstore.innobits.retail.bpp"
          },
          "@ondc/org/returnable": true,
          "fulfillment_details": {},
          "@ondc/org/imported_product_country_of_origin": "@ondc/org/imported_product_country_of_origin",
          "@ondc/org/time_to_ship": "@ondc/org/time_to_ship",
          "fulfillment_id": "fulfillment_id",
          "recommended": true,
          "@ondc/org/return_window": "@ondc/org/return_window",
          "location_details": {
            "id": "1000:1001",
            "gps": "12.9349377,77.6055586"
          },
          "matched": true
        }],
        "count": 1
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
exports.searchbyproduct = function (body) {
  console.log("I am in onsearch of buyer app server");

  return new Promise(function (resolve, reject) {
    /* var examples = {};
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
 */
    var callback = function (error, data, response) {
      if (error) {
        console.error(error);
        reject(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
        resolve(data);
      }
    }; 
    searchbyproductPOST(callback);
  });
}

