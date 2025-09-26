// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'otpvalidation',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/otpvalidation/validate-code',
  operationId: 'OTPValidation_validateCode',
};

export const tool: Tool = {
  name: 'validate_code_otpvalidation',
  description: 'Verifies the code is valid for the received authenticationId',
  inputSchema: {
    type: 'object',
    properties: {
      authenticationId: {
        type: 'string',
        description: 'unique id of the verification attempt the code belongs to.',
      },
      code: {
        type: 'string',
        description: 'temporal, short code to be validated',
      },
      'x-correlator': {
        type: 'string',
      },
    },
    required: ['authenticationId', 'code'],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.otpvalidation.validateCode(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
