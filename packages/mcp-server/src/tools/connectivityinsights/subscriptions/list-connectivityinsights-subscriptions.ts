// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'connectivityinsights.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/connectivityinsights/subscriptions',
  operationId: 'ConnectivityInsights_getSubscriptionList',
};

export const tool: Tool = {
  name: 'list_connectivityinsights_subscriptions',
  description: 'Operation to list subscriptions authorized to be retrieved by the\nprovided access token.\n',
  inputSchema: {
    type: 'object',
    properties: {
      'x-correlator': {
        type: 'string',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.connectivityinsights.subscriptions.list(body));
};

export default { metadata, tool, handler };
