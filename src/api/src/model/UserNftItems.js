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
import NftItem from './NftItem';

/**
 * The UserNftItems model module.
 * @module model/UserNftItems
 * @version 0.1.0
 */
class UserNftItems {
    /**
     * Constructs a new <code>UserNftItems</code>.
     * @alias module:model/UserNftItems
     */
    constructor() { 
        
        UserNftItems.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UserNftItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserNftItems} obj Optional instance to populate.
     * @return {module:model/UserNftItems} The populated <code>UserNftItems</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserNftItems();

            if (data.hasOwnProperty('nft_items')) {
                obj['nft_items'] = ApiClient.convertToType(data['nft_items'], [NftItem]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserNftItems</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserNftItems</code>.
     */
    static validateJSON(data) {
        if (data['nft_items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['nft_items'])) {
                throw new Error("Expected the field `nft_items` to be an array in the JSON data but got " + data['nft_items']);
            }
            // validate the optional field `nft_items` (array)
            for (const item of data['nft_items']) {
                NftItem.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/NftItem>} nft_items
 */
UserNftItems.prototype['nft_items'] = undefined;






export default UserNftItems;
