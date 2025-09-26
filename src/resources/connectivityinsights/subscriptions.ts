// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create a Connectivity insights subscription for a device
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.connectivityinsights.subscriptions.create({
   *     config: {
   *       subscriptionDetail: {
   *         applicationProfileId:
   *           '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *         device: {},
   *       },
   *     },
   *     protocol: 'HTTP',
   *     sink: 'https://endpoint.example.com/sink',
   *     types: [
   *       'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality',
   *     ],
   *   });
   * ```
   */
  create(params: SubscriptionCreateParams, options?: RequestOptions): APIPromise<Subscription> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/connectivityinsights/subscriptions', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a given subscription by ID
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.connectivityinsights.subscriptions.retrieve(
   *     'qs15-h556-rt89-1298',
   *   );
   * ```
   */
  retrieve(
    subscriptionID: string,
    params: SubscriptionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Subscription> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get(path`/connectivityinsights/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Operation to list subscriptions authorized to be retrieved by the provided
   * access token.
   *
   * @example
   * ```ts
   * const subscriptions =
   *   await client.connectivityinsights.subscriptions.list();
   * ```
   */
  list(
    params: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get('/connectivityinsights/subscriptions', {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete a given subscription by ID
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.connectivityinsights.subscriptions.delete(
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
    return this._client.delete(path`/connectivityinsights/subscriptions/${subscriptionID}`, {
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
export interface Config {
  /**
   * The detail of the requested event subscription
   */
  subscriptionDetail: Config.SubscriptionDetail;

  /**
   * Set to `true` by API consumer if consumer wants to get an event as soon as the
   * subscription is created and current situation reflects event request.
   */
  initialEvent?: boolean;

  /**
   * The subscription expiration time (in date-time format) requested by the API
   * consumer. Up to API project decision to keep it. It must follow
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

export namespace Config {
  /**
   * The detail of the requested event subscription
   */
  export interface SubscriptionDetail {
    /**
     * Identifier for the Application Profile
     */
    applicationProfileId: string;

    /**
     * End-user equipment able to connect to a mobile network. Examples of devices
     * include smartphones or IoT sensors/actuators. The developer can choose to
     * provide the below specified device identifiers: _ `ipv4Address` _ `ipv6Address`
     * _ `phoneNumber` _ `networkAccessIdentifier` NOTE1: the network operator might
     * support only a subset of these options. The API invoker can provide multiple
     * identifiers to be compatible across different network operators. In this case
     * the identifiers MUST belong to the same device. NOTE2: as for this Commonalities
     * release, we are enforcing that the networkAccessIdentifier is only part of the
     * schema for future-proofing, and CAMARA does not currently allow its use. After
     * the CAMARA meta-release work is concluded and the relevant issues are resolved,
     * its use will need to be explicitly documented in the guidelines.
     */
    device: SubscriptionDetail.Device;

    /**
     * A server hosting backend applications to deliver some business logic to clients.
     *
     * The developer can choose to provide the below specified device identifiers:
     *
     * - `ipv4Address`
     * - `ipv6Address`
     *
     * The Operator will use this information to calculate the end to end network
     * performance in scenarios where its feasible.
     */
    applicationServer?: SubscriptionDetail.ApplicationServer;

    /**
     * Specification of several TCP or UDP ports
     */
    applicationServerPorts?: SubscriptionDetail.ApplicationServerPorts;
  }

  export namespace SubscriptionDetail {
    /**
     * End-user equipment able to connect to a mobile network. Examples of devices
     * include smartphones or IoT sensors/actuators. The developer can choose to
     * provide the below specified device identifiers: _ `ipv4Address` _ `ipv6Address`
     * _ `phoneNumber` _ `networkAccessIdentifier` NOTE1: the network operator might
     * support only a subset of these options. The API invoker can provide multiple
     * identifiers to be compatible across different network operators. In this case
     * the identifiers MUST belong to the same device. NOTE2: as for this Commonalities
     * release, we are enforcing that the networkAccessIdentifier is only part of the
     * schema for future-proofing, and CAMARA does not currently allow its use. After
     * the CAMARA meta-release work is concluded and the relevant issues are resolved,
     * its use will need to be explicitly documented in the guidelines.
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
       *
       * The session shall apply to all IP flows between the device subnet and the
       * specified application server, unless further restricted by the optional
       * parameters devicePorts or applicationServerPorts.
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

    /**
     * A server hosting backend applications to deliver some business logic to clients.
     *
     * The developer can choose to provide the below specified device identifiers:
     *
     * - `ipv4Address`
     * - `ipv6Address`
     *
     * The Operator will use this information to calculate the end to end network
     * performance in scenarios where its feasible.
     */
    export interface ApplicationServer {
      /**
       * IPv4 address may be specified in form <address/mask> as:
       *
       * - address - an IPv4 number in dotted-quad form 1.2.3.4. Only this exact IP
       *   number will match the flow control rule.
       * - address/mask - an IP number as above with a mask width of the form 1.2.3.4/24.
       *   In this case, all IP numbers from 1.2.3.0 to 1.2.3.255 will match. The bit
       *   width MUST be valid for the IP version.
       */
      ipv4Address?: string;

      /**
       * IPv6 address may be specified in form <address/mask> as:
       *
       * - address - The /128 subnet is optional for single addresses:
       *   - 2001:db8:85a3:8d3:1319:8a2e:370:7344
       *   - 2001:db8:85a3:8d3:1319:8a2e:370:7344/128
       * - address/mask - an IP v6 number with a mask:
       *   - 2001:db8:85a3:8d3::0/64
       *   - 2001:db8:85a3:8d3::/64
       */
      ipv6Address?: string;
    }

    /**
     * Specification of several TCP or UDP ports
     */
    export interface ApplicationServerPorts {
      /**
       * Array of TCP or UDP ports
       */
      ports?: Array<number>;

      /**
       * Range of TCP or UDP ports
       */
      ranges?: Array<ApplicationServerPorts.Range>;
    }

    export namespace ApplicationServerPorts {
      export interface Range {
        /**
         * TCP or UDP port number
         */
        from: number;

        /**
         * TCP or UDP port number
         */
        to: number;
      }
    }
  }
}

/**
 * Identifier of a delivery protocol. Only HTTP is allowed for now
 */
export type Protocol = 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';

/**
 * Represents a event-type subscription.
 */
export interface Subscription {
  /**
   * Implementation-specific configuration parameters needed by the subscription
   * manager for acquiring events. In CAMARA we have predefined attributes like
   * `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent` Specific event
   * type attributes must be defined in `subscriptionDetail` Note: if a request is
   * performed for several event type, all subscribed event will use same `config`
   * parameters.
   */
  config: Config;

  /**
   * Identifier of a delivery protocol. Only HTTP is allowed for now
   */
  protocol: Protocol;

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
   * Camara Event types eligible to be delivered by this subscription.
   */
  types: Array<SubscriptionEventType>;

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
   * - `DEACTIVE`: Subscription is temporarily inactive, but its workflow logic is
   *   not deleted.
   * - `EXPIRED`: Subscription is ended (no longer active). This status applies when
   *   subscription is ended due to `SUBSCRIPTION_EXPIRED` or `ACCESS_TOKEN_EXPIRED`
   *   event.
   * - `DELETED`: Subscription is ended as deleted (no longer active). This status
   *   applies when subscription information is kept (i.e. subscription workflow is
   *   no longer active but its metainformation is kept).
   */
  status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED';

  /**
   * When this information is contained within an event notification, it SHALL be
   * referred to as `subscriptionId` as per the Commonalities Event Notification
   * Model.
   */
  subscriptionId?: string;
}

/**
 * event-type - Event triggered when an event-type event occurred
 */
export type SubscriptionEventType =
  'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality';

export type SubscriptionListResponse = Array<Subscription>;

/**
 * Response for a event-type subscription request managed asynchronously (Creation
 * or Deletion)
 */
export interface SubscriptionDeleteResponse {
  /**
   * When this information is contained within an event notification, it SHALL be
   * referred to as `subscriptionId` as per the Commonalities Event Notification
   * Model.
   */
  subscriptionId?: string;
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
  config: Config;

  /**
   * Body param: Identifier of a delivery protocol. Only HTTP is allowed for now
   */
  protocol: Protocol;

  /**
   * Body param: The address to which events shall be delivered using the selected
   * protocol.
   */
  sink: string;

  /**
   * Body param: Camara Event types eligible to be delivered by this subscription.
   */
  types: Array<SubscriptionEventType>;

  /**
   * Body param: A sink credential provides authentication or authorization
   * information
   */
  sinkCredential?: SubscriptionCreateParams.SinkCredential;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export namespace SubscriptionCreateParams {
  /**
   * A sink credential provides authentication or authorization information
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
