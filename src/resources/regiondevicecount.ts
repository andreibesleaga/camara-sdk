// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Regiondevicecount extends APIResource {
  /**
   * Get the number of devices in the specified area during a certain time interval.
   *
   * - The query area can be a circle or a polygon composed of longitude and latitude
   *   points.
   * - If the areaType is circle, the circleCenter and circleRadius must be provided;
   *   if the area is a polygon, the point list must be provided.
   * - If starttime and endtime are not passed in,this api should return the current
   *   number of devices in the area.
   * - If the device appears in the specified area at least once during the certain
   *   time interval, it should be counted.
   *
   * @example
   * ```ts
   * const response = await client.regiondevicecount.getCount({
   *   area: { areaType: 'CIRCLE' },
   *   endtime: '2023-07-04T14:27:08.312+02:00',
   *   filter: {
   *     roamingStatus: ['roaming'],
   *     deviceType: ['human device', 'IoT device'],
   *   },
   *   sink: 'https://endpoint.example.com/sink',
   *   sinkCredential: { credentialType: 'ACCESSTOKEN' },
   *   starttime: '2023-07-03T14:27:08.312+02:00',
   * });
   * ```
   */
  getCount(
    params: RegiondevicecountGetCountParams,
    options?: RequestOptions,
  ): APIPromise<RegiondevicecountGetCountResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/regiondevicecount/count', {
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
 * RegionDeviceCount result
 */
export interface RegiondevicecountGetCountResponse {
  /**
   * Device Count
   */
  count?: number;

  /**
   * SUPPORTED_AREA: The whole requested area is supported Region Device Count for
   * the entire requested area is returned - Telco Coverage = 100 %
   *
   * PART_OF_AREA_NOT_SUPPORTED: Part of the requested area is outside the MNOs
   * coverage area, the area outside the coverage area are not returned - 100% >Telco
   * Coverage >=50%
   *
   * AREA_NOT_SUPPORTED: The whole requested area is outside the MNO coverage area No
   * data will be returned- Telco Coverage <50%
   *
   * DENSITY_BELOW_PRIVACY_THRESHOLD: The number of connected devices is below
   * privacy threshold of local regulation
   *
   * TIME_INTERVAL_NO_DATA_FOUND: Unable to find device count data within the
   * requested time interval
   */
  status?:
    | 'SUPPORTED_AREA'
    | 'PART_OF_AREA_NOT_SUPPORTED'
    | 'AREA_NOT_SUPPORTED'
    | 'DENSITY_BELOW_PRIVACY_THRESHOLD'
    | 'TIME_INTERVAL_NO_DATA_FOUND';
}

export interface RegiondevicecountGetCountParams {
  /**
   * Body param:
   */
  area?: RegiondevicecountGetCountParams.Area;

  /**
   * Body param: Ending timestamp for counting the number of devices in the area. It
   * must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  endtime?: string | null;

  /**
   * Body param: This parameter is used to filter devices. Currently, two filtering
   * criteria are defined, `roamingStatus` and `deviceType`, which can be expanded in
   * the future. `IN` logic is used used for multiple filtering items within a single
   * filtering criterion, `AND` logic is used between multiple filtering criteria.
   *
   * - If a filtering critera is not provided, it means that there is no need to
   *   filter this item.
   * - At least one of the criteria must be provided,a filter without any criteria is
   *   not allowed.
   * - If no filtering is required, this parameter does not need to be provided. For
   *   example
   *   ,`"filter":{"roamingStatus": ["roaming"],"deviceType": ["human device","IoT device"]}`
   *   means the API need to return the count of human network devices and IoT
   *   devices that are in roaming mode.`"filter":{"roamingStatus": ["non-roaming"]}`
   *   means that the API need to return the count of all devices that are not in
   *   roaming mode.
   */
  filter?: RegiondevicecountGetCountParams.Filter;

  /**
   * Body param: The URL where the API response will be asynchronously delivered,
   * using the HTTP protocol.
   */
  sink?: string;

  /**
   * Body param: A sink credential provides authentication or authorization
   * information necessary to enable delivery of events to a target.
   */
  sinkCredential?: RegiondevicecountGetCountParams.SinkCredential;

  /**
   * Body param: Starting timestamp for counting the number of devices in the area.
   * It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  starttime?: string | null;

  /**
   * Header param: Correlation ID for cross-service tracking
   */
  'x-correlator'?: string;
}

export namespace RegiondevicecountGetCountParams {
  export interface Area {
    /**
     * Type of this area. CIRCLE - The area is defined as a circle. POLYGON - The area
     * is defined as a polygon.
     */
    areaType: 'CIRCLE' | 'POLYGON';
  }

  /**
   * This parameter is used to filter devices. Currently, two filtering criteria are
   * defined, `roamingStatus` and `deviceType`, which can be expanded in the future.
   * `IN` logic is used used for multiple filtering items within a single filtering
   * criterion, `AND` logic is used between multiple filtering criteria.
   *
   * - If a filtering critera is not provided, it means that there is no need to
   *   filter this item.
   * - At least one of the criteria must be provided,a filter without any criteria is
   *   not allowed.
   * - If no filtering is required, this parameter does not need to be provided. For
   *   example
   *   ,`"filter":{"roamingStatus": ["roaming"],"deviceType": ["human device","IoT device"]}`
   *   means the API need to return the count of human network devices and IoT
   *   devices that are in roaming mode.`"filter":{"roamingStatus": ["non-roaming"]}`
   *   means that the API need to return the count of all devices that are not in
   *   roaming mode.
   */
  export interface Filter {
    /**
     * Filtering by device type, 'human device' represents the need to filter for human
     * network devices, 'IoT device' represents the need to filter for IoT devices, and
     * 'other' represents the need to filter for other types of devices.
     */
    deviceType?: Array<'human device' | 'IoT device' | 'other'>;

    /**
     * Filter whether the device is in roaming mode,'roaming' represents the need to
     * filter devices that are in roaming mode,'non-roaming' represents the need to
     * filter devices that are not roaming.
     */
    roamingStatus?: Array<'roaming' | 'non-roaming'>;
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

export declare namespace Regiondevicecount {
  export {
    type RegiondevicecountGetCountResponse as RegiondevicecountGetCountResponse,
    type RegiondevicecountGetCountParams as RegiondevicecountGetCountParams,
  };
}
