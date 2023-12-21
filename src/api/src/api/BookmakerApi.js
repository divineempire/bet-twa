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
import BookmakerLiveMatchIdResult from '../model/BookmakerLiveMatchIdResult';
import BookmakerMatchesList from '../model/BookmakerMatchesList';
import BookmakerSearchResult from '../model/BookmakerSearchResult';
import BookmakerTournamentsList from '../model/BookmakerTournamentsList';
import HTTPValidationError from '../model/HTTPValidationError';

/**
* Bookmaker service.
* @module api/BookmakerApi
* @version 0.1.0
*/
export default class BookmakerApi {

    /**
    * Constructs a new BookmakerApi. 
    * @alias module:api/BookmakerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Live Match Id
     * Get live match id by prematch id
     * @param {Number} prematch_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BookmakerLiveMatchIdResult} and HTTP response
     */
    liveMatchIdApiV1BookmakerLiveIdPrematchIdGetWithHttpInfo(prematch_id) {
      let postBody = null;
      // verify the required parameter 'prematch_id' is set
      if (prematch_id === undefined || prematch_id === null) {
        throw new Error("Missing the required parameter 'prematch_id' when calling liveMatchIdApiV1BookmakerLiveIdPrematchIdGet");
      }

      let pathParams = {
        'prematch_id': prematch_id
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
      let returnType = BookmakerLiveMatchIdResult;
      return this.apiClient.callApi(
        '/api/v1/bookmaker/live/id/{prematch_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Live Match Id
     * Get live match id by prematch id
     * @param {Number} prematch_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BookmakerLiveMatchIdResult}
     */
    liveMatchIdApiV1BookmakerLiveIdPrematchIdGet(prematch_id) {
      return this.liveMatchIdApiV1BookmakerLiveIdPrematchIdGetWithHttpInfo(prematch_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Match Info
     * @param {Number} match_id 
     * @param {module:model/String} service 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BookmakerMatchesList} and HTTP response
     */
    matchInfoApiV1BookmakerMatchMatchIdGetWithHttpInfo(match_id, service) {
      let postBody = null;
      // verify the required parameter 'match_id' is set
      if (match_id === undefined || match_id === null) {
        throw new Error("Missing the required parameter 'match_id' when calling matchInfoApiV1BookmakerMatchMatchIdGet");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling matchInfoApiV1BookmakerMatchMatchIdGet");
      }

      let pathParams = {
        'match_id': match_id
      };
      let queryParams = {
        'service': service
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BookmakerMatchesList;
      return this.apiClient.callApi(
        '/api/v1/bookmaker/match/{match_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Match Info
     * @param {Number} match_id 
     * @param {module:model/String} service 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BookmakerMatchesList}
     */
    matchInfoApiV1BookmakerMatchMatchIdGet(match_id, service) {
      return this.matchInfoApiV1BookmakerMatchMatchIdGetWithHttpInfo(match_id, service)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Matches List
     * @param {Number} sport_id 
     * @param {module:model/String} service 
     * @param {Object} opts Optional parameters
     * @param {Number} [category_id] 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BookmakerMatchesList} and HTTP response
     */
    matchesListApiV1BookmakerMatchesSportIdGetWithHttpInfo(sport_id, service, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'sport_id' is set
      if (sport_id === undefined || sport_id === null) {
        throw new Error("Missing the required parameter 'sport_id' when calling matchesListApiV1BookmakerMatchesSportIdGet");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling matchesListApiV1BookmakerMatchesSportIdGet");
      }

      let pathParams = {
        'sport_id': sport_id
      };
      let queryParams = {
        'service': service,
        'category_id': opts['category_id']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BookmakerMatchesList;
      return this.apiClient.callApi(
        '/api/v1/bookmaker/matches/{sport_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Matches List
     * @param {Number} sport_id 
     * @param {module:model/String} service 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.category_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BookmakerMatchesList}
     */
    matchesListApiV1BookmakerMatchesSportIdGet(sport_id, service, opts) {
      return this.matchesListApiV1BookmakerMatchesSportIdGetWithHttpInfo(sport_id, service, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search
     * @param {String} q 
     * @param {module:model/String} service 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BookmakerSearchResult} and HTTP response
     */
    searchApiV1BookmakerSearchGetWithHttpInfo(q, service) {
      let postBody = null;
      // verify the required parameter 'q' is set
      if (q === undefined || q === null) {
        throw new Error("Missing the required parameter 'q' when calling searchApiV1BookmakerSearchGet");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling searchApiV1BookmakerSearchGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'q': q,
        'service': service
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BookmakerSearchResult;
      return this.apiClient.callApi(
        '/api/v1/bookmaker/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Search
     * @param {String} q 
     * @param {module:model/String} service 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BookmakerSearchResult}
     */
    searchApiV1BookmakerSearchGet(q, service) {
      return this.searchApiV1BookmakerSearchGetWithHttpInfo(q, service)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Tournaments List
     * @param {Number} sport_id 
     * @param {module:model/String} service 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BookmakerTournamentsList} and HTTP response
     */
    tournamentsListApiV1BookmakerTournamentsSportIdGetWithHttpInfo(sport_id, service) {
      let postBody = null;
      // verify the required parameter 'sport_id' is set
      if (sport_id === undefined || sport_id === null) {
        throw new Error("Missing the required parameter 'sport_id' when calling tournamentsListApiV1BookmakerTournamentsSportIdGet");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling tournamentsListApiV1BookmakerTournamentsSportIdGet");
      }

      let pathParams = {
        'sport_id': sport_id
      };
      let queryParams = {
        'service': service
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BookmakerTournamentsList;
      return this.apiClient.callApi(
        '/api/v1/bookmaker/tournaments/{sport_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Tournaments List
     * @param {Number} sport_id 
     * @param {module:model/String} service 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BookmakerTournamentsList}
     */
    tournamentsListApiV1BookmakerTournamentsSportIdGet(sport_id, service) {
      return this.tournamentsListApiV1BookmakerTournamentsSportIdGetWithHttpInfo(sport_id, service)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}