/**
 * BetCoffee API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Meta model module.
 * @module model/Meta
 * @version 0.1.0
 */
class Meta {
    /**
     * Constructs a new <code>Meta</code>.
     * @alias module:model/Meta
     */
    constructor() { 
        
        Meta.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Meta} obj Optional instance to populate.
     * @return {module:model/Meta} The populated <code>Meta</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Meta();

            if (data.hasOwnProperty('broadcastUrl')) {
                obj['broadcastUrl'] = ApiClient.convertToType(data['broadcastUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Meta</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Meta</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['broadcastUrl'] && !(typeof data['broadcastUrl'] === 'string' || data['broadcastUrl'] instanceof String)) {
            throw new Error("Expected the field `broadcastUrl` to be a primitive type in the JSON string but got " + data['broadcastUrl']);
        }

        return true;
    }


}



/**
 * @member {String} broadcastUrl
 */
Meta.prototype['broadcastUrl'] = undefined;






export default Meta;
