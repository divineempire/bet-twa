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
import RewardType from './RewardType';

/**
 * The SportRewardCreate model module.
 * @module model/SportRewardCreate
 * @version 0.1.0
 */
class SportRewardCreate {
    /**
     * Constructs a new <code>SportRewardCreate</code>.
     * @alias module:model/SportRewardCreate
     * @param reward_type {module:model/RewardType} 
     * @param value {Number} 
     * @param min_place {Number} 
     * @param max_place {Number} 
     * @param rated_league_id {Number} 
     */
    constructor(reward_type, value, min_place, max_place, rated_league_id) { 
        
        SportRewardCreate.initialize(this, reward_type, value, min_place, max_place, rated_league_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, reward_type, value, min_place, max_place, rated_league_id) { 
        obj['reward_type'] = reward_type;
        obj['value'] = value;
        obj['min_place'] = min_place;
        obj['max_place'] = max_place;
        obj['rated_league_id'] = rated_league_id;
    }

    /**
     * Constructs a <code>SportRewardCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SportRewardCreate} obj Optional instance to populate.
     * @return {module:model/SportRewardCreate} The populated <code>SportRewardCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SportRewardCreate();

            if (data.hasOwnProperty('reward_type')) {
                obj['reward_type'] = RewardType.constructFromObject(data['reward_type']);
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('min_place')) {
                obj['min_place'] = ApiClient.convertToType(data['min_place'], 'Number');
            }
            if (data.hasOwnProperty('max_place')) {
                obj['max_place'] = ApiClient.convertToType(data['max_place'], 'Number');
            }
            if (data.hasOwnProperty('rated_league_id')) {
                obj['rated_league_id'] = ApiClient.convertToType(data['rated_league_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SportRewardCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SportRewardCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SportRewardCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SportRewardCreate.RequiredProperties = ["reward_type", "value", "min_place", "max_place", "rated_league_id"];

/**
 * @member {module:model/RewardType} reward_type
 */
SportRewardCreate.prototype['reward_type'] = undefined;

/**
 * @member {Number} value
 */
SportRewardCreate.prototype['value'] = undefined;

/**
 * @member {Number} min_place
 */
SportRewardCreate.prototype['min_place'] = undefined;

/**
 * @member {Number} max_place
 */
SportRewardCreate.prototype['max_place'] = undefined;

/**
 * @member {Number} rated_league_id
 */
SportRewardCreate.prototype['rated_league_id'] = undefined;






export default SportRewardCreate;

