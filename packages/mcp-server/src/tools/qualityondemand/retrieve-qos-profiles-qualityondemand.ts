// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'qualityondemand',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/qualityondemand/retrieve-qos-profiles',
  operationId: 'QualityOnDemand_retrieveQoSProfiles',
};

export const tool: Tool = {
  name: 'retrieve_qos_profiles_qualityondemand',
  description:
    'Returns all QoS Profiles that match the given criteria.\n**NOTES:**\n- The access token may be either a 2-legged or 3-legged access token.\n- If the access token is 3-legged, all returned QoS Profiles will be available to the subject (device) associated with the access token.\n- If the access token is 2-legged and a device filter is provided, all returned QoS Profiles will be available to that device. If multiple device identifiers are provided within the device property, only QoS Profiles available to the device identifier chosen by the implementation will be returned, even if the identifiers do not match the same device. API provider does not perform any logic to validate/correlate that the indicated device identifiers match the same device. No error should be returned if the identifiers are otherwise valid to prevent API consumers correlating different identifiers with a given end user.\n- This call uses the POST method instead of GET to comply with the CAMARA Commonalities guidelines for sending sensitive or complex data in API calls. Since the device field may contain personally identifiable information, it should not be sent via GET. Additionally, this call may include complex data structures.\n  [CAMARA API Design Guidelines](https://github.com/camaraproject/Commonalities/blob/r3.3/documentation/API-design-guidelines.md#post-or-get-for-transferring-sensitive-or-complex-data)\n',
  inputSchema: {
    type: 'object',
    properties: {
      device: {
        type: 'object',
        description:
          'End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\n\nThe developer can choose to provide the below specified device identifiers:\n\n* `ipv4Address`\n* `ipv6Address`\n* `phoneNumber`\nNOTE1: the network operator might support only a subset of these options. The API consumer can provide multiple identifiers to be compatible across different operators. In this case the identifiers MUST belong to the same device.\nNOTE2: as for this Commonalities release, we are enforcing that the networkAccessIdentifier is only part of the schema for future-proofing, and CAMARA does not currently allow its use. After the CAMARA meta-release work is concluded and the relevant issues are resolved, its use will need to be explicitly documented in the guidelines.\n',
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
              'The device should be identified by the observed IPv6 address, or by any single IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to the /64 prefix).\n\nThe session shall apply to all IP flows between the device subnet and the specified application server, unless further restricted by the optional parameters devicePorts or applicationServerPorts.\n',
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
      name: {
        type: 'string',
        description:
          'A unique name for identifying a specific QoS profile.\nThis may follow different formats depending on the service providers implementation.\nSome options addresses:\n  - A UUID style string\n  - Support for predefined profile names like `QOS_E`, `QOS_S`, `QOS_M`, and `QOS_L`\n  - A searchable descriptive name\n',
      },
      status: {
        $ref: '#/$defs/qos_profile_status',
      },
      'x-correlator': {
        type: 'string',
        description: 'Value for the x-correlator',
      },
    },
    required: [],
    $defs: {
      qos_profile_status: {
        type: 'string',
        description:
          'The current status of the QoS Profile\n- `ACTIVE`- QoS Profile is available to be used\n- `INACTIVE`- QoS Profile is not currently available to be deployed\n- `DEPRECATED`- QoS profile is actively being used in a QoD session, but can not be deployed in new QoD sessions',
        enum: ['ACTIVE', 'INACTIVE', 'DEPRECATED'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.qualityondemand.retrieveQosProfiles(body));
};

export default { metadata, tool, handler };
