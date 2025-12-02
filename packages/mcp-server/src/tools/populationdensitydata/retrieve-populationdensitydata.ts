// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'populationdensitydata',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/populationdensitydata/retrieve',
  operationId: 'PopulationDensityData_retrievePopulationDensity',
};

export const tool: Tool = {
  name: 'retrieve_populationdensitydata',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves population density estimation together with the estimation range related for a time slot for a given area (described as a polygon) as a data set consisting of a sequence of equally-sized objects covering the input polygon area.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/populationdensitydata_retrieve_response',\n  $defs: {\n    populationdensitydata_retrieve_response: {\n      type: 'object',\n      description: 'Population density values is represented in time intervals for different cells of the requested area. Each element in `timedPopulationDensityData` array corresponds to a time interval, containing population density data for the grid cells. The intervals are 1 hour long.',\n      properties: {\n        status: {\n          type: 'string',\n          description: 'Represents the state of the response for the input polygon defined in the request, the possible values are:\\n  - `SUPPORTED_AREA`: The whole request area is supported. Population density data for the entire requested area is returned.\\n  - `PART_OF_AREA_NOT_SUPPORTED`: Part of the requested area is outside the MNOs coverage area, the cells outside the coverage\\n  area will have property `dataType` with value `NO_DATA`.\\n  - `AREA_NOT_SUPPORTED`: The whole requested area is outside the MNOs coverage area. No data will be returned.\\n  - `OPERATION_NOT_COMPLETED`: An error happened during asynchronous processing of the request. This status will only be returned\\n  in case the asynchronous API behaviour is used.',\n          enum: [            'SUPPORTED_AREA',\n            'PART_OF_AREA_NOT_SUPPORTED',\n            'AREA_NOT_SUPPORTED',\n            'OPERATION_NOT_COMPLETED'\n          ]\n        },\n        timedPopulationDensityData: {\n          type: 'array',\n          description: 'Time ranges along with the population density data for the cells within it.\\n The request startTime or the request endTime have to be fully covered by the intervals.\\n For example, if the intervals are 1-hour long and the input date range were [2024-01-03T11:25:00Z\\n to 2024-01-03T12:45:00Z] it would contain 2 intervals (Interval from 2024-01-03T11:00:00Z\\n to 2024-01-03T12:00:00Z and interval from 2024-01-03T12:00:00Z to 2024-01-03T13:00:00Z).',\n          items: {\n            type: 'object',\n            properties: {\n              cellPopulationDensityData: {\n                type: 'array',\n                description: 'Population density data for the different cells in a concrete time range.',\n                items: {\n                  type: 'object',\n                  description: 'Population density data of a cell in a concrete time range. In case of insufficient data, to guarantee an anonymized prediction due to the k-anonymity within a specific cell and time range, no population density data is returned and the property `dataType` value is \"LOW_DENSITY\". In case of a cell not supported `dataType` value is \"NO_DATA\"',\n                  properties: {\n                    dataType: {\n                      type: 'string',\n                      enum: [                        'NO_DATA',\n                        'LOW_DENSITY',\n                        'DENSITY_ESTIMATION'\n                      ]\n                    },\n                    geohash: {\n                      type: 'string',\n                      description: 'Coordinates of the cell represented as a string using the [Geohash system](https://en.wikipedia.org/wiki/Geohash). Encoding a geographic location into a short string. The value length, and thus, the cell granularity, is determined by the request body property `precision`.'\n                    }\n                  },\n                  required: [                    'dataType',\n                    'geohash'\n                  ]\n                }\n              },\n              endTime: {\n                type: 'string',\n                description: 'Interval end time. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone. Recommended format is yyyy-MM-dd\\'T\\'HH:mm:ss.SSSZ (i.e. which allows 2023-07-03T14:27:08.312+02:00 or 2023-07-03T12:27:08.312Z)',\n                format: 'date-time'\n              },\n              startTime: {\n                type: 'string',\n                description: 'Interval start time. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone. Recommended format is yyyy-MM-dd\\'T\\'HH:mm:ss.SSSZ (i.e. which allows 2023-07-03T14:27:08.312+02:00 or 2023-07-03T12:27:08.312Z)',\n                format: 'date-time'\n              }\n            },\n            required: [              'cellPopulationDensityData',\n              'endTime',\n              'startTime'\n            ]\n          }\n        },\n        statusInfo: {\n          type: 'string',\n          description: 'Information about the status, mandatory when property `status` is `OPERATION_NOT_COMPLETED` for adding extra information about the error.'\n        }\n      },\n      required: [        'status',\n        'timedPopulationDensityData'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      area: {
        type: 'object',
        description: 'Base schema for all areas',
        properties: {
          areaType: {
            type: 'string',
            description: 'Type of this area.\nPOLYGON - The area is defined as a polygon.',
            enum: ['POLYGON'],
          },
        },
        required: ['areaType'],
      },
      endTime: {
        type: 'string',
        description:
          "End date time. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ (i.e. which allows 2023-07-03T14:27:08.312+02:00 or 2023-07-03T12:27:08.312Z) The maximum endTime allowed is 3 months from the time of the request.",
        format: 'date-time',
      },
      startTime: {
        type: 'string',
        description:
          "Start date time. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ",
        format: 'date-time',
      },
      precision: {
        type: 'integer',
        description:
          'Precision required of response cells. Precision defines a geohash level and corresponds to the length of the geohash for each cell. More information at [Geohash system](https://en.wikipedia.org/wiki/Geohash)" If not included the default precision level 7 is used by default. In case of using a not supported level by the MNO, the API returns the error response `POPULATION_DENSITY_DATA.UNSUPPORTED_PRECISION`.',
      },
      sink: {
        type: 'string',
        description:
          'The address where the API response will be asynchronously delivered, using the HTTP protocol.',
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['area', 'endTime', 'startTime'],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.populationdensitydata.retrieve(body)),
    );
  } catch (error) {
    if (error instanceof Camara.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
