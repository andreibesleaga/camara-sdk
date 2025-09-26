// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create a device roaming status event subscription for a device
   *
   * @example
   * ```ts
   * const deviceRoamingStatusSubscription =
   *   await client.deviceroamingstatus.subscriptions.create({
   *     config: {
   *       subscriptionDetail: {
   *         device: { phoneNumber: '+123456789' },
   *       },
   *       subscriptionExpireTime: '2023-01-17T13:18:23.682Z',
   *       subscriptionMaxEvents: 5,
   *       initialEvent: true,
   *     },
   *     protocol: 'HTTP',
   *     sink: 'https://endpoint.example.com/sink',
   *     types: [
   *       'org.camaraproject.device-roaming-status-subscriptions.v0.roaming-status',
   *     ],
   *     sinkCredential: {
   *       credentialType: 'ACCESSTOKEN',
   *       accessToken: 'xxx',
   *       accessTokenExpiresUtc: '2024-02-17T16:23:45Z',
   *       accessTokenType: 'bearer',
   *     },
   *   });
   * ```
   */
  create(
    params: SubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<DeviceRoamingStatusSubscription> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/deviceroamingstatus/subscriptions', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * retrieve device roaming status subscription information for a given
   * subscription.
   *
   * @example
   * ```ts
   * const deviceRoamingStatusSubscription =
   *   await client.deviceroamingstatus.subscriptions.retrieve(
   *     'qs15-h556-rt89-1298',
   *   );
   * ```
   */
  retrieve(
    subscriptionID: string,
    params: SubscriptionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeviceRoamingStatusSubscription> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get(path`/deviceroamingstatus/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a list of device roaming status event subscription(s)
   *
   * @example
   * ```ts
   * const deviceRoamingStatusSubscriptions =
   *   await client.deviceroamingstatus.subscriptions.list();
   * ```
   */
  list(
    params: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get('/deviceroamingstatus/subscriptions', {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete a given device-roaming-status subscription by ID
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.deviceroamingstatus.subscriptions.delete(
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
    return this._client.delete(path`/deviceroamingstatus/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Implementation-specific configuration parameters needed by the subscription
 * manager for acquiring events. In CAMARA we have predefined attributes like
 * `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent` Specific event
 * type attributes must be defined in `subscriptionDetail` Note: if a request is
 * performed for several event type, all subscribed event will use same `config`
 * parameters.
 */
export interface DeviceRoamingStatusConfig {
  /**
   * The detail of the requested event subscription.
   */
  subscriptionDetail: DeviceRoamingStatusConfig.SubscriptionDetail;

  /**
   * Set to `true` by API consumer if consumer wants to get an event as soon as the
   * subscription is created and current situation reflects event request. Example:
   * Consumer request Roaming event. If consumer sets initialEvent to true and device
   * is in roaming situation, an event is triggered.
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
   * by the API consumer - Once this number is reached, the subscription ends.
   */
  subscriptionMaxEvents?: number;
}

export namespace DeviceRoamingStatusConfig {
  /**
   * The detail of the requested event subscription.
   */
  export interface SubscriptionDetail {
    /**
     * End-user equipment able to connect to a mobile network. Examples of devices
     * include smartphones or IoT sensors/actuators.
     *
     * The developer can choose to provide the below specified device identifiers:
     *
     * - `ipv4Address`
     * - `ipv6Address`
     * - `phoneNumber`
     * - `networkAccessIdentifier`
     *
     * NOTE: the MNO might support only a subset of these options. The API invoker can
     * provide multiple identifiers to be compatible across different MNOs. In this
     * case the identifiers MUST belong to the same device.
     */
    device?: SubscriptionDetail.Device;
  }

  export namespace SubscriptionDetail {
    /**
     * End-user equipment able to connect to a mobile network. Examples of devices
     * include smartphones or IoT sensors/actuators.
     *
     * The developer can choose to provide the below specified device identifiers:
     *
     * - `ipv4Address`
     * - `ipv6Address`
     * - `phoneNumber`
     * - `networkAccessIdentifier`
     *
     * NOTE: the MNO might support only a subset of these options. The API invoker can
     * provide multiple identifiers to be compatible across different MNOs. In this
     * case the identifiers MUST belong to the same device.
     */
    export interface Device {
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
      ipv4Address?: Device.Ipv4Address;

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
       * A public identifier addressing a telephone subscription. In mobile networks it
       * corresponds to the MSISDN (Mobile Station International Subscriber Directory
       * Number). In order to be globally unique it has to be formatted in international
       * format, according to E.164 standard, prefixed with '+'.
       */
      phoneNumber?: string;
    }

    export namespace Device {
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
         * A single IPv4 address with no subnet mask
         */
        privateAddress?: string;

        /**
         * A single IPv4 address with no subnet mask
         */
        publicAddress?: string;

        /**
         * TCP or UDP port number
         */
        publicPort?: number;
      }
    }
  }
}

/**
 * Identifier of a delivery protocol. Only HTTP is allowed for now
 */
export type DeviceRoamingStatusProtocol = 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';

/**
 * Represents a event-type subscription.
 */
export interface DeviceRoamingStatusSubscription {
  /**
   * The unique identifier of the subscription in the scope of the subscription
   * manager. When this information is contained within an event notification, this
   * concept SHALL be referred as subscriptionId as per Commonalities Event
   * Notification Model.
   */
  id: string;

  /**
   * Implementation-specific configuration parameters needed by the subscription
   * manager for acquiring events. In CAMARA we have predefined attributes like
   * `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent` Specific event
   * type attributes must be defined in `subscriptionDetail` Note: if a request is
   * performed for several event type, all subscribed event will use same `config`
   * parameters.
   */
  config: DeviceRoamingStatusConfig;

  /**
   * Identifier of a delivery protocol. Only HTTP is allowed for now
   */
  protocol: DeviceRoamingStatusProtocol;

  /**
   * The address to which events shall be delivered using the selected protocol.
   */
  sink: string;

  /**
   * Camara Event types eligible to be delivered by this subscription. Note: for the
   * Commonalities meta-release v0.4 we enforce to have only event type per
   * subscription then for following meta-release use of array MUST be decided at API
   * project level.
   */
  types: Array<DeviceRoamingStatusSubscriptionEventType>;

  /**
   * Date when the event subscription will expire. Only provided when
   * `subscriptionExpireTime` is indicated by API client or Telco Operator has
   * specific policy about that. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  expiresAt?: string;

  /**
   * Date when the event subscription will begin/began It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  startsAt?: string;

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

/**
 * roaming-status - Event triggered when the device switch from roaming ON to
 * roaming OFF and conversely
 *
 * roaming-on - Event triggered when the device switch from roaming OFF to roaming
 * ON
 *
 * roaming-off - Event triggered when the device switch from roaming ON to roaming
 * OFF
 *
 * roaming-change-country - Event triggered when the device in roaming change
 * country code
 */
export type DeviceRoamingStatusSubscriptionEventType =
  | 'org.camaraproject.device-roaming-status-subscriptions.v0.roaming-status'
  | 'org.camaraproject.device-roaming-status-subscriptions.v0.roaming-on'
  | 'org.camaraproject.device-roaming-status-subscriptions.v0.roaming-off'
  | 'org.camaraproject.device-roaming-status-subscriptions.v0.roaming-change-country';

export type SubscriptionListResponse = Array<DeviceRoamingStatusSubscription>;

/**
 * Response for a device reachability status operation managed asynchronously
 * (Creation or Deletion)
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
   * Body param: Implementation-specific configuration parameters needed by the
   * subscription manager for acquiring events. In CAMARA we have predefined
   * attributes like `subscriptionExpireTime`, `subscriptionMaxEvents`,
   * `initialEvent` Specific event type attributes must be defined in
   * `subscriptionDetail` Note: if a request is performed for several event type, all
   * subscribed event will use same `config` parameters.
   */
  config: DeviceRoamingStatusConfig;

  /**
   * Body param: Identifier of a delivery protocol. Only HTTP is allowed for now
   */
  protocol: DeviceRoamingStatusProtocol;

  /**
   * Body param: The address to which events shall be delivered using the selected
   * protocol.
   */
  sink: string;

  /**
   * Body param: Camara Event types eligible to be delivered by this subscription.
   * Note: for the current Commonalities version (v0.5) only one event type per
   * subscription is allowed, yet in the following releases use of array of event
   * types SHALL be specified without changing this definition.
   */
  types: Array<DeviceRoamingStatusSubscriptionEventType>;

  /**
   * Body param: A sink credential provides authentication or authorization
   * information necessary to enable delivery of events to a target.
   */
  sinkCredential?: SubscriptionCreateParams.SinkCredential;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export namespace SubscriptionCreateParams {
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
   * Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface SubscriptionListParams {
  /**
   * Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface SubscriptionDeleteParams {
  /**
   * Correlation id for the different services
   */
  'x-correlator'?: string;
}

export declare namespace Subscriptions {
  export {
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
