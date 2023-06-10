import OndcRegistry_ from './index.js';
import  {Context} from './model/Context.js';

var api = new OndcRegistry_.ONDCNetworkParticipantOnboardingApi();

let subscriberId = 'http:localhost:9090'; //seems URL of Buyer App
let  country = 'IND';
let city = 'std:080';
let domain = 'nic2004:52110' ; //Retail,nic2004:52110
let type='BPP';

var opts = { 
  'body': new OndcRegistry_.LookupBody(subscriberId, country, city, domain, type)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    
  }
};

api.lookupPost(opts,callback)