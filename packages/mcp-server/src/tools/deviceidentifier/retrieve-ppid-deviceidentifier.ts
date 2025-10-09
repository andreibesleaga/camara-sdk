// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'deviceidentifier',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/deviceidentifier/retrieve-ppid',
  operationId: 'DeviceIdentifier_retrievePPID',
};

export const tool: Tool = {
  name: 'retrieve_ppid_deviceidentifier',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet a pseudonymous identifier for device being used by a given mobile subscriber\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/deviceidentifier_retrieve_ppid_response',\n  $defs: {\n    deviceidentifier_retrieve_ppid_response: {\n      type: 'object',\n      properties: {\n        device: {\n          allOf: [],\n          description: 'The device subscription identifier that was used to identify the device whose identifier is being returned. If this property is not present, then the device subscription identifier specified in the request was used.'\n        },\n        lastChecked: {\n          type: 'string',\n          description: 'Date and time that the information was last confirmed by the mobile operator to be correct. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\\n',\n          format: 'date-time'\n        },\n        ppid: {\n          type: 'string',\n          description: 'A PPID for the identified physical device'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      device: {
        type: 'object',
        description:
          'End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\nThe developer can choose to provide the below specified device identifiers:\n* `ipv4Address`\n* `ipv6Address`\n* `phoneNumber`\n* `networkAccessIdentifier`\nNOTE 1: The MNO might support only a subset of these options. The API invoker can provide multiple identifiers to be compatible across different MNOs. In this case the identifiers MUST belong to the same device.\nNOTE 2: For the current Commonalities release, we are enforcing that the networkAccessIdentifier is only part of the schema for future-proofing, and CAMARA does not currently allow its use. After the CAMARA meta-release work is concluded and the relevant issues are resolved, its use will need to be explicitly documented in the guidelines.\n',
        properties: {
          ipv4Address: {
            type: 'object',
            description:
              'The device should be identified by either the public (observed) IP address and port as seen by the application server, or the private (local) and any public (observed) IP addresses in use by the device (this information can be obtained by various means, for example from some DNS servers).\n\nIf the allocated and observed IP addresses are the same (i.e. NAT is not in use) then  the same address should be specified for both publicAddress and privateAddress.\n\nIf NAT64 is in use, the device should be identified by its publicAddress and publicPort, or separately by its allocated IPv6 address (field ipv6Address of the Device object)\n\nIn all cases, publicAddress must be specified, along with at least one of either privateAddress or publicPort, dependent upon which is known. In general, mobile devices cannot be identified by their public IPv4 address alone.\n',
            properties: {
              privateAddress: {
                type: 'string',
                description: 'A single IPv4 address with no subnet mask',
              },
              publicAddress: {
                type: 'string',
                description: 'A single IPv4 address with no subnet mask',
              },
              publicPort: {
                type: 'integer',
                description: 'TCP or UDP port number',
              },
            },
          },
          ipv6Address: {
            type: 'string',
            description:
              'The device should be identified by the observed IPv6 address, or by any single IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to the /64 prefix).\n',
          },
          networkAccessIdentifier: {
            type: 'string',
            description:
              'A public identifier addressing a subscription in a mobile network. In 3GPP terminology, it corresponds to the GPSI formatted with the External Identifier ({Local Identifier}@{Domain Identifier}). Unlike the telephone number, the network access identifier is not subjected to portability ruling in force, and is individually managed by each operator.',
          },
          phoneNumber: {
            type: 'string',
            description:
              "A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.",
          },
        },
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.deviceidentifier.retrievePpid(body)));
};

export default { metadata, tool, handler };
