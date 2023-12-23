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
import SportTournament from '../model/SportTournament';
import SportTournamentRead from '../model/SportTournamentRead';

/**
* Tournaments service.
* @module api/TournamentsApi
* @version 0.1.0
*/
export default class TournamentsApi {

    /**
    * Constructs a new TournamentsApi. 
    * @alias module:api/TournamentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get Tournament
     * @param {Number} tournament_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SportTournament} and HTTP response
     */
    getTournamentWithHttpInfo(tournament_id) {
      let postBody = null;
      // verify the required parameter 'tournament_id' is set
      if (tournament_id === undefined || tournament_id === null) {
        throw new Error("Missing the required parameter 'tournament_id' when calling getTournament");
      }

      let pathParams = {
        'tournament_id': tournament_id
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
      let returnType = SportTournament;
      return this.apiClient.callApi(
        '/api/v1/tournaments/{tournament_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Tournament
     * @param {Number} tournament_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SportTournament}
     */
    getTournament(tournament_id) {
      return this.getTournamentWithHttpInfo(tournament_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Tournaments
     * @param {Object} opts Optional parameters
     * @param {Number} [id] 
     * @param {String} [name] 
     * @param {Boolean} [top] 
     * @param {Number} [prize_fund] 
     * @param {Number} [prize_fund__gte] 
     * @param {Number} [prize_fund__lte] 
     * @param {Boolean} [e_sport] 
     * @param {Number} [sport_id] 
     * @param {Number} [bookmaker_tournament_id] 
     * @param {Boolean} [fantasy] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/SportTournamentRead>} and HTTP response
     */
    getTournamentsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'id': opts['id'],
        'name': opts['name'],
        'top': opts['top'],
        'prize_fund': opts['prize_fund'],
        'prize_fund__gte': opts['prize_fund__gte'],
        'prize_fund__lte': opts['prize_fund__lte'],
        'e_sport': opts['e_sport'],
        'sport_id': opts['sport_id'],
        'bookmaker_tournament_id': opts['bookmaker_tournament_id'],
        'fantasy': opts['fantasy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [SportTournamentRead];
      return this.apiClient.callApi(
        '/api/v1/tournaments/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Tournaments
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id 
     * @param {String} opts.name 
     * @param {Boolean} opts.top 
     * @param {Number} opts.prize_fund 
     * @param {Number} opts.prize_fund__gte 
     * @param {Number} opts.prize_fund__lte 
     * @param {Boolean} opts.e_sport 
     * @param {Number} opts.sport_id 
     * @param {Number} opts.bookmaker_tournament_id 
     * @param {Boolean} opts.fantasy 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/SportTournamentRead>}
     */
    getTournaments(opts) {
      return this.getTournamentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
