// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  Config,
  Protocol,
  Subscription,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionEventType,
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
    type Config as Config,
    type Protocol as Protocol,
    type Subscription as Subscription,
    type SubscriptionEventType as SubscriptionEventType,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
