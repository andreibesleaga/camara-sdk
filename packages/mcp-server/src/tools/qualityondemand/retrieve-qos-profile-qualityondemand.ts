// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'qualityondemand',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/qualityondemand/qos-profiles/{name}',
  operationId: 'QualityOnDemand_getQosProfile',
};

export const tool: Tool = {
  name: 'retrieve_qos_profile_qualityondemand',
  description:
    'Returns a QoS Profile that matches the given name.\n\nThe access token may be either a 2-legged or 3-legged access token. If the access token is 3-legged, a QoS Profile is only returned if available to all subjects associated with the access token.\n',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description:
          'A unique name for identifying a specific QoS profile.\nThis may follow different formats depending on the service providers implementation.\nSome options addresses:\n  - A UUID style string\n  - Support for predefined profile names like `QOS_E`, `QOS_S`, `QOS_M`, and `QOS_L`\n  - A searchable descriptive name\n',
      },
      'x-correlator': {
        type: 'string',
        description: 'Value for the x-correlator',
      },
    },
    required: ['name'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  return asTextContentResult(await client.qualityondemand.retrieveQosProfile(name, body));
};

export default { metadata, tool, handler };
