// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Callforwardingsignal extends APIResource {
  /**
   * This endpoint provides information about which type of call forwarding service
   * is active. More than one service can be active, e.g. conditional and
   * unconditional. This endpoint exceeds the main scope of the Call Forwarding
   * Signal API, for this reason an error code 501 can be returned.
   *
   * @example
   * ```ts
   * const response =
   *   await client.callforwardingsignal.createCallForwarding();
   * ```
   */
  createCallForwarding(
    params: CallforwardingsignalCreateCallForwardingParams,
    options?: RequestOptions,
  ): APIPromise<CallforwardingsignalCreateCallForwardingResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/callforwardingsignal/call-forwardings', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint provides information about the status of the unconditional call
   * forwarding, being active or not.
   *
   * @example
   * ```ts
   * const response =
   *   await client.callforwardingsignal.createUnconditionalCallForwarding();
   * ```
   */
  createUnconditionalCallForwarding(
    params: CallforwardingsignalCreateUnconditionalCallForwardingParams,
    options?: RequestOptions,
  ): APIPromise<CallforwardingsignalCreateUnconditionalCallForwardingResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/callforwardingsignal/unconditional-call-forwardings', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * resource containing the phone number (PhoneNumber) regarding which the Call
 * Forwarding Service must be checked. To be provided/valued only in case of
 * two-legged authentication. If provided/valued with three-legged authentication a
 * 422-UNNECESSARY_IDENTIFIER error code is returned.
 */
export interface CallForwardingSignal {
  /**
   * A public identifier addressing a telephone subscription. In mobile networks it
   * corresponds to the MSISDN (Mobile Station International Subscriber Directory
   * Number). In order to be globally unique it has to be formatted in international
   * format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;
}

/**
 * resource containing the list of the Call Forwarding Services active for the
 * given phone number (PhoneNumber). The possible states are, 'inactive' (no call
 * forwarding service activated), 'unconditional' (call forwarded independently
 * from the device status), 'conditional_busy' (call forwarded if the device is on
 * an active call), 'conditional_not_reachable' (call forwarded if the device is
 * not reachable), 'conditional_no_answer' (call forwarded if the device doesn't
 * answer the incoming call).
 */
export type CallforwardingsignalCreateCallForwardingResponse = Array<
  'inactive' | 'unconditional' | 'conditional_busy' | 'conditional_not_reachable' | 'conditional_no_answer'
>;

/**
 * resource containing the information about the Unconditional Call Forwarding
 * Service for the given phone number (PhoneNumber)
 */
export interface CallforwardingsignalCreateUnconditionalCallForwardingResponse {
  /**
   * Indicates if the unconditional call forwarding service is active.
   */
  active?: boolean;
}

export interface CallforwardingsignalCreateCallForwardingParams {
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

export interface CallforwardingsignalCreateUnconditionalCallForwardingParams {
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

export declare namespace Callforwardingsignal {
  export {
    type CallForwardingSignal as CallForwardingSignal,
    type CallforwardingsignalCreateCallForwardingResponse as CallforwardingsignalCreateCallForwardingResponse,
    type CallforwardingsignalCreateUnconditionalCallForwardingResponse as CallforwardingsignalCreateUnconditionalCallForwardingResponse,
    type CallforwardingsignalCreateCallForwardingParams as CallforwardingsignalCreateCallForwardingParams,
    type CallforwardingsignalCreateUnconditionalCallForwardingParams as CallforwardingsignalCreateUnconditionalCallForwardingParams,
  };
}
