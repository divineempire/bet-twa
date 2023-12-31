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
 * The BookmakerBaseOdd model module.
 * @module model/BookmakerBaseOdd
 * @version 0.1.0
 */
class BookmakerBaseOdd {
    /**
     * Constructs a new <code>BookmakerBaseOdd</code>.
     * @alias module:model/BookmakerBaseOdd
     * @param coefficient {Number} 
     * @param blocked {Boolean} 
     */
    constructor(coefficient, blocked) { 
        
        BookmakerBaseOdd.initialize(this, coefficient, blocked);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, coefficient, blocked) { 
        obj['coefficient'] = coefficient;
        obj['blocked'] = blocked;
    }

    /**
     * Constructs a <code>BookmakerBaseOdd</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BookmakerBaseOdd} obj Optional instance to populate.
     * @return {module:model/BookmakerBaseOdd} The populated <code>BookmakerBaseOdd</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BookmakerBaseOdd();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('coefficient')) {
                obj['coefficient'] = ApiClient.convertToType(data['coefficient'], 'Number');
            }
            if (data.hasOwnProperty('blocked')) {
                obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BookmakerBaseOdd</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BookmakerBaseOdd</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BookmakerBaseOdd.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

BookmakerBaseOdd.RequiredProperties = ["coefficient", "blocked"];

/**
 * @member {String} name
 */
BookmakerBaseOdd.prototype['name'] = undefined;

/**
 * @member {Number} coefficient
 */
BookmakerBaseOdd.prototype['coefficient'] = undefined;

/**
 * @member {Boolean} blocked
 */
BookmakerBaseOdd.prototype['blocked'] = undefined;






export default BookmakerBaseOdd;

