// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DeviceidentifierAPI from './deviceidentifier';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Deviceidentifier extends APIResource {
  /**
   * Get details about the specific device being used by a given mobile subscriber
   *
   * @example
   * ```ts
   * const response =
   *   await client.deviceidentifier.retrieveIdentifier();
   * ```
   */
  retrieveIdentifier(
    params: DeviceidentifierRetrieveIdentifierParams,
    options?: RequestOptions,
  ): APIPromise<DeviceidentifierRetrieveIdentifierResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/deviceidentifier/retrieve-identifier', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a pseudonymous identifier for device being used by a given mobile subscriber
   *
   * @example
   * ```ts
   * const response =
   *   await client.deviceidentifier.retrievePpid();
   * ```
   */
  retrievePpid(
    params: DeviceidentifierRetrievePpidParams,
    options?: RequestOptions,
  ): APIPromise<DeviceidentifierRetrievePpidResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/deviceidentifier/retrieve-ppid', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get details about the type of device being used by a given mobile subscriber
   *
   * @example
   * ```ts
   * const response =
   *   await client.deviceidentifier.retrieveType();
   * ```
   */
  retrieveType(
    params: DeviceidentifierRetrieveTypeParams,
    options?: RequestOptions,
  ): APIPromise<DeviceidentifierRetrieveTypeResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/deviceidentifier/retrieve-type', {
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
 * End-user equipment able to connect to a mobile network. Examples of devices
 * include smartphones or IoT sensors/actuators. The developer can choose to
 * provide the below specified device identifiers:
 *
 * - `ipv4Address`
 * - `ipv6Address`
 * - `phoneNumber`
 * - `networkAccessIdentifier` NOTE 1: The MNO might support only a subset of these
 *   options. The API invoker can provide multiple identifiers to be compatible
 *   across different MNOs. In this case the identifiers MUST belong to the same
 *   device. NOTE 2: For the current Commonalities release, we are enforcing that
 *   the networkAccessIdentifier is only part of the schema for future-proofing,
 *   and CAMARA does not currently allow its use. After the CAMARA meta-release
 *   work is concluded and the relevant issues are resolved, its use will need to
 *   be explicitly documented in the guidelines.
 */
export interface DeviceIdentifierDevice {
  /**
   * The device should be identified by either the public (observed) IP address and
   * port as seen by the application server, or the private (local) and any public
   * (observed) IP addresses in use by the device (this information can be obtained
   * by various means, for example from some DNS servers).
   *
   * If the allocated and observed IP addresses are the same (i.e. NAT is not in use)
   * then the same address should be specified for both publicAddress and
   * privateAddress.
   *
   * If NAT64 is in use, the device should be identified by its publicAddress and
   * publicPort, or separately by its allocated IPv6 address (field ipv6Address of
   * the Device object)
   *
   * In all cases, publicAddress must be specified, along with at least one of either
   * privateAddress or publicPort, dependent upon which is known. In general, mobile
   * devices cannot be identified by their public IPv4 address alone.
   */
  ipv4Address?: DeviceIdentifierDeviceIpv4Addr;

  /**
   * The device should be identified by the observed IPv6 address, or by any single
   * IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to
   * the /64 prefix).
   */
  ipv6Address?: string;

  /**
   * A public identifier addressing a subscription in a mobile network. In 3GPP
   * terminology, it corresponds to the GPSI formatted with the External Identifier
   * ({Local Identifier}@{Domain Identifier}). Unlike the telephone number, the
   * network access identifier is not subjected to portability ruling in force, and
   * is individually managed by each operator.
   */
  networkAccessIdentifier?: string;

  /**
   * A public identifier addressing a telephone subscription. In mobile networks it
   * corresponds to the MSISDN (Mobile Station International Subscriber Directory
   * Number). In order to be globally unique it has to be formatted in international
   * format, according to E.164 standard, prefixed with '+'.
   */
  phoneNumber?: string;
}

