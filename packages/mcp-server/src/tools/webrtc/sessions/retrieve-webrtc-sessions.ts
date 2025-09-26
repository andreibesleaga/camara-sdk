// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'webrtc.sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/webrtc/sessions/{mediaSessionId}',
  operationId: 'WebRTC_getSessionDetailsById',
};

export const tool: Tool = {
  name: 'retrieve_webrtc_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the media Session description based on `mediaSessionId`.\n\n** The client shall construct the API path using the `mediaSessionId` supplied\nin the session creation response (origination) or in the invitation notification\n(termination). **\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/media_session_information',\n  $defs: {\n    media_session_information: {\n      type: 'object',\n      properties: {\n        answer: {\n          $ref: '#/$defs/sdp_descriptor'\n        },\n        callObjectRef: {\n          type: 'string',\n          description: 'The reference to the call object'\n        },\n        clientCorrelator: {\n          type: 'string',\n          description: 'A correlator that the client can use to tag this particular resource representation during a request to create a resource on the server. Note - This allows the client to recover from communication failures during resource creation and therefore avoids re-sending the message in such situations. In case the element is present, the WebRTC GW shall not alter its value, and shall provide it as part of the representation of this resource.'\n        },\n        mediaSessionId: {\n          type: 'string',\n          description: 'The media session ID created by the network. The mediaSessionId shall not be included in POST requests by the client, but must be included in the notifications from the network to the client device.'\n        },\n        offer: {\n          $ref: '#/$defs/sdp_descriptor'\n        },\n        offerRequired: {\n          type: 'boolean',\n          description: 'This element shall be included and set to true, if the session updates are received without SDP offer. This element indicates clients to send the offer.'\n        },\n        originatorAddress: {\n          type: 'string',\n          description: 'Subscriber address (Sender or Receiver)'\n        },\n        originatorName: {\n          type: 'string',\n          description: 'Friendly name of the call originator'\n        },\n        reason: {\n          type: 'string',\n          description: 'The description of the event that has happened within the session'\n        },\n        receiverAddress: {\n          type: 'string',\n          description: 'Subscriber address (Sender or Receiver)'\n        },\n        receiverName: {\n          type: 'string',\n          description: 'Friendly name of the call terminator'\n        },\n        sequenceNumber: {\n          type: 'integer',\n          description: 'The sequence number of the notification sent to client'\n        },\n        serverCorrelator: {\n          type: 'string',\n          description: 'A correlator that the server instructs the client to use for end to end correlation.'\n        },\n        status: {\n          type: 'string',\n          description: 'Provides the status of the media session. During the session creation, this attribute SHALL NOT be included in the request.',\n          enum: [            'Initial',\n            'InProgress',\n            'Ringing',\n            'Proceeding',\n            'Connected',\n            'Terminated',\n            'Hold',\n            'Resume',\n            'SessionCancelled',\n            'Declined',\n            'Failed',\n            'Waiting',\n            'NoAnswer',\n            'NotReachable',\n            'Busy'\n          ]\n        }\n      }\n    },\n    sdp_descriptor: {\n      type: 'object',\n      description: '**OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax\\nis used, the content of this element SHALL be embedded in a CDATA\\nsection.\\n\\n**ANSWER**: This type represents an answer in WebRTC Signaling. This element is not\\npresent in case there is no answer yet, or the session invitation has\\nbeen declined by the Terminating Participant.This element MUST NOT be\\npresent in a request from the application to the server to create a\\nsession.',\n      properties: {\n        sdp: {\n          type: 'string',\n          description: 'An inlined session description in SDP format [RFC4566].If XML syntax is used, the content of this element SHALL be embedded in a CDATA section'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      mediaSessionId: {
        type: 'string',
      },
      'x-correlator': {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['mediaSessionId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { mediaSessionId, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.webrtc.sessions.retrieve(mediaSessionId, body)),
  );
};

export default { metadata, tool, handler };
