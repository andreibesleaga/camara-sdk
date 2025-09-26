// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'tenure',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tenure/check-tenure',
  operationId: 'Tenure_checkTenure',
};

export const tool: Tool = {
  name: 'verify_tenure',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVerifies a specified length of tenure, based on a provided date, for a network subscriber to establish a level of trust for the network subscription identifier.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    tenureDateCheck: {\n      type: 'boolean',\n      description: '`true` when the identified mobile subscription has had valid tenure since `tenureDate`, otherwise `false`\\n'\n    },\n    contractType: {\n      type: 'string',\n      description: 'If exists, populated with:\\n- `PAYG` - prepaid (pay-as-you-go) account\\n- `PAYM` - contract account\\n- `Business` - Business (enterprise) account\\n\\nThis attribute may be omitted from the response set if the information is not available',\n      enum: [        'PAYG',\n        'PAYM',\n        'Business'\n      ]\n    }\n  },\n  required: [    'tenureDateCheck'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      tenureDate: {
        type: 'string',
        description:
          'The date, in RFC 3339 / ISO 8601 compliant format "YYYY-MM-DD", from which continuous tenure of the identified network subscriber is required to be confirmed',
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
    required: ['tenureDate'],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.tenure.verify(body)));
};

export default { metadata, tool, handler };
