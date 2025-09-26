// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Knowyourcustomermatch extends APIResource {
  /**
   * Verify matching of a number of attributes related to a customer identity against
   * the verified data bound to their phone number in the Operator systems.
   * Regardless of whether the `phoneNumber` is explicitly stated in the request
   * body, at least one of the other fields must be provided, otherwise a
   * `HTTP 400 - KNOW_YOUR_CUSTOMER.INVALID_PARAM_COMBINATION` error will be
   * returned.
   *
   * In order to proceed with the match check, some Operators may have the
   * requirement to perform an additional level of validation based on the
   * `idDocument` property. This means that, in those cases, the `idDocument` is
   * required and the provided value needs to match the one stored in the Operator
   * system associated with the indicated `phoneNumber`. This validation will be done
   * before proceeding with the match check of the rest of the properties. The
   * following two rules apply only in the cases where the Operator have the
   * requirement to validate the `idDocument`:
   *
   * - If no `idDocument` is provided, then a
   *   `HTTP 403 - KNOW_YOUR_CUSTOMER.ID_DOCUMENT_REQUIRED` error will be returned.
   * - If the provided `idDocument` does not match the one stored in the Operator
   *   systems, then a `HTTP 403 - KNOW_YOUR_CUSTOMER.ID_DOCUMENT_MISMATCH` error
   *   will be returned.
   *
   * The API will return the result of the matching process for each requested
   * attribute. This means that the response will **only** contain the attributes for
   * which validation has been requested. Possible values are:
   *
   * - **true**: the attribute provided matches with the one in the Operator systems,
   *   which is equal to a `match_score` of 100.
   * - **false**: the attribute provided does not match with the one in the Operator
   *   systems.
   * - **not_available**: the attribute is not available to validate.
   *
   * @example
   * ```ts
   * const response = await client.knowyourcustomermatch.match({
   *   address: 'Tokyo-to Chiyoda-ku Iidabashi 3-10-10',
   *   birthdate: '1978-08-22',
   *   cityOfBirth: 'Madrid',
   *   country: 'JP',
   *   countryOfBirth: 'ES',
   *   email: 'abc@example.com',
   *   familyName: 'Sanchez Arjona',
   *   familyNameAtBirth: 'YYYY',
   *   gender: 'OTHER',
   *   givenName: 'Federica',
   *   houseNumberExtension: 'VVVV',
   *   idDocument: '66666666q',
   *   idDocumentExpiryDate: '2027-07-12',
   *   idDocumentType: 'passport',
   *   locality: 'ZZZZ',
   *   middleNames: 'Sanchez',
   *   name: 'Federica Sanchez Arjona',
   *   nameKanaHankaku: 'federica',
   *   nameKanaZenkaku: 'Ｆｅｄｅｒｉｃａ',
   *   nationality: 'ES',
   *   phoneNumber: '+34629255833',
   *   postalCode: '1028460',
   *   region: 'Tokyo',
   *   streetName: 'Nicolas Salmeron',
   *   streetNumber: '4',
   * });
   * ```
   */
  match(
    params: KnowyourcustomermatchMatchParams,
    options?: RequestOptions,
  ): APIPromise<KnowyourcustomermatchMatchResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/knowyourcustomermatch/match', {
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
 * true - the attribute provided matches with the one in the Operator systems,
 * which is equal to a `match_score` of 100. false - the attribute provided does
 * not match with the one in the Operator systems. not_available - the attribute is
 * not available to validate.
 */
export type MatchResult = 'true' | 'false' | 'not_available';

export interface KnowyourcustomermatchMatchResponse {
  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  addressMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  addressMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  birthdateMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  cityOfBirthMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  cityOfBirthMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  countryMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  countryOfBirthMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  emailMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  emailMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  familyNameAtBirthMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  familyNameAtBirthMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  familyNameMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  familyNameMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  genderMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  givenNameMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  givenNameMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  houseNumberExtensionMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  idDocumentExpiryDateMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  idDocumentMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  idDocumentTypeMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  localityMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  localityMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  middleNamesMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  middleNamesMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  nameKanaHankakuMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  nameKanaHankakuMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  nameKanaZenkakuMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  nameKanaZenkakuMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  nameMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  nameMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  nationalityMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  postalCodeMatch?: MatchResult;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  regionMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  regionMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  streetNameMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  streetNameMatchScore?: number;

