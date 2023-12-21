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
import PhaseType from './PhaseType';

/**
 * The SportMatchCreate model module.
 * @module model/SportMatchCreate
 * @version 0.1.0
 */
class SportMatchCreate {
    /**
     * Constructs a new <code>SportMatchCreate</code>.
     * @alias module:model/SportMatchCreate
     * @param match_start_time {Number} 
     * @param team1_id {Number} 
     * @param team2_id {Number} 
     * @param sport_id {Number} 
     */
    constructor(match_start_time, team1_id, team2_id, sport_id) { 
        
        SportMatchCreate.initialize(this, match_start_time, team1_id, team2_id, sport_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, match_start_time, team1_id, team2_id, sport_id) { 
        obj['match_start_time'] = match_start_time;
        obj['team1_id'] = team1_id;
        obj['team2_id'] = team2_id;
        obj['sport_id'] = sport_id;
    }

    /**
     * Constructs a <code>SportMatchCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SportMatchCreate} obj Optional instance to populate.
     * @return {module:model/SportMatchCreate} The populated <code>SportMatchCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SportMatchCreate();

            if (data.hasOwnProperty('tournament_id')) {
                obj['tournament_id'] = ApiClient.convertToType(data['tournament_id'], 'Number');
            }
            if (data.hasOwnProperty('match_start_time')) {
                obj['match_start_time'] = ApiClient.convertToType(data['match_start_time'], 'Number');
            }
            if (data.hasOwnProperty('match_time')) {
                obj['match_time'] = ApiClient.convertToType(data['match_time'], 'Number');
            }
            if (data.hasOwnProperty('finished')) {
                obj['finished'] = ApiClient.convertToType(data['finished'], 'Boolean');
            }
            if (data.hasOwnProperty('fantasy')) {
                obj['fantasy'] = ApiClient.convertToType(data['fantasy'], 'Boolean');
            }
            if (data.hasOwnProperty('phase')) {
                obj['phase'] = ApiClient.convertToType(data['phase'], PhaseType);
            }
            if (data.hasOwnProperty('team1_id')) {
                obj['team1_id'] = ApiClient.convertToType(data['team1_id'], 'Number');
            }
            if (data.hasOwnProperty('team2_id')) {
                obj['team2_id'] = ApiClient.convertToType(data['team2_id'], 'Number');
            }
            if (data.hasOwnProperty('bookmaker_match_id')) {
                obj['bookmaker_match_id'] = ApiClient.convertToType(data['bookmaker_match_id'], 'Number');
            }
            if (data.hasOwnProperty('team1_score')) {
                obj['team1_score'] = ApiClient.convertToType(data['team1_score'], 'Number');
            }
            if (data.hasOwnProperty('team2_score')) {
                obj['team2_score'] = ApiClient.convertToType(data['team2_score'], 'Number');
            }
            if (data.hasOwnProperty('team1_ratio')) {
                obj['team1_ratio'] = ApiClient.convertToType(data['team1_ratio'], 'Number');
            }
            if (data.hasOwnProperty('team2_ratio')) {
                obj['team2_ratio'] = ApiClient.convertToType(data['team2_ratio'], 'Number');
            }
            if (data.hasOwnProperty('draw_ratio')) {
                obj['draw_ratio'] = ApiClient.convertToType(data['draw_ratio'], 'Number');
            }
            if (data.hasOwnProperty('sport_id')) {
                obj['sport_id'] = ApiClient.convertToType(data['sport_id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SportMatchCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SportMatchCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SportMatchCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

SportMatchCreate.RequiredProperties = ["match_start_time", "team1_id", "team2_id", "sport_id"];

/**
 * @member {Number} tournament_id
 */
SportMatchCreate.prototype['tournament_id'] = undefined;

/**
 * @member {Number} match_start_time
 */
SportMatchCreate.prototype['match_start_time'] = undefined;

/**
 * @member {Number} match_time
 */
SportMatchCreate.prototype['match_time'] = undefined;

/**
 * @member {Boolean} finished
 * @default false
 */
SportMatchCreate.prototype['finished'] = false;

/**
 * @member {Boolean} fantasy
 * @default false
 */
SportMatchCreate.prototype['fantasy'] = false;

/**
 * @member {module:model/PhaseType} phase
 */
SportMatchCreate.prototype['phase'] = undefined;

/**
 * @member {Number} team1_id
 */
SportMatchCreate.prototype['team1_id'] = undefined;

/**
 * @member {Number} team2_id
 */
SportMatchCreate.prototype['team2_id'] = undefined;

/**
 * @member {Number} bookmaker_match_id
 */
SportMatchCreate.prototype['bookmaker_match_id'] = undefined;

/**
 * @member {Number} team1_score
 */
SportMatchCreate.prototype['team1_score'] = undefined;

/**
 * @member {Number} team2_score
 */
SportMatchCreate.prototype['team2_score'] = undefined;

/**
 * @member {Number} team1_ratio
 */
SportMatchCreate.prototype['team1_ratio'] = undefined;

/**
 * @member {Number} team2_ratio
 */
SportMatchCreate.prototype['team2_ratio'] = undefined;

/**
 * @member {Number} draw_ratio
 */
SportMatchCreate.prototype['draw_ratio'] = undefined;

/**
 * @member {Number} sport_id
 */
SportMatchCreate.prototype['sport_id'] = undefined;






export default SportMatchCreate;
