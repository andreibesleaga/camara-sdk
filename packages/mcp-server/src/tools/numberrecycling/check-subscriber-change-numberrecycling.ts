// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'numberrecycling',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/numberrecycling/check',
  operationId: 'NumberRecycling_checkNumberRecycling',
};

export const tool: Tool = {
  name: 'check_subscriber_change_numberrecycling',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck whether the subscriber of the phone number has changed.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/numberrecycling_check_subscriber_change_response',\n  $defs: {\n    numberrecycling_check_subscriber_change_response: {\n      type: 'object',\n      properties: {\n        phoneNumberRecycled: {\n          type: 'boolean',\n          description: 'Set to true (Boolean, not string) when there has been a change in the subscriber associated with the specific phone number after “specifiedDate”.\\n'\n        }\n      },\n      required: [        'phoneNumberRecycled'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      specifiedDate: {
        type: 'string',
        description:
          'Specified date to check whether there has been a change in the subscriber associated with the specific phone number, in RFC 3339 calendar date format (YYYY-MM-DD).',
        format: 'date',
      },
      phoneNumber: {
        type: 'string',
        description:
          "A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.",
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
    required: ['specifiedDate'],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.numberrecycling.checkSubscriberChange(body)),
  );
};

export default { metadata, tool, handler };
