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
 * The PeriodScore model module.
 * @module model/PeriodScore
 * @version 0.1.0
 */
class PeriodScore {
    /**
     * Constructs a new <code>PeriodScore</code>.
     * @alias module:model/PeriodScore
     * @param Sc1 {Number} 
     * @param Sc2 {Number} 
     */
    constructor(Sc1, Sc2) { 
        
        PeriodScore.initialize(this, Sc1, Sc2);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, Sc1, Sc2) { 
        obj['Sc1'] = Sc1;
        obj['Sc2'] = Sc2;
    }

    /**
     * Constructs a <code>PeriodScore</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeriodScore} obj Optional instance to populate.
     * @return {module:model/PeriodScore} The populated <code>PeriodScore</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeriodScore();

            if (data.hasOwnProperty('Sc1')) {
                obj['Sc1'] = ApiClient.convertToType(data['Sc1'], 'Number');
            }
            if (data.hasOwnProperty('Sc2')) {
                obj['Sc2'] = ApiClient.convertToType(data['Sc2'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PeriodScore</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PeriodScore</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PeriodScore.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

PeriodScore.RequiredProperties = ["Sc1", "Sc2"];

/**
 * @member {Number} Sc1
 */
PeriodScore.prototype['Sc1'] = undefined;

/**
 * @member {Number} Sc2
 */
PeriodScore.prototype['Sc2'] = undefined;






export default PeriodScore;

