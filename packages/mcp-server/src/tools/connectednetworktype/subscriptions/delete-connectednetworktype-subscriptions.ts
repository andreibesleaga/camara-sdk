// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'connectednetworktype.subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/connectednetworktype/subscriptions/{subscriptionId}',
  operationId: 'ConnectedNetworkType_deleteConnectedNetworkTypeSubscription',
};

export const tool: Tool = {
  name: 'delete_connectednetworktype_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\ndelete a given ConnectedNetworkType subscription.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/subscription_delete_response',\n  $defs: {\n    subscription_delete_response: {\n      type: 'object',\n      description: 'Response for a event-type subscription request managed asynchronously (Creation or Deletion)',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.'\n        }\n      },\n      required: [        'id'\n      ]\n    }\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(
      jq_filter,
      await client.connectednetworktype.subscriptions.delete(subscriptionId, body),
    ),
  );
};

export default { metadata, tool, handler };
