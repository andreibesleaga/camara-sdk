// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SessionsAPI from './sessions';
import {
  MediaSessionInformation,
  SdpDescriptor,
  SessionCreateParams,
  SessionDeleteParams,
  SessionRetrieveParams,
  SessionUpdateStatusParams,
  Sessions,
  WebRtcCircleCoordinates,
  WebRtcEllipsoidCoordinates,
  WebRtcLocationDetails,
} from './sessions';

export class Webrtc extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

Webrtc.Sessions = Sessions;

export declare namespace Webrtc {
  export {
    Sessions as Sessions,
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
