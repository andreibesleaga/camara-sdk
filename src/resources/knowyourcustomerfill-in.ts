// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class KnowyourcustomerfillIn extends APIResource {
  /**
   * Providing information related to a customer identity stored the account data
   * bound to the customer's phone number.
   *
   * @example
   * ```ts
   * const knowyourcustomerfillIn =
   *   await client.knowyourcustomerfillIn.create({
   *     phoneNumber: '+34629255833',
   *   });
   * ```
   */
  create(
    params: KnowyourcustomerfillInCreateParams,
    options?: RequestOptions,
  ): APIPromise<KnowyourcustomerfillInCreateResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/knowyourcustomerfill-in/fill-in', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface KnowyourcustomerfillInCreateResponse {
  /**
   * Complete address of the customer stored on the Operator's system. For some
   * countries, it is built following the usual concatenation of parameters in a
   * country, but for other countries, this is not the case. For some countries, it
   * can use streetName, streetNumber and/or houseNumberExtension. For example, in
   * ESP, streetName+streetNumber; in NLD, it can be streetName+streetNumber or
   * streetName+streetNumber+houseNumberExtension.
   */
  address?: string;

  /**
   * Birthdate of the customer, in ISO 8601 calendar date format (YYYY-MM-DD), stored
   * on the Operator's system.
   */
  birthdate?: string;

  /**
   * City where the customer was born.
   */
  cityOfBirth?: string;

  /**
   * Country of the customer's address stored on the Operator's system. Format ISO
   * 3166-1 alpha-2.
   */
  country?: string;

  /**
   * Country where the customer was born. Format ISO 3166-1 alpha-2.
   */
  countryOfBirth?: string;

  /**
   * Email address of the customer in the RFC specified format (local-part@domain),
   * stored on the Operator's system.
   */
  email?: string;

  /**
   * Last name, family name, or surname of the customer stored on the Operator's
   * system.
   */
  familyName?: string;

  /**
   * Last/family/sur- name at birth of the customer stored on the Operator's system.
   */
  familyNameAtBirth?: string;

  /**
   * Gender of the customer stored on the Operator's system (Male/Female/Other).
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER';

  /**
   * First/given name or compound first/given name of the customer on the Operator's
   * system.
   */
  givenName?: string;

  /**
   * House number extension of the customer stored on the Operator's system. Specific
   * identifier of the house needed depending on the property type. For example,
   * number of apartment in an apartment building.
   */
  houseNumberExtension?: string;

  /**
   * Id number associated to the id_document of the customer stored on the Operator's
   * system.
   */
  idDocument?: string;

  /**
   * Expiration date of the identity document (ISO 8601).
   */
  idDocumentExpiryDate?: string;

  /**
   * Type of the official identity document provided.
   */
  idDocumentType?:
    | 'passport'
    | 'national_id_card'
    | 'residence_permit'
    | 'diplomatic_id'
    | 'driver_licence'
    | 'social_security_id'
    | 'other';

  /**
   * Locality of the customer's address, stored on the Operator's system.
   */
  locality?: string;

  /**
   * Middle name/s of the customer stored on the Operator's system.
   */
  middleNames?: string;

  /**
   * Complete name of the customer stored on the Operator's system. It is usually
   * composed of first/given name and last/family/sur- name in a country. Depending
   * on the country, the order of first/give name and last/family/sur- name varies,
   * and middle name could be included. It can use givenName, middleNames, familyName
   * and/or familyNameAtBirth. For example, in ESP, name+familyName; in NLD, it can
   * be name+middleNames+familyName or name+middleNames+familyNameAtBirth, etc.
   */
  name?: string;

  /**
   * Complete name of the customer in Hankaku-Kana format (reading of name) for
   * Japan, stored on the Operator's system.
   */
  nameKanaHankaku?: string;

  /**
   * Complete name of the customer in Zenkaku-Kana format (reading of name) for
   * Japan, stored on the Operator's system.
   */
  nameKanaZenkaku?: string;

  /**
   * ISO 3166-1 alpha-2 code of the customer’s nationality. In the case a customer
   * has more than one nationality, it is supposed to be the nationality related to
   * the ID document provided in the match request.
   */
  nationality?: string;

  /**
   * A public identifier addressing a telephone subscription. In mobile networks it
   * corresponds to the MSISDN (Mobile Station International Subscriber Directory
   * Number). In order to be globally unique it has to be formatted in international
   * format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;

  /**
   * The postal code or Zip code of the customer's address, stored on the Operator's
   * system.
   */
  postalCode?: string;

  /**
   * Region/prefecture of the customer's address, stored on the Operator's system.
   */
  region?: string;

  /**
   * Name of the street of the customer's address on the Operator's system. It should
   * not include the type of the street.
   */
  streetName?: string;

  /**
   * The street number of the customer's address on the Operator's system. Number
   * identifying a specific property on the 'streetName'.
   */
  streetNumber?: string;
}

export interface KnowyourcustomerfillInCreateParams {
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

export declare namespace KnowyourcustomerfillIn {
  export {
    type KnowyourcustomerfillInCreateResponse as KnowyourcustomerfillInCreateResponse,
    type KnowyourcustomerfillInCreateParams as KnowyourcustomerfillInCreateParams,
  };
}
