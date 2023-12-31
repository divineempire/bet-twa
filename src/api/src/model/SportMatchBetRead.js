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
import BetOutcome from './BetOutcome';
import SportFreeBetNft from './SportFreeBetNft';
import SportMatchRead from './SportMatchRead';

/**
 * The SportMatchBetRead model module.
 * @module model/SportMatchBetRead
 * @version 0.1.0
 */
class SportMatchBetRead {
    /**
     * Constructs a new <code>SportMatchBetRead</code>.
     * @alias module:model/SportMatchBetRead
     * @param user_id {Number} 
     * @param match_id {Number} 
     * @param bet_amount {Number} 
     * @param bet_team {module:model/BetOutcome} 
     * @param bet_ratio {Number} 
     * @param free_bet_id {Number} 
     * @param id {Number} 
     * @param match {module:model/SportMatchRead} 
     * @param free_bet {module:model/SportFreeBetNft} 
     */
    constructor(user_id, match_id, bet_amount, bet_team, bet_ratio, free_bet_id, id, match, free_bet) { 
        
        SportMatchBetRead.initialize(this, user_id, match_id, bet_amount, bet_team, bet_ratio, free_bet_id, id, match, free_bet);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, user_id, match_id, bet_amount, bet_team, bet_ratio, free_bet_id, id, match, free_bet) { 
        obj['user_id'] = user_id;
        obj['match_id'] = match_id;
        obj['bet_amount'] = bet_amount;
        obj['bet_team'] = bet_team;
        obj['bet_ratio'] = bet_ratio;
        obj['free_bet_id'] = free_bet_id;
        obj['id'] = id;
        obj['match'] = match;
        obj['free_bet'] = free_bet;
    }

    /**
     * Constructs a <code>SportMatchBetRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SportMatchBetRead} obj Optional instance to populate.
     * @return {module:model/SportMatchBetRead} The populated <code>SportMatchBetRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SportMatchBetRead();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
            if (data.hasOwnProperty('match_id')) {
                obj['match_id'] = ApiClient.convertToType(data['match_id'], 'Number');
            }
            if (data.hasOwnProperty('bet_amount')) {
                obj['bet_amount'] = ApiClient.convertToType(data['bet_amount'], 'Number');
            }
            if (data.hasOwnProperty('bet_team')) {
                obj['bet_team'] = BetOutcome.constructFromObject(data['bet_team']);
            }
            if (data.hasOwnProperty('bet_ratio')) {
                obj['bet_ratio'] = ApiClient.convertToType(data['bet_ratio'], 'Number');
            }
            if (data.hasOwnProperty('tx_id')) {
                obj['tx_id'] = ApiClient.convertToType(data['tx_id'], 'String');
            }
            if (data.hasOwnProperty('win_amount')) {
                obj['win_amount'] = ApiClient.convertToType(data['win_amount'], 'Number');
            }
            if (data.hasOwnProperty('free_bet_id')) {
                obj['free_bet_id'] = ApiClient.convertToType(data['free_bet_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('match')) {
                obj['match'] = SportMatchRead.constructFromObject(data['match']);
            }
            if (data.hasOwnProperty('free_bet')) {
                obj['free_bet'] = SportFreeBetNft.constructFromObject(data['free_bet']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SportMatchBetRead</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SportMatchBetRead</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SportMatchBetRead.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tx_id'] && !(typeof data['tx_id'] === 'string' || data['tx_id'] instanceof String)) {
            throw new Error("Expected the field `tx_id` to be a primitive type in the JSON string but got " + data['tx_id']);
        }
        // validate the optional field `match`
        if (data['match']) { // data not null
          SportMatchRead.validateJSON(data['match']);
        }
        // validate the optional field `free_bet`
        if (data['free_bet']) { // data not null
          SportFreeBetNft.validateJSON(data['free_bet']);
        }

        return true;
    }


}

SportMatchBetRead.RequiredProperties = ["user_id", "match_id", "bet_amount", "bet_team", "bet_ratio", "free_bet_id", "id", "match", "free_bet"];

/**
 * @member {Number} user_id
 */
SportMatchBetRead.prototype['user_id'] = undefined;

/**
 * @member {Number} match_id
 */
SportMatchBetRead.prototype['match_id'] = undefined;

/**
 * @member {Number} bet_amount
 */
SportMatchBetRead.prototype['bet_amount'] = undefined;

/**
 * @member {module:model/BetOutcome} bet_team
 */
SportMatchBetRead.prototype['bet_team'] = undefined;

/**
 * @member {Number} bet_ratio
 */
SportMatchBetRead.prototype['bet_ratio'] = undefined;

/**
 * @member {String} tx_id
 */
SportMatchBetRead.prototype['tx_id'] = undefined;

/**
 * @member {Number} win_amount
 */
SportMatchBetRead.prototype['win_amount'] = undefined;

/**
 * @member {Number} free_bet_id
 */
SportMatchBetRead.prototype['free_bet_id'] = undefined;

/**
 * @member {Number} created_at
 */
SportMatchBetRead.prototype['created_at'] = undefined;

/**
 * @member {Number} id
 */
SportMatchBetRead.prototype['id'] = undefined;

/**
 * @member {module:model/SportMatchRead} match
 */
SportMatchBetRead.prototype['match'] = undefined;

/**
 * @member {module:model/SportFreeBetNft} free_bet
 */
SportMatchBetRead.prototype['free_bet'] = undefined;






export default SportMatchBetRead;

