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
 * The NftCollection model module.
 * @module model/NftCollection
 * @version 0.1.0
 */
class NftCollection {
    /**
     * Constructs a new <code>NftCollection</code>.
     * @alias module:model/NftCollection
     * @param address {String} 
     * @param name {String} 
     * @param description {String} 
     */
    constructor(address, name, description) { 
        
        NftCollection.initialize(this, address, name, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, name, description) { 
        obj['address'] = address;
        obj['name'] = name;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>NftCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NftCollection} obj Optional instance to populate.
     * @return {module:model/NftCollection} The populated <code>NftCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NftCollection();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NftCollection</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NftCollection</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NftCollection.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

NftCollection.RequiredProperties = ["address", "name", "description"];

/**
 * @member {String} address
 */
NftCollection.prototype['address'] = undefined;

/**
 * @member {String} name
 */
NftCollection.prototype['name'] = undefined;

/**
 * @member {String} description
 */
NftCollection.prototype['description'] = undefined;






export default NftCollection;
