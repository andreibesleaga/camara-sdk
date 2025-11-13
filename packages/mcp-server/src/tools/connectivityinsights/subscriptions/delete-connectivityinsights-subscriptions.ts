// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'connectivityinsights.subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/connectivityinsights/subscriptions/{subscriptionId}',
  operationId: 'ConnectivityInsights_deleteSubscription',
};

export const tool: Tool = {
  name: 'delete_connectivityinsights_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a given subscription by ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_delete_response',\n  $defs: {\n    subscription_delete_response: {\n      type: 'object',\n      description: 'Response for a event-type subscription request managed asynchronously\\n(Creation or Deletion)\\n',\n      properties: {\n        subscriptionId: {\n          type: 'string',\n          description: 'When this information is contained within an event notification, it SHALL be referred to as `subscriptionId` as per the Commonalities Event Notification Model.\\n'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['subscriptionId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { subscriptionId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.connectivityinsights.subscriptions.delete(subscriptionId, body),
      ),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
