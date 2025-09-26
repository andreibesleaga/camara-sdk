// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  DeviceReachabilityStatusConfig,
  DeviceReachabilityStatusProtocol,
  DeviceReachabilityStatusSubscription,
  DeviceReachabilityStatusSubscriptionEventType,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveParams,
  Subscriptions,
} from './subscriptions';

export class Devicereachabilitystatus extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Devicereachabilitystatus.Subscriptions = Subscriptions;

export declare namespace Devicereachabilitystatus {
  export {
    Subscriptions as Subscriptions,
    type DeviceReachabilityStatusConfig as DeviceReachabilityStatusConfig,
    type DeviceReachabilityStatusProtocol as DeviceReachabilityStatusProtocol,
    type DeviceReachabilityStatusSubscription as DeviceReachabilityStatusSubscription,
    type DeviceReachabilityStatusSubscriptionEventType as DeviceReachabilityStatusSubscriptionEventType,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
