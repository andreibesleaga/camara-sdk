// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'webrtc.sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/webrtc/sessions/{mediaSessionId}',
  operationId: 'WebRTC_deleteSessionById',
};

export const tool: Tool = {
  name: 'delete_webrtc_sessions',
  description:
    "Cancel a 1-1 media session (as originator),\nDecline a 1-1 media session (as receiver),\nTerminate a 1-1 an ongoing media session\n** The client shall construct the API path using the mediaSessionId supplied in the session creation response (origination) or in the invitation notification (termination). **'\n",
  inputSchema: {
    type: 'object',
    properties: {
      mediaSessionId: {
        type: 'string',
      },
      'x-correlator': {
        type: 'string',
      },
    },
    required: ['mediaSessionId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { mediaSessionId, ...body } = args as any;
  const response = await client.webrtc.sessions.delete(mediaSessionId, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
