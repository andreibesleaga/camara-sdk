// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  DeviceLocationArea,
  DeviceLocationConfig,
  DeviceLocationDevice,
  DeviceLocationProtocol,
  DeviceLocationSubscription,
  DeviceLocationSubscriptionEventType,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  SubscriptionListResponse,
  SubscriptionRetrieveParams,
  Subscriptions,
} from './subscriptions';

export class Devicelocation extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
}

Devicelocation.Subscriptions = Subscriptions;

export declare namespace Devicelocation {
  export {
    Subscriptions as Subscriptions,
    type DeviceLocationArea as DeviceLocationArea,
    type DeviceLocationConfig as DeviceLocationConfig,
    type DeviceLocationDevice as DeviceLocationDevice,
    type DeviceLocationProtocol as DeviceLocationProtocol,
    type DeviceLocationSubscription as DeviceLocationSubscription,
    type DeviceLocationSubscriptionEventType as DeviceLocationSubscriptionEventType,
    type SubscriptionListResponse as SubscriptionListResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionRetrieveParams as SubscriptionRetrieveParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
