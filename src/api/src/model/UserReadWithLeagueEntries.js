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
import SportRatedLeagueEntryReadWithLeague from './SportRatedLeagueEntryReadWithLeague';

/**
 * The UserReadWithLeagueEntries model module.
 * @module model/UserReadWithLeagueEntries
 * @version 0.1.0
 */
class UserReadWithLeagueEntries {
    /**
     * Constructs a new <code>UserReadWithLeagueEntries</code>.
     * @alias module:model/UserReadWithLeagueEntries
     * @param telegram_user_id {Number} 
     * @param id {Number} 
     */
    constructor(telegram_user_id, id) { 
        
        UserReadWithLeagueEntries.initialize(this, telegram_user_id, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, telegram_user_id, id) { 
        obj['telegram_user_id'] = telegram_user_id;
        obj['id'] = id;
    }

    /**
     * Constructs a <code>UserReadWithLeagueEntries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserReadWithLeagueEntries} obj Optional instance to populate.
     * @return {module:model/UserReadWithLeagueEntries} The populated <code>UserReadWithLeagueEntries</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserReadWithLeagueEntries();

            if (data.hasOwnProperty('telegram_user_id')) {
                obj['telegram_user_id'] = ApiClient.convertToType(data['telegram_user_id'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('rated_league_entries')) {
                obj['rated_league_entries'] = ApiClient.convertToType(data['rated_league_entries'], [SportRatedLeagueEntryReadWithLeague]);
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('next_fantasy_reward')) {
                obj['next_fantasy_reward'] = ApiClient.convertToType(data['next_fantasy_reward'], 'Number');
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
     * Validates the JSON data with respect to <code>UserReadWithLeagueEntries</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserReadWithLeagueEntries</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserReadWithLeagueEntries.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['rated_league_entries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['rated_league_entries'])) {
                throw new Error("Expected the field `rated_league_entries` to be an array in the JSON data but got " + data['rated_league_entries']);
            }
            // validate the optional field `rated_league_entries` (array)
            for (const item of data['rated_league_entries']) {
                SportRatedLeagueEntryReadWithLeague.validateJSON(item);
            };
        }

        return true;
    }


}

UserReadWithLeagueEntries.RequiredProperties = ["telegram_user_id", "id"];

/**
 * @member {Number} telegram_user_id
 */
UserReadWithLeagueEntries.prototype['telegram_user_id'] = undefined;

/**
 * @member {Number} id
 */
UserReadWithLeagueEntries.prototype['id'] = undefined;

/**
 * @member {Array.<module:model/SportRatedLeagueEntryReadWithLeague>} rated_league_entries
 */
UserReadWithLeagueEntries.prototype['rated_league_entries'] = undefined;

/**
 * @member {Number} balance
 */
UserReadWithLeagueEntries.prototype['balance'] = undefined;

/**
 * @member {Number} next_fantasy_reward
 */
UserReadWithLeagueEntries.prototype['next_fantasy_reward'] = undefined;

/**
 * @member {Number} total_bets
 */
UserReadWithLeagueEntries.prototype['total_bets'] = undefined;

/**
 * @member {Number} total_win_bets
 */
UserReadWithLeagueEntries.prototype['total_win_bets'] = undefined;

/**
 * @member {Number} total_earned_tons
 */
UserReadWithLeagueEntries.prototype['total_earned_tons'] = undefined;

/**
 * @member {Number} total_earned_balance
 */
UserReadWithLeagueEntries.prototype['total_earned_balance'] = undefined;

/**
 * @member {Boolean} notifications_enabled
 */
UserReadWithLeagueEntries.prototype['notifications_enabled'] = undefined;






export default UserReadWithLeagueEntries;

