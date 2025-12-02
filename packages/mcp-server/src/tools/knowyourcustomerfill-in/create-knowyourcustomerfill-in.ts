// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'knowyourcustomerfill_in',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/knowyourcustomerfill-in/fill-in',
  operationId: 'KnowYourCustomerFill-in_KYC_Fill-in',
};

export const tool: Tool = {
  name: 'create_knowyourcustomerfill_in',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProviding information related to a customer identity stored the account data bound to the customer's phone number.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/knowyourcustomerfill_in_create_response',\n  $defs: {\n    knowyourcustomerfill_in_create_response: {\n      type: 'object',\n      properties: {\n        address: {\n          type: 'string',\n          description: 'Complete address of the customer stored on the Operator\\'s system.  For some countries, it is built following the usual concatenation of parameters in a country, but for other countries, this is not the case.  For some countries, it can use streetName, streetNumber and/or houseNumberExtension. For example, in ESP, streetName+streetNumber; in NLD, it can be streetName+streetNumber or streetName+streetNumber+houseNumberExtension.'\n        },\n        birthdate: {\n          type: 'string',\n          description: 'Birthdate of the customer, in ISO 8601 calendar date format (YYYY-MM-DD), stored on the Operator\\'s system.',\n          format: 'date'\n        },\n        cityOfBirth: {\n          type: 'string',\n          description: 'City where the customer was born.'\n        },\n        country: {\n          type: 'string',\n          description: 'Country of the customer\\'s address stored on the Operator\\'s system. Format ISO 3166-1 alpha-2.'\n        },\n        countryOfBirth: {\n          type: 'string',\n          description: 'Country where the customer was born. Format ISO 3166-1 alpha-2.'\n        },\n        email: {\n          type: 'string',\n          description: 'Email address of the customer in the RFC specified format (local-part@domain), stored on the Operator\\'s system.'\n        },\n        familyName: {\n          type: 'string',\n          description: 'Last name, family name, or surname of the customer stored on the Operator\\'s system.'\n        },\n        familyNameAtBirth: {\n          type: 'string',\n          description: 'Last/family/sur- name at birth of the customer stored on the Operator\\'s system.'\n        },\n        gender: {\n          type: 'string',\n          description: 'Gender of the customer stored on the Operator\\'s system (Male/Female/Other).',\n          enum: [            'MALE',\n            'FEMALE',\n            'OTHER'\n          ]\n        },\n        givenName: {\n          type: 'string',\n          description: 'First/given name or compound first/given name of the customer on the Operator\\'s system.'\n        },\n        houseNumberExtension: {\n          type: 'string',\n          description: 'House number extension of the customer stored on the Operator\\'s system.  Specific identifier of the house needed depending on the property type. For example, number of apartment in an apartment building.'\n        },\n        idDocument: {\n          type: 'string',\n          description: 'Id number associated to the id_document of the customer stored on the Operator\\'s system.'\n        },\n        idDocumentExpiryDate: {\n          type: 'string',\n          description: 'Expiration date of the identity document (ISO 8601).',\n          format: 'date'\n        },\n        idDocumentType: {\n          type: 'string',\n          description: 'Type of the official identity document provided.',\n          enum: [            'passport',\n            'national_id_card',\n            'residence_permit',\n            'diplomatic_id',\n            'driver_licence',\n            'social_security_id',\n            'other'\n          ]\n        },\n        locality: {\n          type: 'string',\n          description: 'Locality of the customer\\'s address, stored on the Operator\\'s system.'\n        },\n        middleNames: {\n          type: 'string',\n          description: 'Middle name/s of the customer stored on the Operator\\'s system.'\n        },\n        name: {\n          type: 'string',\n          description: 'Complete name of the customer stored on the Operator\\'s system.  It is usually composed of first/given name and last/family/sur- name in a country.  Depending on the country, the order of first/give name and last/family/sur- name varies, and middle name could be included.  It can use givenName, middleNames, familyName and/or familyNameAtBirth. For example, in ESP, name+familyName; in NLD, it can be name+middleNames+familyName or name+middleNames+familyNameAtBirth, etc.'\n        },\n        nameKanaHankaku: {\n          type: 'string',\n          description: 'Complete name of the customer in Hankaku-Kana format (reading of name) for Japan, stored on the Operator\\'s system.'\n        },\n        nameKanaZenkaku: {\n          type: 'string',\n          description: 'Complete name of the customer in Zenkaku-Kana format (reading of name) for Japan, stored on the Operator\\'s system.'\n        },\n        nationality: {\n          type: 'string',\n          description: 'ISO 3166-1 alpha-2 code of the customer’s nationality. In the case a customer has more than one nationality, it is supposed to be the nationality related to the ID document provided in the match request.'\n        },\n        phoneNumber: {\n          type: 'string',\n          description: 'A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with \\'+\\'.'\n        },\n        postalCode: {\n          type: 'string',\n          description: 'The postal code or Zip code of the customer\\'s address, stored on the Operator\\'s system.'\n        },\n        region: {\n          type: 'string',\n          description: 'Region/prefecture of the customer\\'s address, stored on the Operator\\'s system.'\n        },\n        streetName: {\n          type: 'string',\n          description: 'Name of the street of the customer\\'s address on the Operator\\'s system.  It should not include the type of the street.'\n        },\n        streetNumber: {\n          type: 'string',\n          description: 'The street number of the customer\\'s address on the Operator\\'s system.  Number identifying a specific property on the \\'streetName\\'.'\n        }\n      }\n    }\n  }\n}\n```",
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
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.knowyourcustomerfillIn.create(body)),
    );
  } catch (error) {
    if (error instanceof Camara.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