/**
 * The device should be identified by either the public (observed) IP address and
 * port as seen by the application server, or the private (local) and any public
 * (observed) IP addresses in use by the device (this information can be obtained
 * by various means, for example from some DNS servers).
 *
 * If the allocated and observed IP addresses are the same (i.e. NAT is not in use)
 * then the same address should be specified for both publicAddress and
 * privateAddress.
 *
 * If NAT64 is in use, the device should be identified by its publicAddress and
 * publicPort, or separately by its allocated IPv6 address (field ipv6Address of
 * the Device object)
 *
 * In all cases, publicAddress must be specified, along with at least one of either
 * privateAddress or publicPort, dependent upon which is known. In general, mobile
 * devices cannot be identified by their public IPv4 address alone.
 */
export interface DeviceIdentifierDeviceIpv4Addr {
  /**
   * A single IPv4 address with no subnet mask
   */
  privateAddress?: string;

  /**
   * A single IPv4 address with no subnet mask
   */
  publicAddress?: string;

  /**
   * TCP or UDP port number
   */
  publicPort?: number;
}

/**
 * Common request body to allow optional Device object to be passed
 */
export interface DeviceIdentifierRequestBody {
  /**
   * End-user equipment able to connect to a mobile network. Examples of devices
   * include smartphones or IoT sensors/actuators. The developer can choose to
   * provide the below specified device identifiers:
   *
   * - `ipv4Address`
   * - `ipv6Address`
   * - `phoneNumber`
   * - `networkAccessIdentifier` NOTE 1: The MNO might support only a subset of these
   *   options. The API invoker can provide multiple identifiers to be compatible
   *   across different MNOs. In this case the identifiers MUST belong to the same
   *   device. NOTE 2: For the current Commonalities release, we are enforcing that
   *   the networkAccessIdentifier is only part of the schema for future-proofing,
   *   and CAMARA does not currently allow its use. After the CAMARA meta-release
   *   work is concluded and the relevant issues are resolved, its use will need to
   *   be explicitly documented in the guidelines.
   */
  device?: DeviceIdentifierDevice;
}

export interface DeviceidentifierRetrieveIdentifierResponse {
  /**
   * The device subscription identifier that was used to identify the device whose
   * identifier is being returned. If this property is not present, then the device
   * subscription identifier specified in the request was used.
   */
  device?: DeviceidentifierRetrieveIdentifierResponse.Device;

  /**
   * IMEI of the device
   */
  imei?: string;

  /**
   * IMEISV of the device
   */
  imeisv?: string;

  /**
   * Date and time that the information was last confirmed by the mobile operator to
   * be correct. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  lastChecked?: string;

  /**
   * Manufacturer of the device
   */
  manufacturer?: string;

  /**
   * Model of the device
   */
  model?: string;

  /**
   * IMEI TAC of the device
   */
  tac?: string;
}

export namespace DeviceidentifierRetrieveIdentifierResponse {
  /**
   * The device subscription identifier that was used to identify the device whose
   * identifier is being returned. If this property is not present, then the device
   * subscription identifier specified in the request was used.
   */
  export interface Device extends DeviceidentifierAPI.DeviceIdentifierDevice {}
}

export interface DeviceidentifierRetrievePpidResponse {
  /**
   * The device subscription identifier that was used to identify the device whose
   * identifier is being returned. If this property is not present, then the device
   * subscription identifier specified in the request was used.
   */
  device?: DeviceidentifierRetrievePpidResponse.Device;

  /**
   * Date and time that the information was last confirmed by the mobile operator to
   * be correct. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  lastChecked?: string;

  /**
   * A PPID for the identified physical device
   */
  ppid?: string;
}

export namespace DeviceidentifierRetrievePpidResponse {
  /**
   * The device subscription identifier that was used to identify the device whose
   * identifier is being returned. If this property is not present, then the device
   * subscription identifier specified in the request was used.
   */
  export interface Device extends DeviceidentifierAPI.DeviceIdentifierDevice {}
}

export interface DeviceidentifierRetrieveTypeResponse {
  /**
   * The device subscription identifier that was used to identify the device whose
   * identifier is being returned. If this property is not present, then the device
   * subscription identifier specified in the request was used.
   */
  device?: DeviceidentifierRetrieveTypeResponse.Device;

  /**
   * Date and time that the information was last confirmed by the mobile operator to
   * be correct. It must follow
   * [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must
   * have time zone.
   */
  lastChecked?: string;

  /**
   * Manufacturer of the device
   */
  manufacturer?: string;

  /**
   * Model of the device
   */
  model?: string;

