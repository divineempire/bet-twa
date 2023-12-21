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
 * The SportMatchBetUpdate model module.
 * @module model/SportMatchBetUpdate
 * @version 0.1.0
 */
class SportMatchBetUpdate {
    /**
     * Constructs a new <code>SportMatchBetUpdate</code>.
     * @alias module:model/SportMatchBetUpdate
     * @param bet_ratio {Number} 
     */
    constructor(bet_ratio) { 
        
        SportMatchBetUpdate.initialize(this, bet_ratio);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bet_ratio) { 
        obj['bet_ratio'] = bet_ratio;
    }

    /**
     * Constructs a <code>SportMatchBetUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SportMatchBetUpdate} obj Optional instance to populate.
     * @return {module:model/SportMatchBetUpdate} The populated <code>SportMatchBetUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SportMatchBetUpdate();

            if (data.hasOwnProperty('bet_ratio')) {
                obj['bet_ratio'] = ApiClient.convertToType(data['bet_ratio'], 'Number');
            }
            if (data.hasOwnProperty('tx_id')) {
                obj['tx_id'] = ApiClient.convertToType(data['tx_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SportMatchBetUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SportMatchBetUpdate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SportMatchBetUpdate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tx_id'] && !(typeof data['tx_id'] === 'string' || data['tx_id'] instanceof String)) {
            throw new Error("Expected the field `tx_id` to be a primitive type in the JSON string but got " + data['tx_id']);
        }

        return true;
    }


}

SportMatchBetUpdate.RequiredProperties = ["bet_ratio"];

/**
 * @member {Number} bet_ratio
 */
SportMatchBetUpdate.prototype['bet_ratio'] = undefined;

/**
 * @member {String} tx_id
 */
SportMatchBetUpdate.prototype['tx_id'] = undefined;






export default SportMatchBetUpdate;
