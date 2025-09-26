// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'devicereachabilitystatus.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/devicereachabilitystatus/subscriptions/{subscriptionId}',
  operationId: 'DeviceReachabilityStatus_retrieveDeviceReachabilityStatusSubscription',
};

export const tool: Tool = {
  name: 'retrieve_devicereachabilitystatus_subscriptions',
  description: 'Retrieve a given subscription by ID',
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionId: {
        type: 'string',
        description:
          'The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.',
      },
      'x-correlator': {
        type: 'string',
      },
    },
    required: ['subscriptionId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { subscriptionId, ...body } = args as any;
  return asTextContentResult(
    await client.devicereachabilitystatus.subscriptions.retrieve(subscriptionId, body),
  );
};

export default { metadata, tool, handler };
