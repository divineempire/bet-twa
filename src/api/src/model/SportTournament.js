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
 * The SportTournament model module.
 * @module model/SportTournament
 * @version 0.1.0
 */
class SportTournament {
    /**
     * Constructs a new <code>SportTournament</code>.
     * @alias module:model/SportTournament
     * @param icon_url {String} 
     * @param name {String} 
     * @param sport_id {Number} 
     * @param e_sport {Boolean} 
     * @param top {Boolean} 
     * @param fantasy {Boolean} 
     * @param bookmaker_category_id {Number} 
     * @param bookmaker_tournament_id {Number} 
     */
    constructor(icon_url, name, sport_id, e_sport, top, fantasy, bookmaker_category_id, bookmaker_tournament_id) { 
        
        SportTournament.initialize(this, icon_url, name, sport_id, e_sport, top, fantasy, bookmaker_category_id, bookmaker_tournament_id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, icon_url, name, sport_id, e_sport, top, fantasy, bookmaker_category_id, bookmaker_tournament_id) { 
        obj['icon_url'] = icon_url;
        obj['name'] = name;
        obj['sport_id'] = sport_id;
        obj['e_sport'] = e_sport;
        obj['top'] = top;
        obj['fantasy'] = fantasy;
        obj['bookmaker_category_id'] = bookmaker_category_id;
        obj['bookmaker_tournament_id'] = bookmaker_tournament_id;
    }

    /**
     * Constructs a <code>SportTournament</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SportTournament} obj Optional instance to populate.
     * @return {module:model/SportTournament} The populated <code>SportTournament</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SportTournament();

            if (data.hasOwnProperty('icon_url')) {
                obj['icon_url'] = ApiClient.convertToType(data['icon_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sport_id')) {
                obj['sport_id'] = ApiClient.convertToType(data['sport_id'], 'Number');
            }
            if (data.hasOwnProperty('e_sport')) {
                obj['e_sport'] = ApiClient.convertToType(data['e_sport'], 'Boolean');
            }
            if (data.hasOwnProperty('top')) {
                obj['top'] = ApiClient.convertToType(data['top'], 'Boolean');
            }
            if (data.hasOwnProperty('fantasy')) {
                obj['fantasy'] = ApiClient.convertToType(data['fantasy'], 'Boolean');
            }
            if (data.hasOwnProperty('prize_fund')) {
                obj['prize_fund'] = ApiClient.convertToType(data['prize_fund'], 'Number');
            }
            if (data.hasOwnProperty('bookmaker_category_id')) {
                obj['bookmaker_category_id'] = ApiClient.convertToType(data['bookmaker_category_id'], 'Number');
            }
            if (data.hasOwnProperty('bookmaker_tournament_id')) {
                obj['bookmaker_tournament_id'] = ApiClient.convertToType(data['bookmaker_tournament_id'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SportTournament</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SportTournament</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SportTournament.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['icon_url'] && !(typeof data['icon_url'] === 'string' || data['icon_url'] instanceof String)) {
            throw new Error("Expected the field `icon_url` to be a primitive type in the JSON string but got " + data['icon_url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

SportTournament.RequiredProperties = ["icon_url", "name", "sport_id", "e_sport", "top", "fantasy", "bookmaker_category_id", "bookmaker_tournament_id"];

/**
 * @member {String} icon_url
 */
SportTournament.prototype['icon_url'] = undefined;

/**
 * @member {String} name
 */
SportTournament.prototype['name'] = undefined;

/**
 * @member {Number} sport_id
 */
SportTournament.prototype['sport_id'] = undefined;

/**
 * @member {Boolean} e_sport
 */
SportTournament.prototype['e_sport'] = undefined;

/**
 * @member {Boolean} top
 */
SportTournament.prototype['top'] = undefined;

/**
 * @member {Boolean} fantasy
 */
SportTournament.prototype['fantasy'] = undefined;

/**
 * @member {Number} prize_fund
 */
SportTournament.prototype['prize_fund'] = undefined;

/**
 * @member {Number} bookmaker_category_id
 */
SportTournament.prototype['bookmaker_category_id'] = undefined;

/**
 * @member {Number} bookmaker_tournament_id
 */
SportTournament.prototype['bookmaker_tournament_id'] = undefined;

/**
 * @member {Number} id
 */
SportTournament.prototype['id'] = undefined;






export default SportTournament;

