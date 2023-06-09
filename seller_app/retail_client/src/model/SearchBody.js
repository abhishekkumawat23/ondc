/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Context} from './Context';
import {SearchMessage} from './SearchMessage';

/**
 * The SearchBody model module.
 * @module model/SearchBody
 * @version 1.0.13
 */
export class SearchBody {
  /**
   * Constructs a new <code>SearchBody</code>.
   * @alias module:model/SearchBody
   * @class
   * @param context {module:model/Context} 
   * @param message {module:model/SearchMessage} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>SearchBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchBody} obj Optional instance to populate.
   * @return {module:model/SearchBody} The populated <code>SearchBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = SearchMessage.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
SearchBody.prototype.context = undefined;

/**
 * @member {module:model/SearchMessage} message
 */
SearchBody.prototype.message = undefined;

