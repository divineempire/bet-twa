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
import SportRatedLeagueEntryRead from './SportRatedLeagueEntryRead';

/**
 * The PageSportRatedLeagueEntryRead model module.
 * @module model/PageSportRatedLeagueEntryRead
 * @version 0.1.0
 */
class PageSportRatedLeagueEntryRead {
    /**
     * Constructs a new <code>PageSportRatedLeagueEntryRead</code>.
     * @alias module:model/PageSportRatedLeagueEntryRead
     * @param items {Array.<module:model/SportRatedLeagueEntryRead>} 
     * @param total {Number} 
     * @param page {Number} 
     * @param size {Number} 
     */
    constructor(items, total, page, size) { 
        
        PageSportRatedLeagueEntryRead.initialize(this, items, total, page, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, items, total, page, size) { 
        obj['items'] = items;
        obj['total'] = total;
        obj['page'] = page;
        obj['size'] = size;
    }

    /**
     * Constructs a <code>PageSportRatedLeagueEntryRead</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageSportRatedLeagueEntryRead} obj Optional instance to populate.
     * @return {module:model/PageSportRatedLeagueEntryRead} The populated <code>PageSportRatedLeagueEntryRead</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageSportRatedLeagueEntryRead();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [SportRatedLeagueEntryRead]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('pages')) {
                obj['pages'] = ApiClient.convertToType(data['pages'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageSportRatedLeagueEntryRead</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageSportRatedLeagueEntryRead</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PageSportRatedLeagueEntryRead.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                SportRatedLeagueEntryRead.validateJSON(item);
            };
        }

        return true;
    }


}

PageSportRatedLeagueEntryRead.RequiredProperties = ["items", "total", "page", "size"];

/**
 * @member {Array.<module:model/SportRatedLeagueEntryRead>} items
 */
PageSportRatedLeagueEntryRead.prototype['items'] = undefined;

/**
 * @member {Number} total
 */
PageSportRatedLeagueEntryRead.prototype['total'] = undefined;

/**
 * @member {Number} page
 */
PageSportRatedLeagueEntryRead.prototype['page'] = undefined;

/**
 * @member {Number} size
 */
PageSportRatedLeagueEntryRead.prototype['size'] = undefined;

/**
 * @member {Number} pages
 */
PageSportRatedLeagueEntryRead.prototype['pages'] = undefined;






export default PageSportRatedLeagueEntryRead;

