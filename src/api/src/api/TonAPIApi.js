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
import Account from '../model/Account';
import HTTPValidationError from '../model/HTTPValidationError';
import UserNftItems from '../model/UserNftItems';

/**
* TonAPI service.
* @module api/TonAPIApi
* @version 0.1.0
*/
export default class TonAPIApi {

    /**
    * Constructs a new TonAPIApi. 
    * @alias module:api/TonAPIApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Account Info
     * @param {String} account_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Account} and HTTP response
     */
    accountInfoWithHttpInfo(account_id) {
      let postBody = null;
      // verify the required parameter 'account_id' is set
      if (account_id === undefined || account_id === null) {
        throw new Error("Missing the required parameter 'account_id' when calling accountInfo");
      }

      let pathParams = {
        'account_id': account_id
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
      let returnType = Account;
      return this.apiClient.callApi(
        '/api/v1/tonapi/info/{account_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Account Info
     * @param {String} account_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Account}
     */
    accountInfo(account_id) {
      return this.accountInfoWithHttpInfo(account_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Account Nfts
     * @param {String} account_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserNftItems} and HTTP response
     */
    accountNftsWithHttpInfo(account_id) {
      let postBody = null;
      // verify the required parameter 'account_id' is set
      if (account_id === undefined || account_id === null) {
        throw new Error("Missing the required parameter 'account_id' when calling accountNfts");
      }

      let pathParams = {
        'account_id': account_id
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
      let returnType = UserNftItems;
      return this.apiClient.callApi(
        '/api/v1/tonapinfts/{account_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Account Nfts
     * @param {String} account_id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserNftItems}
     */
    accountNfts(account_id) {
      return this.accountNftsWithHttpInfo(account_id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}