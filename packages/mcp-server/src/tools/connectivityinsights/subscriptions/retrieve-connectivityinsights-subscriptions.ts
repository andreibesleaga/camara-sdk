// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'connectivityinsights.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connectivityinsights/subscriptions/{subscriptionId}',
  operationId: 'ConnectivityInsights_getSubscription',
};

export const tool: Tool = {
  name: 'retrieve_connectivityinsights_subscriptions',
  description: 'Retrieve a given subscription by ID',
  inputSchema: {
    type: 'object',
    properties: {
      subscriptionId: {
        type: 'string',
        description:
          'When this information is contained within an event notification, it SHALL be referred to as `subscriptionId` as per the Commonalities Event Notification Model.\n',
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
    return asTextContentResult(
      await client.connectivityinsights.subscriptions.retrieve(subscriptionId, body),
    );
  } catch (error) {
    if (error instanceof Camara.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
