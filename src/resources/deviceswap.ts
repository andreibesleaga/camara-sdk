// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Deviceswap extends APIResource {
  /**
   * Check if device swap has been performed during a past period
   *
   * @example
   * ```ts
   * const response = await client.deviceswap.check({
   *   maxAge: 120,
   * });
   * ```
   */
  check(params: DeviceswapCheckParams, options?: RequestOptions): APIPromise<DeviceswapCheckResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/deviceswap/check', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get timestamp of last device swap for a mobile user account provided with phone
   * number.
   *
   * @example
   * ```ts
   * const response = await client.deviceswap.retrieveDate();
   * ```
   */
  retrieveDate(
    params: DeviceswapRetrieveDateParams,
    options?: RequestOptions,
  ): APIPromise<DeviceswapRetrieveDateResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/deviceswap/retrieve-date', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface DeviceswapCheckResponse {
  /**
   * Indicates whether the device has been swapped during the period within the
   * provided age.
   */
  swapped: boolean;
}

export interface DeviceswapRetrieveDateResponse {
  /**
   * Timestamp of latest device swap performed. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  latestDeviceChange: string | null;

  /**
   * Timeframe in days for device change supervision for the phone number. It could
   * be valued in the response if the latest Device swap occurred before this
   * monitored period.
   */
  monitoredPeriod?: number;
}

export interface DeviceswapCheckParams {
  /**
   * Body param: Period in hours to be checked for device swap.
   */
  maxAge?: number;

  /**
   * Body param: A public identifier addressing a telephone subscription. In mobile
   * networks it corresponds to the MSISDN (Mobile Station International Subscriber
   * Directory Number). In order to be globally unique it has to be formatted in
   * international format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface DeviceswapRetrieveDateParams {
  /**
   * Body param: A public identifier addressing a telephone subscription. In mobile
   * networks it corresponds to the MSISDN (Mobile Station International Subscriber
   * Directory Number). In order to be globally unique it has to be formatted in
   * international format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export declare namespace Deviceswap {
  export {
    type DeviceswapCheckResponse as DeviceswapCheckResponse,
    type DeviceswapRetrieveDateResponse as DeviceswapRetrieveDateResponse,
    type DeviceswapCheckParams as DeviceswapCheckParams,
    type DeviceswapRetrieveDateParams as DeviceswapRetrieveDateParams,
  };
}
