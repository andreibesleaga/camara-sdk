// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'connectednetworktype.subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/connectednetworktype/subscriptions',
  operationId: 'ConnectedNetworkType_createConnectedNetworkTypeSubscription',
};

export const tool: Tool = {
  name: 'create_connectednetworktype_subscriptions',
  description:
    'Create a subscription for receiving notifications on changes to the connected network type of a device.',
  inputSchema: {
    type: 'object',
    properties: {
      config: {
        $ref: '#/$defs/connected_network_type_config',
      },
      protocol: {
        $ref: '#/$defs/connected_network_type_protocol',
      },
      sink: {
        type: 'string',
        description: 'The address to which events shall be delivered using the selected protocol.',
      },
      types: {
        type: 'array',
        description:
          'Camara Event types eligible to be delivered by this subscription.\nNote: As of now we enforce to have only event type per subscription.\n',
        items: {
          $ref: '#/$defs/connected_network_type_subscription_event_type',
        },
      },
      sinkCredential: {
        type: 'object',
        description:
          'A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.',
        properties: {
          credentialType: {
            type: 'string',
            description:
              'The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now',
            enum: ['PLAIN', 'ACCESSTOKEN', 'REFRESHTOKEN'],
          },
        },
        required: ['credentialType'],
      },
      'x-correlator': {
        type: 'string',
      },
    },
    required: ['config', 'protocol', 'sink', 'types'],
    $defs: {
      connected_network_type_config: {
        type: 'object',
        description:
          'Implementation-specific configuration parameters needed by the subscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`\nSpecific event type attributes must be defined in `subscriptionDetail`\nNote: if a request is performed for several event type, all subscribed event will use same `config` parameters.\n',
        properties: {
          subscriptionDetail: {
            type: 'object',
            description: 'The detail of the requested event subscription.',
            properties: {
              device: {
                type: 'object',
                description:
                  'End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\n\nThe developer can choose to provide the below specified device identifiers:\n\n* `ipv4Address`\n* `ipv6Address`\n* `phoneNumber`\n* `networkAccessIdentifier`\n\nNOTE: the MNO might support only a subset of these options. The API invoker can provide multiple identifiers to be compatible across different MNOs. In this case the identifiers MUST belong to the same device.\n',
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
            },
          },
          initialEvent: {
            type: 'boolean',
            description:
              'Set to `true` by API consumer if consumer wants to get an event as soon as the subscription is created and current situation reflects event request.\nExample: Consumer request area entered event. If consumer sets initialEvent to true and device is already in the geofence, an event is triggered\n',
          },
          subscriptionExpireTime: {
            type: 'string',
            description:
              'The subscription expiration time (in date-time format) requested by the API consumer.',
            format: 'date-time',
          },
          subscriptionMaxEvents: {
            type: 'integer',
            description:
              'Identifies the maximum number of event reports to be generated (>=1) requested by the API consumer - Once this number is reached, the subscription ends.',
          },
        },
        required: ['subscriptionDetail'],
      },
      connected_network_type_protocol: {
        type: 'string',
        description: 'Identifier of a delivery protocol. Only HTTP is allowed for now',
        enum: ['HTTP', 'MQTT3', 'MQTT5', 'AMQP', 'NATS', 'KAFKA'],
      },
      connected_network_type_subscription_event_type: {
        type: 'string',
        description:
          'network-type-changed - Event triggered when the connected network type of the device changes.',
        enum: ['org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.connectednetworktype.subscriptions.create(body));
};

export default { metadata, tool, handler };
