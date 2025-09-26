// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Numberrecycling extends APIResource {
  /**
   * Check whether the subscriber of the phone number has changed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.numberrecycling.checkSubscriberChange({
   *     specifiedDate: '2024-10-31',
   *   });
   * ```
   */
  checkSubscriberChange(
    params: NumberrecyclingCheckSubscriberChangeParams,
    options?: RequestOptions,
  ): APIPromise<NumberrecyclingCheckSubscriberChangeResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/numberrecycling/check', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface NumberrecyclingCheckSubscriberChangeResponse {
  /**
   * Set to true (Boolean, not string) when there has been a change in the subscriber
   * associated with the specific phone number after “specifiedDate”.
   */
  phoneNumberRecycled: boolean;
}

export interface NumberrecyclingCheckSubscriberChangeParams {
  /**
   * Body param: Specified date to check whether there has been a change in the
   * subscriber associated with the specific phone number, in RFC 3339 calendar date
   * format (YYYY-MM-DD).
   */
  specifiedDate: string;

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

export declare namespace Numberrecycling {
  export {
    type NumberrecyclingCheckSubscriberChangeResponse as NumberrecyclingCheckSubscriberChangeResponse,
    type NumberrecyclingCheckSubscriberChangeParams as NumberrecyclingCheckSubscriberChangeParams,
  };
}
