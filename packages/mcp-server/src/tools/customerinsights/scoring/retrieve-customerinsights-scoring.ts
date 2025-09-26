// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'customerinsights.scoring',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/customerinsights/scoring/retrieve',
  operationId: 'CustomerInsights_retrieveScoring',
};

export const tool: Tool = {
  name: 'retrieve_customerinsights_scoring',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves Scoring information, for the user associated with the provided `idDocument`, `phoneNumber` or the combination of both parameters.\nIt also allows to select the type of the Scoring scale measurement.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Scoring information based on the individual\\'s profile owned by a Telco Operator.',\n  properties: {\n    scoringType: {\n      type: 'string',\n      description: 'Scoring measurement system.\\n\\nAllowed values are:\\n\\n* `gaugeMetric`: ranges from index 850 (lowest risk) to index 300 (highest risk)\\n* `veritasIndex`: ranges from index 0 (lowest risk) to index 19 (highest risk)',\n      enum: [        'gaugeMetric',\n        'veritasIndex'\n      ]\n    },\n    scoringValue: {\n      type: 'integer',\n      description: 'Result of the Scoring analysis expressed in the measure indicated in the `scoringType` field.'\n    }\n  },\n  required: [    'scoringType',\n    'scoringValue'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      idDocument: {
        type: 'string',
        description:
          'Identification number associated to the official identity document in the country. It may contain alphanumeric characters.',
      },
      phoneNumber: {
        type: 'string',
        description:
          "A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.",
      },
      scoringType: {
        type: 'string',
        description:
          'Scoring type, i.e.: scale. API Client may use this field to indicate the Scoring in one of the defined scales; if this field is not informed, the API will return the Scoring in the scale configured by default in the system.\n\nAllowed values are:\n\n* `gaugeMetric`: ranges from index 850 (lowest risk) to index 300 (highest risk)\n* `veritasIndex`: ranges from index 0 (lowest risk) to index 19 (highest risk)',
        enum: ['gaugeMetric', 'veritasIndex'],
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.customerinsights.scoring.retrieve(body)),
  );
};

export default { metadata, tool, handler };
