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
 * The User model module.
 * @module model/User
 * @version 0.1.0
 */
class User {
    /**
     * Constructs a new <code>User</code>.
     * @alias module:model/User
     * @param telegram_user_id {Number} 
     */
    constructor(telegram_user_id) { 
        
        User.initialize(this, telegram_user_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, telegram_user_id) { 
        obj['telegram_user_id'] = telegram_user_id;
    }

    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new User();

            if (data.hasOwnProperty('telegram_user_id')) {
                obj['telegram_user_id'] = ApiClient.convertToType(data['telegram_user_id'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('total_bets')) {
                obj['total_bets'] = ApiClient.convertToType(data['total_bets'], 'Number');
            }
            if (data.hasOwnProperty('total_win_bets')) {
                obj['total_win_bets'] = ApiClient.convertToType(data['total_win_bets'], 'Number');
            }
            if (data.hasOwnProperty('total_earned_tons')) {
                obj['total_earned_tons'] = ApiClient.convertToType(data['total_earned_tons'], 'Number');
            }
            if (data.hasOwnProperty('total_earned_balance')) {
                obj['total_earned_balance'] = ApiClient.convertToType(data['total_earned_balance'], 'Number');
            }
            if (data.hasOwnProperty('notifications_enabled')) {
                obj['notifications_enabled'] = ApiClient.convertToType(data['notifications_enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>User</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>User</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of User.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

User.RequiredProperties = ["telegram_user_id"];

/**
 * @member {Number} telegram_user_id
 */
User.prototype['telegram_user_id'] = undefined;

/**
 * @member {Number} id
 */
User.prototype['id'] = undefined;

/**
 * @member {Number} balance
 */
User.prototype['balance'] = undefined;

/**
 * @member {Number} total_bets
 */
User.prototype['total_bets'] = undefined;

/**
 * @member {Number} total_win_bets
 */
User.prototype['total_win_bets'] = undefined;

/**
 * @member {Number} total_earned_tons
 */
User.prototype['total_earned_tons'] = undefined;

/**
 * @member {Number} total_earned_balance
 */
User.prototype['total_earned_balance'] = undefined;

/**
 * @member {Boolean} notifications_enabled
 */
User.prototype['notifications_enabled'] = undefined;






export default User;

