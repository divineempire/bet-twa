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
* Enum class RewardType.
* @enum {}
* @readonly
*/
export default class RewardType {
    
        /**
         * value: "ton"
         * @const
         */
        "ton" = "ton";

    
        /**
         * value: "fantasy"
         * @const
         */
        "fantasy" = "fantasy";

    
        /**
         * value: "nft"
         * @const
         */
        "nft" = "nft";

    
        /**
         * value: "jetton"
         * @const
         */
        "jetton" = "jetton";

    

    /**
    * Returns a <code>RewardType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/RewardType} The enum <code>RewardType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

