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
 * The BookmakerTournament model module.
 * @module model/BookmakerTournament
 * @version 0.1.0
 */
class BookmakerTournament {
    /**
     * Constructs a new <code>BookmakerTournament</code>.
     * @alias module:model/BookmakerTournament
     * @param id {Number} 
     * @param key {String} 
     * @param categoryId {Number} 
     * @param isEsport {Boolean} 
     * @param sportId {Number} 
     * @param isTopSport {Boolean} 
     * @param iconUrl {String} 
     * @param isTop {Boolean} 
     * @param providerId {Number} 
     * @param name {String} 
     * @param viewOutrightInLongTerm {Boolean} 
     * @param viewOutrightInPrematch {Boolean} 
     * @param countLive {Number} 
     * @param countPrematch {Number} 
     * @param countOutright {Number} 
     * @param liveOrder {Number} 
     */
    constructor(id, key, categoryId, isEsport, sportId, isTopSport, iconUrl, isTop, providerId, name, viewOutrightInLongTerm, viewOutrightInPrematch, countLive, countPrematch, countOutright, liveOrder) { 
        
        BookmakerTournament.initialize(this, id, key, categoryId, isEsport, sportId, isTopSport, iconUrl, isTop, providerId, name, viewOutrightInLongTerm, viewOutrightInPrematch, countLive, countPrematch, countOutright, liveOrder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, key, categoryId, isEsport, sportId, isTopSport, iconUrl, isTop, providerId, name, viewOutrightInLongTerm, viewOutrightInPrematch, countLive, countPrematch, countOutright, liveOrder) { 
        obj['id'] = id;
        obj['key'] = key;
        obj['categoryId'] = categoryId;
        obj['isEsport'] = isEsport;
        obj['sportId'] = sportId;
        obj['isTopSport'] = isTopSport;
        obj['iconUrl'] = iconUrl;
        obj['isTop'] = isTop;
        obj['providerId'] = providerId;
        obj['name'] = name;
        obj['viewOutrightInLongTerm'] = viewOutrightInLongTerm;
        obj['viewOutrightInPrematch'] = viewOutrightInPrematch;
        obj['countLive'] = countLive;
        obj['countPrematch'] = countPrematch;
        obj['countOutright'] = countOutright;
        obj['liveOrder'] = liveOrder;
    }

    /**
     * Constructs a <code>BookmakerTournament</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BookmakerTournament} obj Optional instance to populate.
     * @return {module:model/BookmakerTournament} The populated <code>BookmakerTournament</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BookmakerTournament();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'Number');
            }
            if (data.hasOwnProperty('isEsport')) {
                obj['isEsport'] = ApiClient.convertToType(data['isEsport'], 'Boolean');
            }
            if (data.hasOwnProperty('sportId')) {
                obj['sportId'] = ApiClient.convertToType(data['sportId'], 'Number');
            }
            if (data.hasOwnProperty('isTopSport')) {
                obj['isTopSport'] = ApiClient.convertToType(data['isTopSport'], 'Boolean');
            }
            if (data.hasOwnProperty('iconUrl')) {
                obj['iconUrl'] = ApiClient.convertToType(data['iconUrl'], 'String');
            }
            if (data.hasOwnProperty('isTop')) {
                obj['isTop'] = ApiClient.convertToType(data['isTop'], 'Boolean');
            }
            if (data.hasOwnProperty('providerId')) {
                obj['providerId'] = ApiClient.convertToType(data['providerId'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('viewOutrightInLongTerm')) {
                obj['viewOutrightInLongTerm'] = ApiClient.convertToType(data['viewOutrightInLongTerm'], 'Boolean');
            }
            if (data.hasOwnProperty('viewOutrightInPrematch')) {
                obj['viewOutrightInPrematch'] = ApiClient.convertToType(data['viewOutrightInPrematch'], 'Boolean');
            }
            if (data.hasOwnProperty('countLive')) {
                obj['countLive'] = ApiClient.convertToType(data['countLive'], 'Number');
            }
            if (data.hasOwnProperty('countPrematch')) {
                obj['countPrematch'] = ApiClient.convertToType(data['countPrematch'], 'Number');
            }
            if (data.hasOwnProperty('countOutright')) {
                obj['countOutright'] = ApiClient.convertToType(data['countOutright'], 'Number');
            }
            if (data.hasOwnProperty('liveOrder')) {
                obj['liveOrder'] = ApiClient.convertToType(data['liveOrder'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BookmakerTournament</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BookmakerTournament</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BookmakerTournament.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['iconUrl'] && !(typeof data['iconUrl'] === 'string' || data['iconUrl'] instanceof String)) {
            throw new Error("Expected the field `iconUrl` to be a primitive type in the JSON string but got " + data['iconUrl']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

BookmakerTournament.RequiredProperties = ["id", "key", "categoryId", "isEsport", "sportId", "isTopSport", "iconUrl", "isTop", "providerId", "name", "viewOutrightInLongTerm", "viewOutrightInPrematch", "countLive", "countPrematch", "countOutright", "liveOrder"];

/**
 * @member {Number} id
 */
BookmakerTournament.prototype['id'] = undefined;

/**
 * @member {String} key
 */
BookmakerTournament.prototype['key'] = undefined;

/**
 * @member {Number} categoryId
 */
BookmakerTournament.prototype['categoryId'] = undefined;

/**
 * @member {Boolean} isEsport
 */
BookmakerTournament.prototype['isEsport'] = undefined;

/**
 * @member {Number} sportId
 */
BookmakerTournament.prototype['sportId'] = undefined;

/**
 * @member {Boolean} isTopSport
 */
BookmakerTournament.prototype['isTopSport'] = undefined;

/**
 * @member {String} iconUrl
 */
BookmakerTournament.prototype['iconUrl'] = undefined;

/**
 * @member {Boolean} isTop
 */
BookmakerTournament.prototype['isTop'] = undefined;

/**
 * @member {Number} providerId
 */
BookmakerTournament.prototype['providerId'] = undefined;

/**
 * @member {String} name
 */
BookmakerTournament.prototype['name'] = undefined;

/**
 * @member {Boolean} viewOutrightInLongTerm
 */
BookmakerTournament.prototype['viewOutrightInLongTerm'] = undefined;

/**
 * @member {Boolean} viewOutrightInPrematch
 */
BookmakerTournament.prototype['viewOutrightInPrematch'] = undefined;

/**
 * @member {Number} countLive
 */
BookmakerTournament.prototype['countLive'] = undefined;

/**
 * @member {Number} countPrematch
 */
BookmakerTournament.prototype['countPrematch'] = undefined;

/**
 * @member {Number} countOutright
 */
BookmakerTournament.prototype['countOutright'] = undefined;

/**
 * @member {Number} liveOrder
 */
BookmakerTournament.prototype['liveOrder'] = undefined;






export default BookmakerTournament;
