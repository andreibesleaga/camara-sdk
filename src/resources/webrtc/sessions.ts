// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Sessions extends APIResource {
  /**
   * Creates a voice and/or video session
   *
   * @example
   * ```ts
   * const mediaSessionInformation =
   *   await client.webrtc.sessions.create({
   *     registrationId: 'registrationId',
   *     offer: {
   *       sdp: 'v=0\r\no=- 8066321617929821805 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\nm=audio 42988 RTP/SAVPF 102 113\r\nc=IN IP6 2001:e0:410:2448:7a05:9b11:66f2:c9e\r\nb=AS:64\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:1645903805 1 udp 2122262783 2001:e0:410:2448:7a05:9b11:66f2:c9e 42988 typ host generation 0 network-id 3 network-cost 900\r\na=ice-ufrag:4eKp\r\na=ice-pwd:D4sF5Pv9vx9ggaqxBlHbAFMx\r\na=ice-options:trickle renomination\r\na=mid:audio\r\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=sendrecv\r\na=rtcp-mux\r\na=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:Xm3YciqVIWFNSwy19e9MvfZ2YOdAZil7oT/tHjdf\r\na=rtpmap:102 AMR-WB/16000\r\na=fmtp:102 octet-align=0; mode-set=0,1,2; mode-change-capability=2\r\na=rtpmap:113 telephone-event/16000\r\n',
   *     },
   *     originatorAddress: 'tel:+17085852753',
   *     originatorName: 'tel:+17085852753',
   *     receiverAddress: 'tel:+17085854000',
   *     receiverName: 'tel:+17085854000',
   *   });
   * ```
   */
  create(params: SessionCreateParams, options?: RequestOptions): APIPromise<MediaSessionInformation> {
    const { registrationId, 'x-correlator': xCorrelator, ...body } = params;
    return this._client.post('/webrtc/sessions', {
      body,
      ...options,
      headers: buildHeaders([
        {
          registrationId: registrationId,
          ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Get the media Session description based on `mediaSessionId`.
   *
   * ** The client shall construct the API path using the `mediaSessionId` supplied
   * in the session creation response (origination) or in the invitation notification
   * (termination). **
   *
   * @example
   * ```ts
   * const mediaSessionInformation =
   *   await client.webrtc.sessions.retrieve('mediaSessionId');
   * ```
   */
  retrieve(
    mediaSessionID: string,
    params: SessionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MediaSessionInformation> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.get(path`/webrtc/sessions/${mediaSessionID}`, {
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Cancel a 1-1 media session (as originator), Decline a 1-1 media session (as
   * receiver), Terminate a 1-1 an ongoing media session ** The client shall
   * construct the API path using the mediaSessionId supplied in the session creation
   * response (origination) or in the invitation notification (termination). **'
   *
   * @example
   * ```ts
   * await client.webrtc.sessions.delete('mediaSessionId');
   * ```
   */
  delete(
    mediaSessionID: string,
    params: SessionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'x-correlator': xCorrelator } = params ?? {};
    return this._client.delete(path`/webrtc/sessions/${mediaSessionID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Update the status of the media session, this may include updating SDP media
   *
   * The API consumer shall construct the API path using the `mediaSessionId`
   * supplied in the session creation response (origination) or in the invitation
   * notification (termination).
   *
   * @example
   * ```ts
   * const mediaSessionInformation =
   *   await client.webrtc.sessions.updateStatus(
   *     'mediaSessionId',
   *   );
   * ```
   */
  updateStatus(
    mediaSessionID: string,
    params: SessionUpdateStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MediaSessionInformation> {
    const { 'x-correlator': xCorrelator, ...body } = params ?? {};
    return this._client.put(path`/webrtc/sessions/${mediaSessionID}/status`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(xCorrelator != null ? { 'x-correlator': xCorrelator } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface MediaSessionInformation {
  /**
   * **OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax
   * is used, the content of this element SHALL be embedded in a CDATA section.
   *
   * **ANSWER**: This type represents an answer in WebRTC Signaling. This element is
   * not present in case there is no answer yet, or the session invitation has been
   * declined by the Terminating Participant.This element MUST NOT be present in a
   * request from the application to the server to create a session.
   */
  answer?: SdpDescriptor;

  /**
   * Type of call. When set to EMERGENCY, the client MAY provide locationDetails. If
   * omitted, treated as REGULAR.
   */
  callType?: 'REGULAR' | 'EMERGENCY';

  /**
   * Details about the caller's location and related information. This object adheres
   * to 3GPP TS 24.229, RFC 4119, RFC 5139, and RFC 5491 for PIDF-LO compatibility.
   */
  locationDetails?: WebRtcLocationDetails;

  /**
   * The media session ID created by the network. The mediaSessionId shall not be
   * included in POST requests by the client, but must be included in the
   * notifications from the network to the client device.
   */
  mediaSessionId?: string;

  /**
   * **OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax
   * is used, the content of this element SHALL be embedded in a CDATA section.
   *
   * **ANSWER**: This type represents an answer in WebRTC Signaling. This element is
   * not present in case there is no answer yet, or the session invitation has been
   * declined by the Terminating Participant.This element MUST NOT be present in a
   * request from the application to the server to create a session.
   */
  offer?: SdpDescriptor;

  /**
   * Subscriber address (Sender or Receiver)
   */
  originatorAddress?: string;

  /**
   * Friendly name of the call originator
   */
  originatorName?: string;

  /**
   * Subscriber address (Sender or Receiver)
   */
  receiverAddress?: string;

  /**
   * Friendly name of the call terminator
   */
  receiverName?: string;

  /**
   * Provides the status of the media session. During the session creation, this
   * attribute SHALL NOT be included in the request.
   */
  status?:
    | 'Initial'
    | 'InProgress'
    | 'Ringing'
    | 'Proceeding'
    | 'Connected'
    | 'Terminated'
    | 'Hold'
    | 'Resume'
    | 'SessionCancelled'
    | 'Declined'
    | 'Failed'
    | 'Waiting'
    | 'NoAnswer'
    | 'NotReachable'
    | 'Busy';
}

/**
 * **OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax
 * is used, the content of this element SHALL be embedded in a CDATA section.
 *
 * **ANSWER**: This type represents an answer in WebRTC Signaling. This element is
 * not present in case there is no answer yet, or the session invitation has been
 * declined by the Terminating Participant.This element MUST NOT be present in a
 * request from the application to the server to create a session.
 */
export interface SdpDescriptor {
  /**
   * An inlined session description in SDP format [RFC4566].If XML syntax is used,
   * the content of this element SHALL be embedded in a CDATA section
   */
  sdp?: string;
}

export interface WebRtcCircleCoordinates {
  /**
   * Latitude of the center point in decimal degrees (WGS84).
   */
  latitude: number;

  /**
   * Longitude of the center point in decimal degrees (WGS84).
   */
  longitude: number;

  /**
   * Radius of the circle in meters, indicating the uncertainty.
   */
  radius: number;
}

export interface WebRtcEllipsoidCoordinates {
  /**
   * Latitude in the WGS 84 geocentric coordinate system.
   */
  latitude: number;

  /**
   * Longitude in the WGS 84 geocentric coordinate system.
   */
  longitude: number;

  /**
   * Orientation of the ellipsoid in degrees.
   */
  orientation: number;

  /**
   * Length of the semi-major axis of the ellipsoid in meters.
   */
  semiMajorAxis: number;

  /**
   * Length of the semi-minor axis of the ellipsoid in meters.
   */
  semiMinorAxis: number;

  /**
   * Length of the vertical axis of the ellipsoid in meters.
   */
  verticalAxis: number;

  /**
   * Altitude (optional) in the WGS 84 geocentric coordinate system.
   */
  zAxis: number;
}

/**
 * Details about the caller's location and related information. This object adheres
 * to 3GPP TS 24.229, RFC 4119, RFC 5139, and RFC 5491 for PIDF-LO compatibility.
 */
export interface WebRtcLocationDetails {
  /**
   * The confidence level of the location information.
   */
  confidence?: WebRtcLocationDetails.Confidence;

  /**
   * The coordinates of the caller's location, specific to the chosen shape.
   */
  coordinates?: WebRtcCircleCoordinates | WebRtcEllipsoidCoordinates;

  /**
   * The method used to obtain the location information.
   *
   * - **GPS:** Global Positioning System (highly accurate)
   * - **DBH:** Device-Based Hybrid
   * - **DBH_HELO:** Device-Based Hybrid using Apple Hybridized Emergency Location
   * - **Other:** Other methods (e.g., landmarks, IP Based etc.)
   */
  method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other';

  /**
   * The shape representing the caller's location (Circle or Ellipsoid).
   */
  shape?: 'Circle' | 'Ellipsoid';

  /**
   * The timestamp (in ISO 8601 format) indicating when the location information was
   * Calculated. \nThis is crucial for emergency services to assess the timeliness of
   * the data. if not provided current timestamp will be used by default"
   */
  timestamp?: string;
}

export namespace WebRtcLocationDetails {
  /**
   * The confidence level of the location information.
   */
  export interface Confidence {
    /**
     * The probability density function (PDF) associated with the confidence value.
     */
    pdf?: 'normal' | 'uniform';

    /**
     * The confidence value (percentage).
     */
    value?: number;
  }
}

export interface SessionCreateParams {
  /**
   * Header param: The device registration identifier assigned by the network
   */
  registrationId: string;

  /**
   * Body param: **OFFER**: An inlined session description in SDP format [RFC4566].If
   * XML syntax is used, the content of this element SHALL be embedded in a CDATA
   * section.
   *
   * **ANSWER**: This type represents an answer in WebRTC Signaling. This element is
   * not present in case there is no answer yet, or the session invitation has been
   * declined by the Terminating Participant.This element MUST NOT be present in a
   * request from the application to the server to create a session.
   */
  answer?: SdpDescriptor;

  /**
   * Body param: Type of call. When set to EMERGENCY, the client MAY provide
   * locationDetails. If omitted, treated as REGULAR.
   */
  callType?: 'REGULAR' | 'EMERGENCY';

  /**
   * Body param: Details about the caller's location and related information. This
   * object adheres to 3GPP TS 24.229, RFC 4119, RFC 5139, and RFC 5491 for PIDF-LO
   * compatibility.
   */
  locationDetails?: WebRtcLocationDetails;

  /**
   * Body param: The media session ID created by the network. The mediaSessionId
   * shall not be included in POST requests by the client, but must be included in
   * the notifications from the network to the client device.
   */
  mediaSessionId?: string;

  /**
   * Body param: **OFFER**: An inlined session description in SDP format [RFC4566].If
   * XML syntax is used, the content of this element SHALL be embedded in a CDATA
   * section.
   *
   * **ANSWER**: This type represents an answer in WebRTC Signaling. This element is
   * not present in case there is no answer yet, or the session invitation has been
   * declined by the Terminating Participant.This element MUST NOT be present in a
   * request from the application to the server to create a session.
   */
  offer?: SdpDescriptor;

  /**
   * Body param: Subscriber address (Sender or Receiver)
   */
  originatorAddress?: string;

  /**
   * Body param: Friendly name of the call originator
   */
  originatorName?: string;

  /**
   * Body param: Subscriber address (Sender or Receiver)
   */
  receiverAddress?: string;

  /**
   * Body param: Friendly name of the call terminator
   */
  receiverName?: string;

  /**
   * Body param: Provides the status of the media session. During the session
   * creation, this attribute SHALL NOT be included in the request.
   */
  status?:
    | 'Initial'
    | 'InProgress'
    | 'Ringing'
    | 'Proceeding'
    | 'Connected'
    | 'Terminated'
    | 'Hold'
    | 'Resume'
    | 'SessionCancelled'
    | 'Declined'
    | 'Failed'
    | 'Waiting'
    | 'NoAnswer'
    | 'NotReachable'
    | 'Busy';

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface SessionRetrieveParams {
  /**
   * Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface SessionDeleteParams {
  /**
   * Correlation id for the different services
   */
  'x-correlator'?: string;
}

export interface SessionUpdateStatusParams {
  /**
   * Body param: **OFFER**: An inlined session description in SDP format [RFC4566].If
   * XML syntax is used, the content of this element SHALL be embedded in a CDATA
   * section.
   *
   * **ANSWER**: This type represents an answer in WebRTC Signaling. This element is
   * not present in case there is no answer yet, or the session invitation has been
   * declined by the Terminating Participant.This element MUST NOT be present in a
   * request from the application to the server to create a session.
   */
  answer?: SdpDescriptor;

  /**
   * Body param: Type of call. When set to EMERGENCY, the client MAY provide
   * locationDetails. If omitted, treated as REGULAR.
   */
  callType?: 'REGULAR' | 'EMERGENCY';

  /**
   * Body param: Details about the caller's location and related information. This
   * object adheres to 3GPP TS 24.229, RFC 4119, RFC 5139, and RFC 5491 for PIDF-LO
   * compatibility.
   */
  locationDetails?: WebRtcLocationDetails;

  /**
   * Body param: The media session ID created by the network. The mediaSessionId
   * shall not be included in POST requests by the client, but must be included in
   * the notifications from the network to the client device.
   */
  body_mediaSessionId?: string;

  /**
   * Body param: **OFFER**: An inlined session description in SDP format [RFC4566].If
   * XML syntax is used, the content of this element SHALL be embedded in a CDATA
   * section.
   *
   * **ANSWER**: This type represents an answer in WebRTC Signaling. This element is
   * not present in case there is no answer yet, or the session invitation has been
   * declined by the Terminating Participant.This element MUST NOT be present in a
   * request from the application to the server to create a session.
   */
  offer?: SdpDescriptor;

  /**
   * Body param: Subscriber address (Sender or Receiver)
   */
  originatorAddress?: string;

  /**
   * Body param: Friendly name of the call originator
   */
  originatorName?: string;

  /**
   * Body param: Subscriber address (Sender or Receiver)
   */
  receiverAddress?: string;

  /**
   * Body param: Friendly name of the call terminator
   */
  receiverName?: string;

  /**
   * Body param: Provides the status of the media session. During the session
   * creation, this attribute SHALL NOT be included in the request.
   */
  status?:
    | 'Initial'
    | 'InProgress'
    | 'Ringing'
    | 'Proceeding'
    | 'Connected'
    | 'Terminated'
    | 'Hold'
    | 'Resume'
    | 'SessionCancelled'
    | 'Declined'
    | 'Failed'
    | 'Waiting'
    | 'NoAnswer'
    | 'NotReachable'
    | 'Busy';

  /**
   * Header param: Correlation id for the different services
   */
  'x-correlator'?: string;
}

export declare namespace Sessions {
  export {
    type MediaSessionInformation as MediaSessionInformation,
    type SdpDescriptor as SdpDescriptor,
    type WebRtcCircleCoordinates as WebRtcCircleCoordinates,
    type WebRtcEllipsoidCoordinates as WebRtcEllipsoidCoordinates,
    type WebRtcLocationDetails as WebRtcLocationDetails,
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionDeleteParams as SessionDeleteParams,
    type SessionUpdateStatusParams as SessionUpdateStatusParams,
  };
}
