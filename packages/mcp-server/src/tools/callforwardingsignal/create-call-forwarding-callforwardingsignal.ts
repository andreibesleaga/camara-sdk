// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'callforwardingsignal',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/callforwardingsignal/call-forwardings',
  operationId: 'CallForwardingSignal_retrieveCallForwarding',
};

export const tool: Tool = {
  name: 'create_call_forwarding_callforwardingsignal',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint provides information about which type of call forwarding service is active. More than one service can be active, e.g. conditional and unconditional. This endpoint exceeds the main scope of the Call Forwarding Signal API, for this reason an error code 501 can be returned.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  description: 'resource containing the list of the Call Forwarding Services active for the given phone number (PhoneNumber). The possible states are, \\'inactive\\' (no call forwarding service activated), \\'unconditional\\' (call forwarded independently from the device status), \\'conditional_busy\\' (call forwarded if the device is on an active call), \\'conditional_not_reachable\\' (call forwarded if the device is not reachable), \\'conditional_no_answer\\' (call forwarded if the device doesn\\'t answer the incoming call).',\n  items: {\n    type: 'string',\n    enum: [      'inactive',\n      'unconditional',\n      'conditional_busy',\n      'conditional_not_reachable',\n      'conditional_no_answer'\n    ]\n  }\n}\n```",
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
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.callforwardingsignal.createCallForwarding(body)),
  );
};

export default { metadata, tool, handler };
