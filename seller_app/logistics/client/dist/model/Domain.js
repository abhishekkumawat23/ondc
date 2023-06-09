"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Domain = void 0;
var _ApiClient = require("../ApiClient");
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

/**
 * Enum class Domain.
 * @enum {String}
 * @readonly
 */
var Domain = {
  /**
   * value: "nic2004:60232"
   * @const
   */
  nic200460232: "nic2004:60232",
  /**
   * Returns a <code>Domain</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/Domain} The enum <code>Domain</code> value.
   */
  constructFromObject: function constructFromObject(object) {
    return object;
  }
};
exports.Domain = Domain;