// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'camara-mcp/filtering';
import { Metadata, asTextContentResult } from 'camara-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Camara from 'camara-sdk';

export const metadata: Metadata = {
  resource: 'knowyourcustomerageverification',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/knowyourcustomerageverification/verify',
  operationId: 'KnowYourCustomerAgeVerification_verifyAge',
};

export const tool: Tool = {
  name: 'verify_knowyourcustomerageverification',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nVerify that the age of the subscriber associated with a phone number is equal to or greater than the specified age threshold value.\n\nAs it is possible that the person holding the contract and the end-user of the subscription may not be the same, the endpoint also admits a list of optional properties to be included in the request to improve the identification. The response may optionally include the `identityMatchScore` property with a value that indicates how certain it is that the information returned relates to the person that the API Client is requesting. To increase the reliability of the information returned, the API Provider may include in the response the `verifiedStatus` property, indicating whether the identity information in its possession has been verified against an identification document legally accepted as an age verification document (Note). Note: Depending on the country, credit-check or other mechanism can be used instead of official identification for Age Verification. For details, please contact API Provider.\n\nIf the API Client indicates request properties `includeContentLock` or `includeParentalControl` with value `true` and the API Provider implements this functionality, then the response will also include `contentLock` and `parentalControl` properties to indicate if the subscription has any kind of content filtering enabled. On the other hand, if the request properties are not included or the API Client specifies value `false`, then the response properties will not be returned. If the API Provider doesn't implement this functionality, request properties will be ignored and response properties won't be returned in any case.\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  description: 'Response to an age verification request',\n  properties: {\n    ageCheck: {\n      type: 'string',\n      description: 'Indicate `\"true\"` when the age of the user is the same age or older than the age threshold (age >= age threshold), and `\"false\"` if not (age < age threshold). If the API Provider doesn\\'t have enough information to perform the validation, a `not_available` can be returned.',\n      enum: [        'true',\n        'false',\n        'not_available'\n      ]\n    },\n    contentLock: {\n      type: 'string',\n      description: 'Indicate `\"true\"` if the subscription associated with the phone number has any kind of content lock (i.e certain web content blocked) and `\"false\"` if not. If the information is not available the value `not_available` can be returned.',\n      enum: [        'true',\n        'false',\n        'not_available'\n      ]\n    },\n    identityMatchScore: {\n      type: 'integer',\n      description: 'The overall score of identity information available in the API Provider, information either provided in the request body comparing it to the one that the API Provider holds or directly using internal API Provider\\'s information. It is optional for the API Provider to return the Identity match score.'\n    },\n    parentalControl: {\n      type: 'string',\n      description: 'Indicate `\"true\"` if the subscription associated with the phone number has any kind of parental control activated and `\"false\"` if not. If the information is not available the value `not_available` can be returned.',\n      enum: [        'true',\n        'false',\n        'not_available'\n      ]\n    },\n    verifiedStatus: {\n      type: 'boolean',\n      description: 'Indicate `true` if the information provided has been compared against information based on an identification document legally accepted as an age verification document (Note), otherwise indicate `false`.  Note: Depending on the country, credit-check or other mechanism can be used instead of official identification for Age Verification. For details, please contact API Provider.\\n'\n    }\n  },\n  required: [    'ageCheck'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ageThreshold: {
        type: 'integer',
        description:
          'The age to be verified. The indicated range is a global definition of maximum and minimum values allowed to be requested. It is important to note that this range might be more restrictive in some implementations due to local regulations of a country i.e. A country does not allow to request for an age under 18. This limitation must be informed during the onboarding process.',
      },
      birthdate: {
        type: 'string',
        description:
          'The birthdate of the customer, in RFC 3339 / ISO 8601 calendar date format (YYYY-MM-DD).',
        format: 'date',
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
      givenName: {
        type: 'string',
        description: 'First/given name or compound first/given name of the customer.',
      },
      idDocument: {
        type: 'string',
        description:
          'Id number associated to the official identity document in the country. It may contain alphanumeric characters.',
      },
      includeContentLock: {
        type: 'boolean',
        description:
          'If this parameter is included in the request with value `true`, the response property `contentLock` will be returned. If it is not included or its value is `false`, the response property will not be returned.',
      },
      includeParentalControl: {
        type: 'boolean',
        description:
          'If this parameter is included in the request with value `true`, the response property `parentalControl` will be returned. If it is not included or its value is `false`, the response property will not be returned.',
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
    required: ['ageThreshold'],
  },
  annotations: {},
};

export const handler = async (client: Camara, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.knowyourcustomerageverification.verify(body)),
  );
};

export default { metadata, tool, handler };
