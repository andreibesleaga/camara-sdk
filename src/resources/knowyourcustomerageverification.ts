// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Knowyourcustomerageverification extends APIResource {
  /**
   * Verify that the age of the subscriber associated with a phone number is equal to
   * or greater than the specified age threshold value.
   *
   * As it is possible that the person holding the contract and the end-user of the
   * subscription may not be the same, the endpoint also admits a list of optional
   * properties to be included in the request to improve the identification. The
   * response may optionally include the `identityMatchScore` property with a value
   * that indicates how certain it is that the information returned relates to the
   * person that the API Client is requesting. To increase the reliability of the
   * information returned, the API Provider may include in the response the
   * `verifiedStatus` property, indicating whether the identity information in its
   * possession has been verified against an identification document legally accepted
   * as an age verification document (Note). Note: Depending on the country,
   * credit-check or other mechanism can be used instead of official identification
   * for Age Verification. For details, please contact API Provider.
   *
   * If the API Client indicates request properties `includeContentLock` or
   * `includeParentalControl` with value `true` and the API Provider implements this
   * functionality, then the response will also include `contentLock` and
   * `parentalControl` properties to indicate if the subscription has any kind of
   * content filtering enabled. On the other hand, if the request properties are not
   * included or the API Client specifies value `false`, then the response properties
   * will not be returned. If the API Provider doesn't implement this functionality,
   * request properties will be ignored and response properties won't be returned in
   * any case.
   *
   * @example
   * ```ts
   * const response =
   *   await client.knowyourcustomerageverification.verify({
   *     ageThreshold: 18,
   *     birthdate: '1978-08-22',
   *     email: 'federicaSanchez.Arjona@example.com',
   *     familyName: 'Sanchez Arjona',
   *     familyNameAtBirth: 'YYYY',
   *     givenName: 'Federica',
   *     idDocument: '66666666q',
   *     includeContentLock: true,
   *     includeParentalControl: true,
   *     middleNames: 'Sanchez',
   *     name: 'Federica Sanchez Arjona',
   *     phoneNumber: '+34629255833',
   *   });
   * ```
   */
  verify(
    params: KnowyourcustomerageverificationVerifyParams,
    options?: RequestOptions,
  ): APIPromise<KnowyourcustomerageverificationVerifyResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/knowyourcustomerageverification/verify', {
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
 * Response to an age verification request
 */
export interface KnowyourcustomerageverificationVerifyResponse {
  /**
   * Indicate `"true"` when the age of the user is the same age or older than the age
   * threshold (age >= age threshold), and `"false"` if not (age < age threshold). If
   * the API Provider doesn't have enough information to perform the validation, a
   * `not_available` can be returned.
   */
  ageCheck: 'true' | 'false' | 'not_available';

  /**
   * Indicate `"true"` if the subscription associated with the phone number has any
   * kind of content lock (i.e certain web content blocked) and `"false"` if not. If
   * the information is not available the value `not_available` can be returned.
   */
  contentLock?: 'true' | 'false' | 'not_available';

  /**
   * The overall score of identity information available in the API Provider,
   * information either provided in the request body comparing it to the one that the
   * API Provider holds or directly using internal API Provider's information. It is
   * optional for the API Provider to return the Identity match score.
   */
  identityMatchScore?: number;

  /**
   * Indicate `"true"` if the subscription associated with the phone number has any
   * kind of parental control activated and `"false"` if not. If the information is
   * not available the value `not_available` can be returned.
   */
  parentalControl?: 'true' | 'false' | 'not_available';

  /**
   * Indicate `true` if the information provided has been compared against
   * information based on an identification document legally accepted as an age
   * verification document (Note), otherwise indicate `false`. Note: Depending on the
   * country, credit-check or other mechanism can be used instead of official
   * identification for Age Verification. For details, please contact API Provider.
   */
  verifiedStatus?: boolean;
}

export interface KnowyourcustomerageverificationVerifyParams {
  /**
   * Body param: The age to be verified. The indicated range is a global definition
   * of maximum and minimum values allowed to be requested. It is important to note
   * that this range might be more restrictive in some implementations due to local
   * regulations of a country i.e. A country does not allow to request for an age
   * under 18. This limitation must be informed during the onboarding process.
   */
  ageThreshold: number;

  /**
   * Body param: The birthdate of the customer, in RFC 3339 / ISO 8601 calendar date
   * format (YYYY-MM-DD).
   */
  birthdate?: string;

  /**
   * Body param: Email address of the customer in the RFC specified format
   * (local-part@domain).
   */
  email?: string;

  /**
   * Body param: Last name, family name, or surname of the customer.
   */
  familyName?: string;

  /**
   * Body param: Last/family/sur- name at birth of the customer.
   */
  familyNameAtBirth?: string;

  /**
   * Body param: First/given name or compound first/given name of the customer.
   */
  givenName?: string;

  /**
   * Body param: Id number associated to the official identity document in the
   * country. It may contain alphanumeric characters.
   */
  idDocument?: string;

  /**
   * Body param: If this parameter is included in the request with value `true`, the
   * response property `contentLock` will be returned. If it is not included or its
   * value is `false`, the response property will not be returned.
   */
  includeContentLock?: boolean;

  /**
   * Body param: If this parameter is included in the request with value `true`, the
   * response property `parentalControl` will be returned. If it is not included or
   * its value is `false`, the response property will not be returned.
   */
  includeParentalControl?: boolean;

  /**
   * Body param: Middle name/s of the customer.
   */
  middleNames?: string;

  /**
   * Body param: Complete name of the customer, usually composed of first/given name
   * and last/family/sur- name in a country. Depending on the country, the order of
   * first/give name and last/family/sur- name varies, and middle name could be
   * included. It can use givenName, middleNames, familyName and/or
   * familyNameAtBirth. For example, in ESP, name+familyName; in NLD, it can be
   * name+middleNames+familyName or name+middleNames+familyNameAtBirth, etc.
   */
  name?: string;

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

export declare namespace Knowyourcustomerageverification {
  export {
    type KnowyourcustomerageverificationVerifyResponse as KnowyourcustomerageverificationVerifyResponse,
    type KnowyourcustomerageverificationVerifyParams as KnowyourcustomerageverificationVerifyParams,
  };
}
