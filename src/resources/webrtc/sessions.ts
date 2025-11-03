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
   *     clientCorrelator:
   *       'fda6e26d-e7c8-4596-870c-c083c0d39b2c',
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
   * The reference to the call object
   */
  callObjectRef?: string;

  /**
   * A correlator that the client can use to tag this particular resource
   * representation during a request to create a resource on the server. Note - This
   * allows the client to recover from communication failures during resource
   * creation and therefore avoids re-sending the message in such situations. In case
   * the element is present, the WebRTC GW shall not alter its value, and shall
   * provide it as part of the representation of this resource.
   */
  clientCorrelator?: string;

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
   * This element shall be included and set to true, if the session updates are
   * received without SDP offer. This element indicates clients to send the offer.
   */
  offerRequired?: boolean;

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
   * A correlator that the server instructs the client to use for end to end
   * correlation.
   */
  serverCorrelator?: string;

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
   * Body param: The reference to the call object
   */
  callObjectRef?: string;

  /**
   * Body param: A correlator that the client can use to tag this particular resource
   * representation during a request to create a resource on the server. Note - This
   * allows the client to recover from communication failures during resource
   * creation and therefore avoids re-sending the message in such situations. In case
   * the element is present, the WebRTC GW shall not alter its value, and shall
   * provide it as part of the representation of this resource.
   */
  clientCorrelator?: string;

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
   * Body param: This element shall be included and set to true, if the session
   * updates are received without SDP offer. This element indicates clients to send
   * the offer.
   */
  offerRequired?: boolean;

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
   * Body param: A correlator that the server instructs the client to use for end to
   * end correlation.
   */
  serverCorrelator?: string;

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
   * Body param: The reference to the call object
   */
  callObjectRef?: string;

  /**
   * Body param: A correlator that the client can use to tag this particular resource
   * representation during a request to create a resource on the server. Note - This
   * allows the client to recover from communication failures during resource
   * creation and therefore avoids re-sending the message in such situations. In case
   * the element is present, the WebRTC GW shall not alter its value, and shall
   * provide it as part of the representation of this resource.
   */
  clientCorrelator?: string;

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
   * Body param: This element shall be included and set to true, if the session
   * updates are received without SDP offer. This element indicates clients to send
   * the offer.
   */
  offerRequired?: boolean;

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
   * Body param: A correlator that the server instructs the client to use for end to
   * end correlation.
   */
  serverCorrelator?: string;

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
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionDeleteParams as SessionDeleteParams,
    type SessionUpdateStatusParams as SessionUpdateStatusParams,
  };
}
