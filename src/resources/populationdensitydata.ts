// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Populationdensitydata extends APIResource {
  /**
   * Retrieves population density estimation together with the estimation range
   * related for a time slot for a given area (described as a polygon) as a data set
   * consisting of a sequence of equally-sized objects covering the input polygon
   * area.
   *
   * @example
   * ```ts
   * const populationdensitydata =
   *   await client.populationdensitydata.retrieve({
   *     area: { areaType: 'POLYGON' },
   *     endTime: '2024-04-23T14:44:18.165Z',
   *     startTime: '2024-04-23T14:44:18.165Z',
   *     precision: 7,
   *   });
   * ```
   */
  retrieve(
    params: PopulationdensitydataRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PopulationdensitydataRetrieveResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/populationdensitydata/retrieve', {
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
 * Population density values is represented in time intervals for different cells
 * of the requested area. Each element in `timedPopulationDensityData` array
 * corresponds to a time interval, containing population density data for the grid
 * cells. The intervals are 1 hour long.
 */
export interface PopulationdensitydataRetrieveResponse {
  /**
   * Represents the state of the response for the input polygon defined in the
   * request, the possible values are:
   *
   * - `SUPPORTED_AREA`: The whole request area is supported. Population density data
   *   for the entire requested area is returned.
   * - `PART_OF_AREA_NOT_SUPPORTED`: Part of the requested area is outside the MNOs
   *   coverage area, the cells outside the coverage area will have property
   *   `dataType` with value `NO_DATA`.
   * - `AREA_NOT_SUPPORTED`: The whole requested area is outside the MNOs coverage
   *   area. No data will be returned.
   * - `OPERATION_NOT_COMPLETED`: An error happened during asynchronous processing of
   *   the request. This status will only be returned in case the asynchronous API
   *   behaviour is used.
   */
  status: 'SUPPORTED_AREA' | 'PART_OF_AREA_NOT_SUPPORTED' | 'AREA_NOT_SUPPORTED' | 'OPERATION_NOT_COMPLETED';

  /**
   * Time ranges along with the population density data for the cells within it. The
   * request startTime or the request endTime have to be fully covered by the
   * intervals. For example, if the intervals are 1-hour long and the input date
   * range were [2024-01-03T11:25:00Z to 2024-01-03T12:45:00Z] it would contain 2
   * intervals (Interval from 2024-01-03T11:00:00Z to 2024-01-03T12:00:00Z and
   * interval from 2024-01-03T12:00:00Z to 2024-01-03T13:00:00Z).
   */
  timedPopulationDensityData: Array<PopulationdensitydataRetrieveResponse.TimedPopulationDensityData>;

  /**
   * Information about the status, mandatory when property `status` is
   * `OPERATION_NOT_COMPLETED` for adding extra information about the error.
   */
  statusInfo?: string;
}

export namespace PopulationdensitydataRetrieveResponse {
  export interface TimedPopulationDensityData {
    /**
     * Population density data for the different cells in a concrete time range.
     */
    cellPopulationDensityData: Array<TimedPopulationDensityData.CellPopulationDensityData>;

    /**
     * Interval end time. It must follow
     * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
     * have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ (i.e. which
     * allows 2023-07-03T14:27:08.312+02:00 or 2023-07-03T12:27:08.312Z)
     */
    endTime: string;

    /**
     * Interval start time. It must follow
     * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
     * have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ (i.e. which
     * allows 2023-07-03T14:27:08.312+02:00 or 2023-07-03T12:27:08.312Z)
     */
    startTime: string;
  }

  export namespace TimedPopulationDensityData {
    /**
     * Population density data of a cell in a concrete time range. In case of
     * insufficient data, to guarantee an anonymized prediction due to the k-anonymity
     * within a specific cell and time range, no population density data is returned
     * and the property `dataType` value is "LOW_DENSITY". In case of a cell not
     * supported `dataType` value is "NO_DATA"
     */
    export interface CellPopulationDensityData {
      dataType: 'NO_DATA' | 'LOW_DENSITY' | 'DENSITY_ESTIMATION';

      /**
       * Coordinates of the cell represented as a string using the
       * [Geohash system](https://en.wikipedia.org/wiki/Geohash). Encoding a geographic
       * location into a short string. The value length, and thus, the cell granularity,
       * is determined by the request body property `precision`.
       */
      geohash: string;
    }
  }
}

export interface PopulationdensitydataRetrieveParams {
  /**
   * Body param: Base schema for all areas
   */
  area: PopulationdensitydataRetrieveParams.Area;

  /**
   * Body param: End date time. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ (i.e. which
   * allows 2023-07-03T14:27:08.312+02:00 or 2023-07-03T12:27:08.312Z) The maximum
   * endTime allowed is 3 months from the time of the request.
   */
  endTime: string;

  /**
   * Body param: Start date time. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ
   */
  startTime: string;

  /**
   * Body param: Precision required of response cells. Precision defines a geohash
   * level and corresponds to the length of the geohash for each cell. More
   * information at [Geohash system](https://en.wikipedia.org/wiki/Geohash)" If not
   * included the default precision level 7 is used by default. In case of using a
   * not supported level by the MNO, the API returns the error response
   * `POPULATION_DENSITY_DATA.UNSUPPORTED_PRECISION`.
   */
  precision?: number;

  /**
   * Body param: The address where the API response will be asynchronously delivered,
   * using the HTTP protocol.
   */
  sink?: string;

  /**
   * Body param: A sink credential provides authentication or authorization
   * information necessary to enable delivery of events to a target.
   */
  sinkCredential?: PopulationdensitydataRetrieveParams.SinkCredential;

  /**
   * Header param: Correlation id for the different services.
   */
  'x-correlator'?: string;
}

export namespace PopulationdensitydataRetrieveParams {
  /**
   * Base schema for all areas
   */
  export interface Area {
    /**
     * Type of this area. POLYGON - The area is defined as a polygon.
     */
    areaType: 'POLYGON';
  }

  /**
   * A sink credential provides authentication or authorization information necessary
   * to enable delivery of events to a target.
   */
  export interface SinkCredential {
    /**
     * The type of the credential. Note: Type of the credential - MUST be set to
     * ACCESSTOKEN for now
     */
    credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN';
  }
}

export declare namespace Populationdensitydata {
  export {
    type PopulationdensitydataRetrieveResponse as PopulationdensitydataRetrieveResponse,
    type PopulationdensitydataRetrieveParams as PopulationdensitydataRetrieveParams,
  };
}
