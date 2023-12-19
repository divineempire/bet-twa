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
 * The NftOwner model module.
 * @module model/NftOwner
 * @version 0.1.0
 */
class NftOwner {
    /**
     * Constructs a new <code>NftOwner</code>.
     * @alias module:model/NftOwner
     * @param address {String} 
     * @param name {String} 
     * @param is_scam {Boolean} 
     * @param is_wallet {Boolean} 
     */
    constructor(address, name, is_scam, is_wallet) { 
        
        NftOwner.initialize(this, address, name, is_scam, is_wallet);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, name, is_scam, is_wallet) { 
        obj['address'] = address;
        obj['name'] = name;
        obj['is_scam'] = is_scam;
        obj['is_wallet'] = is_wallet;
    }

    /**
     * Constructs a <code>NftOwner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NftOwner} obj Optional instance to populate.
     * @return {module:model/NftOwner} The populated <code>NftOwner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NftOwner();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_scam')) {
                obj['is_scam'] = ApiClient.convertToType(data['is_scam'], 'Boolean');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('is_wallet')) {
                obj['is_wallet'] = ApiClient.convertToType(data['is_wallet'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NftOwner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NftOwner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NftOwner.RequiredProperties) {
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
        if (data['icon'] && !(typeof data['icon'] === 'string' || data['icon'] instanceof String)) {
            throw new Error("Expected the field `icon` to be a primitive type in the JSON string but got " + data['icon']);
        }

        return true;
    }


}

NftOwner.RequiredProperties = ["address", "name", "is_scam", "is_wallet"];

/**
 * @member {String} address
 */
NftOwner.prototype['address'] = undefined;

/**
 * @member {String} name
 */
NftOwner.prototype['name'] = undefined;

/**
 * @member {Boolean} is_scam
 */
NftOwner.prototype['is_scam'] = undefined;

/**
 * @member {String} icon
 */
NftOwner.prototype['icon'] = undefined;

/**
 * @member {Boolean} is_wallet
 */
NftOwner.prototype['is_wallet'] = undefined;






export default NftOwner;

