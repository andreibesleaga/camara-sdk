// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'deviceswap',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/deviceswap/retrieve-date',
  operationId: 'DeviceSwap_retrieveDeviceSwapDate',
};

export const tool: Tool = {
  name: 'retrieve_date_deviceswap',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet timestamp of last device swap for a mobile user account provided with phone number.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/deviceswap_retrieve_date_response',\n  $defs: {\n    deviceswap_retrieve_date_response: {\n      type: 'object',\n      properties: {\n        latestDeviceChange: {\n          type: 'string',\n          description: 'Timestamp of latest device swap performed. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.',\n          format: 'date-time'\n        },\n        monitoredPeriod: {\n          type: 'integer',\n          description: 'Timeframe in days for device change supervision for the phone number. It could be valued in the response if the latest Device swap occurred before this monitored period.'\n        }\n      },\n      required: [        'latestDeviceChange'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.deviceswap.retrieveDate(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
