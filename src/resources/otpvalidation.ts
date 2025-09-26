// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Otpvalidation extends APIResource {
  /**
   * Sends an SMS with the desired message and an OTP code to the received phone
   * number.
   *
   * @example
   * ```ts
   * const response = await client.otpvalidation.sendCode({
   *   message:
   *     '{{code}} is your short code to authenticate with Cool App via SMS',
   *   phoneNumber: '+346661113334',
   * });
   * ```
   */
  sendCode(
    params: OtpvalidationSendCodeParams,
    options?: RequestOptions,
  ): APIPromise<OtpvalidationSendCodeResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/otpvalidation/send-code', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Verifies the code is valid for the received authenticationId
   *
   * @example
   * ```ts
   * await client.otpvalidation.validateCode({
   *   authenticationId: 'ea0840f3-3663-4149-bd10-c7c6b8912105',
   *   code: 'AJY3',
   * });
   * ```
   */
  validateCode(params: OtpvalidationValidateCodeParams, options?: RequestOptions): APIPromise<void> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/otpvalidation/validate-code', {
      body,
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * Structure to provide authentication identifier
 */
export interface OtpvalidationSendCodeResponse {
  /**
   * unique id of the verification attempt the code belongs to.
   */
  authenticationId: string;
}

export interface OtpvalidationSendCodeParams {
  /**
   * Body param: Message template used to compose the content of the SMS sent to the
   * phone number. It must include the following label indicating where to include
   * the short code `{{code}}`
   */
  message: string;

  /**
   * Body param: A public identifier addressing a telephone subscription. In mobile
   * networks it corresponds to the MSISDN (Mobile Station International Subscriber
   * Directory Number). In order to be globally unique it has to be formatted in
   * international format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber: string;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface OtpvalidationValidateCodeParams {
  /**
   * Body param: unique id of the verification attempt the code belongs to.
   */
  authenticationId: string;

  /**
   * Body param: temporal, short code to be validated
   */
  code: string;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export declare namespace Otpvalidation {
  export {
    type OtpvalidationSendCodeResponse as OtpvalidationSendCodeResponse,
    type OtpvalidationSendCodeParams as OtpvalidationSendCodeParams,
    type OtpvalidationValidateCodeParams as OtpvalidationValidateCodeParams,
  };
}
