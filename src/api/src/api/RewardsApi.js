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
import PageSportReward from '../model/PageSportReward';
import SportReward from '../model/SportReward';

/**
* Rewards service.
* @module api/RewardsApi
* @version 0.1.0
*/
export default class RewardsApi {

    /**
    * Constructs a new RewardsApi. 
    * @alias module:api/RewardsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Get League Rewards
     * @param {Number} league_id 
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number
     * @param {Number} [size = 50)] Page size
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageSportReward} and HTTP response
     */
    getLeagueRewardsApiV1RewardsLeagueLeagueIdGetWithHttpInfo(league_id, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'league_id' is set
      if (league_id === undefined || league_id === null) {
        throw new Error("Missing the required parameter 'league_id' when calling getLeagueRewardsApiV1RewardsLeagueLeagueIdGet");
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
      let returnType = PageSportReward;
      return this.apiClient.callApi(
        '/api/v1/rewards/league/{league_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get League Rewards
     * @param {Number} league_id 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.size Page size (default to 50)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageSportReward}
     */
    getLeagueRewardsApiV1RewardsLeagueLeagueIdGet(league_id, opts) {
      return this.getLeagueRewardsApiV1RewardsLeagueLeagueIdGetWithHttpInfo(league_id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Reward
     * @param {Number} reward_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SportReward} and HTTP response
     */
    getRewardApiV1RewardsRewardIdGetWithHttpInfo(reward_id) {
      let postBody = null;
      // verify the required parameter 'reward_id' is set
      if (reward_id === undefined || reward_id === null) {
        throw new Error("Missing the required parameter 'reward_id' when calling getRewardApiV1RewardsRewardIdGet");
      }

      let pathParams = {
        'reward_id': reward_id
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
      let returnType = SportReward;
      return this.apiClient.callApi(
        '/api/v1/rewards/{reward_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Reward
     * @param {Number} reward_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SportReward}
     */
    getRewardApiV1RewardsRewardIdGet(reward_id) {
      return this.getRewardApiV1RewardsRewardIdGetWithHttpInfo(reward_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Rewards
     * @param {Object} opts Optional parameters
     * @param {Number} [page = 1)] Page number
     * @param {Number} [size = 50)] Page size
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PageSportReward} and HTTP response
     */
    getRewardsApiV1RewardsGetWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
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
      let returnType = PageSportReward;
      return this.apiClient.callApi(
        '/api/v1/rewards/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Rewards
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.size Page size (default to 50)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PageSportReward}
     */
    getRewardsApiV1RewardsGet(opts) {
      return this.getRewardsApiV1RewardsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
