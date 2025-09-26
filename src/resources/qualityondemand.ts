// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Qualityondemand extends APIResource {
  /**
   * Returns a QoS Profile that matches the given name.
   *
   * The access token may be either a 2-legged or 3-legged access token. If the
   * access token is 3-legged, a QoS Profile is only returned if available to all
   * subjects associated with the access token.
   *
   * @example
   * ```ts
   * const qosProfile =
   *   await client.qualityondemand.retrieveQosProfile('voice');
   * ```
   */
  retrieveQosProfile(
    name: string,
    params: QualityondemandRetrieveQosProfileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QosProfile> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get(path`/qualityondemand/qos-profiles/${name}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all QoS Profiles that match the given criteria. **NOTES:**
   *
   * - The access token may be either a 2-legged or 3-legged access token.
   * - If the access token is 3-legged, all returned QoS Profiles will be available
   *   to the subject (device) associated with the access token.
   * - If the access token is 2-legged and a device filter is provided, all returned
   *   QoS Profiles will be available to that device. If multiple device identifiers
   *   are provided within the device property, only QoS Profiles available to the
   *   device identifier chosen by the implementation will be returned, even if the
   *   identifiers do not match the same device. API provider does not perform any
   *   logic to validate/correlate that the indicated device identifiers match the
   *   same device. No error should be returned if the identifiers are otherwise
   *   valid to prevent API consumers correlating different identifiers with a given
   *   end user.
   * - This call uses the POST method instead of GET to comply with the CAMARA
   *   Commonalities guidelines for sending sensitive or complex data in API calls.
   *   Since the device field may contain personally identifiable information, it
   *   should not be sent via GET. Additionally, this call may include complex data
   *   structures.
   *   [CAMARA API Design Guidelines](https://github.com/camaraproject/Commonalities/blob/r3.3/documentation/API-design-guidelines.md#post-or-get-for-transferring-sensitive-or-complex-data)
   *
   * @example
   * ```ts
   * const qosProfiles =
   *   await client.qualityondemand.retrieveQosProfiles();
   * ```
   */
  retrieveQosProfiles(
    params: QualityondemandRetrieveQosProfilesParams,
    options?: RequestOptions,
  ): APIPromise<QualityondemandRetrieveQosProfilesResponse> {
    const { 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/qualityondemand/retrieve-qos-profiles', {
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
 * Specification of duration
 */
export interface Duration {
  /**
   * Units of time
   */
  unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds';

  /**
   * Quantity of duration
   */
  value?: number;
}

/**
 * Data type with attributes of a QosProfile
 */
export interface QosProfile {
  /**
   * A unique name for identifying a specific QoS profile. This may follow different
   * formats depending on the service providers implementation. Some options
   * addresses:
   *
   * - A UUID style string
   * - Support for predefined profile names like `QOS_E`, `QOS_S`, `QOS_M`, and
   *   `QOS_L`
   * - A searchable descriptive name
   */
  name: string;

  /**
   * The current status of the QoS Profile
   *
   * - `ACTIVE`- QoS Profile is available to be used
   * - `INACTIVE`- QoS Profile is not currently available to be deployed
   * - `DEPRECATED`- QoS profile is actively being used in a QoD session, but can not
   *   be deployed in new QoD sessions
   */
  status: QosProfileStatus;

  /**
   * A list of countries, and optionally networks, for which the API provider makes
   * the profile available
   */
  countryAvailability?: Array<QosProfile.CountryAvailability>;

  /**
   * A description of the QoS profile.
   */
  description?: string;

  /**
   * Specification of duration
   */
  jitter?: Duration;

  /**
   * **NOTE**: l4sQueueType is experimental and could change or be removed in a
   * future release.
   *
   * Specifies the type of queue for L4S (Low Latency, Low Loss, Scalable Throughput)
   * traffic management. L4S is an advanced queue management approach designed to
   * provide ultra-low latency and high throughput for internet traffic, particularly
   * beneficial for interactive applications such as gaming, video conferencing, and
   * virtual reality.
   *
   * **Queue Type Descriptions:**
   *
   * - **non-l4s-queue**: A traditional queue used for legacy internet traffic that
   *   does not utilize L4S enhancements. It provides standard latency and throughput
   *   levels.
   *
   * - **l4s-queue**: A dedicated queue optimized for L4S traffic, delivering
   *   ultra-low latency, low loss, and scalable throughput to support
   *   latency-sensitive applications.
   *
   * - **mixed-queue**: A shared queue that can handle both L4S and traditional
   *   traffic, offering a balance between ultra-low latency for L4S flows and
   *   compatibility with non-L4S flows.
   */
  l4sQueueType?: 'non-l4s-queue' | 'l4s-queue' | 'mixed-queue';

  /**
   * Specification of rate
   */
  maxDownstreamBurstRate?: Rate;

  /**
   * Specification of rate
   */
  maxDownstreamRate?: Rate;

  /**
   * Specification of duration
   */
  maxDuration?: Duration;

  /**
   * Specification of rate
   */
  maxUpstreamBurstRate?: Rate;

  /**
   * Specification of rate
   */
  maxUpstreamRate?: Rate;

  /**
   * Specification of duration
   */
  minDuration?: Duration;

  /**
   * Specification of duration
   */
  packetDelayBudget?: Duration;

  /**
   * This field specifies the acceptable level of data loss during transmission. The
   * value is an exponent of 10, so a value of 3 means that up to 10⁻³, or 0.1%, of
   * the data packets may be lost. This setting is part of a broader system that
   * categorizes different types of network traffic (like phone calls, video streams,
   * or data transfers) to ensure they perform reliably on the network.
   */
  packetErrorLossRate?: number;

  /**
   * Priority levels allow efficient resource allocation and ensure optimal
   * performance for various services in each technology, with the highest priority
   * traffic receiving preferential treatment. The lower value the higher priority.
   * Not all access networks use the same priority range, so this priority will be
   * scaled to the access network's priority range.
   */
  priority?: number;

  /**
   * **NOTE**: serviceClass is experimental and could change or be removed in a
   * future release.
   *
   * The name of a Service Class, representing a QoS Profile designed to provide
   * optimized behavior for a specific application type. While DSCP values are
   * commonly associated with Service Classes, their use may vary across network
   * segments and may not be applied throughout the entire end-to-end QoS session.
   * This aligns with the serviceClass concept used in HomeDevicesQoQ for consistent
   * terminology.
   *
   * Service classes define specific QoS behaviors that map to DSCP (Differentiated
   * Services Code Point) values or Microsoft QoS traffic types.
   *
   * The supported mappings are:
   *
   * 1. Values aligned with the
   *    [RFC4594](https://datatracker.ietf.org/doc/html/rfc4594) guidelines for
   *    differentiated traffic classes.
   * 2. Microsoft
   *    [QOS_TRAFFIC_TYPE](https://learn.microsoft.com/en-us/windows/win32/api/qos2/ne-qos2-qos_traffic_type)
   *    values for Windows developers.
   *
   * **Supported Service Classes**:
   *
   * | Service Class Name    | DSCP Name | DSCP value (decimal) | DCSP value (binary) | Microsoft Value | Application Examples                                                 |
   * | --------------------- | --------- | -------------------- | ------------------- | --------------- | -------------------------------------------------------------------- |
   * | Microsoft Voice       | CS7       | 56                   | 111000              | 4,5             | Microsoft QOSTrafficTypeVoice and QOSTrafficTypeControl              |
   * | Microsoft Audio/Video | CS5       | 40                   | 101000              | 2,3             | Microsoft QOSTrafficTypeExcellentEffort and QOSTrafficTypeAudioVideo |
   * | Real-Time Interactive | CS4       | 32                   | 100000              |                 | Video conferencing and Interactive gaming                            |
   * | Multimedia Streaming  | AF31      | 26                   | 011010              |                 | Streaming video and audio on demand                                  |
   * | Broadcast Video       | CS3       | 24                   | 011000              |                 | Broadcast TV & live events                                           |
   * | Low-Latency Data      | AF21      | 18                   | 010010              |                 | Client/server transactions Web-based ordering                        |
   * | High-Throughput Data  | AF11      | 10                   | 001010              |                 | Store and forward applications                                       |
   * | Low-Priority Data     | CS1       | 8                    | 001000              | 1               | Any flow that has no BW assurance - also:                            |
   * |                       |           |                      |                     |                 | Microsoft QOSTrafficTypeBackground                                   |
   * | Standard              | DF(CS0)   | 0                    | 000000              | 0               | Undifferentiated applications - also:                                |
   * |                       |           |                      |                     |                 | Microsoft QOSTrafficTypeBestEffort                                   |
   */
  serviceClass?:
    | 'microsoft_voice'
    | 'microsoft_audio_video'
    | 'real_time_interactive'
    | 'multimedia_streaming'
    | 'broadcast_video'
    | 'low_latency_data'
    | 'high_throughput_data'
    | 'low_priority_data'
    | 'standard';

  /**
   * Specification of rate
   */
  targetMinDownstreamRate?: Rate;

  /**
   * Specification of rate
   */
  targetMinUpstreamRate?: Rate;
}

export namespace QosProfile {
  export interface CountryAvailability {
    /**
     * The two letter ISO 3166-2 country code for the country in which the QoS profile
     * is available in at least one network
     */
    countryName: string;

    /**
     * A list of networks within the country for which the QoS profile is available
     * from the API provider
     */
    networks?: Array<string>;
  }
}

/**
 * The current status of the QoS Profile
 *
 * - `ACTIVE`- QoS Profile is available to be used
 * - `INACTIVE`- QoS Profile is not currently available to be deployed
 * - `DEPRECATED`- QoS profile is actively being used in a QoD session, but can not
 *   be deployed in new QoD sessions
 */
export type QosProfileStatus = 'ACTIVE' | 'INACTIVE' | 'DEPRECATED';

/**
 * Specification of rate
 */
export interface Rate {
  /**
   * Units of rate
   */
  unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps';

  /**
   * Quantity of rate
   */
  value?: number;
}

export type QualityondemandRetrieveQosProfilesResponse = Array<QosProfile>;

export interface QualityondemandRetrieveQosProfileParams {
  /**
   * Value for the x-correlator
   */
  'x-correlator'?: string;
}

export interface QualityondemandRetrieveQosProfilesParams {
  /**
   * Body param: End-user equipment able to connect to a mobile network. Examples of
   * devices include smartphones or IoT sensors/actuators.
   *
   * The developer can choose to provide the below specified device identifiers:
   *
   * - `ipv4Address`
   * - `ipv6Address`
   * - `phoneNumber` NOTE1: the network operator might support only a subset of these
   *   options. The API consumer can provide multiple identifiers to be compatible
   *   across different operators. In this case the identifiers MUST belong to the
   *   same device. NOTE2: as for this Commonalities release, we are enforcing that
   *   the networkAccessIdentifier is only part of the schema for future-proofing,
   *   and CAMARA does not currently allow its use. After the CAMARA meta-release
   *   work is concluded and the relevant issues are resolved, its use will need to
   *   be explicitly documented in the guidelines.
   */
  device?: QualityondemandRetrieveQosProfilesParams.Device;

  /**
   * Body param: A unique name for identifying a specific QoS profile. This may
   * follow different formats depending on the service providers implementation. Some
   * options addresses:
   *
   * - A UUID style string
   * - Support for predefined profile names like `QOS_E`, `QOS_S`, `QOS_M`, and
   *   `QOS_L`
   * - A searchable descriptive name
   */
  name?: string;

  /**
   * Body param: The current status of the QoS Profile
   *
   * - `ACTIVE`- QoS Profile is available to be used
   * - `INACTIVE`- QoS Profile is not currently available to be deployed
   * - `DEPRECATED`- QoS profile is actively being used in a QoD session, but can not
   *   be deployed in new QoD sessions
   */
  status?: QosProfileStatus;

  /**
   * Header param: Value for the x-correlator
   */
  'x-correlator'?: string;
}

export namespace QualityondemandRetrieveQosProfilesParams {
  /**
   * End-user equipment able to connect to a mobile network. Examples of devices
   * include smartphones or IoT sensors/actuators.
   *
   * The developer can choose to provide the below specified device identifiers:
   *
   * - `ipv4Address`
   * - `ipv6Address`
   * - `phoneNumber` NOTE1: the network operator might support only a subset of these
   *   options. The API consumer can provide multiple identifiers to be compatible
   *   across different operators. In this case the identifiers MUST belong to the
   *   same device. NOTE2: as for this Commonalities release, we are enforcing that
   *   the networkAccessIdentifier is only part of the schema for future-proofing,
   *   and CAMARA does not currently allow its use. After the CAMARA meta-release
   *   work is concluded and the relevant issues are resolved, its use will need to
   *   be explicitly documented in the guidelines.
   */
  export interface Device {
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
    ipv4Address?: Device.Ipv4Address;

    /**
     * The device should be identified by the observed IPv6 address, or by any single
     * IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to
     * the /64 prefix).
     *
     * The session shall apply to all IP flows between the device subnet and the
     * specified application server, unless further restricted by the optional
     * parameters devicePorts or applicationServerPorts.
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

  export namespace Device {
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
    export interface Ipv4Address {
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
  }
}

export declare namespace Qualityondemand {
  export {
    type Duration as Duration,
    type QosProfile as QosProfile,
    type QosProfileStatus as QosProfileStatus,
    type Rate as Rate,
    type QualityondemandRetrieveQosProfilesResponse as QualityondemandRetrieveQosProfilesResponse,
    type QualityondemandRetrieveQosProfileParams as QualityondemandRetrieveQosProfileParams,
    type QualityondemandRetrieveQosProfilesParams as QualityondemandRetrieveQosProfilesParams,
  };
}
