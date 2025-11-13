// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'otpvalidation',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/otpvalidation/send-code',
  operationId: 'OTPValidation_sendCode',
};

export const tool: Tool = {
  name: 'send_code_otpvalidation',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSends an SMS with the desired message and an OTP code to the received phone number.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/otpvalidation_send_code_response',\n  $defs: {\n    otpvalidation_send_code_response: {\n      type: 'object',\n      description: 'Structure to provide authentication identifier',\n      properties: {\n        authenticationId: {\n          type: 'string',\n          description: 'unique id of the verification attempt the code belongs to.'\n        }\n      },\n      required: [        'authenticationId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description:
          'Message template used to compose the content of the SMS sent to the phone number. It must include the following label indicating where to include the short code `{{code}}`',
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
    required: ['message', 'phoneNumber'],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.otpvalidation.sendCode(body)));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
