// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'simswap.subscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/simswap/subscriptions',
  operationId: 'SimSwap_retrieveSubscriptionList',
};

export const tool: Tool = {
  name: 'list_simswap_subscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of sim swap event subscription(s)\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/sim_swap_subscription'\n  },\n  $defs: {\n    sim_swap_subscription: {\n      type: 'object',\n      description: 'Represents a event-type subscription.',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.'\n        },\n        config: {\n          $ref: '#/$defs/sim_swap_config'\n        },\n        protocol: {\n          $ref: '#/$defs/sim_swap_protocol'\n        },\n        sink: {\n          type: 'string',\n          description: 'The address to which events shall be delivered using the selected protocol.'\n        },\n        types: {\n          type: 'array',\n          description: 'Camara Event types eligible for subscription:\\n- org.camaraproject.sim-swap-subscriptions.v0.swapped: receive a notification when a sim swap is performed on the line.\\nNote: for the Commonalities meta-release v0.4 we enforce to have only event type per subscription then for following meta-release use of array MUST be decided\\nat API project level.\\n',\n          items: {\n            $ref: '#/$defs/sim_swap_subscription_event_type'\n          }\n        },\n        expiresAt: {\n          type: 'string',\n          description: 'Date when the event subscription will expire. Only provided when `subscriptionExpireTime` is indicated by API client or Telco Operator has specific policy about that.\\nIt must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\\n',\n          format: 'date-time'\n        },\n        startsAt: {\n          type: 'string',\n          description: 'Date when the event subscription will begin/began\\nIt must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\\n',\n          format: 'date-time'\n        },\n        status: {\n          type: 'string',\n          description: 'Current status of the subscription - Management of Subscription State engine is not mandatory for now. Note not all statuses may be considered to be implemented. Details:\\n  - `ACTIVATION_REQUESTED`: Subscription creation (POST) is triggered but subscription creation process is not finished yet.\\n  - `ACTIVE`: Subscription creation process is completed. Subscription is fully operative.\\n  - `INACTIVE`: Subscription is temporarily inactive, but its workflow logic is not deleted.\\n  - `EXPIRED`: Subscription is ended (no longer active). This status applies when subscription is ended due to `SUBSCRIPTION_EXPIRED` event.\\n  - `DELETED`: Subscription is ended as deleted (no longer active). This status applies when subscription information is kept (i.e. subscription workflow is no longer active but its metainformation is kept).',\n          enum: [            'ACTIVATION_REQUESTED',\n            'ACTIVE',\n            'EXPIRED',\n            'INACTIVE',\n            'DELETED'\n          ]\n        }\n      },\n      required: [        'id',\n        'config',\n        'protocol',\n        'sink',\n        'types'\n      ]\n    },\n    sim_swap_config: {\n      type: 'object',\n      description: 'Implementation-specific configuration parameters needed by the subscription manager for acquiring events.\\nIn CAMARA we have predefined attributes like `subscriptionExpireTime` or `subscriptionMaxEvents` to limit subscription lifetime.\\nEvent type attributes must be defined in `subscriptionDetail`\\n',\n      properties: {\n        subscriptionDetail: {\n          type: 'object',\n          description: 'The detail of the requested event subscription',\n          properties: {\n            phoneNumber: {\n              type: 'string',\n              description: 'A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with \\'+\\'.'\n            }\n          }\n        },\n        subscriptionExpireTime: {\n          type: 'string',\n          description: 'The subscription expiration time (in date-time format) requested by the API consumer. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.',\n          format: 'date-time'\n        },\n        subscriptionMaxEvents: {\n          type: 'integer',\n          description: 'Identifies the maximum number of event reports to be generated (>=1) requested by the API consumer - Once this number is reached, the subscription ends.\\n'\n        }\n      },\n      required: [        'subscriptionDetail'\n      ]\n    },\n    sim_swap_protocol: {\n      type: 'string',\n      description: 'Identifier of a delivery protocol. Only HTTP is allowed for now',\n      enum: [        'HTTP',\n        'MQTT3',\n        'MQTT5',\n        'AMQP',\n        'NATS',\n        'KAFKA'\n      ]\n    },\n    sim_swap_subscription_event_type: {\n      type: 'string',\n      description: 'swapped - Event triggered when a sim swap occurs on the line',\n      enum: [        'org.camaraproject.sim-swap-subscriptions.v0.swapped'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.simswap.subscriptions.list(body)));
};

export default { metadata, tool, handler };
