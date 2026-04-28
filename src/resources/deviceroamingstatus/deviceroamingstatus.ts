// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  DeviceRoamingStatusConfig,
  DeviceRoamingStatusProtocol,
  DeviceRoamingStatusSubscription,
  DeviceRoamingStatusSubscriptionEventType,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveParams,
  Subscriptions,
} from './subscriptions';

export class Deviceroamingstatus extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Deviceroamingstatus.Subscriptions = Subscriptions;

export declare namespace Deviceroamingstatus {
  export {
    Subscriptions as Subscriptions,
    type DeviceRoamingStatusConfig as DeviceRoamingStatusConfig,
    type DeviceRoamingStatusProtocol as DeviceRoamingStatusProtocol,
    type DeviceRoamingStatusSubscription as DeviceRoamingStatusSubscription,
    type DeviceRoamingStatusSubscriptionEventType as DeviceRoamingStatusSubscriptionEventType,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