  /**
   * true - the attribute provided matches with the one in the Operator systems,
   * which is equal to a `match_score` of 100. false - the attribute provided does
   * not match with the one in the Operator systems. not_available - the attribute is
   * not available to validate.
   */
  streetNumberMatch?: MatchResult;

  /**
   * Indicates the similarity score assigned to the input value when it does not
   * exactly match the value stored in the operator's system. This property shall
   * only be returned when the value of the corresponding match field is `false`. A
   * perfect match with a score of 100 is indicated by `match` being 'true' and no
   * `matchScore` is returned in this case.
   */
  streetNumberMatchScore?: number;
}

export interface KnowyourcustomermatchMatchParams {
  /**
   * Body param: Complete address of the customer. For some countries, it is built
   * following the usual concatenation of parameters in a country, but for other
   * countries, this is not the case. For some countries, it can use streetName,
   * streetNumber and/or houseNumberExtension. For example, in ESP,
   * streetName+streetNumber; in NLD, it can be streetName+streetNumber or
   * streetName+streetNumber+houseNumberExtension.
   */
  address?: string;

  /**
   * Body param: The birthdate of the customer, in RFC 3339 / ISO 8601 calendar date
   * format (YYYY-MM-DD).
   */
  birthdate?: string;

  /**
   * Body param: City where the customer was born.
   */
  cityOfBirth?: string;

  /**
   * Body param: Country of the customer's address. Format ISO 3166-1 alpha-2
   */
  country?: string;

  /**
   * Body param: Country where the customer was born. Format ISO 3166-1 alpha-2.
   */
  countryOfBirth?: string;

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
   * Body param: Gender of the customer (Male/Female/Other).
   */
  gender?: 'MALE' | 'FEMALE' | 'OTHER';

  /**
   * Body param: First/given name or compound first/given name of the customer.
   */
  givenName?: string;

  /**
   * Body param: Specific identifier of the house needed depending on the property
   * type. For example, number of apartment in an apartment building.
   */
  houseNumberExtension?: string;

  /**
   * Body param: Id number associated to the official identity document in the
   * country. It may contain alphanumeric characters.
   */
  idDocument?: string;

  /**
   * Body param: Expiration date of the identity document (ISO 8601).
   */
  idDocumentExpiryDate?: string;

  /**
   * Body param: Type of the official identity document provided.
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
   * Body param: Locality of the customer's address
   */
  locality?: string;

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
   * Body param: Complete name of the customer in Hankaku-Kana format (reading of
   * name) for Japan.
   */
  nameKanaHankaku?: string;

  /**
   * Body param: Complete name of the customer in Zenkaku-Kana format (reading of
   * name) for Japan.
   */
  nameKanaZenkaku?: string;

  /**
   * Body param: ISO 3166-1 alpha-2 code of the customer’s nationality. In the case a
   * customer has more than one nationality, it is supposed to be the nationality
   * related to the ID document provided in the match request.
   */
  nationality?: string;

  /**
   * Body param: A public identifier addressing a telephone subscription. In mobile
   * networks it corresponds to the MSISDN (Mobile Station International Subscriber
   * Directory Number). In order to be globally unique it has to be formatted in
   * international format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;

  /**
   * Body param: Zip code or postal code
   */
  postalCode?: string;

  /**
   * Body param: Region/prefecture of the customer's address
   */
  region?: string;

  /**
   * Body param: Name of the street of the customer's address. It should not include
   * the type of the street.
   */
  streetName?: string;

  /**
   * Body param: The street number of the customer's address. Number identifying a
   * specific property on the 'streetName'.
   */
  streetNumber?: string;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export declare namespace Knowyourcustomermatch {
  export {
    type MatchResult as MatchResult,
    type KnowyourcustomermatchMatchResponse as KnowyourcustomermatchMatchResponse,
    type KnowyourcustomermatchMatchParams as KnowyourcustomermatchMatchParams,
  };
}
