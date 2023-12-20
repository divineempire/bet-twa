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
import SportRatedLeague from './SportRatedLeague';

/**
 * The SportRatedLeagueEntryReadWithLeague model module.
 * @module model/SportRatedLeagueEntryReadWithLeague
 * @version 0.1.0
 */
class SportRatedLeagueEntryReadWithLeague {
    /**
     * Constructs a new <code>SportRatedLeagueEntryReadWithLeague</code>.
     * @alias module:model/SportRatedLeagueEntryReadWithLeague
     * @param rated_league {module:model/SportRatedLeague} 
     * @param score {Number} 
     * @param place {Number} 
     */
    constructor(rated_league, score, place) { 
        
        SportRatedLeagueEntryReadWithLeague.initialize(this, rated_league, score, place);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, rated_league, score, place) { 
        obj['rated_league'] = rated_league;
        obj['score'] = score;
        obj['place'] = place;
    }

    /**
     * Constructs a <code>SportRatedLeagueEntryReadWithLeague</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SportRatedLeagueEntryReadWithLeague} obj Optional instance to populate.
     * @return {module:model/SportRatedLeagueEntryReadWithLeague} The populated <code>SportRatedLeagueEntryReadWithLeague</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SportRatedLeagueEntryReadWithLeague();

            if (data.hasOwnProperty('rated_league')) {
                obj['rated_league'] = SportRatedLeague.constructFromObject(data['rated_league']);
            }
            if (data.hasOwnProperty('score')) {
                obj['score'] = ApiClient.convertToType(data['score'], 'Number');
            }
            if (data.hasOwnProperty('place')) {
                obj['place'] = ApiClient.convertToType(data['place'], 'Number');
            }
            if (data.hasOwnProperty('previous_place')) {
                obj['previous_place'] = ApiClient.convertToType(data['previous_place'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SportRatedLeagueEntryReadWithLeague</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SportRatedLeagueEntryReadWithLeague</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SportRatedLeagueEntryReadWithLeague.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `rated_league`
        if (data['rated_league']) { // data not null
          SportRatedLeague.validateJSON(data['rated_league']);
        }

        return true;
    }


}

SportRatedLeagueEntryReadWithLeague.RequiredProperties = ["rated_league", "score", "place"];

/**
 * @member {module:model/SportRatedLeague} rated_league
 */
SportRatedLeagueEntryReadWithLeague.prototype['rated_league'] = undefined;

/**
 * @member {Number} score
 */
SportRatedLeagueEntryReadWithLeague.prototype['score'] = undefined;

/**
 * @member {Number} place
 */
SportRatedLeagueEntryReadWithLeague.prototype['place'] = undefined;

/**
 * @member {Number} previous_place
 */
SportRatedLeagueEntryReadWithLeague.prototype['previous_place'] = undefined;






export default SportRatedLeagueEntryReadWithLeague;

