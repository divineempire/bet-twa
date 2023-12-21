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
import BookmakerTournament from './BookmakerTournament';

/**
 * The BookmakerTournamentsList model module.
 * @module model/BookmakerTournamentsList
 * @version 0.1.0
 */
class BookmakerTournamentsList {
    /**
     * Constructs a new <code>BookmakerTournamentsList</code>.
     * @alias module:model/BookmakerTournamentsList
     */
    constructor() { 
        
        BookmakerTournamentsList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BookmakerTournamentsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BookmakerTournamentsList} obj Optional instance to populate.
     * @return {module:model/BookmakerTournamentsList} The populated <code>BookmakerTournamentsList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BookmakerTournamentsList();

            if (data.hasOwnProperty('tournaments')) {
                obj['tournaments'] = ApiClient.convertToType(data['tournaments'], [BookmakerTournament]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BookmakerTournamentsList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BookmakerTournamentsList</code>.
     */
    static validateJSON(data) {
        if (data['tournaments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tournaments'])) {
                throw new Error("Expected the field `tournaments` to be an array in the JSON data but got " + data['tournaments']);
            }
            // validate the optional field `tournaments` (array)
            for (const item of data['tournaments']) {
                BookmakerTournament.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/BookmakerTournament>} tournaments
 */
BookmakerTournamentsList.prototype['tournaments'] = undefined;






export default BookmakerTournamentsList;
