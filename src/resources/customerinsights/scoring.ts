// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Scoring extends APIResource {
  /**
   * Retrieves Scoring information, for the user associated with the provided
   * `idDocument`, `phoneNumber` or the combination of both parameters. It also
   * allows to select the type of the Scoring scale measurement.
   *
   * @example
   * ```ts
   * const scoring =
   *   await client.customerinsights.scoring.retrieve({
   *     scoringType: 'gaugeMetric',
   *   });
   * ```
   */
  retrieve(params: ScoringRetrieveParams, options?: RequestOptions): APIPromise<ScoringRetrieveResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/customerinsights/scoring/retrieve', {
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
 * Scoring information based on the individual's profile owned by a Telco Operator.
 */
export interface ScoringRetrieveResponse {
  /**
   * Scoring measurement system.
   *
   * Allowed values are:
   *
   * - `gaugeMetric`: ranges from index 850 (lowest risk) to index 300 (highest risk)
   * - `veritasIndex`: ranges from index 0 (lowest risk) to index 19 (highest risk)
   */
  scoringType: 'gaugeMetric' | 'veritasIndex';

  /**
   * Result of the Scoring analysis expressed in the measure indicated in the
   * `scoringType` field.
   */
  scoringValue: number;
}

export interface ScoringRetrieveParams {
  /**
   * Body param: Identification number associated to the official identity document
   * in the country. It may contain alphanumeric characters.
   */
  idDocument?: string;

  /**
   * Body param: A public identifier addressing a telephone subscription. In mobile
   * networks it corresponds to the MSISDN (Mobile Station International Subscriber
   * Directory Number). In order to be globally unique it has to be formatted in
   * international format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;

  /**
   * Body param: Scoring type, i.e.: scale. API Client may use this field to indicate
   * the Scoring in one of the defined scales; if this field is not informed, the API
   * will return the Scoring in the scale configured by default in the system.
   *
   * Allowed values are:
   *
   * - `gaugeMetric`: ranges from index 850 (lowest risk) to index 300 (highest risk)
   * - `veritasIndex`: ranges from index 0 (lowest risk) to index 19 (highest risk)
   */
  scoringType?: 'gaugeMetric' | 'veritasIndex';

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export declare namespace Scoring {
  export {
    type ScoringRetrieveResponse as ScoringRetrieveResponse,
    type ScoringRetrieveParams as ScoringRetrieveParams,
  };
}
