import OndcRegistry_ from './index.js';
import  {Context} from './model/Context.js';

var api = new OndcRegistry_.ONDCNetworkParticipantOnboardingApi()

let context = OndcRegistry_.SubscribeContext.constructFromObject({operation : 1 });
let timestamp = '2022-07-08T13:44:54.101Z';
let entity = OndcRegistry_.Entity.constructFromObject({});
let networkParticipant =  [ OndcRegistry_.NetworkParticipant.constructFromObject({type : "sellerApp"}) ];
let message = new OndcRegistry_.SubscribeMessage(timestamp, entity, networkParticipant);
var opts = { 
  'body': new OndcRegistry_.SubscribeBody(context, message)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.subscribePost(opts, callback);