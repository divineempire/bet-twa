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


import ApiClient from './ApiClient';
import AccountInfoShorten from './model/AccountInfoShorten';
import BetOutcome from './model/BetOutcome';
import BetType from './model/BetType';
import HTTPValidationError from './model/HTTPValidationError';
import NftCollection from './model/NftCollection';
import NftItem from './model/NftItem';
import NftMarket from './model/NftMarket';
import NftOwner from './model/NftOwner';
import NftPreview from './model/NftPreview';
import NftPrice from './model/NftPrice';
import NftSale from './model/NftSale';
import PageSportMatchBet from './model/PageSportMatchBet';
import PageSportMatchBetRead from './model/PageSportMatchBetRead';
import PageSportMatchRead from './model/PageSportMatchRead';
import PageSportRatedLeagueEntryRead from './model/PageSportRatedLeagueEntryRead';
import PageSportReward from './model/PageSportReward';
import PageSportTeam from './model/PageSportTeam';
import PhaseType from './model/PhaseType';
import RewardType from './model/RewardType';
import SportFreeBetNft from './model/SportFreeBetNft';
import SportMatchBet from './model/SportMatchBet';
import SportMatchBetCreate from './model/SportMatchBetCreate';
import SportMatchBetRead from './model/SportMatchBetRead';
import SportMatchBetUpdate from './model/SportMatchBetUpdate';
import SportMatchRead from './model/SportMatchRead';
import SportRatedLeague from './model/SportRatedLeague';
import SportRatedLeagueEntry from './model/SportRatedLeagueEntry';
import SportRatedLeagueEntryRead from './model/SportRatedLeagueEntryRead';
import SportRatedLeagueEntryReadWithLeague from './model/SportRatedLeagueEntryReadWithLeague';
import SportReward from './model/SportReward';
import SportTeam from './model/SportTeam';
import SportTournament from './model/SportTournament';
import SportTournamentRead from './model/SportTournamentRead';
import User from './model/User';
import UserCreate from './model/UserCreate';
import UserNftItems from './model/UserNftItems';
import UserRead from './model/UserRead';
import UserReadWithLeagueEntries from './model/UserReadWithLeagueEntries';
import UserUpdate from './model/UserUpdate';
import ValidationError from './model/ValidationError';
import ValidationErrorLocInner from './model/ValidationErrorLocInner';
import BetsApi from './api/BetsApi';
import MatchesApi from './api/MatchesApi';
import RatingApi from './api/RatingApi';
import RewardsApi from './api/RewardsApi';
import TeamsApi from './api/TeamsApi';
import TonAPIApi from './api/TonAPIApi';
import TournamentsApi from './api/TournamentsApi';
import UsersApi from './api/UsersApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var BetCoffeeApi = require('index'); // See note below*.
* var xxxSvc = new BetCoffeeApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new BetCoffeeApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new BetCoffeeApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new BetCoffeeApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AccountInfoShorten model constructor.
     * @property {module:model/AccountInfoShorten}
     */
    AccountInfoShorten,

    /**
     * The BetOutcome model constructor.
     * @property {module:model/BetOutcome}
     */
    BetOutcome,

    /**
     * The BetType model constructor.
     * @property {module:model/BetType}
     */
    BetType,

    /**
     * The HTTPValidationError model constructor.
     * @property {module:model/HTTPValidationError}
     */
    HTTPValidationError,

    /**
     * The NftCollection model constructor.
     * @property {module:model/NftCollection}
     */
    NftCollection,

    /**
     * The NftItem model constructor.
     * @property {module:model/NftItem}
     */
    NftItem,

    /**
     * The NftMarket model constructor.
     * @property {module:model/NftMarket}
     */
    NftMarket,

    /**
     * The NftOwner model constructor.
     * @property {module:model/NftOwner}
     */
    NftOwner,

    /**
     * The NftPreview model constructor.
     * @property {module:model/NftPreview}
     */
    NftPreview,

    /**
     * The NftPrice model constructor.
     * @property {module:model/NftPrice}
     */
    NftPrice,

    /**
     * The NftSale model constructor.
     * @property {module:model/NftSale}
     */
    NftSale,

    /**
     * The PageSportMatchBet model constructor.
     * @property {module:model/PageSportMatchBet}
     */
    PageSportMatchBet,

    /**
     * The PageSportMatchBetRead model constructor.
     * @property {module:model/PageSportMatchBetRead}
     */
    PageSportMatchBetRead,

    /**
     * The PageSportMatchRead model constructor.
     * @property {module:model/PageSportMatchRead}
     */
    PageSportMatchRead,

    /**
     * The PageSportRatedLeagueEntryRead model constructor.
     * @property {module:model/PageSportRatedLeagueEntryRead}
     */
    PageSportRatedLeagueEntryRead,

    /**
     * The PageSportReward model constructor.
     * @property {module:model/PageSportReward}
     */
    PageSportReward,

    /**
     * The PageSportTeam model constructor.
     * @property {module:model/PageSportTeam}
     */
    PageSportTeam,

    /**
     * The PhaseType model constructor.
     * @property {module:model/PhaseType}
     */
    PhaseType,

    /**
     * The RewardType model constructor.
     * @property {module:model/RewardType}
     */
    RewardType,

    /**
     * The SportFreeBetNft model constructor.
     * @property {module:model/SportFreeBetNft}
     */
    SportFreeBetNft,

    /**
     * The SportMatchBet model constructor.
     * @property {module:model/SportMatchBet}
     */
    SportMatchBet,

    /**
     * The SportMatchBetCreate model constructor.
     * @property {module:model/SportMatchBetCreate}
     */
    SportMatchBetCreate,

    /**
     * The SportMatchBetRead model constructor.
     * @property {module:model/SportMatchBetRead}
     */
    SportMatchBetRead,

    /**
     * The SportMatchBetUpdate model constructor.
     * @property {module:model/SportMatchBetUpdate}
     */
    SportMatchBetUpdate,

    /**
     * The SportMatchRead model constructor.
     * @property {module:model/SportMatchRead}
     */
    SportMatchRead,

    /**
     * The SportRatedLeague model constructor.
     * @property {module:model/SportRatedLeague}
     */
    SportRatedLeague,

    /**
     * The SportRatedLeagueEntry model constructor.
     * @property {module:model/SportRatedLeagueEntry}
     */
    SportRatedLeagueEntry,

    /**
     * The SportRatedLeagueEntryRead model constructor.
     * @property {module:model/SportRatedLeagueEntryRead}
     */
    SportRatedLeagueEntryRead,

    /**
     * The SportRatedLeagueEntryReadWithLeague model constructor.
     * @property {module:model/SportRatedLeagueEntryReadWithLeague}
     */
    SportRatedLeagueEntryReadWithLeague,

    /**
     * The SportReward model constructor.
     * @property {module:model/SportReward}
     */
    SportReward,

    /**
     * The SportTeam model constructor.
     * @property {module:model/SportTeam}
     */
    SportTeam,

    /**
     * The SportTournament model constructor.
     * @property {module:model/SportTournament}
     */
    SportTournament,

    /**
     * The SportTournamentRead model constructor.
     * @property {module:model/SportTournamentRead}
     */
    SportTournamentRead,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserCreate model constructor.
     * @property {module:model/UserCreate}
     */
    UserCreate,

    /**
     * The UserNftItems model constructor.
     * @property {module:model/UserNftItems}
     */
    UserNftItems,

    /**
     * The UserRead model constructor.
     * @property {module:model/UserRead}
     */
    UserRead,

    /**
     * The UserReadWithLeagueEntries model constructor.
     * @property {module:model/UserReadWithLeagueEntries}
     */
    UserReadWithLeagueEntries,

    /**
     * The UserUpdate model constructor.
     * @property {module:model/UserUpdate}
     */
    UserUpdate,

    /**
     * The ValidationError model constructor.
     * @property {module:model/ValidationError}
     */
    ValidationError,

    /**
     * The ValidationErrorLocInner model constructor.
     * @property {module:model/ValidationErrorLocInner}
     */
    ValidationErrorLocInner,

    /**
    * The BetsApi service constructor.
    * @property {module:api/BetsApi}
    */
    BetsApi,

    /**
    * The MatchesApi service constructor.
    * @property {module:api/MatchesApi}
    */
    MatchesApi,

    /**
    * The RatingApi service constructor.
    * @property {module:api/RatingApi}
    */
    RatingApi,

    /**
    * The RewardsApi service constructor.
    * @property {module:api/RewardsApi}
    */
    RewardsApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The TonAPIApi service constructor.
    * @property {module:api/TonAPIApi}
    */
    TonAPIApi,

    /**
    * The TournamentsApi service constructor.
    * @property {module:api/TournamentsApi}
    */
    TournamentsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
