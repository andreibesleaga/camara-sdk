// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create a subscription for a device to receive notifications when the device
   * enters or exits a specified area.
   *
   * @example
   * ```ts
   * const deviceLocationSubscription =
   *   await client.devicelocation.subscriptions.create({
   *     config: {
   *       subscriptionDetail: {
   *         device: { phoneNumber: '+12345678912' },
   *         area: { areaType: 'CIRCLE' },
   *       },
   *       initialEvent: true,
   *       subscriptionMaxEvents: 10,
   *       subscriptionExpireTime: '2024-03-22T05:40:58.469Z',
   *     },
   *     protocol: 'HTTP',
   *     sink: 'https://notificationSendServer12.supertelco.com',
   *     types: [
   *       'org.camaraproject.geofencing-subscriptions.v0.area-entered',
   *     ],
   *   });
   * ```
   */
  create(params: SubscriptionCreateParams, options?: RequestOptions): APIPromise<DeviceLocationSubscription> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/devicelocation/subscriptions', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve Geofencing subscription information for a given subscription ID.
   *
   * @example
   * ```ts
   * const deviceLocationSubscription =
   *   await client.devicelocation.subscriptions.retrieve(
   *     'qs15-h556-rt89-1298',
   *   );
   * ```
   */
  retrieve(
    subscriptionID: string,
    params: SubscriptionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceLocationSubscription> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get(path`/devicelocation/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a list of geofencing event subscription(s).
   *
   * @example
   * ```ts
   * const deviceLocationSubscriptions =
   *   await client.devicelocation.subscriptions.list();
   * ```
   */
  list(
    params: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get('/devicelocation/subscriptions', {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete a given Geofencing subscription.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.devicelocation.subscriptions.delete(
   *     'qs15-h556-rt89-1298',
   *   );
   * ```
   */
  delete(
    subscriptionID: string,
    params: SubscriptionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionDeleteResponse> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.delete(path`/devicelocation/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * The geofencing area where the monitor is active. This area is specified by API
 * consumers in the subscription request. The same area definition is included in
 * event notifications without any modifications.
 */
export interface DeviceLocationArea {
  /**
   * Type of this area. CIRCLE - The area is defined as a circle.
   */
  areaType: 'CIRCLE';
}

/**
 * Implementation-specific configuration parameters are needed by the subscription
 * manager for acquiring events. In CAMARA we have predefined attributes like
 * `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`.
 */
export interface DeviceLocationConfig {
  /**
   * Set to `true` by API consumer if consumer wants to get an event as soon as the
   * subscription is created and current situation reflects event request. Example:
   * Consumer request area entered event. If consumer sets initialEvent to true and
   * device is already in the geofence, an event is triggered.
   */
  initialEvent?: boolean;

  /**
   * The subscription expiration time (in date-time format) requested by the API
   * consumer. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  subscriptionExpireTime?: string;

  /**
   * Identifies the maximum number of event reports to be generated (>=1) requested
   * by the API consumer - Once this number is reached, the subscription ends. Note
   * on combined usage of `initialEvent` and `subscriptionMaxEvents`: If an event is
   * triggered following `initialEvent` set to `true`, this event will be counted
   * towards `subscriptionMaxEvents`.
   */
  subscriptionMaxEvents?: number;
}

/**
 * End-user device able to connect to a mobile network. Examples of devices include
 * smartphones or IoT sensors/actuators.
 *
 * The developer can choose to provide the below specified device identifiers:
 *
 * - `ipv4Address`
 * - `ipv6Address`
 * - `phoneNumber`
 * - `networkAccessIdentifier`
 *
 * NOTE1: the API provider might support only a subset of these options. The API
 * consumer can provide multiple identifiers to be compatible across different API
 * providers. In this case the identifiers MUST belong to the same device. Where
 * more than one device identifier is provided, only one identifier will be
 * selected by the implementation and this choice indicated to the API consumer in
 * the response or event. NOTE2: as for this Commonalities release, we are
 * enforcing that the networkAccessIdentifier is only part of the schema for
 * future-proofing, and CAMARA does not currently allow its use. After the CAMARA
 * meta-release work is concluded and the relevant issues are resolved, its use
 * will need to be explicitly documented in the guidelines.
 */
export interface DeviceLocationDevice {
  /**
   * The device should be identified by either the public (observed) IP address and
   * port as seen by the application server, or the private (local) and any public
   * (observed) IP addresses in use by the device (this information can be obtained
   * by various means, for example from some DNS servers).
   *
   * If the allocated and observed IP addresses are the same (i.e. NAT is not in use)
   * then the same address should be specified for both publicAddress and
   * privateAddress.
   *
   * If NAT64 is in use, the device should be identified by its publicAddress and
   * publicPort, or separately by its allocated IPv6 address (field ipv6Address of
   * the Device object)
   *
   * In all cases, publicAddress must be specified, along with at least one of either
   * privateAddress or publicPort, dependent upon which is known. In general, mobile
   * devices cannot be identified by their public IPv4 address alone.
   */
  ipv4Address?: DeviceLocationDevice.Ipv4Address;

  /**
   * The device should be identified by the observed IPv6 address, or by any single
   * IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to
   * the /64 prefix).
   */
  ipv6Address?: string;

  /**
   * A public identifier addressing a subscription in a mobile network. In 3GPP
   * terminology, it corresponds to the GPSI formatted with the External Identifier
   * ({Local Identifier}@{Domain Identifier}). Unlike the telephone number, the
   * network access identifier is not subjected to portability ruling in force, and
   * is individually managed by each operator.
   */
  networkAccessIdentifier?: string;

  /**
   * A public identifier addressing a telephone subscription. In mobile networks, it
   * corresponds to the MSISDN (Mobile Station International Subscriber Directory
   * Number). In order to be globally unique it has to be formatted in international
   * format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;
}

export namespace DeviceLocationDevice {
  /**
   * The device should be identified by either the public (observed) IP address and
   * port as seen by the application server, or the private (local) and any public
   * (observed) IP addresses in use by the device (this information can be obtained
   * by various means, for example from some DNS servers).
   *
   * If the allocated and observed IP addresses are the same (i.e. NAT is not in use)
   * then the same address should be specified for both publicAddress and
   * privateAddress.
   *
   * If NAT64 is in use, the device should be identified by its publicAddress and
   * publicPort, or separately by its allocated IPv6 address (field ipv6Address of
   * the Device object)
   *
   * In all cases, publicAddress must be specified, along with at least one of either
   * privateAddress or publicPort, dependent upon which is known. In general, mobile
   * devices cannot be identified by their public IPv4 address alone.
   */
  export interface Ipv4Address {
    /**
     * A single IPv4 address with no subnet mask.
     */
    privateAddress?: string;

    /**
     * A single IPv4 address with no subnet mask.
     */
    publicAddress?: string;

    /**
     * TCP or UDP port number.
     */
    publicPort?: number;
  }
}

/**
 * Identifier of a delivery protocol. Only HTTP is allowed for now.
 */
export type DeviceLocationProtocol = 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';

/**
 * Represents a event-type subscription.
 */
export interface DeviceLocationSubscription {
  /**
   * The unique identifier of the subscription in the scope of the subscription
   * manager. When this information is contained within an event notification, this
   * concept SHALL be referred as subscriptionId as per Commonalities Event
   * Notification Model.
   */
  id: string;

  /**
   * Implementation-specific configuration parameters are needed by the subscription
   * manager for acquiring events. In CAMARA we have predefined attributes like
   * `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`.
   */
  config: DeviceLocationSubscription.Config;

  /**
   * Identifier of a delivery protocol. Only HTTP is allowed for now.
   */
  protocol: DeviceLocationProtocol;

  /**
   * The address to which events shall be delivered using the selected protocol.
   */
  sink: string;

  /**
   * Date when the event subscription will begin/began It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  startsAt: string;

  /**
   * Camara Event types eligible to be delivered by this subscription. Note: As of
   * now we enforce to have only event type per subscription.
   */
  types: Array<DeviceLocationSubscriptionEventType>;

  /**
   * Date when the event subscription will expire. Only provided when
   * `subscriptionExpireTime` is indicated by API client or Telco Operator has
   * specific policy about that. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  expiresAt?: string;

  /**
   * Current status of the subscription - Management of Subscription State engine is
   * not mandatory for now. Note not all statuses may be considered to be
   * implemented. Details:
   *
   * - `ACTIVATION_REQUESTED`: Subscription creation (POST) is triggered but
   *   subscription creation process is not finished yet.
   * - `ACTIVE`: Subscription creation process is completed. Subscription is fully
   *   operative.
   * - `INACTIVE`: Subscription is temporarily inactive, but its workflow logic is
   *   not deleted.
   * - `EXPIRED`: Subscription is ended (no longer active). This status applies when
   *   subscription is ended due to `SUBSCRIPTION_EXPIRED` or `ACCESS_TOKEN_EXPIRED`
   *   event.
   * - `DELETED`: Subscription is ended as deleted (no longer active). This status
   *   applies when subscription information is kept (i.e. subscription workflow is
   *   no longer active but its meta-information is kept).
   */
  status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED';
}

export namespace DeviceLocationSubscription {
  /**
   * Implementation-specific configuration parameters are needed by the subscription
   * manager for acquiring events. In CAMARA we have predefined attributes like
   * `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`.
   */
  export interface Config extends SubscriptionsAPI.DeviceLocationConfig {
    /**
     * The detail of the event subscription granted by the implementation.
     */
    subscriptionDetail: Config.SubscriptionDetail;
  }

  export namespace Config {
    /**
     * The detail of the event subscription granted by the implementation.
     */
    export interface SubscriptionDetail {
      /**
       * The geofencing area where the monitor is active. This area is specified by API
       * consumers in the subscription request. The same area definition is included in
       * event notifications without any modifications.
       */
      area: SubscriptionsAPI.DeviceLocationArea;

      /**
       * End-user device able to connect to a mobile network. Examples of devices include
       * smartphones or IoT sensors/actuators.
       *
       * The developer can choose to provide the below specified device identifiers:
       *
       * - `ipv4Address`
       * - `ipv6Address`
       * - `phoneNumber`
       * - `networkAccessIdentifier`
       *
       * NOTE1: the API provider might support only a subset of these options. The API
       * consumer can provide multiple identifiers to be compatible across different API
       * providers. In this case the identifiers MUST belong to the same device. Where
       * more than one device identifier is provided, only one identifier will be
       * selected by the implementation and this choice indicated to the API consumer in
       * the response or event. NOTE2: as for this Commonalities release, we are
       * enforcing that the networkAccessIdentifier is only part of the schema for
       * future-proofing, and CAMARA does not currently allow its use. After the CAMARA
       * meta-release work is concluded and the relevant issues are resolved, its use
       * will need to be explicitly documented in the guidelines.
       */
      device?: SubscriptionsAPI.DeviceLocationDevice;
    }
  }
}

/**
 * area-entered - Event triggered when the device enters the given area
 *
 * area-left - Event triggered when the device leaves the given area
 */
export type DeviceLocationSubscriptionEventType =
  | 'org.camaraproject.geofencing-subscriptions.v0.area-entered'
  | 'org.camaraproject.geofencing-subscriptions.v0.area-left';

export type SubscriptionListResponse = Array<DeviceLocationSubscription>;

/**
 * Response for an event-type subscription request managed asynchronously (Creation
 * or Deletion).
 */
export interface SubscriptionDeleteResponse {
  /**
   * The unique identifier of the subscription in the scope of the subscription
   * manager. When this information is contained within an event notification, this
   * concept SHALL be referred as subscriptionId as per Commonalities Event
   * Notification Model.
   */
  id: string;
}

export interface SubscriptionCreateParams {
  /**
   * Body param: Implementation-specific configuration parameters are needed by the
   * subscription manager for acquiring events. In CAMARA we have predefined
   * attributes like `subscriptionExpireTime`, `subscriptionMaxEvents`,
   * `initialEvent`.
   */
  config: SubscriptionCreateParams.Config;

  /**
   * Body param: Identifier of a delivery protocol. Only HTTP is allowed for now.
   */
  protocol: DeviceLocationProtocol;

  /**
   * Body param: The address to which events shall be delivered using the selected
   * protocol.
   */
  sink: string;

  /**
   * Body param: Camara Event types which are eligible to be delivered by this
   * subscription. Note: As of now we enforce to have only event type per
   * subscription.
   */
  types: Array<DeviceLocationSubscriptionEventType>;

  /**
   * Body param: A sink credential provides authentication or authorization
   * information necessary to enable delivery of events to a target.
   */
  sinkCredential?: SubscriptionCreateParams.SinkCredential;

  /**
   * Header param: Correlation id for the different services.
   */
  'x-correlator'?: string;
}

export namespace SubscriptionCreateParams {
  /**
   * Implementation-specific configuration parameters are needed by the subscription
   * manager for acquiring events. In CAMARA we have predefined attributes like
   * `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`.
   */
  export interface Config extends SubscriptionsAPI.DeviceLocationConfig {
    /**
     * The detail of the requested event subscription.
     */
    subscriptionDetail: Config.SubscriptionDetail;
  }

  export namespace Config {
    /**
     * The detail of the requested event subscription.
     */
    export interface SubscriptionDetail {
      /**
       * The geofencing area where the monitor is active. This area is specified by API
       * consumers in the subscription request. The same area definition is included in
       * event notifications without any modifications.
       */
      area: SubscriptionsAPI.DeviceLocationArea;

      /**
       * End-user device able to connect to a mobile network. Examples of devices include
       * smartphones or IoT sensors/actuators.
       *
       * The developer can choose to provide the below specified device identifiers:
       *
       * - `ipv4Address`
       * - `ipv6Address`
       * - `phoneNumber`
       * - `networkAccessIdentifier`
       *
       * NOTE1: the API provider might support only a subset of these options. The API
       * consumer can provide multiple identifiers to be compatible across different API
       * providers. In this case the identifiers MUST belong to the same device. Where
       * more than one device identifier is provided, only one identifier will be
       * selected by the implementation and this choice indicated to the API consumer in
       * the response or event. NOTE2: as for this Commonalities release, we are
       * enforcing that the networkAccessIdentifier is only part of the schema for
       * future-proofing, and CAMARA does not currently allow its use. After the CAMARA
       * meta-release work is concluded and the relevant issues are resolved, its use
       * will need to be explicitly documented in the guidelines.
       */
      device?: SubscriptionsAPI.DeviceLocationDevice;
    }
  }

  /**
   * A sink credential provides authentication or authorization information necessary
   * to enable delivery of events to a target.
   */
  export interface SinkCredential {
    /**
     * The type of the credential. Note: Type of the credential - MUST be set to
     * ACCESSTOKEN for now
     */
    credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN';
  }
}

export interface SubscriptionRetrieveParams {
  /**
   * Correlation id for the different services.
   */
  'x-correlator'?: string;
}

export interface SubscriptionListParams {
  /**
   * Correlation id for the different services.
   */
  'x-correlator'?: string;
}

export interface SubscriptionDeleteParams {
  /**
   * Correlation id for the different services.
   */
  'x-correlator'?: string;
}

export declare namespace Subscriptions {
  export {
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
