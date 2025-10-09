// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'deviceswap',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/deviceswap/check',
  operationId: 'DeviceSwap_checkDeviceSwap',
};

export const tool: Tool = {
  name: 'check_deviceswap',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCheck if device swap has been performed during a past period\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/deviceswap_check_response',\n  $defs: {\n    deviceswap_check_response: {\n      type: 'object',\n      properties: {\n        swapped: {\n          type: 'boolean',\n          description: 'Indicates whether the device has been swapped during the period within the provided age.'\n        }\n      },\n      required: [        'swapped'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      maxAge: {
        type: 'integer',
        description: 'Period in hours to be checked for device swap.\n',
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
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.deviceswap.check(body)));
};

export default { metadata, tool, handler };
