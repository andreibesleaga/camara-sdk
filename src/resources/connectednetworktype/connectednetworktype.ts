// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  ConnectedNetworkTypeConfig,
  ConnectedNetworkTypeProtocol,
  ConnectedNetworkTypeSubscription,
  ConnectedNetworkTypeSubscriptionEventType,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveParams,
  Subscriptions,
} from './subscriptions';

export class Connectednetworktype extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Connectednetworktype.Subscriptions = Subscriptions;

export declare namespace Connectednetworktype {
  export {
    Subscriptions as Subscriptions,
    type ConnectedNetworkTypeConfig as ConnectedNetworkTypeConfig,
    type ConnectedNetworkTypeProtocol as ConnectedNetworkTypeProtocol,
    type ConnectedNetworkTypeSubscription as ConnectedNetworkTypeSubscription,
    type ConnectedNetworkTypeSubscriptionEventType as ConnectedNetworkTypeSubscriptionEventType,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
