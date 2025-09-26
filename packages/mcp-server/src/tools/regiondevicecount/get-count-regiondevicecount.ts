// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'regiondevicecount',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/regiondevicecount/count',
  operationId: 'RegionDeviceCount_count',
};

export const tool: Tool = {
  name: 'get_count_regiondevicecount',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet the number of devices in the specified area during a certain time interval.\n- The query area can be a circle or a polygon composed of longitude and latitude points.\n- If the areaType is circle, the circleCenter and circleRadius must be provided; if the area is a polygon, the point list must be provided.\n- If starttime and endtime are not passed in,this api should return the current number of devices in the area.\n- If the device appears in the specified area at least once during the certain time interval, it should be counted.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'RegionDeviceCount result',\n  properties: {\n    count: {\n      type: 'number',\n      description: 'Device Count'\n    },\n    status: {\n      type: 'string',\n      description: 'SUPPORTED_AREA: The whole requested area is supported Region Device Count for the entire requested area is returned - Telco Coverage = 100 %\\n\\nPART_OF_AREA_NOT_SUPPORTED: Part of the requested area is outside the MNOs coverage area, the area outside the coverage area are not returned - 100% >Telco Coverage >=50%\\n\\nAREA_NOT_SUPPORTED:  The whole requested area is outside the MNO coverage area No data will be returned- Telco Coverage <50%\\n\\nDENSITY_BELOW_PRIVACY_THRESHOLD:  The number of connected devices is below privacy threshold of local regulation\\n\\nTIME_INTERVAL_NO_DATA_FOUND: Unable to find device count data within the requested time interval',\n      enum: [        'SUPPORTED_AREA',\n        'PART_OF_AREA_NOT_SUPPORTED',\n        'AREA_NOT_SUPPORTED',\n        'DENSITY_BELOW_PRIVACY_THRESHOLD',\n        'TIME_INTERVAL_NO_DATA_FOUND'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      area: {
        type: 'object',
        properties: {
          areaType: {
            type: 'string',
            description:
              'Type of this area.\nCIRCLE - The area is defined as a circle.\nPOLYGON - The area is defined as a polygon.',
            enum: ['CIRCLE', 'POLYGON'],
          },
        },
        required: ['areaType'],
      },
      endtime: {
        type: 'string',
        description:
          'Ending timestamp for counting the number of devices in the area. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.',
        format: 'date-time',
      },
      filter: {
        type: 'object',
        description:
          'This parameter is used to filter devices. Currently, two filtering criteria are defined, `roamingStatus` and `deviceType`, which can be expanded in the future. `IN` logic is used used for multiple filtering items within a single filtering criterion, `AND` logic is used between multiple filtering criteria.\n- If a filtering critera is not provided, it means that there is no need to filter this item.\n- At least one of the criteria must be provided,a filter without any criteria is not allowed.\n- If no filtering is required, this parameter does not need to be provided.\nFor example ,`"filter":{"roamingStatus": ["roaming"],"deviceType": ["human device","IoT device"]}` means the API need to return the count of human network devices and IoT devices that are in roaming mode.`"filter":{"roamingStatus": ["non-roaming"]}` means that the API need to return the count of all devices that are not in roaming mode.\n',
        properties: {
          deviceType: {
            type: 'array',
            description:
              "Filtering by device type, 'human device' represents the need to filter for human network devices, 'IoT device' represents the need to filter for IoT devices, and 'other' represents the need to filter for other types of devices.",
            items: {
              type: 'string',
              enum: ['human device', 'IoT device', 'other'],
            },
          },
          roamingStatus: {
            type: 'array',
            description:
              "Filter whether the device is in roaming mode,'roaming' represents the need to filter devices that are in roaming mode,'non-roaming' represents the need to filter devices that are not roaming.",
            items: {
              type: 'string',
              enum: ['roaming', 'non-roaming'],
            },
          },
        },
      },
      sink: {
        type: 'string',
        description:
          'The URL where the API response will be asynchronously delivered, using the HTTP protocol.',
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
      starttime: {
        type: 'string',
        description:
          'Starting timestamp for counting the number of devices in the area. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.',
        format: 'date-time',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.regiondevicecount.getCount(body)));
};

export default { metadata, tool, handler };
