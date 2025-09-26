// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Tenure extends APIResource {
  /**
   * Verifies a specified length of tenure, based on a provided date, for a network
   * subscriber to establish a level of trust for the network subscription
   * identifier.
   *
   * @example
   * ```ts
   * const response = await client.tenure.verify({
   *   tenureDate: '2023-07-03',
   * });
   * ```
   */
  verify(params: TenureVerifyParams, options?: RequestOptions): APIPromise<TenureVerifyResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/tenure/check-tenure', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface TenureVerifyResponse {
  /**
   * `true` when the identified mobile subscription has had valid tenure since
   * `tenureDate`, otherwise `false`
   */
  tenureDateCheck: boolean;

  /**
   * If exists, populated with:
   *
   * - `PAYG` - prepaid (pay-as-you-go) account
   * - `PAYM` - contract account
   * - `Business` - Business (enterprise) account
   *
   * This attribute may be omitted from the response set if the information is not
   * available
   */
  contractType?: 'PAYG' | 'PAYM' | 'Business';
}

export interface TenureVerifyParams {
  /**
   * Body param: The date, in RFC 3339 / ISO 8601 compliant format "YYYY-MM-DD", from
   * which continuous tenure of the identified network subscriber is required to be
   * confirmed
   */
  tenureDate: string;

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

export declare namespace Tenure {
  export { type TenureVerifyResponse as TenureVerifyResponse, type TenureVerifyParams as TenureVerifyParams };
}
