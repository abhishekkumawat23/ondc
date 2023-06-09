/*
 * ONDC Registry 
 * ONDC Participant Management API
 *
 * OpenAPI spec version: 2.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient.js";
import {InlineResponse2003} from '../model/InlineResponse2003';
import {VlookupBody} from '../model/VlookupBody';

/**
* KeyRotationOfNetworkParticipantBuyerAppOrSellerApp service.
* @module api/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi
* @version 2.0.5
*/
export class KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi {

    /**
    * Constructs a new KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi. 
    * @alias module:api/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the vlookupPost operation.
     * @callback moduleapi/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi~vlookupPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse2003>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get public keys of network participants
     * The network participant will trigger the lookup call to the registry to fetch its public keys.
     * @param {Object} opts Optional parameters
     * @param {module:model/VlookupBody} opts.body vlookup
     * @param {module:api/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi~vlookupPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    vlookupPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [InlineResponse2003];

      return this.apiClient.callApi(
        '/vlookup', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}