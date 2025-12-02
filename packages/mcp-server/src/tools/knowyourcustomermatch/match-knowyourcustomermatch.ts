// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'knowyourcustomermatch',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/knowyourcustomermatch/match',
  operationId: 'KnowYourCustomerMatch_KYC_Match',
};

export const tool: Tool = {
  name: 'match_knowyourcustomermatch',
  description:
    'Verify matching of a number of attributes related to a customer identity against the verified data bound to their phone number in the Operator systems. Regardless of whether the `phoneNumber` is explicitly stated in the request body, at least one of the other fields must be provided, otherwise a `HTTP 400 - KNOW_YOUR_CUSTOMER.INVALID_PARAM_COMBINATION` error will be returned.\n\nIn order to proceed with the match check, some Operators may have the requirement to perform an additional level of validation based on the `idDocument` property. This means that, in those cases, the `idDocument` is required and the provided value needs to match the one stored in the Operator system associated with the indicated `phoneNumber`. This validation will be done before proceeding with the match check of the rest of the properties. The following two rules apply only in the cases where the Operator have the requirement to validate the `idDocument`:\n- If no `idDocument` is provided, then a `HTTP 403 - KNOW_YOUR_CUSTOMER.ID_DOCUMENT_REQUIRED` error will be returned.\n- If the provided `idDocument` does not match the one stored in the Operator systems, then a `HTTP 403 - KNOW_YOUR_CUSTOMER.ID_DOCUMENT_MISMATCH` error will be returned.\n\nThe API will return the result of the matching process for each requested attribute. This means that the response will **only** contain the attributes for which validation has been requested. Possible values are:\n  - **true**: the attribute provided matches with the one in the Operator systems, which is equal to a `match_score` of 100.\n  - **false**: the attribute provided does not match with the one in the Operator systems.\n  - **not_available**: the attribute is not available to validate.',
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'string',
        description:
          'Complete address of the customer.  For some countries, it is built following the usual concatenation of parameters in a country, but for other countries, this is not the case.  For some countries, it can use streetName, streetNumber and/or houseNumberExtension. For example, in ESP, streetName+streetNumber; in NLD, it can be streetName+streetNumber or streetName+streetNumber+houseNumberExtension.',
      },
      birthdate: {
        type: 'string',
        description:
          'The birthdate of the customer, in RFC 3339 / ISO 8601 calendar date format (YYYY-MM-DD).',
        format: 'date',
      },
      cityOfBirth: {
        type: 'string',
        description: 'City where the customer was born.',
      },
      country: {
        type: 'string',
        description: "Country of the customer's address. Format ISO 3166-1 alpha-2",
      },
      countryOfBirth: {
        type: 'string',
        description: 'Country where the customer was born. Format ISO 3166-1 alpha-2.',
      },
      email: {
        type: 'string',
        description: 'Email address of the customer in the RFC specified format (local-part@domain).',
      },
      familyName: {
        type: 'string',
        description: 'Last name, family name, or surname of the customer.',
      },
      familyNameAtBirth: {
        type: 'string',
        description: 'Last/family/sur- name at birth of the customer.',
      },
      gender: {
        type: 'string',
        description: 'Gender of the customer (Male/Female/Other).',
        enum: ['MALE', 'FEMALE', 'OTHER'],
      },
      givenName: {
        type: 'string',
        description: 'First/given name or compound first/given name of the customer.',
      },
      houseNumberExtension: {
        type: 'string',
        description:
          'Specific identifier of the house needed depending on the property type. For example, number of apartment in an apartment building.',
      },
      idDocument: {
        type: 'string',
        description:
          'Id number associated to the official identity document in the country. It may contain alphanumeric characters.',
      },
      idDocumentExpiryDate: {
        type: 'string',
        description: 'Expiration date of the identity document (ISO 8601).',
        format: 'date',
      },
      idDocumentType: {
        type: 'string',
        description: 'Type of the official identity document provided.',
        enum: [
          'passport',
          'national_id_card',
          'residence_permit',
          'diplomatic_id',
          'driver_licence',
          'social_security_id',
          'other',
        ],
      },
      locality: {
        type: 'string',
        description: "Locality of the customer's address",
      },
      middleNames: {
        type: 'string',
        description: 'Middle name/s of the customer.',
      },
      name: {
        type: 'string',
        description:
          'Complete name of the customer, usually composed of first/given name and last/family/sur- name in a country.  Depending on the country, the order of first/give name and last/family/sur- name varies, and middle name could be included.  It can use givenName, middleNames, familyName and/or familyNameAtBirth. For example, in ESP, name+familyName; in NLD, it can be name+middleNames+familyName or name+middleNames+familyNameAtBirth, etc.',
      },
      nameKanaHankaku: {
        type: 'string',
        description: 'Complete name of the customer in Hankaku-Kana format (reading of name) for Japan.',
      },
      nameKanaZenkaku: {
        type: 'string',
        description: 'Complete name of the customer in Zenkaku-Kana format (reading of name) for Japan.',
      },
      nationality: {
        type: 'string',
        description:
          'ISO 3166-1 alpha-2 code of the customer’s nationality. In the case a customer has more than one nationality, it is supposed to be the nationality related to the ID document provided in the match request.',
      },
      phoneNumber: {
        type: 'string',
        description:
          "A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.",
      },
      postalCode: {
        type: 'string',
        description: 'Zip code or postal code',
      },
      region: {
        type: 'string',
        description: "Region/prefecture of the customer's address",
      },
      streetName: {
        type: 'string',
        description:
          "Name of the street of the customer's address. It should not include the type of the street.",
      },
      streetNumber: {
        type: 'string',
        description:
          "The street number of the customer's address.  Number identifying a specific property on the 'streetName'.",
      },
      'x-correlator': {
        type: 'string',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.knowyourcustomermatch.match(body));
  } catch (error) {
    if (error instanceof Camara.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
