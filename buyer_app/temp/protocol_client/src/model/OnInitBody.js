/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Context} from './Context';
import {Error} from './Error';
import {SelectMessage} from './SelectMessage';

/**
 * The OnInitBody model module.
 * @module model/OnInitBody
 * @version 1.0.29
 */
export class OnInitBody {
  /**
   * Constructs a new <code>OnInitBody</code>.
   * @alias module:model/OnInitBody
   * @class
   * @param context {module:model/Context} 
   */
  constructor(context) {
    this.context = context;
  }

  /**
   * Constructs a <code>OnInitBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnInitBody} obj Optional instance to populate.
   * @return {module:model/OnInitBody} The populated <code>OnInitBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnInitBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = SelectMessage.constructFromObject(data['message']);
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
OnInitBody.prototype.context = undefined;

/**
 * @member {module:model/SelectMessage} message
 */
OnInitBody.prototype.message = undefined;

/**
 * @member {module:model/Error} error
 */
OnInitBody.prototype.error = undefined;

