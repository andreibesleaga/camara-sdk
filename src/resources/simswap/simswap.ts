// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  SimSwapConfig,
  SimSwapProtocol,
  SimSwapSubscription,
  SimSwapSubscriptionEventType,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveParams,
  Subscriptions,
} from './subscriptions';

export class Simswap extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Simswap.Subscriptions = Subscriptions;

export declare namespace Simswap {
  export {
    Subscriptions as Subscriptions,
    type SimSwapConfig as SimSwapConfig,
    type SimSwapProtocol as SimSwapProtocol,
    type SimSwapSubscription as SimSwapSubscription,
    type SimSwapSubscriptionEventType as SimSwapSubscriptionEventType,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
