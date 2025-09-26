// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'connectivityinsights.subscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/connectivityinsights/subscriptions',
  operationId: 'ConnectivityInsights_createSubscription',
};

export const tool: Tool = {
  name: 'create_connectivityinsights_subscriptions',
  description: 'Create a Connectivity insights subscription for a device',
  inputSchema: {
    type: 'object',
    properties: {
      config: {
        $ref: '#/$defs/config',
      },
      protocol: {
        $ref: '#/$defs/protocol',
      },
      sink: {
        type: 'string',
        description: 'The address to which events shall be delivered using the selected\nprotocol.\n',
      },
      types: {
        type: 'array',
        description: 'Camara Event types eligible to be delivered by this subscription.\n',
        items: {
          $ref: '#/$defs/subscription_event_type',
        },
      },
      sinkCredential: {
        type: 'object',
        description: 'A sink credential provides authentication or authorization information\n',
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
      config: {
        type: 'object',
        description:
          'Implementation-specific configuration parameters needed by the\nsubscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime`,\n`subscriptionMaxEvents`, `initialEvent`\nSpecific event type attributes must be defined in `subscriptionDetail`\nNote: if a request is performed for several event type, all subscribed\nevent will use same `config` parameters.\n',
        properties: {
          subscriptionDetail: {
            type: 'object',
            description: 'The detail of the requested event subscription',
            properties: {
              applicationProfileId: {
                type: 'string',
                description: 'Identifier for the Application Profile',
              },
              device: {
                type: 'object',
                description:
                  'End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\n    The developer can choose to provide the below specified device identifiers:\n    * `ipv4Address`\n    * `ipv6Address`\n    * `phoneNumber`\n    * `networkAccessIdentifier`\n    NOTE1: the network operator might support only a subset of these options. The API invoker can provide multiple identifiers to be compatible across different network operators. In this case the identifiers MUST belong to the same device.\n    NOTE2: as for this Commonalities release, we are enforcing that the networkAccessIdentifier is only part of the schema for future-proofing, and CAMARA does not currently allow its use. After the CAMARA meta-release work is concluded and the relevant issues are resolved, its use will need to be explicitly documented in the guidelines.\n',
                properties: {
                  ipv4Address: {
                    type: 'object',
                    description:
                      'The device should be identified by either the public (observed) IP\naddress and port as seen by the application server, or the private\n(local) and any public (observed) IP addresses in use by the device\n(this information can be obtained by various means, for example from\nsome DNS servers).\n\nIf the allocated and observed IP addresses are the same (i.e. NAT is\nnot in use) then  the same address should be specified for both\npublicAddress and privateAddress.\n\nIf NAT64 is in use, the device should be identified by its\npublicAddress and publicPort, or separately by its allocated IPv6\naddress (field ipv6Address of the Device object)\n\nIn all cases, publicAddress must be specified, along with at least one\nof either privateAddress or publicPort, dependent upon which is known.\nIn general, mobile devices cannot be identified by their public IPv4\naddress alone.\n',
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
                      'The device should be identified by the observed IPv6 address, or by any\nsingle IPv6 address from within the subnet allocated to the device\n(e.g. adding ::0 to the /64 prefix).\n\nThe session shall apply to all IP flows between the device subnet and\nthe specified application server, unless further restricted by the\noptional parameters devicePorts or applicationServerPorts.\n',
                  },
                  networkAccessIdentifier: {
                    type: 'string',
                    description:
                      'A public identifier addressing a subscription in a mobile network. In\n3GPP terminology, it corresponds to the GPSI formatted with the\nExternal Identifier ({Local Identifier}@{Domain Identifier}). Unlike\nthe telephone number, the network access identifier is not subjected\nto portability ruling in force, and is individually managed by each\noperator.\n',
                  },
                  phoneNumber: {
                    type: 'string',
                    description:
                      "A public identifier addressing a telephone subscription. In mobile\nnetworks it corresponds to the MSISDN (Mobile Station International\nSubscriber Directory Number). In order to be globally unique it has to\nbe formatted in international format, according to E.164 standard,\nprefixed with '+'.\n",
                  },
                },
              },
              applicationServer: {
                type: 'object',
                description:
                  'A server hosting backend applications to deliver some business logic to\nclients.\n\nThe developer can choose to provide the below specified device\nidentifiers:\n\n* `ipv4Address`\n* `ipv6Address`\n\nThe Operator will use this information to calculate the end to end\nnetwork performance in scenarios where its feasible.\n',
                properties: {
                  ipv4Address: {
                    type: 'string',
                    description:
                      'IPv4 address may be specified in form <address/mask> as:\n  - address - an IPv4 number in dotted-quad form 1.2.3.4. Only this\n  exact IP number will match the flow control rule.\n  - address/mask - an IP number as above with a mask width of the\n  form 1.2.3.4/24.\n    In this case, all IP numbers from 1.2.3.0 to 1.2.3.255 will match.\n    The bit width MUST be valid for the IP version.\n',
                  },
                  ipv6Address: {
                    type: 'string',
                    description:
                      'IPv6 address may be specified in form <address/mask> as:\n  - address - The /128 subnet is optional for single addresses:\n    - 2001:db8:85a3:8d3:1319:8a2e:370:7344\n    - 2001:db8:85a3:8d3:1319:8a2e:370:7344/128\n  - address/mask - an IP v6 number with a mask:\n    - 2001:db8:85a3:8d3::0/64\n    - 2001:db8:85a3:8d3::/64\n',
                  },
                },
              },
              applicationServerPorts: {
                type: 'object',
                description: 'Specification of several TCP or UDP ports',
                properties: {
                  ports: {
                    type: 'array',
                    description: 'Array of TCP or UDP ports',
                    items: {
                      type: 'integer',
                      description: 'TCP or UDP port number',
                    },
                  },
                  ranges: {
                    type: 'array',
                    description: 'Range of TCP or UDP ports',
                    items: {
                      type: 'object',
                      properties: {
                        from: {
                          type: 'integer',
                          description: 'TCP or UDP port number',
                        },
                        to: {
                          type: 'integer',
                          description: 'TCP or UDP port number',
                        },
                      },
                      required: ['from', 'to'],
                    },
                  },
                },
              },
            },
            required: ['applicationProfileId', 'device'],
          },
          initialEvent: {
            type: 'boolean',
            description:
              'Set to `true` by API consumer if consumer wants to get an event as\nsoon as the subscription is created and current situation reflects\nevent request.\n',
          },
          subscriptionExpireTime: {
            type: 'string',
            description:
              'The subscription expiration time (in date-time format) requested by\nthe API consumer. Up to API project decision to keep it.\nIt must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\n',
            format: 'date-time',
          },
          subscriptionMaxEvents: {
            type: 'integer',
            description:
              'Identifies the maximum number of event reports to be generated\n(>=1) requested by the API consumer - Once this number is reached,\nthe subscription ends.\nNote on combined usage of `initialEvent` and\n`subscriptionMaxEvents`: If an event is triggered following\n`initialEvent` set to `true`, this event will be counted towards\n`subscriptionMaxEvents`.\n',
          },
        },
        required: ['subscriptionDetail'],
      },
      protocol: {
        type: 'string',
        description: 'Identifier of a delivery protocol. Only HTTP is allowed for now',
        enum: ['HTTP', 'MQTT3', 'MQTT5', 'AMQP', 'NATS', 'KAFKA'],
      },
      subscription_event_type: {
        type: 'string',
        description: 'event-type - Event triggered when an event-type event occurred',
        enum: ['org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.connectivityinsights.subscriptions.create(body));
};

export default { metadata, tool, handler };