  /**
   * IMEI TAC of the device
   */
  tac?: string;
}

export namespace DeviceidentifierRetrieveTypeResponse {
  /**
   * The device subscription identifier that was used to identify the device whose
   * identifier is being returned. If this property is not present, then the device
   * subscription identifier specified in the request was used.
   */
  export interface Device extends DeviceidentifierAPI.DeviceIdentifierDevice {}
}

export interface DeviceidentifierRetrieveIdentifierParams {
  /**
   * Body param: End-user equipment able to connect to a mobile network. Examples of
   * devices include smartphones or IoT sensors/actuators. The developer can choose
   * to provide the below specified device identifiers:
   *
   * - `ipv4Address`
   * - `ipv6Address`
   * - `phoneNumber`
   * - `networkAccessIdentifier` NOTE 1: The MNO might support only a subset of these
   *   options. The API invoker can provide multiple identifiers to be compatible
   *   across different MNOs. In this case the identifiers MUST belong to the same
   *   device. NOTE 2: For the current Commonalities release, we are enforcing that
   *   the networkAccessIdentifier is only part of the schema for future-proofing,
   *   and CAMARA does not currently allow its use. After the CAMARA meta-release
   *   work is concluded and the relevant issues are resolved, its use will need to
   *   be explicitly documented in the guidelines.
   */
  device?: DeviceIdentifierDevice;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface DeviceidentifierRetrievePpidParams {
  /**
   * Body param: End-user equipment able to connect to a mobile network. Examples of
   * devices include smartphones or IoT sensors/actuators. The developer can choose
   * to provide the below specified device identifiers:
   *
   * - `ipv4Address`
   * - `ipv6Address`
   * - `phoneNumber`
   * - `networkAccessIdentifier` NOTE 1: The MNO might support only a subset of these
   *   options. The API invoker can provide multiple identifiers to be compatible
   *   across different MNOs. In this case the identifiers MUST belong to the same
   *   device. NOTE 2: For the current Commonalities release, we are enforcing that
   *   the networkAccessIdentifier is only part of the schema for future-proofing,
   *   and CAMARA does not currently allow its use. After the CAMARA meta-release
   *   work is concluded and the relevant issues are resolved, its use will need to
   *   be explicitly documented in the guidelines.
   */
  device?: DeviceIdentifierDevice;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface DeviceidentifierRetrieveTypeParams {
  /**
   * Body param: End-user equipment able to connect to a mobile network. Examples of
   * devices include smartphones or IoT sensors/actuators. The developer can choose
   * to provide the below specified device identifiers:
   *
   * - `ipv4Address`
   * - `ipv6Address`
   * - `phoneNumber`
   * - `networkAccessIdentifier` NOTE 1: The MNO might support only a subset of these
   *   options. The API invoker can provide multiple identifiers to be compatible
   *   across different MNOs. In this case the identifiers MUST belong to the same
   *   device. NOTE 2: For the current Commonalities release, we are enforcing that
   *   the networkAccessIdentifier is only part of the schema for future-proofing,
   *   and CAMARA does not currently allow its use. After the CAMARA meta-release
   *   work is concluded and the relevant issues are resolved, its use will need to
   *   be explicitly documented in the guidelines.
   */
  device?: DeviceIdentifierDevice;

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export declare namespace Deviceidentifier {
  export {
    type DeviceIdentifierDevice as DeviceIdentifierDevice,
    type DeviceIdentifierDeviceIpv4Addr as DeviceIdentifierDeviceIpv4Addr,
    type DeviceIdentifierRequestBody as DeviceIdentifierRequestBody,
    type DeviceidentifierRetrieveIdentifierResponse as DeviceidentifierRetrieveIdentifierResponse,
    type DeviceidentifierRetrievePpidResponse as DeviceidentifierRetrievePpidResponse,
    type DeviceidentifierRetrieveTypeResponse as DeviceidentifierRetrieveTypeResponse,
    type DeviceidentifierRetrieveIdentifierParams as DeviceidentifierRetrieveIdentifierParams,
    type DeviceidentifierRetrievePpidParams as DeviceidentifierRetrievePpidParams,
    type DeviceidentifierRetrieveTypeParams as DeviceidentifierRetrieveTypeParams,
  };
}
