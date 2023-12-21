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
 * The NftPreview model module.
 * @module model/NftPreview
 * @version 0.1.0
 */
class NftPreview {
    /**
     * Constructs a new <code>NftPreview</code>.
     * @alias module:model/NftPreview
     * @param resolution {String} 
     * @param url {String} 
     */
    constructor(resolution, url) { 
        
        NftPreview.initialize(this, resolution, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, resolution, url) { 
        obj['resolution'] = resolution;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>NftPreview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NftPreview} obj Optional instance to populate.
     * @return {module:model/NftPreview} The populated <code>NftPreview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NftPreview();

            if (data.hasOwnProperty('resolution')) {
                obj['resolution'] = ApiClient.convertToType(data['resolution'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NftPreview</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NftPreview</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of NftPreview.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['resolution'] && !(typeof data['resolution'] === 'string' || data['resolution'] instanceof String)) {
            throw new Error("Expected the field `resolution` to be a primitive type in the JSON string but got " + data['resolution']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

NftPreview.RequiredProperties = ["resolution", "url"];

/**
 * @member {String} resolution
 */
NftPreview.prototype['resolution'] = undefined;

/**
 * @member {String} url
 */
NftPreview.prototype['url'] = undefined;






export default NftPreview;
