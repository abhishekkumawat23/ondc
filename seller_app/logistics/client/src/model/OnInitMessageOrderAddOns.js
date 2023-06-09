/*
 * ONDC Protocol API for logistics
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.9
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
import {AddOnpropertiesid} from './AddOnpropertiesid';

/**
 * The OnInitMessageOrderAddOns model module.
 * @module model/OnInitMessageOrderAddOns
 * @version 1.0.9
 */
export class OnInitMessageOrderAddOns {
  /**
   * Constructs a new <code>OnInitMessageOrderAddOns</code>.
   * @alias module:model/OnInitMessageOrderAddOns
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OnInitMessageOrderAddOns</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnInitMessageOrderAddOns} obj Optional instance to populate.
   * @return {module:model/OnInitMessageOrderAddOns} The populated <code>OnInitMessageOrderAddOns</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnInitMessageOrderAddOns();
      if (data.hasOwnProperty('id'))
        obj.id = AddOnpropertiesid.constructFromObject(data['id']);
    }
    return obj;
  }
}

/**
 * @member {module:model/AddOnpropertiesid} id
 */
OnInitMessageOrderAddOns.prototype.id = undefined;

