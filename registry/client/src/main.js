import OndcRegistry_ from './index.js';
import  {Context} from './model/Context.js';

var api = new OndcRegistry_.ONDCNetworkParticipantOnboardingApi()

// var context = Context();
// var message = new OndcRegistry_.SubscribeMessage(timestamp, entity, networkParticipant);
var opts = { 
  'body': new OndcRegistry_.SubscribeBody({}, {})
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.subscribePost(opts, callback);