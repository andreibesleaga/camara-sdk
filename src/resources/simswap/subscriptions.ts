// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create a sim swap event subscription for a phone number
   *
   * @example
   * ```ts
   * const simSwapSubscription =
   *   await client.simswap.subscriptions.create({
   *     config: {
   *       subscriptionDetail: { phoneNumber: '+123456789' },
   *       subscriptionMaxEvents: 10,
   *       subscriptionExpireTime: '2025-01-17T13:18:23.682Z',
   *     },
   *     protocol: 'HTTP',
   *     sink: 'https://endpoint.example.com/sink',
   *     types: [
   *       'org.camaraproject.sim-swap-subscriptions.v0.swapped',
   *     ],
   *     sinkCredential: { credentialType: 'ACCESSTOKEN' },
   *   });
   * ```
   */
  create(params: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SimSwapSubscription> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/simswap/subscriptions', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * retrieve event subscription information for a given subscription.
   *
   * @example
   * ```ts
   * const simSwapSubscription =
   *   await client.simswap.subscriptions.retrieve(
   *     'qs15-h556-rt89-1298',
   *   );
   * ```
   */
  retrieve(
    subscriptionID: string,
    params: SubscriptionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SimSwapSubscription> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get(path`/simswap/subscriptions/${subscriptionID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieve a list of sim swap event subscription(s)
   *
   * @example
   * ```ts
   * const simSwapSubscriptions =
   *   await client.simswap.subscriptions.list();
   * ```
   */
  list(
    params: SubscriptionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SubscriptionListResponse> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get('/simswap/subscriptions', {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * delete a given event subscription.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.simswap.subscriptions.delete(
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
    return this._client.delete(path`/simswap/subscriptions/${subscriptionID}`, {
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
 * `subscriptionExpireTime` or `subscriptionMaxEvents` to limit subscription
 * lifetime. Event type attributes must be defined in `subscriptionDetail`
 */
export interface SimSwapConfig {
  /**
   * The detail of the requested event subscription
   */
  subscriptionDetail: SimSwapConfig.SubscriptionDetail;

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

export namespace SimSwapConfig {
  /**
   * The detail of the requested event subscription
   */
  export interface SubscriptionDetail {
    /**
     * A public identifier addressing a telephone subscription. In mobile networks it
     * corresponds to the MSISDN (Mobile Station International Subscriber Directory
     * Number). In order to be globally unique it has to be formatted in international
     * format, according to E.164 standard, prefixed with '+'.
     */
    phoneNumber?: string;
  }
}

/**
 * Identifier of a delivery protocol. Only HTTP is allowed for now
 */
export type SimSwapProtocol = 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';

/**
 * Represents a event-type subscription.
 */
export interface SimSwapSubscription {
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
   * `subscriptionExpireTime` or `subscriptionMaxEvents` to limit subscription
   * lifetime. Event type attributes must be defined in `subscriptionDetail`
   */
  config: SimSwapConfig;

  /**
   * Identifier of a delivery protocol. Only HTTP is allowed for now
   */
  protocol: SimSwapProtocol;

  /**
   * The address to which events shall be delivered using the selected protocol.
   */
  sink: string;

  /**
   * Camara Event types eligible for subscription:
   *
   * - org.camaraproject.sim-swap-subscriptions.v0.swapped: receive a notification
   *   when a sim swap is performed on the line. Note: for the Commonalities
   *   meta-release v0.4 we enforce to have only event type per subscription then for
   *   following meta-release use of array MUST be decided at API project level.
   */
  types: Array<SimSwapSubscriptionEventType>;

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
   *   subscription is ended due to `SUBSCRIPTION_EXPIRED` event.
   * - `DELETED`: Subscription is ended as deleted (no longer active). This status
   *   applies when subscription information is kept (i.e. subscription workflow is
   *   no longer active but its metainformation is kept).
   */
  status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED';
}

/**
 * swapped - Event triggered when a sim swap occurs on the line
 */
export type SimSwapSubscriptionEventType = 'org.camaraproject.sim-swap-subscriptions.v0.swapped';

export type SubscriptionListResponse = Array<SimSwapSubscription>;

/**
 * Response for a event-type subscription request managed asynchronously (Creation
 * or Deletion)
 */
export interface SubscriptionDeleteResponse {
  /**
   * The unique identifier of the subscription in the scope of the subscription
   * manager. When this information is contained within an event notification, this
   * concept SHALL be referred as subscriptionId as per Commonalities Event
   * Notification Model.
   */
  id?: string;
}

export interface SubscriptionCreateParams {
  /**
   * Body param: Implementation-specific configuration parameters needed by the
   * subscription manager for acquiring events. In CAMARA we have predefined
   * attributes like `subscriptionExpireTime` or `subscriptionMaxEvents` to limit
   * subscription lifetime. Event type attributes must be defined in
   * `subscriptionDetail`
   */
  config: SimSwapConfig;

  /**
   * Body param: Identifier of a delivery protocol. Only HTTP is allowed for now
   */
  protocol: SimSwapProtocol;

  /**
   * Body param: The address to which events shall be delivered using the selected
   * protocol.
   */
  sink: string;

  /**
   * Body param: Camara Event types eligible for subscription:
   *
   * - org.camaraproject.sim-swap-subscriptions.v0.swapped: receive a notification
   *   when a sim swap is performed on the line.
   */
  types: Array<SimSwapSubscriptionEventType>;

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
     * The type of the credential. With the current API version the type MUST be set to
     * ACCESSTOKEN.
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
