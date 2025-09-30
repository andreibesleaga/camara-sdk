// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  ConnectivityInsightsConfig,
  ConnectivityInsightsProtocol,
  ConnectivityInsightsSubscription,
  ConnectivityInsightsSubscriptionEventType,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveParams,
  Subscriptions,
} from './subscriptions';

export class Connectivityinsights extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Connectivityinsights.Subscriptions = Subscriptions;

export declare namespace Connectivityinsights {
  export {
    Subscriptions as Subscriptions,
    type ConnectivityInsightsConfig as ConnectivityInsightsConfig,
    type ConnectivityInsightsProtocol as ConnectivityInsightsProtocol,
    type ConnectivityInsightsSubscription as ConnectivityInsightsSubscription,
    type ConnectivityInsightsSubscriptionEventType as ConnectivityInsightsSubscriptionEventType,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
