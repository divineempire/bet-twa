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


import ApiClient from "../ApiClient";
import HTTPValidationError from '../model/HTTPValidationError';
import PageSportRatedLeagueEntryRead from '../model/PageSportRatedLeagueEntryRead';
import SportRatedLeague from '../model/SportRatedLeague';
import SportRatedLeagueEntry from '../model/SportRatedLeagueEntry';

/**
* Rating service.
* @module api/RatingApi
* @version 0.1.0
*/
export default class RatingApi {

    /**
    * Constructs a new RatingApi. 
    * @alias module:api/RatingApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get League
     * @param {Number} league_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SportRatedLeague} and HTTP response
     */
    getLeagueWithHttpInfo(league_id) {
      let postBody = null;
      // verify the required parameter 'league_id' is set
      if (league_id === undefined || league_id === null) {
        throw new Error("Missing the required parameter 'league_id' when calling getLeague");
      }

      let pathParams = {
        'league_id': league_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SportRatedLeague;
      return this.apiClient.callApi(
        '/api/v1/rating/{league_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get League
     * @param {Number} league_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SportRatedLeague}
     */
    getLeague(league_id) {
      return this.getLeagueWithHttpInfo(league_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get League Entries
     * @param {Number} league_id 
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number
     * @param {Number} [size = 50)] Page size
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageSportRatedLeagueEntryRead} and HTTP response
     */
    getLeagueEntriesWithHttpInfo(league_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'league_id' is set
      if (league_id === undefined || league_id === null) {
        throw new Error("Missing the required parameter 'league_id' when calling getLeagueEntries");
      }

      let pathParams = {
        'league_id': league_id
      };
      let queryParams = {
        'page': opts['page'],
        'size': opts['size']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PageSportRatedLeagueEntryRead;
      return this.apiClient.callApi(
        '/api/v1/rating/{league_id}/entries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get League Entries
     * @param {Number} league_id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.size Page size (default to 50)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageSportRatedLeagueEntryRead}
     */
    getLeagueEntries(league_id, opts) {
      return this.getLeagueEntriesWithHttpInfo(league_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get League Entry
     * @param {Number} league_id 
     * @param {Number} entry_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SportRatedLeagueEntry} and HTTP response
     */
    getLeagueEntryWithHttpInfo(league_id, entry_id) {
      let postBody = null;
      // verify the required parameter 'league_id' is set
      if (league_id === undefined || league_id === null) {
        throw new Error("Missing the required parameter 'league_id' when calling getLeagueEntry");
      }
      // verify the required parameter 'entry_id' is set
      if (entry_id === undefined || entry_id === null) {
        throw new Error("Missing the required parameter 'entry_id' when calling getLeagueEntry");
      }

      let pathParams = {
        'league_id': league_id,
        'entry_id': entry_id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SportRatedLeagueEntry;
      return this.apiClient.callApi(
        '/api/v1/rating/{league_id}/entries/{entry_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get League Entry
     * @param {Number} league_id 
     * @param {Number} entry_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SportRatedLeagueEntry}
     */
    getLeagueEntry(league_id, entry_id) {
      return this.getLeagueEntryWithHttpInfo(league_id, entry_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Leagues
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SportRatedLeague>} and HTTP response
     */
    getLeaguesWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SportRatedLeague];
      return this.apiClient.callApi(
        '/api/v1/rating/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Leagues
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SportRatedLeague>}
     */
    getLeagues() {
      return this.getLeaguesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}