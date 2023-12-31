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
import User from '../model/User';
import UserCreate from '../model/UserCreate';
import UserReadWithLeagueEntries from '../model/UserReadWithLeagueEntries';
import UserUpdate from '../model/UserUpdate';

/**
* Users service.
* @module api/UsersApi
* @version 0.1.0
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create User
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @param {module:model/UserCreate} UserCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    createUserWithHttpInfo(X_Init_Data, UserCreate) {
      let postBody = UserCreate;
      // verify the required parameter 'X_Init_Data' is set
      if (X_Init_Data === undefined || X_Init_Data === null) {
        throw new Error("Missing the required parameter 'X_Init_Data' when calling createUser");
      }
      // verify the required parameter 'UserCreate' is set
      if (UserCreate === undefined || UserCreate === null) {
        throw new Error("Missing the required parameter 'UserCreate' when calling createUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Init-Data': X_Init_Data
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/api/v1/users/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create User
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @param {module:model/UserCreate} UserCreate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    createUser(X_Init_Data, UserCreate) {
      return this.createUserWithHttpInfo(X_Init_Data, UserCreate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get Current User
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserReadWithLeagueEntries} and HTTP response
     */
    getCurrentUserWithHttpInfo(X_Init_Data) {
      let postBody = null;
      // verify the required parameter 'X_Init_Data' is set
      if (X_Init_Data === undefined || X_Init_Data === null) {
        throw new Error("Missing the required parameter 'X_Init_Data' when calling getCurrentUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Init-Data': X_Init_Data
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserReadWithLeagueEntries;
      return this.apiClient.callApi(
        '/api/v1/users/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get Current User
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserReadWithLeagueEntries}
     */
    getCurrentUser(X_Init_Data) {
      return this.getCurrentUserWithHttpInfo(X_Init_Data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Grab Reward
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    grabRewardWithHttpInfo(X_Init_Data) {
      let postBody = null;
      // verify the required parameter 'X_Init_Data' is set
      if (X_Init_Data === undefined || X_Init_Data === null) {
        throw new Error("Missing the required parameter 'X_Init_Data' when calling grabReward");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Init-Data': X_Init_Data
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/api/v1/users/reward', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Grab Reward
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    grabReward(X_Init_Data) {
      return this.grabRewardWithHttpInfo(X_Init_Data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update User
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @param {module:model/UserUpdate} UserUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/User} and HTTP response
     */
    updateUserWithHttpInfo(X_Init_Data, UserUpdate) {
      let postBody = UserUpdate;
      // verify the required parameter 'X_Init_Data' is set
      if (X_Init_Data === undefined || X_Init_Data === null) {
        throw new Error("Missing the required parameter 'X_Init_Data' when calling updateUser");
      }
      // verify the required parameter 'UserUpdate' is set
      if (UserUpdate === undefined || UserUpdate === null) {
        throw new Error("Missing the required parameter 'UserUpdate' when calling updateUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Init-Data': X_Init_Data
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = User;
      return this.apiClient.callApi(
        '/api/v1/users/settings', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update User
     * @param {String} X_Init_Data initData из <a href=\"https://core.telegram.org/bots/webapps#webappinitdata\">window.Telegram.WebApp</a>
     * @param {module:model/UserUpdate} UserUpdate 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/User}
     */
    updateUser(X_Init_Data, UserUpdate) {
      return this.updateUserWithHttpInfo(X_Init_Data, UserUpdate)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
