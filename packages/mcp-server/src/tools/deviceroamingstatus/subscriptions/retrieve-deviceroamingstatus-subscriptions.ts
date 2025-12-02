// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'deviceroamingstatus.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/deviceroamingstatus/subscriptions/{subscriptionId}',
  operationId: 'DeviceRoamingStatus_retrieveDeviceRoamingStatusSubscription',
};

export const tool: Tool = {
  name: 'retrieve_deviceroamingstatus_subscriptions',
  description: 'retrieve device roaming status subscription information for a given subscription.',
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
  try {
    return asTextContentResult(await client.deviceroamingstatus.subscriptions.retrieve(subscriptionId, body));
  } catch (error) {
    if (error instanceof Camara.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
