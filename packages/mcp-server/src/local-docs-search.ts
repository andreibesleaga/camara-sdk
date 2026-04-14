// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'retrieve',
    endpoint: '/customerinsights/scoring/retrieve',
    httpMethod: 'post',
    summary: 'Retrieves Scoring information',
    description:
      'Retrieves Scoring information, for the user associated with the provided `idDocument`, `phoneNumber` or the combination of both parameters.\nIt also allows to select the type of the Scoring scale measurement.',
    stainlessPath: '(resource) customerinsights.scoring > (method) retrieve',
    qualified: 'client.customerinsights.scoring.retrieve',
    params: [
      'idDocument?: string;',
      'phoneNumber?: string;',
      "scoringType?: 'gaugeMetric' | 'veritasIndex';",
      'x-correlator?: string;',
    ],
    response: "{ scoringType: 'gaugeMetric' | 'veritasIndex'; scoringValue: number; }",
    markdown:
      "## retrieve\n\n`client.customerinsights.scoring.retrieve(idDocument?: string, phoneNumber?: string, scoringType?: 'gaugeMetric' | 'veritasIndex', x-correlator?: string): { scoringType: 'gaugeMetric' | 'veritasIndex'; scoringValue: number; }`\n\n**post** `/customerinsights/scoring/retrieve`\n\nRetrieves Scoring information, for the user associated with the provided `idDocument`, `phoneNumber` or the combination of both parameters.\nIt also allows to select the type of the Scoring scale measurement.\n\n### Parameters\n\n- `idDocument?: string`\n  Identification number associated to the official identity document in the country. It may contain alphanumeric characters.\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `scoringType?: 'gaugeMetric' | 'veritasIndex'`\n  Scoring type, i.e.: scale. API Client may use this field to indicate the Scoring in one of the defined scales; if this field is not informed, the API will return the Scoring in the scale configured by default in the system.\n\nAllowed values are:\n\n* `gaugeMetric`: ranges from index 850 (lowest risk) to index 300 (highest risk)\n* `veritasIndex`: ranges from index 0 (lowest risk) to index 19 (highest risk)\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ scoringType: 'gaugeMetric' | 'veritasIndex'; scoringValue: number; }`\n  Scoring information based on the individual's profile owned by a Telco Operator.\n\n  - `scoringType: 'gaugeMetric' | 'veritasIndex'`\n  - `scoringValue: number`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst scoring = await client.customerinsights.scoring.retrieve();\n\nconsole.log(scoring);\n```",
    perLanguage: {
      cli: {
        method: 'scoring retrieve',
        example: "camara customerinsights:scoring retrieve \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Customerinsights.Scoring.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tscoring, err := client.Customerinsights.Scoring.Get(context.TODO(), camara.CustomerinsightScoringGetParams{\n\t\tScoringType: camara.CustomerinsightScoringGetParamsScoringTypeGaugeMetric,\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", scoring.ScoringType)\n}\n',
      },
      http: {
        example:
          "curl https://api.example.com/camara/customerinsights/scoring/retrieve \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $CAMARA_BEARER_TOKEN\" \\\n    -d '{}'",
      },
      php: {
        method: 'customerinsights->scoring->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$scoring = $client->customerinsights->scoring->retrieve(\n  idDocument: 'idDocument',\n  phoneNumber: '+4960513',\n  scoringType: 'gaugeMetric',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($scoring);",
      },
      typescript: {
        method: 'client.customerinsights.scoring.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst scoring = await client.customerinsights.scoring.retrieve({ scoringType: 'gaugeMetric' });\n\nconsole.log(scoring.scoringType);",
      },
    },
  },
  {
    name: 'retrieve_date',
    endpoint: '/deviceswap/retrieve-date',
    httpMethod: 'post',
    summary: 'Get last device swap date',
    description: 'Get timestamp of last device swap for a mobile user account provided with phone number.',
    stainlessPath: '(resource) deviceswap > (method) retrieve_date',
    qualified: 'client.deviceswap.retrieveDate',
    params: ['phoneNumber?: string;', 'x-correlator?: string;'],
    response: '{ latestDeviceChange: string; monitoredPeriod?: number; }',
    markdown:
      "## retrieve_date\n\n`client.deviceswap.retrieveDate(phoneNumber?: string, x-correlator?: string): { latestDeviceChange: string; monitoredPeriod?: number; }`\n\n**post** `/deviceswap/retrieve-date`\n\nGet timestamp of last device swap for a mobile user account provided with phone number.\n\n### Parameters\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ latestDeviceChange: string; monitoredPeriod?: number; }`\n\n  - `latestDeviceChange: string`\n  - `monitoredPeriod?: number`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.deviceswap.retrieveDate();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'deviceswap retrieve_date',
        example: "camara deviceswap retrieve-date \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Deviceswap.GetDate',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Deviceswap.GetDate(context.TODO(), camara.DeviceswapGetDateParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.LatestDeviceChange)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/deviceswap/retrieve-date \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "phoneNumber": "+34666111333"\n        }\'',
      },
      php: {
        method: 'deviceswap->retrieveDate',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->deviceswap->retrieveDate(\n  phoneNumber: '+34666111333',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.deviceswap.retrieveDate',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.deviceswap.retrieveDate();\n\nconsole.log(response.latestDeviceChange);",
      },
    },
  },
  {
    name: 'check',
    endpoint: '/deviceswap/check',
    httpMethod: 'post',
    summary: 'Check last device swap date',
    description: 'Check if device swap has been performed during a past period',
    stainlessPath: '(resource) deviceswap > (method) check',
    qualified: 'client.deviceswap.check',
    params: ['maxAge?: number;', 'phoneNumber?: string;', 'x-correlator?: string;'],
    response: '{ swapped: boolean; }',
    markdown:
      "## check\n\n`client.deviceswap.check(maxAge?: number, phoneNumber?: string, x-correlator?: string): { swapped: boolean; }`\n\n**post** `/deviceswap/check`\n\nCheck if device swap has been performed during a past period\n\n### Parameters\n\n- `maxAge?: number`\n  Period in hours to be checked for device swap.\n\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ swapped: boolean; }`\n\n  - `swapped: boolean`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.deviceswap.check();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'deviceswap check',
        example: "camara deviceswap check \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Deviceswap.Check',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Deviceswap.Check(context.TODO(), camara.DeviceswapCheckParams{\n\t\tMaxAge: camara.Int(120),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Swapped)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/deviceswap/check \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "maxAge": 120,\n          "phoneNumber": "+34666111333"\n        }\'',
      },
      php: {
        method: 'deviceswap->check',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->deviceswap->check(\n  maxAge: 120,\n  phoneNumber: '+34666111333',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.deviceswap.check',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.deviceswap.check({ maxAge: 120 });\n\nconsole.log(response.swapped);",
      },
    },
  },
  {
    name: 'verify',
    endpoint: '/knowyourcustomerageverification/verify',
    httpMethod: 'post',
    summary: 'Verify Age Threshold',
    description:
      "Verify that the age of the subscriber associated with a phone number is equal to or greater than the specified age threshold value.\n\nAs it is possible that the person holding the contract and the end-user of the subscription may not be the same, the endpoint also admits a list of optional properties to be included in the request to improve the identification. The response may optionally include the `identityMatchScore` property with a value that indicates how certain it is that the information returned relates to the person that the API Client is requesting. To increase the reliability of the information returned, the API Provider may include in the response the `verifiedStatus` property, indicating whether the identity information in its possession has been verified against an identification document legally accepted as an age verification document (Note). Note: Depending on the country, credit-check or other mechanism can be used instead of official identification for Age Verification. For details, please contact API Provider.\n\nIf the API Client indicates request properties `includeContentLock` or `includeParentalControl` with value `true` and the API Provider implements this functionality, then the response will also include `contentLock` and `parentalControl` properties to indicate if the subscription has any kind of content filtering enabled. On the other hand, if the request properties are not included or the API Client specifies value `false`, then the response properties will not be returned. If the API Provider doesn't implement this functionality, request properties will be ignored and response properties won't be returned in any case.\n",
    stainlessPath: '(resource) knowyourcustomerageverification > (method) verify',
    qualified: 'client.knowyourcustomerageverification.verify',
    params: [
      'ageThreshold: number;',
      'birthdate?: string;',
      'email?: string;',
      'familyName?: string;',
      'familyNameAtBirth?: string;',
      'givenName?: string;',
      'idDocument?: string;',
      'includeContentLock?: boolean;',
      'includeParentalControl?: boolean;',
      'middleNames?: string;',
      'name?: string;',
      'phoneNumber?: string;',
      'x-correlator?: string;',
    ],
    response:
      "{ ageCheck: 'true' | 'false' | 'not_available'; contentLock?: 'true' | 'false' | 'not_available'; identityMatchScore?: number; parentalControl?: 'true' | 'false' | 'not_available'; verifiedStatus?: boolean; }",
    markdown:
      "## verify\n\n`client.knowyourcustomerageverification.verify(ageThreshold: number, birthdate?: string, email?: string, familyName?: string, familyNameAtBirth?: string, givenName?: string, idDocument?: string, includeContentLock?: boolean, includeParentalControl?: boolean, middleNames?: string, name?: string, phoneNumber?: string, x-correlator?: string): { ageCheck: 'true' | 'false' | 'not_available'; contentLock?: 'true' | 'false' | 'not_available'; identityMatchScore?: number; parentalControl?: 'true' | 'false' | 'not_available'; verifiedStatus?: boolean; }`\n\n**post** `/knowyourcustomerageverification/verify`\n\nVerify that the age of the subscriber associated with a phone number is equal to or greater than the specified age threshold value.\n\nAs it is possible that the person holding the contract and the end-user of the subscription may not be the same, the endpoint also admits a list of optional properties to be included in the request to improve the identification. The response may optionally include the `identityMatchScore` property with a value that indicates how certain it is that the information returned relates to the person that the API Client is requesting. To increase the reliability of the information returned, the API Provider may include in the response the `verifiedStatus` property, indicating whether the identity information in its possession has been verified against an identification document legally accepted as an age verification document (Note). Note: Depending on the country, credit-check or other mechanism can be used instead of official identification for Age Verification. For details, please contact API Provider.\n\nIf the API Client indicates request properties `includeContentLock` or `includeParentalControl` with value `true` and the API Provider implements this functionality, then the response will also include `contentLock` and `parentalControl` properties to indicate if the subscription has any kind of content filtering enabled. On the other hand, if the request properties are not included or the API Client specifies value `false`, then the response properties will not be returned. If the API Provider doesn't implement this functionality, request properties will be ignored and response properties won't be returned in any case.\n\n\n### Parameters\n\n- `ageThreshold: number`\n  The age to be verified. The indicated range is a global definition of maximum and minimum values allowed to be requested. It is important to note that this range might be more restrictive in some implementations due to local regulations of a country i.e. A country does not allow to request for an age under 18. This limitation must be informed during the onboarding process.\n\n- `birthdate?: string`\n  The birthdate of the customer, in RFC 3339 / ISO 8601 calendar date format (YYYY-MM-DD).\n\n- `email?: string`\n  Email address of the customer in the RFC specified format (local-part@domain).\n\n- `familyName?: string`\n  Last name, family name, or surname of the customer.\n\n- `familyNameAtBirth?: string`\n  Last/family/sur- name at birth of the customer.\n\n- `givenName?: string`\n  First/given name or compound first/given name of the customer.\n\n- `idDocument?: string`\n  Id number associated to the official identity document in the country. It may contain alphanumeric characters.\n\n- `includeContentLock?: boolean`\n  If this parameter is included in the request with value `true`, the response property `contentLock` will be returned. If it is not included or its value is `false`, the response property will not be returned.\n\n- `includeParentalControl?: boolean`\n  If this parameter is included in the request with value `true`, the response property `parentalControl` will be returned. If it is not included or its value is `false`, the response property will not be returned.\n\n- `middleNames?: string`\n  Middle name/s of the customer.\n\n- `name?: string`\n  Complete name of the customer, usually composed of first/given name and last/family/sur- name in a country.  Depending on the country, the order of first/give name and last/family/sur- name varies, and middle name could be included.  It can use givenName, middleNames, familyName and/or familyNameAtBirth. For example, in ESP, name+familyName; in NLD, it can be name+middleNames+familyName or name+middleNames+familyNameAtBirth, etc.\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ ageCheck: 'true' | 'false' | 'not_available'; contentLock?: 'true' | 'false' | 'not_available'; identityMatchScore?: number; parentalControl?: 'true' | 'false' | 'not_available'; verifiedStatus?: boolean; }`\n  Response to an age verification request\n\n  - `ageCheck: 'true' | 'false' | 'not_available'`\n  - `contentLock?: 'true' | 'false' | 'not_available'`\n  - `identityMatchScore?: number`\n  - `parentalControl?: 'true' | 'false' | 'not_available'`\n  - `verifiedStatus?: boolean`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.knowyourcustomerageverification.verify({ ageThreshold: 18 });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'knowyourcustomerageverification verify',
        example:
          "camara knowyourcustomerageverification verify \\\n  --bearer-token 'My Bearer Token' \\\n  --age-threshold 18",
      },
      go: {
        method: 'client.Knowyourcustomerageverification.Verify',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Knowyourcustomerageverification.Verify(context.TODO(), camara.KnowyourcustomerageverificationVerifyParams{\n\t\tAgeThreshold:           18,\n\t\tBirthdate:              camara.Time(time.Now()),\n\t\tEmail:                  camara.String("federicaSanchez.Arjona@example.com"),\n\t\tFamilyName:             camara.String("Sanchez Arjona"),\n\t\tFamilyNameAtBirth:      camara.String("YYYY"),\n\t\tGivenName:              camara.String("Federica"),\n\t\tIDDocument:             camara.String("66666666q"),\n\t\tIncludeContentLock:     camara.Bool(true),\n\t\tIncludeParentalControl: camara.Bool(true),\n\t\tMiddleNames:            camara.String("Sanchez"),\n\t\tName:                   camara.String("Federica Sanchez Arjona"),\n\t\tPhoneNumber:            camara.String("+34629255833"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.IdentityMatchScore)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/knowyourcustomerageverification/verify \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "ageThreshold": 18,\n          "phoneNumber": "+34629255833"\n        }\'',
      },
      php: {
        method: 'knowyourcustomerageverification->verify',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->knowyourcustomerageverification->verify(\n  ageThreshold: 18,\n  birthdate: '1978-08-22',\n  email: 'federicaSanchez.Arjona@example.com',\n  familyName: 'Sanchez Arjona',\n  familyNameAtBirth: 'YYYY',\n  givenName: 'Federica',\n  idDocument: '66666666q',\n  includeContentLock: true,\n  includeParentalControl: true,\n  middleNames: 'Sanchez',\n  name: 'Federica Sanchez Arjona',\n  phoneNumber: '+34629255833',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.knowyourcustomerageverification.verify',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.knowyourcustomerageverification.verify({\n  ageThreshold: 18,\n  birthdate: '1978-08-22',\n  email: 'federicaSanchez.Arjona@example.com',\n  familyName: 'Sanchez Arjona',\n  familyNameAtBirth: 'YYYY',\n  givenName: 'Federica',\n  idDocument: '66666666q',\n  includeContentLock: true,\n  includeParentalControl: true,\n  middleNames: 'Sanchez',\n  name: 'Federica Sanchez Arjona',\n  phoneNumber: '+34629255833',\n});\n\nconsole.log(response.identityMatchScore);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/knowyourcustomerfill-in/fill-in',
    httpMethod: 'post',
    summary:
      "Providing information related to a customer identity stored the account data bound to the customer's phone number.",
    description:
      "Providing information related to a customer identity stored the account data bound to the customer's phone number.",
    stainlessPath: '(resource) knowyourcustomerfill_in > (method) create',
    qualified: 'client.knowyourcustomerfillIn.create',
    params: ['phoneNumber?: string;', 'x-correlator?: string;'],
    response:
      "{ address?: string; birthdate?: string; cityOfBirth?: string; country?: string; countryOfBirth?: string; email?: string; familyName?: string; familyNameAtBirth?: string; gender?: 'MALE' | 'FEMALE' | 'OTHER'; givenName?: string; houseNumberExtension?: string; idDocument?: string; idDocumentExpiryDate?: string; idDocumentType?: string; locality?: string; middleNames?: string; name?: string; nameKanaHankaku?: string; nameKanaZenkaku?: string; nationality?: string; phoneNumber?: string; postalCode?: string; region?: string; streetName?: string; streetNumber?: string; }",
    markdown:
      "## create\n\n`client.knowyourcustomerfillIn.create(phoneNumber?: string, x-correlator?: string): { address?: string; birthdate?: string; cityOfBirth?: string; country?: string; countryOfBirth?: string; email?: string; familyName?: string; familyNameAtBirth?: string; gender?: 'MALE' | 'FEMALE' | 'OTHER'; givenName?: string; houseNumberExtension?: string; idDocument?: string; idDocumentExpiryDate?: string; idDocumentType?: string; locality?: string; middleNames?: string; name?: string; nameKanaHankaku?: string; nameKanaZenkaku?: string; nationality?: string; phoneNumber?: string; postalCode?: string; region?: string; streetName?: string; streetNumber?: string; }`\n\n**post** `/knowyourcustomerfill-in/fill-in`\n\nProviding information related to a customer identity stored the account data bound to the customer's phone number.\n\n### Parameters\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ address?: string; birthdate?: string; cityOfBirth?: string; country?: string; countryOfBirth?: string; email?: string; familyName?: string; familyNameAtBirth?: string; gender?: 'MALE' | 'FEMALE' | 'OTHER'; givenName?: string; houseNumberExtension?: string; idDocument?: string; idDocumentExpiryDate?: string; idDocumentType?: string; locality?: string; middleNames?: string; name?: string; nameKanaHankaku?: string; nameKanaZenkaku?: string; nationality?: string; phoneNumber?: string; postalCode?: string; region?: string; streetName?: string; streetNumber?: string; }`\n\n  - `address?: string`\n  - `birthdate?: string`\n  - `cityOfBirth?: string`\n  - `country?: string`\n  - `countryOfBirth?: string`\n  - `email?: string`\n  - `familyName?: string`\n  - `familyNameAtBirth?: string`\n  - `gender?: 'MALE' | 'FEMALE' | 'OTHER'`\n  - `givenName?: string`\n  - `houseNumberExtension?: string`\n  - `idDocument?: string`\n  - `idDocumentExpiryDate?: string`\n  - `idDocumentType?: string`\n  - `locality?: string`\n  - `middleNames?: string`\n  - `name?: string`\n  - `nameKanaHankaku?: string`\n  - `nameKanaZenkaku?: string`\n  - `nationality?: string`\n  - `phoneNumber?: string`\n  - `postalCode?: string`\n  - `region?: string`\n  - `streetName?: string`\n  - `streetNumber?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst knowyourcustomerfillIn = await client.knowyourcustomerfillIn.create();\n\nconsole.log(knowyourcustomerfillIn);\n```",
    perLanguage: {
      cli: {
        method: 'knowyourcustomerfill_in create',
        example: "camara knowyourcustomerfill-in create \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.KnowyourcustomerfillIn.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tknowyourcustomerfillIn, err := client.KnowyourcustomerfillIn.New(context.TODO(), camara.KnowyourcustomerfillInNewParams{\n\t\tPhoneNumber: camara.String("+34629255833"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", knowyourcustomerfillIn.IDDocument)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/knowyourcustomerfill-in/fill-in \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "phoneNumber": "+34629255833"\n        }\'',
      },
      php: {
        method: 'knowyourcustomerfillIn->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$knowyourcustomerfillIn = $client->knowyourcustomerfillIn->create(\n  phoneNumber: '+34629255833',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($knowyourcustomerfillIn);",
      },
      typescript: {
        method: 'client.knowyourcustomerfillIn.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst knowyourcustomerfillIn = await client.knowyourcustomerfillIn.create({\n  phoneNumber: '+34629255833',\n});\n\nconsole.log(knowyourcustomerfillIn.idDocument);",
      },
    },
  },
  {
    name: 'match',
    endpoint: '/knowyourcustomermatch/match',
    httpMethod: 'post',
    summary:
      'Matching a customer identity by checking a set of attributes related against the account data bound to their phone number.',
    description:
      'Verify matching of a number of attributes related to a customer identity against the verified data bound to their phone number in the Operator systems. Regardless of whether the `phoneNumber` is explicitly stated in the request body, at least one of the other fields must be provided, otherwise a `HTTP 400 - KNOW_YOUR_CUSTOMER.INVALID_PARAM_COMBINATION` error will be returned.\n\nThe API will return the result of the matching process for each requested attribute. This means that the response will **only** contain the attributes for which validation has been requested. Possible values are:\n  - **true**: the attribute provided matches with the one in the Operator systems, which is equal to a `match_score` of 100.\n  - **false**: the attribute provided does not match with the one in the Operator systems.\n  - **not_available**: the attribute is not available to validate.',
    stainlessPath: '(resource) knowyourcustomermatch > (method) match',
    qualified: 'client.knowyourcustomermatch.match',
    params: [
      'address?: string;',
      'birthdate?: string;',
      'cityOfBirth?: string;',
      'country?: string;',
      'countryOfBirth?: string;',
      'email?: string;',
      'familyName?: string;',
      'familyNameAtBirth?: string;',
      "gender?: 'MALE' | 'FEMALE' | 'OTHER';",
      'givenName?: string;',
      'houseNumberExtension?: string;',
      'idDocument?: string;',
      'idDocumentExpiryDate?: string;',
      'idDocumentType?: string;',
      'locality?: string;',
      'middleNames?: string;',
      'name?: string;',
      'nameKanaHankaku?: string;',
      'nameKanaZenkaku?: string;',
      'nationality?: string;',
      'phoneNumber?: string;',
      'postalCode?: string;',
      'region?: string;',
      'streetName?: string;',
      'streetNumber?: string;',
      'x-correlator?: string;',
    ],
    response: 'object',
    markdown:
      "## match\n\n`client.knowyourcustomermatch.match(address?: string, birthdate?: string, cityOfBirth?: string, country?: string, countryOfBirth?: string, email?: string, familyName?: string, familyNameAtBirth?: string, gender?: 'MALE' | 'FEMALE' | 'OTHER', givenName?: string, houseNumberExtension?: string, idDocument?: string, idDocumentExpiryDate?: string, idDocumentType?: string, locality?: string, middleNames?: string, name?: string, nameKanaHankaku?: string, nameKanaZenkaku?: string, nationality?: string, phoneNumber?: string, postalCode?: string, region?: string, streetName?: string, streetNumber?: string, x-correlator?: string): { addressMatch?: match_result; addressMatchScore?: number; birthdateMatch?: match_result; cityOfBirthMatch?: match_result; cityOfBirthMatchScore?: number; countryMatch?: match_result; countryOfBirthMatch?: match_result; emailMatch?: match_result; emailMatchScore?: number; familyNameAtBirthMatch?: match_result; familyNameAtBirthMatchScore?: number; familyNameMatch?: match_result; familyNameMatchScore?: number; genderMatch?: match_result; givenNameMatch?: match_result; givenNameMatchScore?: number; houseNumberExtensionMatch?: match_result; idDocumentExpiryDateMatch?: match_result; idDocumentMatch?: match_result; idDocumentTypeMatch?: match_result; localityMatch?: match_result; localityMatchScore?: number; middleNamesMatch?: match_result; middleNamesMatchScore?: number; nameKanaHankakuMatch?: match_result; nameKanaHankakuMatchScore?: number; nameKanaZenkakuMatch?: match_result; nameKanaZenkakuMatchScore?: number; nameMatch?: match_result; nameMatchScore?: number; nationalityMatch?: match_result; postalCodeMatch?: match_result; regionMatch?: match_result; regionMatchScore?: number; streetNameMatch?: match_result; streetNameMatchScore?: number; streetNumberMatch?: match_result; streetNumberMatchScore?: number; }`\n\n**post** `/knowyourcustomermatch/match`\n\nVerify matching of a number of attributes related to a customer identity against the verified data bound to their phone number in the Operator systems. Regardless of whether the `phoneNumber` is explicitly stated in the request body, at least one of the other fields must be provided, otherwise a `HTTP 400 - KNOW_YOUR_CUSTOMER.INVALID_PARAM_COMBINATION` error will be returned.\n\nThe API will return the result of the matching process for each requested attribute. This means that the response will **only** contain the attributes for which validation has been requested. Possible values are:\n  - **true**: the attribute provided matches with the one in the Operator systems, which is equal to a `match_score` of 100.\n  - **false**: the attribute provided does not match with the one in the Operator systems.\n  - **not_available**: the attribute is not available to validate.\n\n### Parameters\n\n- `address?: string`\n  Complete address of the customer.  For some countries, it is built following the usual concatenation of parameters in a country, but for other countries, this is not the case.  For some countries, it can use streetName, streetNumber and/or houseNumberExtension. For example, in ESP, streetName+streetNumber; in NLD, it can be streetName+streetNumber or streetName+streetNumber+houseNumberExtension.\n\n- `birthdate?: string`\n  The birthdate of the customer, in RFC 3339 / ISO 8601 calendar date format (YYYY-MM-DD).\n\n- `cityOfBirth?: string`\n  City where the customer was born.\n\n- `country?: string`\n  Country of the customer's address. Format ISO 3166-1 alpha-2\n\n- `countryOfBirth?: string`\n  Country where the customer was born. Format ISO 3166-1 alpha-2.\n\n- `email?: string`\n  Email address of the customer in the RFC specified format (local-part@domain).\n\n- `familyName?: string`\n  Last name, family name, or surname of the customer.\n\n- `familyNameAtBirth?: string`\n  Last/family/sur- name at birth of the customer.\n\n- `gender?: 'MALE' | 'FEMALE' | 'OTHER'`\n  Gender of the customer (Male/Female/Other).\n\n- `givenName?: string`\n  First/given name or compound first/given name of the customer.\n\n- `houseNumberExtension?: string`\n  Specific identifier of the house needed depending on the property type. For example, number of apartment in an apartment building.\n\n- `idDocument?: string`\n  Id number associated to the official identity document in the country. It may contain alphanumeric characters.\n\n- `idDocumentExpiryDate?: string`\n  Expiration date of the identity document (ISO 8601).\n\n- `idDocumentType?: string`\n  Type of the official identity document provided.\n\n- `locality?: string`\n  Locality of the customer's address\n\n- `middleNames?: string`\n  Middle name/s of the customer.\n\n- `name?: string`\n  Complete name of the customer, usually composed of first/given name and last/family/sur- name in a country.  Depending on the country, the order of first/give name and last/family/sur- name varies, and middle name could be included.  It can use givenName, middleNames, familyName and/or familyNameAtBirth. For example, in ESP, name+familyName; in NLD, it can be name+middleNames+familyName or name+middleNames+familyNameAtBirth, etc.\n\n- `nameKanaHankaku?: string`\n  Complete name of the customer in Hankaku-Kana format (reading of name) for Japan.\n\n- `nameKanaZenkaku?: string`\n  Complete name of the customer in Zenkaku-Kana format (reading of name) for Japan.\n\n- `nationality?: string`\n  ISO 3166-1 alpha-2 code of the customer’s nationality. In the case a customer has more than one nationality, it is supposed to be the nationality related to the ID document provided in the match request.\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `postalCode?: string`\n  Zip code or postal code\n\n- `region?: string`\n  Region/prefecture of the customer's address\n\n- `streetName?: string`\n  Name of the street of the customer's address. It should not include the type of the street.\n\n- `streetNumber?: string`\n  The street number of the customer's address.  Number identifying a specific property on the 'streetName'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ addressMatch?: 'true' | 'false' | 'not_available'; addressMatchScore?: number; birthdateMatch?: 'true' | 'false' | 'not_available'; cityOfBirthMatch?: 'true' | 'false' | 'not_available'; cityOfBirthMatchScore?: number; countryMatch?: 'true' | 'false' | 'not_available'; countryOfBirthMatch?: 'true' | 'false' | 'not_available'; emailMatch?: 'true' | 'false' | 'not_available'; emailMatchScore?: number; familyNameAtBirthMatch?: 'true' | 'false' | 'not_available'; familyNameAtBirthMatchScore?: number; familyNameMatch?: 'true' | 'false' | 'not_available'; familyNameMatchScore?: number; genderMatch?: 'true' | 'false' | 'not_available'; givenNameMatch?: 'true' | 'false' | 'not_available'; givenNameMatchScore?: number; houseNumberExtensionMatch?: 'true' | 'false' | 'not_available'; idDocumentExpiryDateMatch?: 'true' | 'false' | 'not_available'; idDocumentMatch?: 'true' | 'false' | 'not_available'; idDocumentTypeMatch?: 'true' | 'false' | 'not_available'; localityMatch?: 'true' | 'false' | 'not_available'; localityMatchScore?: number; middleNamesMatch?: 'true' | 'false' | 'not_available'; middleNamesMatchScore?: number; nameKanaHankakuMatch?: 'true' | 'false' | 'not_available'; nameKanaHankakuMatchScore?: number; nameKanaZenkakuMatch?: 'true' | 'false' | 'not_available'; nameKanaZenkakuMatchScore?: number; nameMatch?: 'true' | 'false' | 'not_available'; nameMatchScore?: number; nationalityMatch?: 'true' | 'false' | 'not_available'; postalCodeMatch?: 'true' | 'false' | 'not_available'; regionMatch?: 'true' | 'false' | 'not_available'; regionMatchScore?: number; streetNameMatch?: 'true' | 'false' | 'not_available'; streetNameMatchScore?: number; streetNumberMatch?: 'true' | 'false' | 'not_available'; streetNumberMatchScore?: number; }`\n\n  - `addressMatch?: 'true' | 'false' | 'not_available'`\n  - `addressMatchScore?: number`\n  - `birthdateMatch?: 'true' | 'false' | 'not_available'`\n  - `cityOfBirthMatch?: 'true' | 'false' | 'not_available'`\n  - `cityOfBirthMatchScore?: number`\n  - `countryMatch?: 'true' | 'false' | 'not_available'`\n  - `countryOfBirthMatch?: 'true' | 'false' | 'not_available'`\n  - `emailMatch?: 'true' | 'false' | 'not_available'`\n  - `emailMatchScore?: number`\n  - `familyNameAtBirthMatch?: 'true' | 'false' | 'not_available'`\n  - `familyNameAtBirthMatchScore?: number`\n  - `familyNameMatch?: 'true' | 'false' | 'not_available'`\n  - `familyNameMatchScore?: number`\n  - `genderMatch?: 'true' | 'false' | 'not_available'`\n  - `givenNameMatch?: 'true' | 'false' | 'not_available'`\n  - `givenNameMatchScore?: number`\n  - `houseNumberExtensionMatch?: 'true' | 'false' | 'not_available'`\n  - `idDocumentExpiryDateMatch?: 'true' | 'false' | 'not_available'`\n  - `idDocumentMatch?: 'true' | 'false' | 'not_available'`\n  - `idDocumentTypeMatch?: 'true' | 'false' | 'not_available'`\n  - `localityMatch?: 'true' | 'false' | 'not_available'`\n  - `localityMatchScore?: number`\n  - `middleNamesMatch?: 'true' | 'false' | 'not_available'`\n  - `middleNamesMatchScore?: number`\n  - `nameKanaHankakuMatch?: 'true' | 'false' | 'not_available'`\n  - `nameKanaHankakuMatchScore?: number`\n  - `nameKanaZenkakuMatch?: 'true' | 'false' | 'not_available'`\n  - `nameKanaZenkakuMatchScore?: number`\n  - `nameMatch?: 'true' | 'false' | 'not_available'`\n  - `nameMatchScore?: number`\n  - `nationalityMatch?: 'true' | 'false' | 'not_available'`\n  - `postalCodeMatch?: 'true' | 'false' | 'not_available'`\n  - `regionMatch?: 'true' | 'false' | 'not_available'`\n  - `regionMatchScore?: number`\n  - `streetNameMatch?: 'true' | 'false' | 'not_available'`\n  - `streetNameMatchScore?: number`\n  - `streetNumberMatch?: 'true' | 'false' | 'not_available'`\n  - `streetNumberMatchScore?: number`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.knowyourcustomermatch.match();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'knowyourcustomermatch match',
        example: "camara knowyourcustomermatch match \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Knowyourcustomermatch.Match',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Knowyourcustomermatch.Match(context.TODO(), camara.KnowyourcustomermatchMatchParams{\n\t\tAddress:              camara.String("Tokyo-to Chiyoda-ku Iidabashi 3-10-10"),\n\t\tBirthdate:            camara.Time(time.Now()),\n\t\tCityOfBirth:          camara.String("Madrid"),\n\t\tCountry:              camara.String("JP"),\n\t\tCountryOfBirth:       camara.String("ES"),\n\t\tEmail:                camara.String("abc@example.com"),\n\t\tFamilyName:           camara.String("Sanchez Arjona"),\n\t\tFamilyNameAtBirth:    camara.String("YYYY"),\n\t\tGender:               camara.KnowyourcustomermatchMatchParamsGenderOther,\n\t\tGivenName:            camara.String("Federica"),\n\t\tHouseNumberExtension: camara.String("VVVV"),\n\t\tIDDocument:           camara.String("66666666q"),\n\t\tIDDocumentExpiryDate: camara.Time(time.Now()),\n\t\tIDDocumentType:       camara.KnowyourcustomermatchMatchParamsIDDocumentTypePassport,\n\t\tLocality:             camara.String("ZZZZ"),\n\t\tMiddleNames:          camara.String("Sanchez"),\n\t\tName:                 camara.String("Federica Sanchez Arjona"),\n\t\tNameKanaHankaku:      camara.String("federica"),\n\t\tNameKanaZenkaku:      camara.String("Ｆｅｄｅｒｉｃａ"),\n\t\tNationality:          camara.String("ES"),\n\t\tPhoneNumber:          camara.String("+34629255833"),\n\t\tPostalCode:           camara.String("1028460"),\n\t\tRegion:               camara.String("Tokyo"),\n\t\tStreetName:           camara.String("Nicolas Salmeron"),\n\t\tStreetNumber:         camara.String("4"),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.IDDocumentExpiryDateMatch)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/knowyourcustomermatch/match \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "phoneNumber": "+34629255833"\n        }\'',
      },
      php: {
        method: 'knowyourcustomermatch->match',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->knowyourcustomermatch->match(\n  address: 'Tokyo-to Chiyoda-ku Iidabashi 3-10-10',\n  birthdate: '1978-08-22',\n  cityOfBirth: 'Madrid',\n  country: 'JP',\n  countryOfBirth: 'ES',\n  email: 'abc@example.com',\n  familyName: 'Sanchez Arjona',\n  familyNameAtBirth: 'YYYY',\n  gender: 'OTHER',\n  givenName: 'Federica',\n  houseNumberExtension: 'VVVV',\n  idDocument: '66666666q',\n  idDocumentExpiryDate: '2027-07-12',\n  idDocumentType: 'passport',\n  locality: 'ZZZZ',\n  middleNames: 'Sanchez',\n  name: 'Federica Sanchez Arjona',\n  nameKanaHankaku: 'federica',\n  nameKanaZenkaku: 'Ｆｅｄｅｒｉｃａ',\n  nationality: 'ES',\n  phoneNumber: '+34629255833',\n  postalCode: '1028460',\n  region: 'Tokyo',\n  streetName: 'Nicolas Salmeron',\n  streetNumber: '4',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.knowyourcustomermatch.match',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.knowyourcustomermatch.match({\n  address: 'Tokyo-to Chiyoda-ku Iidabashi 3-10-10',\n  birthdate: '1978-08-22',\n  cityOfBirth: 'Madrid',\n  country: 'JP',\n  countryOfBirth: 'ES',\n  email: 'abc@example.com',\n  familyName: 'Sanchez Arjona',\n  familyNameAtBirth: 'YYYY',\n  gender: 'OTHER',\n  givenName: 'Federica',\n  houseNumberExtension: 'VVVV',\n  idDocument: '66666666q',\n  idDocumentExpiryDate: '2027-07-12',\n  idDocumentType: 'passport',\n  locality: 'ZZZZ',\n  middleNames: 'Sanchez',\n  name: 'Federica Sanchez Arjona',\n  nameKanaHankaku: 'federica',\n  nameKanaZenkaku: 'Ｆｅｄｅｒｉｃａ',\n  nationality: 'ES',\n  phoneNumber: '+34629255833',\n  postalCode: '1028460',\n  region: 'Tokyo',\n  streetName: 'Nicolas Salmeron',\n  streetNumber: '4',\n});\n\nconsole.log(response.idDocumentExpiryDateMatch);",
      },
    },
  },
  {
    name: 'verify',
    endpoint: '/tenure/check-tenure',
    httpMethod: 'post',
    summary: 'The KYC Tenure service API',
    description:
      'Verifies a specified length of tenure, based on a provided date, for a network subscriber to establish a level of trust for the network subscription identifier.\n',
    stainlessPath: '(resource) tenure > (method) verify',
    qualified: 'client.tenure.verify',
    params: ['tenureDate: string;', 'phoneNumber?: string;', 'x-correlator?: string;'],
    response: "{ tenureDateCheck: boolean; contractType?: 'PAYG' | 'PAYM' | 'Business'; }",
    markdown:
      "## verify\n\n`client.tenure.verify(tenureDate: string, phoneNumber?: string, x-correlator?: string): { tenureDateCheck: boolean; contractType?: 'PAYG' | 'PAYM' | 'Business'; }`\n\n**post** `/tenure/check-tenure`\n\nVerifies a specified length of tenure, based on a provided date, for a network subscriber to establish a level of trust for the network subscription identifier.\n\n\n### Parameters\n\n- `tenureDate: string`\n  The date, in RFC 3339 / ISO 8601 compliant format \"YYYY-MM-DD\", from which continuous tenure of the identified network subscriber is required to be confirmed\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ tenureDateCheck: boolean; contractType?: 'PAYG' | 'PAYM' | 'Business'; }`\n\n  - `tenureDateCheck: boolean`\n  - `contractType?: 'PAYG' | 'PAYM' | 'Business'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.tenure.verify({ tenureDate: '2023-07-03' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'tenure verify',
        example:
          "camara tenure verify \\\n  --bearer-token 'My Bearer Token' \\\n  --tenure-date \"'2023-07-03'\"",
      },
      go: {
        method: 'client.Tenure.Verify',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Tenure.Verify(context.TODO(), camara.TenureVerifyParams{\n\t\tTenureDate: time.Now(),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.TenureDateCheck)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/tenure/check-tenure \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "tenureDate": "2023-07-03",\n          "phoneNumber": "+123456789"\n        }\'',
      },
      php: {
        method: 'tenure->verify',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->tenure->verify(\n  tenureDate: '2023-07-03',\n  phoneNumber: '+123456789',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.tenure.verify',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.tenure.verify({ tenureDate: '2023-07-03' });\n\nconsole.log(response.tenureDateCheck);",
      },
    },
  },
  {
    name: 'check_subscriber_change',
    endpoint: '/numberrecycling/check',
    httpMethod: 'post',
    summary: 'Check whether the subscriber of the phone number has changed.',
    description: 'Check whether the subscriber of the phone number has changed.',
    stainlessPath: '(resource) numberrecycling > (method) check_subscriber_change',
    qualified: 'client.numberrecycling.checkSubscriberChange',
    params: ['specifiedDate: string;', 'phoneNumber?: string;', 'x-correlator?: string;'],
    response: '{ phoneNumberRecycled: boolean; }',
    markdown:
      "## check_subscriber_change\n\n`client.numberrecycling.checkSubscriberChange(specifiedDate: string, phoneNumber?: string, x-correlator?: string): { phoneNumberRecycled: boolean; }`\n\n**post** `/numberrecycling/check`\n\nCheck whether the subscriber of the phone number has changed.\n\n### Parameters\n\n- `specifiedDate: string`\n  Specified date to check whether there has been a change in the subscriber associated with the specific phone number, in RFC 3339 calendar date format (YYYY-MM-DD).\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ phoneNumberRecycled: boolean; }`\n\n  - `phoneNumberRecycled: boolean`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.numberrecycling.checkSubscriberChange({ specifiedDate: '2024-10-31' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'numberrecycling check_subscriber_change',
        example:
          "camara numberrecycling check-subscriber-change \\\n  --bearer-token 'My Bearer Token' \\\n  --specified-date \"'2024-10-31'\"",
      },
      go: {
        method: 'client.Numberrecycling.CheckSubscriberChange',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Numberrecycling.CheckSubscriberChange(context.TODO(), camara.NumberrecyclingCheckSubscriberChangeParams{\n\t\tSpecifiedDate: time.Now(),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.PhoneNumberRecycled)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/numberrecycling/check \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "specifiedDate": "2024-10-31",\n          "phoneNumber": "+123456789"\n        }\'',
      },
      php: {
        method: 'numberrecycling->checkSubscriberChange',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->numberrecycling->checkSubscriberChange(\n  specifiedDate: '2024-10-31',\n  phoneNumber: '+123456789',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.numberrecycling.checkSubscriberChange',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.numberrecycling.checkSubscriberChange({\n  specifiedDate: '2024-10-31',\n});\n\nconsole.log(response.phoneNumberRecycled);",
      },
    },
  },
  {
    name: 'send_code',
    endpoint: '/otpvalidation/send-code',
    httpMethod: 'post',
    summary: 'Sends a message including an OTP code to the given phone number',
    description: 'Sends an SMS with the desired message and an OTP code to the received phone number.',
    stainlessPath: '(resource) otpvalidation > (method) send_code',
    qualified: 'client.otpvalidation.sendCode',
    params: ['message: string;', 'phoneNumber: string;', 'x-correlator?: string;'],
    response: '{ authenticationId: string; }',
    markdown:
      "## send_code\n\n`client.otpvalidation.sendCode(message: string, phoneNumber: string, x-correlator?: string): { authenticationId: string; }`\n\n**post** `/otpvalidation/send-code`\n\nSends an SMS with the desired message and an OTP code to the received phone number.\n\n### Parameters\n\n- `message: string`\n  Message template used to compose the content of the SMS sent to the phone number. It must include the following label indicating where to include the short code `{{code}}`\n\n- `phoneNumber: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ authenticationId: string; }`\n  Structure to provide authentication identifier\n\n  - `authenticationId: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.otpvalidation.sendCode({ message: '{{code}} is your short code to authenticate with Cool App via SMS', phoneNumber: '+346661113334' });\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'otpvalidation send_code',
        example:
          "camara otpvalidation send-code \\\n  --bearer-token 'My Bearer Token' \\\n  --message '{{code}} is your short code to authenticate with Cool App via SMS' \\\n  --phone-number +346661113334",
      },
      go: {
        method: 'client.Otpvalidation.SendCode',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Otpvalidation.SendCode(context.TODO(), camara.OtpvalidationSendCodeParams{\n\t\tMessage:     "{{code}} is your short code to authenticate with Cool App via SMS",\n\t\tPhoneNumber: "+346661113334",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.AuthenticationID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/otpvalidation/send-code \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "message": "{{code}} is your short code to authenticate with Cool App via SMS",\n          "phoneNumber": "+346661113334"\n        }\'',
      },
      php: {
        method: 'otpvalidation->sendCode',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->otpvalidation->sendCode(\n  message: '{{code}} is your short code to authenticate with Cool App via SMS',\n  phoneNumber: '+346661113334',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.otpvalidation.sendCode',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.otpvalidation.sendCode({\n  message: '{{code}} is your short code to authenticate with Cool App via SMS',\n  phoneNumber: '+346661113334',\n});\n\nconsole.log(response.authenticationId);",
      },
    },
  },
  {
    name: 'validate_code',
    endpoint: '/otpvalidation/validate-code',
    httpMethod: 'post',
    summary: 'Verifies the OTP received as input',
    description: 'Verifies the code is valid for the received authenticationId',
    stainlessPath: '(resource) otpvalidation > (method) validate_code',
    qualified: 'client.otpvalidation.validateCode',
    params: ['authenticationId: string;', 'code: string;', 'x-correlator?: string;'],
    markdown:
      "## validate_code\n\n`client.otpvalidation.validateCode(authenticationId: string, code: string, x-correlator?: string): void`\n\n**post** `/otpvalidation/validate-code`\n\nVerifies the code is valid for the received authenticationId\n\n### Parameters\n\n- `authenticationId: string`\n  unique id of the verification attempt the code belongs to.\n\n- `code: string`\n  temporal, short code to be validated\n\n- `x-correlator?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nawait client.otpvalidation.validateCode({ authenticationId: 'ea0840f3-3663-4149-bd10-c7c6b8912105', code: 'AJY3' })\n```",
    perLanguage: {
      cli: {
        method: 'otpvalidation validate_code',
        example:
          "camara otpvalidation validate-code \\\n  --bearer-token 'My Bearer Token' \\\n  --authentication-id ea0840f3-3663-4149-bd10-c7c6b8912105 \\\n  --code AJY3",
      },
      go: {
        method: 'client.Otpvalidation.ValidateCode',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\terr := client.Otpvalidation.ValidateCode(context.TODO(), camara.OtpvalidationValidateCodeParams{\n\t\tAuthenticationID: "ea0840f3-3663-4149-bd10-c7c6b8912105",\n\t\tCode:             "AJY3",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/otpvalidation/validate-code \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "authenticationId": "ea0840f3-3663-4149-bd10-c7c6b8912105",\n          "code": "AJY3"\n        }\'',
      },
      php: {
        method: 'otpvalidation->validateCode',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$result = $client->otpvalidation->validateCode(\n  authenticationID: 'ea0840f3-3663-4149-bd10-c7c6b8912105',\n  code: 'AJY3',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.otpvalidation.validateCode',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nawait client.otpvalidation.validateCode({\n  authenticationId: 'ea0840f3-3663-4149-bd10-c7c6b8912105',\n  code: 'AJY3',\n});",
      },
    },
  },
  {
    name: 'check_unconditional_forwarding',
    endpoint: '/callforwardingsignal/unconditional-call-forwardings',
    httpMethod: 'post',
    summary:
      'Retrieve the information about the status of the unconditional call forwarding service on a phone number (PhoneNumber)',
    description:
      'This endpoint provides information about the status of the unconditional call forwarding, being active or not.',
    stainlessPath: '(resource) callforwardingsignal > (method) check_unconditional_forwarding',
    qualified: 'client.callforwardingsignal.checkUnconditionalForwarding',
    params: ['phoneNumber?: string;', 'x-correlator?: string;'],
    response: '{ active?: boolean; }',
    markdown:
      "## check_unconditional_forwarding\n\n`client.callforwardingsignal.checkUnconditionalForwarding(phoneNumber?: string, x-correlator?: string): { active?: boolean; }`\n\n**post** `/callforwardingsignal/unconditional-call-forwardings`\n\nThis endpoint provides information about the status of the unconditional call forwarding, being active or not.\n\n### Parameters\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ active?: boolean; }`\n  resource containing the information about the Unconditional Call Forwarding Service for the given phone number (PhoneNumber)\n\n  - `active?: boolean`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.callforwardingsignal.checkUnconditionalForwarding();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'callforwardingsignal check_unconditional_forwarding',
        example:
          "camara callforwardingsignal check-unconditional-forwarding \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Callforwardingsignal.CheckUnconditionalForwarding',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Callforwardingsignal.CheckUnconditionalForwarding(context.TODO(), camara.CallforwardingsignalCheckUnconditionalForwardingParams{\n\t\tCreateCallForwardingSignal: camara.CreateCallForwardingSignalParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Active)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/callforwardingsignal/unconditional-call-forwardings \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "phoneNumber": "+123456789"\n        }\'',
      },
      php: {
        method: 'callforwardingsignal->checkUnconditionalForwarding',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->callforwardingsignal->checkUnconditionalForwarding(\n  phoneNumber: '+123456789', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.callforwardingsignal.checkUnconditionalForwarding',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.callforwardingsignal.checkUnconditionalForwarding();\n\nconsole.log(response.active);",
      },
    },
  },
  {
    name: 'check_active_forwardings',
    endpoint: '/callforwardingsignal/call-forwardings',
    httpMethod: 'post',
    summary:
      'Retrieve the information about the type of call forwarding service active on a phone number (PhoneNumber)',
    description:
      'This endpoint provides information about which type of call forwarding service is active. More than one service can be active, e.g. conditional and unconditional. This endpoint exceeds the main scope of the Call Forwarding Signal API, for this reason an error code 501 can be returned.',
    stainlessPath: '(resource) callforwardingsignal > (method) check_active_forwardings',
    qualified: 'client.callforwardingsignal.checkActiveForwardings',
    params: ['phoneNumber?: string;', 'x-correlator?: string;'],
    response: 'string[]',
    markdown:
      "## check_active_forwardings\n\n`client.callforwardingsignal.checkActiveForwardings(phoneNumber?: string, x-correlator?: string): string[]`\n\n**post** `/callforwardingsignal/call-forwardings`\n\nThis endpoint provides information about which type of call forwarding service is active. More than one service can be active, e.g. conditional and unconditional. This endpoint exceeds the main scope of the Call Forwarding Signal API, for this reason an error code 501 can be returned.\n\n### Parameters\n\n- `phoneNumber?: string`\n  A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `string[]`\n  resource containing the list of the Call Forwarding Services active for the given phone number (PhoneNumber). The possible states are, 'inactive' (no call forwarding service activated), 'unconditional' (call forwarded independently from the device status), 'conditional_busy' (call forwarded if the device is on an active call), 'conditional_not_reachable' (call forwarded if the device is not reachable), 'conditional_no_answer' (call forwarded if the device doesn't answer the incoming call).\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.callforwardingsignal.checkActiveForwardings();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'callforwardingsignal check_active_forwardings',
        example:
          "camara callforwardingsignal check-active-forwardings \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Callforwardingsignal.CheckActiveForwardings',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Callforwardingsignal.CheckActiveForwardings(context.TODO(), camara.CallforwardingsignalCheckActiveForwardingsParams{\n\t\tCreateCallForwardingSignal: camara.CreateCallForwardingSignalParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/callforwardingsignal/call-forwardings \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "phoneNumber": "+123456789"\n        }\'',
      },
      php: {
        method: 'callforwardingsignal->checkActiveForwardings',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->callforwardingsignal->checkActiveForwardings(\n  phoneNumber: '+123456789', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.callforwardingsignal.checkActiveForwardings',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.callforwardingsignal.checkActiveForwardings();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/devicelocation/subscriptions',
    httpMethod: 'post',
    summary: 'Create a geofencing subscription for a device',
    description:
      'Create a subscription for a device to receive notifications when the device enters or exits a specified area.',
    stainlessPath: '(resource) devicelocation.subscriptions > (method) create',
    qualified: 'client.devicelocation.subscriptions.create',
    params: [
      'config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; };',
      "protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';",
      'sink: string;',
      'types: string[];',
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'x-correlator?: string;',
    ],
    response:
      "{ id: string; config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: string[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## create\n\n`client.devicelocation.subscriptions.create(config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }, protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA', sink: string, types: string[], sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, x-correlator?: string): { id: string; config: device_location_config; protocol: device_location_protocol; sink: string; startsAt: string; types: device_location_subscription_event_type[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**post** `/devicelocation/subscriptions`\n\nCreate a subscription for a device to receive notifications when the device enters or exits a specified area.\n\n### Parameters\n\n- `config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  Implementation-specific configuration parameters are needed by the subscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`.\n\n\n- `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  Identifier of a delivery protocol. Only HTTP is allowed for now.\n\n- `sink: string`\n  The address to which events shall be delivered using the selected protocol.\n\n- `types: string[]`\n  Camara Event types which are eligible to be delivered by this subscription.\nNote: As of now we enforce to have only event type per subscription.\n\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: string[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `startsAt: string`\n  - `types: string[]`\n  - `expiresAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceLocationSubscription = await client.devicelocation.subscriptions.create({\n  config: { subscriptionDetail: { area: { areaType: 'CIRCLE' } } },\n  protocol: 'HTTP',\n  sink: 'https://notificationSendServer12.supertelco.com',\n  types: ['org.camaraproject.geofencing-subscriptions.v0.area-entered'],\n});\n\nconsole.log(deviceLocationSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions create',
        example:
          "camara devicelocation:subscriptions create \\\n  --bearer-token 'My Bearer Token' \\\n  --config '{subscriptionDetail: {area: {areaType: CIRCLE}}}' \\\n  --protocol HTTP \\\n  --sink https://notificationSendServer12.supertelco.com \\\n  --type org.camaraproject.geofencing-subscriptions.v0.area-entered",
      },
      go: {
        method: 'client.Devicelocation.Subscriptions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceLocationSubscription, err := client.Devicelocation.Subscriptions.New(context.TODO(), camara.DevicelocationSubscriptionNewParams{\n\t\tConfig: camara.DevicelocationSubscriptionNewParamsConfig{\n\t\t\tDeviceLocationConfigParam: camara.DeviceLocationConfigParam{\n\t\t\t\tInitialEvent:           camara.Bool(true),\n\t\t\t\tSubscriptionMaxEvents:  camara.Int(10),\n\t\t\t\tSubscriptionExpireTime: camara.Time(time.Now()),\n\t\t\t},\n\t\t\tSubscriptionDetail: camara.DevicelocationSubscriptionNewParamsConfigSubscriptionDetail{\n\t\t\t\tDevice: camara.DeviceLocationDeviceParam{\n\t\t\t\t\tPhoneNumber: camara.String("+12345678912"),\n\t\t\t\t},\n\t\t\t\tArea: camara.DeviceLocationAreaParam{\n\t\t\t\t\tAreaType: camara.DeviceLocationAreaAreaTypeCircle,\n\t\t\t\t},\n\t\t\t},\n\t\t},\n\t\tProtocol: camara.DeviceLocationProtocolHTTP,\n\t\tSink:     "https://notificationSendServer12.supertelco.com",\n\t\tTypes:    []camara.DeviceLocationSubscriptionEventType{camara.DeviceLocationSubscriptionEventTypeOrgCamaraprojectGeofencingSubscriptionsV0AreaEntered},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceLocationSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicelocation/subscriptions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "config": {\n            "initialEvent": true,\n            "subscriptionExpireTime": "2024-03-22T05:40:58.469Z",\n            "subscriptionMaxEvents": 10,\n            "subscriptionDetail": {\n              "area": {\n                "areaType": "CIRCLE"\n              },\n              "device": {\n                "phoneNumber": "+12345678912"\n              }\n            }\n          },\n          "protocol": "HTTP",\n          "sink": "https://notificationSendServer12.supertelco.com",\n          "types": [\n            "org.camaraproject.geofencing-subscriptions.v0.area-entered"\n          ]\n        }\'',
      },
      php: {
        method: 'devicelocation->subscriptions->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceLocationSubscription = $client->devicelocation->subscriptions->create(\n  config: [\n    'initialEvent' => true,\n    'subscriptionExpireTime' => new \\DateTimeImmutable(\n      '2024-03-22T05:40:58.469Z'\n    ),\n    'subscriptionMaxEvents' => 10,\n    'subscriptionDetail' => [\n      'area' => ['areaType' => 'CIRCLE'],\n      'device' => [\n        'ipv4Address' => [\n          'privateAddress' => '84.125.93.10',\n          'publicAddress' => '84.125.93.10',\n          'publicPort' => 59765,\n        ],\n        'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n        'networkAccessIdentifier' => '123456789@domain.com',\n        'phoneNumber' => '+12345678912',\n      ],\n    ],\n  ],\n  protocol: DeviceLocationProtocol::HTTP,\n  sink: 'https://notificationSendServer12.supertelco.com',\n  types: [\n    DeviceLocationSubscriptionEventType::ORG_CAMARAPROJECT_GEOFENCING_SUBSCRIPTIONS_V0_AREA_ENTERED,\n  ],\n  sinkCredential: ['credentialType' => 'PLAIN'],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($deviceLocationSubscription);",
      },
      typescript: {
        method: 'client.devicelocation.subscriptions.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceLocationSubscription = await client.devicelocation.subscriptions.create({\n  config: {\n    subscriptionDetail: {\n      device: { phoneNumber: '+12345678912' },\n      area: { areaType: 'CIRCLE' },\n    },\n    initialEvent: true,\n    subscriptionMaxEvents: 10,\n    subscriptionExpireTime: '2024-03-22T05:40:58.469Z',\n  },\n  protocol: 'HTTP',\n  sink: 'https://notificationSendServer12.supertelco.com',\n  types: ['org.camaraproject.geofencing-subscriptions.v0.area-entered'],\n});\n\nconsole.log(deviceLocationSubscription.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devicelocation/subscriptions',
    httpMethod: 'get',
    summary: 'Retrieve a list of geofencing event subscription',
    description: 'Retrieve a list of geofencing event subscription(s).',
    stainlessPath: '(resource) devicelocation.subscriptions > (method) list',
    qualified: 'client.devicelocation.subscriptions.list',
    params: ['x-correlator?: string;'],
    response:
      "{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: string[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]",
    markdown:
      "## list\n\n`client.devicelocation.subscriptions.list(x-correlator?: string): object[]`\n\n**get** `/devicelocation/subscriptions`\n\nRetrieve a list of geofencing event subscription(s).\n\n### Parameters\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: string[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceLocationSubscriptions = await client.devicelocation.subscriptions.list();\n\nconsole.log(deviceLocationSubscriptions);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions list',
        example: "camara devicelocation:subscriptions list \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Devicelocation.Subscriptions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceLocationSubscriptions, err := client.Devicelocation.Subscriptions.List(context.TODO(), camara.DevicelocationSubscriptionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceLocationSubscriptions)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicelocation/subscriptions \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'devicelocation->subscriptions->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceLocationSubscriptions = $client->devicelocation->subscriptions->list(\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($deviceLocationSubscriptions);",
      },
      typescript: {
        method: 'client.devicelocation.subscriptions.list',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceLocationSubscriptions = await client.devicelocation.subscriptions.list();\n\nconsole.log(deviceLocationSubscriptions);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/devicelocation/subscriptions/{subscriptionId}',
    httpMethod: 'get',
    summary: 'Operation to retrieve a subscription based on the provided ID',
    description: 'Retrieve Geofencing subscription information for a given subscription ID.',
    stainlessPath: '(resource) devicelocation.subscriptions > (method) retrieve',
    qualified: 'client.devicelocation.subscriptions.retrieve',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response:
      "{ id: string; config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: string[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## retrieve\n\n`client.devicelocation.subscriptions.retrieve(subscriptionId: string, x-correlator?: string): { id: string; config: device_location_config; protocol: device_location_protocol; sink: string; startsAt: string; types: device_location_subscription_event_type[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**get** `/devicelocation/subscriptions/{subscriptionId}`\n\nRetrieve Geofencing subscription information for a given subscription ID.\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: string[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `startsAt: string`\n  - `types: string[]`\n  - `expiresAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceLocationSubscription = await client.devicelocation.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(deviceLocationSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions retrieve',
        example:
          "camara devicelocation:subscriptions retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Devicelocation.Subscriptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceLocationSubscription, err := client.Devicelocation.Subscriptions.Get(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.DevicelocationSubscriptionGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceLocationSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicelocation/subscriptions/$SUBSCRIPTION_ID \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'devicelocation->subscriptions->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceLocationSubscription = $client->devicelocation->subscriptions->retrieve(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($deviceLocationSubscription);",
      },
      typescript: {
        method: 'client.devicelocation.subscriptions.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceLocationSubscription = await client.devicelocation.subscriptions.retrieve(\n  'qs15-h556-rt89-1298',\n);\n\nconsole.log(deviceLocationSubscription.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/devicelocation/subscriptions/{subscriptionId}',
    httpMethod: 'delete',
    summary: 'Delete a Geofencing event subscription',
    description: 'Delete a given Geofencing subscription.',
    stainlessPath: '(resource) devicelocation.subscriptions > (method) delete',
    qualified: 'client.devicelocation.subscriptions.delete',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response: '{ id: string; }',
    markdown:
      "## delete\n\n`client.devicelocation.subscriptions.delete(subscriptionId: string, x-correlator?: string): { id: string; }`\n\n**delete** `/devicelocation/subscriptions/{subscriptionId}`\n\nDelete a given Geofencing subscription.\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; }`\n  Response for an event-type subscription request managed asynchronously (Creation or Deletion).\n\n  - `id: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.devicelocation.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions delete',
        example:
          "camara devicelocation:subscriptions delete \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Devicelocation.Subscriptions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Devicelocation.Subscriptions.Delete(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.DevicelocationSubscriptionDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicelocation/subscriptions/$SUBSCRIPTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'devicelocation->subscriptions->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->devicelocation->subscriptions->delete(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.devicelocation.subscriptions.delete',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.devicelocation.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/populationdensitydata/retrieve',
    httpMethod: 'post',
    summary: 'Retrieves population density information in a specified area',
    description:
      'Retrieves population density estimation together with the estimation range related for a time slot for a given area (described as a polygon) as a data set consisting of a sequence of equally-sized objects covering the input polygon area.',
    stainlessPath: '(resource) populationdensitydata > (method) retrieve',
    qualified: 'client.populationdensitydata.retrieve',
    params: [
      "area: { areaType: 'POLYGON'; };",
      'endTime: string;',
      'startTime: string;',
      'precision?: number;',
      'sink?: string;',
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'x-correlator?: string;',
    ],
    response:
      "{ status: 'SUPPORTED_AREA' | 'PART_OF_AREA_NOT_SUPPORTED' | 'AREA_NOT_SUPPORTED' | 'OPERATION_NOT_COMPLETED'; timedPopulationDensityData: { cellPopulationDensityData: { dataType: 'NO_DATA' | 'LOW_DENSITY' | 'DENSITY_ESTIMATION'; geohash: string; }[]; endTime: string; startTime: string; }[]; statusInfo?: string; }",
    markdown:
      "## retrieve\n\n`client.populationdensitydata.retrieve(area: { areaType: 'POLYGON'; }, endTime: string, startTime: string, precision?: number, sink?: string, sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, x-correlator?: string): { status: 'SUPPORTED_AREA' | 'PART_OF_AREA_NOT_SUPPORTED' | 'AREA_NOT_SUPPORTED' | 'OPERATION_NOT_COMPLETED'; timedPopulationDensityData: object[]; statusInfo?: string; }`\n\n**post** `/populationdensitydata/retrieve`\n\nRetrieves population density estimation together with the estimation range related for a time slot for a given area (described as a polygon) as a data set consisting of a sequence of equally-sized objects covering the input polygon area.\n\n### Parameters\n\n- `area: { areaType: 'POLYGON'; }`\n  Base schema for all areas\n  - `areaType: 'POLYGON'`\n    Type of this area.\nPOLYGON - The area is defined as a polygon.\n\n- `endTime: string`\n  End date time. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ (i.e. which allows 2023-07-03T14:27:08.312+02:00 or 2023-07-03T12:27:08.312Z) The maximum endTime allowed is 3 months from the time of the request.\n\n- `startTime: string`\n  Start date time. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone. Recommended format is yyyy-MM-dd'T'HH:mm:ss.SSSZ\n\n- `precision?: number`\n  Precision required of response cells. Precision defines a geohash level and corresponds to the length of the geohash for each cell. More information at [Geohash system](https://en.wikipedia.org/wiki/Geohash)\" If not included the default precision level 7 is used by default. In case of using a not supported level by the MNO, the API returns the error response `POPULATION_DENSITY_DATA.UNSUPPORTED_PRECISION`.\n\n- `sink?: string`\n  The address where the API response will be asynchronously delivered, using the HTTP protocol.\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ status: 'SUPPORTED_AREA' | 'PART_OF_AREA_NOT_SUPPORTED' | 'AREA_NOT_SUPPORTED' | 'OPERATION_NOT_COMPLETED'; timedPopulationDensityData: { cellPopulationDensityData: { dataType: 'NO_DATA' | 'LOW_DENSITY' | 'DENSITY_ESTIMATION'; geohash: string; }[]; endTime: string; startTime: string; }[]; statusInfo?: string; }`\n  Population density values is represented in time intervals for different cells of the requested area. Each element in `timedPopulationDensityData` array corresponds to a time interval, containing population density data for the grid cells. The intervals are 1 hour long.\n\n  - `status: 'SUPPORTED_AREA' | 'PART_OF_AREA_NOT_SUPPORTED' | 'AREA_NOT_SUPPORTED' | 'OPERATION_NOT_COMPLETED'`\n  - `timedPopulationDensityData: { cellPopulationDensityData: { dataType: 'NO_DATA' | 'LOW_DENSITY' | 'DENSITY_ESTIMATION'; geohash: string; }[]; endTime: string; startTime: string; }[]`\n  - `statusInfo?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst populationdensitydata = await client.populationdensitydata.retrieve({\n  area: { areaType: 'POLYGON' },\n  endTime: '2024-04-23T14:44:18.165Z',\n  startTime: '2024-04-23T14:44:18.165Z',\n});\n\nconsole.log(populationdensitydata);\n```",
    perLanguage: {
      cli: {
        method: 'populationdensitydata retrieve',
        example:
          "camara populationdensitydata retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --area '{areaType: POLYGON}' \\\n  --end-time \"'2024-04-23T14:44:18.165Z'\" \\\n  --start-time \"'2024-04-23T14:44:18.165Z'\"",
      },
      go: {
        method: 'client.Populationdensitydata.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tpopulationdensitydata, err := client.Populationdensitydata.Get(context.TODO(), camara.PopulationdensitydataGetParams{\n\t\tArea: camara.PopulationdensitydataGetParamsArea{\n\t\t\tAreaType: "POLYGON",\n\t\t},\n\t\tEndTime:   time.Now(),\n\t\tStartTime: time.Now(),\n\t\tPrecision: camara.Int(7),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", populationdensitydata.Status)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/populationdensitydata/retrieve \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "area": {\n            "areaType": "POLYGON"\n          },\n          "endTime": "2024-04-23T14:44:18.165Z",\n          "startTime": "2024-04-23T14:44:18.165Z",\n          "sink": "https://endpoint.example.com/sink"\n        }\'',
      },
      php: {
        method: 'populationdensitydata->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$populationdensitydata = $client->populationdensitydata->retrieve(\n  area: ['areaType' => 'POLYGON'],\n  endTime: new \\DateTimeImmutable('2024-04-23T14:44:18.165Z'),\n  startTime: new \\DateTimeImmutable('2024-04-23T14:44:18.165Z'),\n  precision: 7,\n  sink: 'https://endpoint.example.com/sink',\n  sinkCredential: ['credentialType' => 'PLAIN'],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($populationdensitydata);",
      },
      typescript: {
        method: 'client.populationdensitydata.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst populationdensitydata = await client.populationdensitydata.retrieve({\n  area: { areaType: 'POLYGON' },\n  endTime: '2024-04-23T14:44:18.165Z',\n  startTime: '2024-04-23T14:44:18.165Z',\n  precision: 7,\n});\n\nconsole.log(populationdensitydata.status);",
      },
    },
  },
  {
    name: 'get_count',
    endpoint: '/regiondevicecount/count',
    httpMethod: 'post',
    summary: 'API operation to get the device count in the specified area during a certain time interval.',
    description:
      'Get the number of devices in the specified area during a certain time interval.\n- The query area can be a circle or a polygon composed of longitude and latitude points.\n- If the areaType is circle, the circleCenter and circleRadius must be provided; if the area is a polygon, the point list must be provided.\n- If starttime and endtime are not passed in,this api should return the current number of devices in the area.\n- If the device appears in the specified area at least once during the certain time interval, it should be counted.\n',
    stainlessPath: '(resource) regiondevicecount > (method) get_count',
    qualified: 'client.regiondevicecount.getCount',
    params: [
      "area?: { areaType: 'CIRCLE' | 'POLYGON'; };",
      'endtime?: string;',
      "filter?: { deviceType?: 'human device' | 'IoT device' | 'other'[]; roamingStatus?: 'roaming' | 'non-roaming'[]; };",
      'sink?: string;',
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'starttime?: string;',
      'x-correlator?: string;',
    ],
    response: '{ count?: number; status?: string; }',
    markdown:
      "## get_count\n\n`client.regiondevicecount.getCount(area?: { areaType: 'CIRCLE' | 'POLYGON'; }, endtime?: string, filter?: { deviceType?: 'human device' | 'IoT device' | 'other'[]; roamingStatus?: 'roaming' | 'non-roaming'[]; }, sink?: string, sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, starttime?: string, x-correlator?: string): { count?: number; status?: string; }`\n\n**post** `/regiondevicecount/count`\n\nGet the number of devices in the specified area during a certain time interval.\n- The query area can be a circle or a polygon composed of longitude and latitude points.\n- If the areaType is circle, the circleCenter and circleRadius must be provided; if the area is a polygon, the point list must be provided.\n- If starttime and endtime are not passed in,this api should return the current number of devices in the area.\n- If the device appears in the specified area at least once during the certain time interval, it should be counted.\n\n\n### Parameters\n\n- `area?: { areaType: 'CIRCLE' | 'POLYGON'; }`\n  - `areaType: 'CIRCLE' | 'POLYGON'`\n    Type of this area.\nCIRCLE - The area is defined as a circle.\nPOLYGON - The area is defined as a polygon.\n\n- `endtime?: string`\n  Ending timestamp for counting the number of devices in the area. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\n\n- `filter?: { deviceType?: 'human device' | 'IoT device' | 'other'[]; roamingStatus?: 'roaming' | 'non-roaming'[]; }`\n  This parameter is used to filter devices. Currently, two filtering criteria are defined, `roamingStatus` and `deviceType`, which can be expanded in the future. `IN` logic is used used for multiple filtering items within a single filtering criterion, `AND` logic is used between multiple filtering criteria.\n- If a filtering critera is not provided, it means that there is no need to filter this item.\n- At least one of the criteria must be provided,a filter without any criteria is not allowed.\n- If no filtering is required, this parameter does not need to be provided.\nFor example ,`\"filter\":{\"roamingStatus\": [\"roaming\"],\"deviceType\": [\"human device\",\"IoT device\"]}` means the API need to return the count of human network devices and IoT devices that are in roaming mode.`\"filter\":{\"roamingStatus\": [\"non-roaming\"]}` means that the API need to return the count of all devices that are not in roaming mode.\n\n  - `deviceType?: 'human device' | 'IoT device' | 'other'[]`\n    Filtering by device type, 'human device' represents the need to filter for human network devices, 'IoT device' represents the need to filter for IoT devices, and 'other' represents the need to filter for other types of devices.\n  - `roamingStatus?: 'roaming' | 'non-roaming'[]`\n    Filter whether the device is in roaming mode,'roaming' represents the need to filter devices that are in roaming mode,'non-roaming' represents the need to filter devices that are not roaming.\n\n- `sink?: string`\n  The URL where the API response will be asynchronously delivered, using the HTTP protocol.\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now\n\n- `starttime?: string`\n  Starting timestamp for counting the number of devices in the area. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ count?: number; status?: string; }`\n  RegionDeviceCount result\n\n  - `count?: number`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.regiondevicecount.getCount();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'regiondevicecount get_count',
        example: "camara regiondevicecount get-count \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Regiondevicecount.GetCount',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Regiondevicecount.GetCount(context.TODO(), camara.RegiondevicecountGetCountParams{\n\t\tArea: camara.RegiondevicecountGetCountParamsArea{\n\t\t\tAreaType: "CIRCLE",\n\t\t},\n\t\tEndtime: camara.Time(time.Now()),\n\t\tFilter: camara.RegiondevicecountGetCountParamsFilter{\n\t\t\tRoamingStatus: []string{"roaming"},\n\t\t\tDeviceType:    []string{"human device", "IoT device"},\n\t\t},\n\t\tSink: camara.String("https://endpoint.example.com/sink"),\n\t\tSinkCredential: camara.RegiondevicecountGetCountParamsSinkCredential{\n\t\t\tCredentialType: "ACCESSTOKEN",\n\t\t},\n\t\tStarttime: camara.Time(time.Now()),\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Count)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/regiondevicecount/count \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "endtime": "2023-07-04T14:27:08.312+02:00",\n          "sink": "https://endpoint.example.com/sink",\n          "starttime": "2023-07-03T14:27:08.312+02:00"\n        }\'',
      },
      php: {
        method: 'regiondevicecount->getCount',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->regiondevicecount->getCount(\n  area: ['areaType' => 'CIRCLE'],\n  endtime: new \\DateTimeImmutable('2023-07-04T14:27:08.312+02:00'),\n  filter: [\n    'deviceType' => ['human device', 'IoT device'],\n    'roamingStatus' => ['roaming'],\n  ],\n  sink: 'https://endpoint.example.com/sink',\n  sinkCredential: ['credentialType' => 'ACCESSTOKEN'],\n  starttime: new \\DateTimeImmutable('2023-07-03T14:27:08.312+02:00'),\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.regiondevicecount.getCount',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.regiondevicecount.getCount({\n  area: { areaType: 'CIRCLE' },\n  endtime: '2023-07-04T14:27:08.312+02:00',\n  filter: { roamingStatus: ['roaming'], deviceType: ['human device', 'IoT device'] },\n  sink: 'https://endpoint.example.com/sink',\n  sinkCredential: { credentialType: 'ACCESSTOKEN' },\n  starttime: '2023-07-03T14:27:08.312+02:00',\n});\n\nconsole.log(response.count);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/webrtc/sessions',
    httpMethod: 'post',
    summary: 'Creates voice and/or video session',
    description: 'Creates a voice and/or video session',
    stainlessPath: '(resource) webrtc.sessions > (method) create',
    qualified: 'client.webrtc.sessions.create',
    params: [
      'registrationId: string;',
      'answer?: { sdp?: string; };',
      "callType?: 'REGULAR' | 'EMERGENCY';",
      "locationDetails?: { confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }; coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; };",
      'mediaSessionId?: string;',
      'offer?: { sdp?: string; };',
      'originatorAddress?: string;',
      'originatorName?: string;',
      'receiverAddress?: string;',
      'receiverName?: string;',
      'status?: string;',
      'x-correlator?: string;',
    ],
    response:
      "{ answer?: { sdp?: string; }; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }; mediaSessionId?: string; offer?: { sdp?: string; }; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }",
    markdown:
      "## create\n\n`client.webrtc.sessions.create(registrationId: string, answer?: { sdp?: string; }, callType?: 'REGULAR' | 'EMERGENCY', locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }, mediaSessionId?: string, offer?: { sdp?: string; }, originatorAddress?: string, originatorName?: string, receiverAddress?: string, receiverName?: string, status?: string, x-correlator?: string): { answer?: sdp_descriptor; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: web_rtc_location_details; mediaSessionId?: string; offer?: sdp_descriptor; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }`\n\n**post** `/webrtc/sessions`\n\nCreates a voice and/or video session\n\n### Parameters\n\n- `registrationId: string`\n\n- `answer?: { sdp?: string; }`\n  **OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax\nis used, the content of this element SHALL be embedded in a CDATA\nsection.\n\n**ANSWER**: This type represents an answer in WebRTC Signaling. This element is not\npresent in case there is no answer yet, or the session invitation has\nbeen declined by the Terminating Participant.This element MUST NOT be\npresent in a request from the application to the server to create a\nsession.\n  - `sdp?: string`\n    An inlined session description in SDP format [RFC4566].If XML syntax is used, the content of this element SHALL be embedded in a CDATA section\n\n- `callType?: 'REGULAR' | 'EMERGENCY'`\n  Type of call. When set to EMERGENCY, the client MAY provide locationDetails. If omitted, treated as REGULAR.\n\n- `locationDetails?: { confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }; coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }`\n  Details about the caller's location and related information. This object adheres to 3GPP TS 24.229, RFC 4119, RFC 5139, and RFC 5491 for PIDF-LO compatibility.\n  - `confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }`\n    The confidence level of the location information.\n  - `coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }`\n    The coordinates of the caller's location, specific to the chosen shape.\n  - `method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'`\n    The method used to obtain the location information.\n* **GPS:** Global Positioning System (highly accurate)\n* **DBH:** Device-Based Hybrid\n* **DBH_HELO:** Device-Based Hybrid using Apple Hybridized Emergency Location\n* **Other:** Other methods (e.g., landmarks, IP Based etc.)\n  - `shape?: 'Circle' | 'Ellipsoid'`\n    The shape representing the caller's location (Circle or Ellipsoid).\n  - `timestamp?: string`\n    The timestamp (in ISO 8601 format) indicating when the location information was Calculated. \\nThis is crucial for emergency services to assess the timeliness of the data. if not provided current timestamp will be used by default\"\n\n- `mediaSessionId?: string`\n  The media session ID created by the network. The mediaSessionId shall not be included in POST requests by the client, but must be included in the notifications from the network to the client device.\n\n- `offer?: { sdp?: string; }`\n  **OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax\nis used, the content of this element SHALL be embedded in a CDATA\nsection.\n\n**ANSWER**: This type represents an answer in WebRTC Signaling. This element is not\npresent in case there is no answer yet, or the session invitation has\nbeen declined by the Terminating Participant.This element MUST NOT be\npresent in a request from the application to the server to create a\nsession.\n  - `sdp?: string`\n    An inlined session description in SDP format [RFC4566].If XML syntax is used, the content of this element SHALL be embedded in a CDATA section\n\n- `originatorAddress?: string`\n  Subscriber address (Sender or Receiver)\n\n- `originatorName?: string`\n  Friendly name of the call originator\n\n- `receiverAddress?: string`\n  Subscriber address (Sender or Receiver)\n\n- `receiverName?: string`\n  Friendly name of the call terminator\n\n- `status?: string`\n  Provides the status of the media session. During the session creation, this attribute SHALL NOT be included in the request.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ answer?: { sdp?: string; }; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }; mediaSessionId?: string; offer?: { sdp?: string; }; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }`\n\n  - `answer?: { sdp?: string; }`\n  - `callType?: 'REGULAR' | 'EMERGENCY'`\n  - `locationDetails?: { confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }; coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }`\n  - `mediaSessionId?: string`\n  - `offer?: { sdp?: string; }`\n  - `originatorAddress?: string`\n  - `originatorName?: string`\n  - `receiverAddress?: string`\n  - `receiverName?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst mediaSessionInformation = await client.webrtc.sessions.create({ registrationId: 'registrationId' });\n\nconsole.log(mediaSessionInformation);\n```",
    perLanguage: {
      cli: {
        method: 'sessions create',
        example:
          "camara webrtc:sessions create \\\n  --bearer-token 'My Bearer Token' \\\n  --registration-id registrationId",
      },
      go: {
        method: 'client.Webrtc.Sessions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tmediaSessionInformation, err := client.Webrtc.Sessions.New(context.TODO(), camara.WebrtcSessionNewParams{\n\t\tRegistrationID: "registrationId",\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", mediaSessionInformation.Answer)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/webrtc/sessions \\\n    -X POST \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'webrtc->sessions->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$mediaSessionInformation = $client->webrtc->sessions->create(\n  registrationID: 'registrationId',\n  answer: ['sdp' => 'sdp'],\n  callType: 'REGULAR',\n  locationDetails: [\n    'confidence' => ['pdf' => 'normal', 'value' => 0],\n    'coordinates' => ['latitude' => 0, 'longitude' => 0, 'radius' => 0],\n    'method' => 'GPS',\n    'shape' => 'Circle',\n    'timestamp' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  ],\n  bodyMediaSessionID: '0AEE1B58BAEEDA3EABA42B32EBB3DFE07E9CFF402EAF9EED8EF',\n  offer: [\n    'sdp' => \"v=0\\r\\no=- 8066321617929821805 2 IN IP4 127.0.0.1\\r\\ns=-\\r\\nt=0 0\\r\\nm=audio 42988 RTP/SAVPF 102 113\\r\\nc=IN IP6 2001:e0:410:2448:7a05:9b11:66f2:c9e\\r\\nb=AS:64\\r\\na=rtcp:9 IN IP4 0.0.0.0\\r\\na=candidate:1645903805 1 udp 2122262783 2001:e0:410:2448:7a05:9b11:66f2:c9e 42988 typ host generation 0 network-id 3 network-cost 900\\r\\na=ice-ufrag:4eKp\\r\\na=ice-pwd:D4sF5Pv9vx9ggaqxBlHbAFMx\\r\\na=ice-options:trickle renomination\\r\\na=mid:audio\\r\\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\\r\\na=sendrecv\\r\\na=rtcp-mux\\r\\na=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:Xm3YciqVIWFNSwy19e9MvfZ2YOdAZil7oT/tHjdf\\r\\na=rtpmap:102 AMR-WB/16000\\r\\na=fmtp:102 octet-align=0; mode-set=0,1,2; mode-change-capability=2\\r\\na=rtpmap:113 telephone-event/16000\\r\\n\",\n  ],\n  originatorAddress: 'tel:+17085852753',\n  originatorName: 'tel:+17085852753',\n  receiverAddress: 'tel:+17085854000',\n  receiverName: 'tel:+17085854000',\n  status: 'Ringing',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($mediaSessionInformation);",
      },
      typescript: {
        method: 'client.webrtc.sessions.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst mediaSessionInformation = await client.webrtc.sessions.create({\n  registrationId: 'registrationId',\n  offer: {\n    sdp: 'v=0\\r\\no=- 8066321617929821805 2 IN IP4 127.0.0.1\\r\\ns=-\\r\\nt=0 0\\r\\nm=audio 42988 RTP/SAVPF 102 113\\r\\nc=IN IP6 2001:e0:410:2448:7a05:9b11:66f2:c9e\\r\\nb=AS:64\\r\\na=rtcp:9 IN IP4 0.0.0.0\\r\\na=candidate:1645903805 1 udp 2122262783 2001:e0:410:2448:7a05:9b11:66f2:c9e 42988 typ host generation 0 network-id 3 network-cost 900\\r\\na=ice-ufrag:4eKp\\r\\na=ice-pwd:D4sF5Pv9vx9ggaqxBlHbAFMx\\r\\na=ice-options:trickle renomination\\r\\na=mid:audio\\r\\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\\r\\na=sendrecv\\r\\na=rtcp-mux\\r\\na=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:Xm3YciqVIWFNSwy19e9MvfZ2YOdAZil7oT/tHjdf\\r\\na=rtpmap:102 AMR-WB/16000\\r\\na=fmtp:102 octet-align=0; mode-set=0,1,2; mode-change-capability=2\\r\\na=rtpmap:113 telephone-event/16000\\r\\n',\n  },\n  originatorAddress: 'tel:+17085852753',\n  originatorName: 'tel:+17085852753',\n  receiverAddress: 'tel:+17085854000',\n  receiverName: 'tel:+17085854000',\n});\n\nconsole.log(mediaSessionInformation.answer);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/webrtc/sessions/{mediaSessionId}',
    httpMethod: 'get',
    summary: 'Get the media session information',
    description:
      'Get the media Session description based on `mediaSessionId`.\n\n** The client shall construct the API path using the `mediaSessionId` supplied\nin the session creation response (origination) or in the invitation notification\n(termination). **\n',
    stainlessPath: '(resource) webrtc.sessions > (method) retrieve',
    qualified: 'client.webrtc.sessions.retrieve',
    params: ['mediaSessionId: string;', 'x-correlator?: string;'],
    response:
      "{ answer?: { sdp?: string; }; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }; mediaSessionId?: string; offer?: { sdp?: string; }; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }",
    markdown:
      "## retrieve\n\n`client.webrtc.sessions.retrieve(mediaSessionId: string, x-correlator?: string): { answer?: sdp_descriptor; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: web_rtc_location_details; mediaSessionId?: string; offer?: sdp_descriptor; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }`\n\n**get** `/webrtc/sessions/{mediaSessionId}`\n\nGet the media Session description based on `mediaSessionId`.\n\n** The client shall construct the API path using the `mediaSessionId` supplied\nin the session creation response (origination) or in the invitation notification\n(termination). **\n\n\n### Parameters\n\n- `mediaSessionId: string`\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ answer?: { sdp?: string; }; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }; mediaSessionId?: string; offer?: { sdp?: string; }; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }`\n\n  - `answer?: { sdp?: string; }`\n  - `callType?: 'REGULAR' | 'EMERGENCY'`\n  - `locationDetails?: { confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }; coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }`\n  - `mediaSessionId?: string`\n  - `offer?: { sdp?: string; }`\n  - `originatorAddress?: string`\n  - `originatorName?: string`\n  - `receiverAddress?: string`\n  - `receiverName?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst mediaSessionInformation = await client.webrtc.sessions.retrieve('mediaSessionId');\n\nconsole.log(mediaSessionInformation);\n```",
    perLanguage: {
      cli: {
        method: 'sessions retrieve',
        example:
          "camara webrtc:sessions retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --media-session-id mediaSessionId",
      },
      go: {
        method: 'client.Webrtc.Sessions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tmediaSessionInformation, err := client.Webrtc.Sessions.Get(\n\t\tcontext.TODO(),\n\t\t"mediaSessionId",\n\t\tcamara.WebrtcSessionGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", mediaSessionInformation.Answer)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/webrtc/sessions/$MEDIA_SESSION_ID \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'webrtc->sessions->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$mediaSessionInformation = $client->webrtc->sessions->retrieve(\n  'mediaSessionId', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($mediaSessionInformation);",
      },
      typescript: {
        method: 'client.webrtc.sessions.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst mediaSessionInformation = await client.webrtc.sessions.retrieve('mediaSessionId');\n\nconsole.log(mediaSessionInformation.answer);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/webrtc/sessions/{mediaSessionId}',
    httpMethod: 'delete',
    summary: 'Cancel or Terminate the media session',
    description:
      "Cancel a 1-1 media session (as originator),\nDecline a 1-1 media session (as receiver),\nTerminate a 1-1 an ongoing media session\n** The client shall construct the API path using the mediaSessionId supplied in the session creation response (origination) or in the invitation notification (termination). **'\n",
    stainlessPath: '(resource) webrtc.sessions > (method) delete',
    qualified: 'client.webrtc.sessions.delete',
    params: ['mediaSessionId: string;', 'x-correlator?: string;'],
    markdown:
      "## delete\n\n`client.webrtc.sessions.delete(mediaSessionId: string, x-correlator?: string): void`\n\n**delete** `/webrtc/sessions/{mediaSessionId}`\n\nCancel a 1-1 media session (as originator),\nDecline a 1-1 media session (as receiver),\nTerminate a 1-1 an ongoing media session\n** The client shall construct the API path using the mediaSessionId supplied in the session creation response (origination) or in the invitation notification (termination). **'\n\n\n### Parameters\n\n- `mediaSessionId: string`\n\n- `x-correlator?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nawait client.webrtc.sessions.delete('mediaSessionId')\n```",
    perLanguage: {
      cli: {
        method: 'sessions delete',
        example:
          "camara webrtc:sessions delete \\\n  --bearer-token 'My Bearer Token' \\\n  --media-session-id mediaSessionId",
      },
      go: {
        method: 'client.Webrtc.Sessions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\terr := client.Webrtc.Sessions.Delete(\n\t\tcontext.TODO(),\n\t\t"mediaSessionId",\n\t\tcamara.WebrtcSessionDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/webrtc/sessions/$MEDIA_SESSION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'webrtc->sessions->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$result = $client->webrtc->sessions->delete(\n  'mediaSessionId', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($result);",
      },
      typescript: {
        method: 'client.webrtc.sessions.delete',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nawait client.webrtc.sessions.delete('mediaSessionId');",
      },
    },
  },
  {
    name: 'update_status',
    endpoint: '/webrtc/sessions/{mediaSessionId}/status',
    httpMethod: 'put',
    summary: 'Update the status of the media session',
    description:
      'Update the status of the media session, this may include updating SDP media\n\nThe API consumer shall construct the API path using the `mediaSessionId` supplied in the session creation response (origination) or in the invitation notification (termination).\n',
    stainlessPath: '(resource) webrtc.sessions > (method) update_status',
    qualified: 'client.webrtc.sessions.updateStatus',
    params: [
      'mediaSessionId: string;',
      'answer?: { sdp?: string; };',
      "callType?: 'REGULAR' | 'EMERGENCY';",
      "locationDetails?: { confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }; coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; };",
      'mediaSessionId?: string;',
      'offer?: { sdp?: string; };',
      'originatorAddress?: string;',
      'originatorName?: string;',
      'receiverAddress?: string;',
      'receiverName?: string;',
      'status?: string;',
      'x-correlator?: string;',
    ],
    response:
      "{ answer?: { sdp?: string; }; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }; mediaSessionId?: string; offer?: { sdp?: string; }; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }",
    markdown:
      "## update_status\n\n`client.webrtc.sessions.updateStatus(mediaSessionId: string, answer?: { sdp?: string; }, callType?: 'REGULAR' | 'EMERGENCY', locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }, mediaSessionId?: string, offer?: { sdp?: string; }, originatorAddress?: string, originatorName?: string, receiverAddress?: string, receiverName?: string, status?: string, x-correlator?: string): { answer?: sdp_descriptor; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: web_rtc_location_details; mediaSessionId?: string; offer?: sdp_descriptor; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }`\n\n**put** `/webrtc/sessions/{mediaSessionId}/status`\n\nUpdate the status of the media session, this may include updating SDP media\n\nThe API consumer shall construct the API path using the `mediaSessionId` supplied in the session creation response (origination) or in the invitation notification (termination).\n\n\n### Parameters\n\n- `mediaSessionId: string`\n\n- `answer?: { sdp?: string; }`\n  **OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax\nis used, the content of this element SHALL be embedded in a CDATA\nsection.\n\n**ANSWER**: This type represents an answer in WebRTC Signaling. This element is not\npresent in case there is no answer yet, or the session invitation has\nbeen declined by the Terminating Participant.This element MUST NOT be\npresent in a request from the application to the server to create a\nsession.\n  - `sdp?: string`\n    An inlined session description in SDP format [RFC4566].If XML syntax is used, the content of this element SHALL be embedded in a CDATA section\n\n- `callType?: 'REGULAR' | 'EMERGENCY'`\n  Type of call. When set to EMERGENCY, the client MAY provide locationDetails. If omitted, treated as REGULAR.\n\n- `locationDetails?: { confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }; coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }`\n  Details about the caller's location and related information. This object adheres to 3GPP TS 24.229, RFC 4119, RFC 5139, and RFC 5491 for PIDF-LO compatibility.\n  - `confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }`\n    The confidence level of the location information.\n  - `coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }`\n    The coordinates of the caller's location, specific to the chosen shape.\n  - `method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'`\n    The method used to obtain the location information.\n* **GPS:** Global Positioning System (highly accurate)\n* **DBH:** Device-Based Hybrid\n* **DBH_HELO:** Device-Based Hybrid using Apple Hybridized Emergency Location\n* **Other:** Other methods (e.g., landmarks, IP Based etc.)\n  - `shape?: 'Circle' | 'Ellipsoid'`\n    The shape representing the caller's location (Circle or Ellipsoid).\n  - `timestamp?: string`\n    The timestamp (in ISO 8601 format) indicating when the location information was Calculated. \\nThis is crucial for emergency services to assess the timeliness of the data. if not provided current timestamp will be used by default\"\n\n- `mediaSessionId?: string`\n  The media session ID created by the network. The mediaSessionId shall not be included in POST requests by the client, but must be included in the notifications from the network to the client device.\n\n- `offer?: { sdp?: string; }`\n  **OFFER**: An inlined session description in SDP format [RFC4566].If XML syntax\nis used, the content of this element SHALL be embedded in a CDATA\nsection.\n\n**ANSWER**: This type represents an answer in WebRTC Signaling. This element is not\npresent in case there is no answer yet, or the session invitation has\nbeen declined by the Terminating Participant.This element MUST NOT be\npresent in a request from the application to the server to create a\nsession.\n  - `sdp?: string`\n    An inlined session description in SDP format [RFC4566].If XML syntax is used, the content of this element SHALL be embedded in a CDATA section\n\n- `originatorAddress?: string`\n  Subscriber address (Sender or Receiver)\n\n- `originatorName?: string`\n  Friendly name of the call originator\n\n- `receiverAddress?: string`\n  Subscriber address (Sender or Receiver)\n\n- `receiverName?: string`\n  Friendly name of the call terminator\n\n- `status?: string`\n  Provides the status of the media session. During the session creation, this attribute SHALL NOT be included in the request.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ answer?: { sdp?: string; }; callType?: 'REGULAR' | 'EMERGENCY'; locationDetails?: { confidence?: object; coordinates?: web_rtc_circle_coordinates | web_rtc_ellipsoid_coordinates; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }; mediaSessionId?: string; offer?: { sdp?: string; }; originatorAddress?: string; originatorName?: string; receiverAddress?: string; receiverName?: string; status?: string; }`\n\n  - `answer?: { sdp?: string; }`\n  - `callType?: 'REGULAR' | 'EMERGENCY'`\n  - `locationDetails?: { confidence?: { pdf?: 'normal' | 'uniform'; value?: number; }; coordinates?: { latitude: number; longitude: number; radius: number; } | { latitude: number; longitude: number; orientation: number; semiMajorAxis: number; semiMinorAxis: number; verticalAxis: number; zAxis: number; }; method?: 'GPS' | 'DBH' | 'DBH_HELO' | 'Other'; shape?: 'Circle' | 'Ellipsoid'; timestamp?: string; }`\n  - `mediaSessionId?: string`\n  - `offer?: { sdp?: string; }`\n  - `originatorAddress?: string`\n  - `originatorName?: string`\n  - `receiverAddress?: string`\n  - `receiverName?: string`\n  - `status?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst mediaSessionInformation = await client.webrtc.sessions.updateStatus('mediaSessionId');\n\nconsole.log(mediaSessionInformation);\n```",
    perLanguage: {
      cli: {
        method: 'sessions update_status',
        example:
          "camara webrtc:sessions update-status \\\n  --bearer-token 'My Bearer Token' \\\n  --media-session-id mediaSessionId",
      },
      go: {
        method: 'client.Webrtc.Sessions.UpdateStatus',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tmediaSessionInformation, err := client.Webrtc.Sessions.UpdateStatus(\n\t\tcontext.TODO(),\n\t\t"mediaSessionId",\n\t\tcamara.WebrtcSessionUpdateStatusParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", mediaSessionInformation.Answer)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/webrtc/sessions/$MEDIA_SESSION_ID/status \\\n    -X PUT \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'webrtc->sessions->updateStatus',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$mediaSessionInformation = $client->webrtc->sessions->updateStatus(\n  'mediaSessionId',\n  answer: ['sdp' => 'sdp'],\n  callType: 'REGULAR',\n  locationDetails: [\n    'confidence' => ['pdf' => 'normal', 'value' => 0],\n    'coordinates' => ['latitude' => 0, 'longitude' => 0, 'radius' => 0],\n    'method' => 'GPS',\n    'shape' => 'Circle',\n    'timestamp' => new \\DateTimeImmutable('2019-12-27T18:11:19.117Z'),\n  ],\n  bodyMediaSessionID: '0AEE1B58BAEEDA3EABA42B32EBB3DFE07E9CFF402EAF9EED8EF',\n  offer: ['sdp' => 'sdp'],\n  originatorAddress: 'tel:+11234567899',\n  originatorName: 'Alice',\n  receiverAddress: 'tel:+11234567899',\n  receiverName: 'Bob',\n  status: 'Ringing',\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($mediaSessionInformation);",
      },
      typescript: {
        method: 'client.webrtc.sessions.updateStatus',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst mediaSessionInformation = await client.webrtc.sessions.updateStatus('mediaSessionId');\n\nconsole.log(mediaSessionInformation.answer);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/connectivityinsights/subscriptions',
    httpMethod: 'post',
    summary: 'Create a Connectivity insights subscription for a device',
    description: 'Create a Connectivity insights subscription for a device',
    stainlessPath: '(resource) connectivityinsights.subscriptions > (method) create',
    qualified: 'client.connectivityinsights.subscriptions.create',
    params: [
      'config: { subscriptionDetail: { applicationProfileId: string; device: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; applicationServer?: { ipv4Address?: string; ipv6Address?: string; }; applicationServerPorts?: { ports?: number[]; ranges?: object[]; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; };',
      "protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';",
      'sink: string;',
      "types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[];",
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'x-correlator?: string;',
    ],
    response:
      "{ config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }",
    markdown:
      "## create\n\n`client.connectivityinsights.subscriptions.create(config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }, protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA', sink: string, types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[], sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, x-correlator?: string): { config: config; protocol: protocol; sink: string; startsAt: string; types: event_type[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }`\n\n**post** `/connectivityinsights/subscriptions`\n\nCreate a Connectivity insights subscription for a device\n\n### Parameters\n\n- `config: { subscriptionDetail: { applicationProfileId: string; device: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; applicationServer?: { ipv4Address?: string; ipv6Address?: string; }; applicationServerPorts?: { ports?: number[]; ranges?: object[]; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  Implementation-specific configuration parameters needed by the\nsubscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime`,\n`subscriptionMaxEvents`, `initialEvent`\nSpecific event type attributes must be defined in `subscriptionDetail`\nNote: if a request is performed for several event type, all subscribed\nevent will use same `config` parameters.\n\n  - `subscriptionDetail: { applicationProfileId: string; device: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; applicationServer?: { ipv4Address?: string; ipv6Address?: string; }; applicationServerPorts?: { ports?: number[]; ranges?: { from: number; to: number; }[]; }; }`\n    The detail of the requested event subscription\n  - `initialEvent?: boolean`\n    Set to `true` by API consumer if consumer wants to get an event as\nsoon as the subscription is created and current situation reflects\nevent request.\n\n  - `subscriptionExpireTime?: string`\n    The subscription expiration time (in date-time format) requested by\nthe API consumer. Up to API project decision to keep it.\nIt must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\n\n  - `subscriptionMaxEvents?: number`\n    Identifies the maximum number of event reports to be generated\n(>=1) requested by the API consumer - Once this number is reached,\nthe subscription ends.\nNote on combined usage of `initialEvent` and\n`subscriptionMaxEvents`: If an event is triggered following\n`initialEvent` set to `true`, this event will be counted towards\n`subscriptionMaxEvents`.\n\n\n- `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  Identifier of a delivery protocol. Only HTTP is allowed for now\n\n\n- `sink: string`\n  The address to which events shall be delivered using the selected\nprotocol.\n\n\n- `types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]`\n  Camara Event types eligible to be delivered by this subscription.\n\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information\n\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }`\n  Represents a event-type subscription.\n\n  - `config: { subscriptionDetail: { applicationProfileId: string; device: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; applicationServer?: { ipv4Address?: string; ipv6Address?: string; }; applicationServerPorts?: { ports?: number[]; ranges?: object[]; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `startsAt: string`\n  - `types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]`\n  - `expiresAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'`\n  - `subscriptionId?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.connectivityinsights.subscriptions.create({\n  config: { subscriptionDetail: {\n  applicationProfileId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n  device: {},\n} },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'],\n});\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions create',
        example:
          "camara connectivityinsights:subscriptions create \\\n  --bearer-token 'My Bearer Token' \\\n  --config '{subscriptionDetail: {applicationProfileId: 182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e, device: {}}}' \\\n  --protocol HTTP \\\n  --sink https://endpoint.example.com/sink \\\n  --type org.camaraproject.connectivity-insights-subscriptions.v0.network-quality",
      },
      go: {
        method: 'client.Connectivityinsights.Subscriptions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Connectivityinsights.Subscriptions.New(context.TODO(), camara.ConnectivityinsightSubscriptionNewParams{\n\t\tConfig: camara.ConfigParam{\n\t\t\tSubscriptionDetail: camara.ConfigSubscriptionDetailParam{\n\t\t\t\tApplicationProfileID: "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n\t\t\t\tDevice:               camara.ConfigSubscriptionDetailDeviceParam{},\n\t\t\t},\n\t\t},\n\t\tProtocol: camara.ProtocolHTTP,\n\t\tSink:     "https://endpoint.example.com/sink",\n\t\tTypes:    []camara.EventType{camara.EventTypeOrgCamaraprojectConnectivityInsightsSubscriptionsV0NetworkQuality},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Config)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectivityinsights/subscriptions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "config": {\n            "subscriptionDetail": {\n              "applicationProfileId": "182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e",\n              "device": {}\n            }\n          },\n          "protocol": "HTTP",\n          "sink": "https://endpoint.example.com/sink",\n          "types": [\n            "org.camaraproject.connectivity-insights-subscriptions.v0.network-quality"\n          ]\n        }\'',
      },
      php: {
        method: 'connectivityinsights->subscriptions->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->connectivityinsights->subscriptions->create(\n  config: [\n    'subscriptionDetail' => [\n      'applicationProfileID' => '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n      'device' => [\n        'ipv4Address' => [\n          'privateAddress' => '84.125.93.10',\n          'publicAddress' => '84.125.93.10',\n          'publicPort' => 59765,\n        ],\n        'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n        'networkAccessIdentifier' => '123456789@domain.com',\n        'phoneNumber' => '+123456789',\n      ],\n      'applicationServer' => [\n        'ipv4Address' => '192.168.0.1/24',\n        'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n      ],\n      'applicationServerPorts' => [\n        'ports' => [5060, 5070], 'ranges' => [['from' => 5010, 'to' => 5020]]\n      ],\n    ],\n    'initialEvent' => true,\n    'subscriptionExpireTime' => new \\DateTimeImmutable(\n      '2023-07-03T12:27:08.312Z'\n    ),\n    'subscriptionMaxEvents' => 5,\n  ],\n  protocol: Protocol::HTTP,\n  sink: 'https://endpoint.example.com/sink',\n  types: [\n    EventType::ORG_CAMARAPROJECT_CONNECTIVITY_INSIGHTS_SUBSCRIPTIONS_V0_NETWORK_QUALITY,\n  ],\n  sinkCredential: ['credentialType' => 'PLAIN'],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.connectivityinsights.subscriptions.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.connectivityinsights.subscriptions.create({\n  config: {\n    subscriptionDetail: {\n      applicationProfileId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',\n      device: {},\n    },\n  },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'],\n});\n\nconsole.log(subscription.config);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/connectivityinsights/subscriptions',
    httpMethod: 'get',
    summary: 'Retrieve a list of apiName event subscription',
    description:
      'Operation to list subscriptions authorized to be retrieved by the\nprovided access token.\n',
    stainlessPath: '(resource) connectivityinsights.subscriptions > (method) list',
    qualified: 'client.connectivityinsights.subscriptions.list',
    params: ['x-correlator?: string;'],
    response:
      "{ config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }[]",
    markdown:
      "## list\n\n`client.connectivityinsights.subscriptions.list(x-correlator?: string): object[]`\n\n**get** `/connectivityinsights/subscriptions`\n\nOperation to list subscriptions authorized to be retrieved by the\nprovided access token.\n\n\n### Parameters\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }[]`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscriptions = await client.connectivityinsights.subscriptions.list();\n\nconsole.log(subscriptions);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions list',
        example: "camara connectivityinsights:subscriptions list \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Connectivityinsights.Subscriptions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscriptions, err := client.Connectivityinsights.Subscriptions.List(context.TODO(), camara.ConnectivityinsightSubscriptionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscriptions)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectivityinsights/subscriptions \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'connectivityinsights->subscriptions->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscriptions = $client->connectivityinsights->subscriptions->list(\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscriptions);",
      },
      typescript: {
        method: 'client.connectivityinsights.subscriptions.list',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscriptions = await client.connectivityinsights.subscriptions.list();\n\nconsole.log(subscriptions);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/connectivityinsights/subscriptions/{subscriptionId}',
    httpMethod: 'get',
    summary: 'Operation to retrieve a subscription based on the provided ID',
    description: 'Retrieve a given subscription by ID',
    stainlessPath: '(resource) connectivityinsights.subscriptions > (method) retrieve',
    qualified: 'client.connectivityinsights.subscriptions.retrieve',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response:
      "{ config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }",
    markdown:
      "## retrieve\n\n`client.connectivityinsights.subscriptions.retrieve(subscriptionId: string, x-correlator?: string): { config: config; protocol: protocol; sink: string; startsAt: string; types: event_type[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }`\n\n**get** `/connectivityinsights/subscriptions/{subscriptionId}`\n\nRetrieve a given subscription by ID\n\n### Parameters\n\n- `subscriptionId: string`\n  When this information is contained within an event notification, it SHALL be referred to as `subscriptionId` as per the Commonalities Event Notification Model.\n\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; startsAt: string; types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]; expiresAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'; subscriptionId?: string; }`\n  Represents a event-type subscription.\n\n  - `config: { subscriptionDetail: { applicationProfileId: string; device: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; applicationServer?: { ipv4Address?: string; ipv6Address?: string; }; applicationServerPorts?: { ports?: number[]; ranges?: object[]; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `startsAt: string`\n  - `types: 'org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'[]`\n  - `expiresAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'DEACTIVE' | 'DELETED'`\n  - `subscriptionId?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.connectivityinsights.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions retrieve',
        example:
          "camara connectivityinsights:subscriptions retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Connectivityinsights.Subscriptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Connectivityinsights.Subscriptions.Get(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.ConnectivityinsightSubscriptionGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.Config)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectivityinsights/subscriptions/$SUBSCRIPTION_ID \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'connectivityinsights->subscriptions->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->connectivityinsights->subscriptions->retrieve(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.connectivityinsights.subscriptions.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.connectivityinsights.subscriptions.retrieve(\n  'qs15-h556-rt89-1298',\n);\n\nconsole.log(subscription.config);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/connectivityinsights/subscriptions/{subscriptionId}',
    httpMethod: 'delete',
    summary: 'Operation to delete a subscription',
    description: 'Delete a given subscription by ID',
    stainlessPath: '(resource) connectivityinsights.subscriptions > (method) delete',
    qualified: 'client.connectivityinsights.subscriptions.delete',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response: '{ subscriptionId?: string; }',
    markdown:
      "## delete\n\n`client.connectivityinsights.subscriptions.delete(subscriptionId: string, x-correlator?: string): { subscriptionId?: string; }`\n\n**delete** `/connectivityinsights/subscriptions/{subscriptionId}`\n\nDelete a given subscription by ID\n\n### Parameters\n\n- `subscriptionId: string`\n  When this information is contained within an event notification, it SHALL be referred to as `subscriptionId` as per the Commonalities Event Notification Model.\n\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ subscriptionId?: string; }`\n  Response for a event-type subscription request managed asynchronously\n(Creation or Deletion)\n\n\n  - `subscriptionId?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.connectivityinsights.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions delete',
        example:
          "camara connectivityinsights:subscriptions delete \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Connectivityinsights.Subscriptions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Connectivityinsights.Subscriptions.Delete(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.ConnectivityinsightSubscriptionDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.SubscriptionID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectivityinsights/subscriptions/$SUBSCRIPTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'connectivityinsights->subscriptions->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->connectivityinsights->subscriptions->delete(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.connectivityinsights.subscriptions.delete',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.connectivityinsights.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription.subscriptionId);",
      },
    },
  },
  {
    name: 'retrieve_qos_profiles',
    endpoint: '/qualityondemand/retrieve-qos-profiles',
    httpMethod: 'post',
    summary: 'Retrieve QoS profiles',
    description:
      'Returns all QoS Profiles that match the given criteria.\n**NOTES:**\n- The access token may be either a 2-legged or 3-legged access token.\n- If the access token is 3-legged, all returned QoS Profiles will be available to the subject (device) associated with the access token.\n- If the access token is 2-legged and a device filter is provided, all returned QoS Profiles will be available to that device. If multiple device identifiers are provided within the device property, only QoS Profiles available to the device identifier chosen by the implementation will be returned, even if the identifiers do not match the same device. API provider does not perform any logic to validate/correlate that the indicated device identifiers match the same device. No error should be returned if the identifiers are otherwise valid to prevent API consumers correlating different identifiers with a given end user.\n- This call uses the POST method instead of GET to comply with the CAMARA Commonalities guidelines for sending sensitive or complex data in API calls. Since the device field may contain personally identifiable information, it should not be sent via GET. Additionally, this call may include complex data structures.\n  [CAMARA API Design Guidelines](https://github.com/camaraproject/Commonalities/blob/r3.3/documentation/API-design-guidelines.md#post-or-get-for-transferring-sensitive-or-complex-data)\n',
    stainlessPath: '(resource) qualityondemand > (method) retrieve_qos_profiles',
    qualified: 'client.qualityondemand.retrieveQosProfiles',
    params: [
      'device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; };',
      'name?: string;',
      "status?: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED';",
      'x-correlator?: string;',
    ],
    response:
      "{ name: string; status: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED'; countryAvailability?: { countryName: string; networks?: string[]; }[]; description?: string; jitter?: object; l4sQueueType?: 'non-l4s-queue' | 'l4s-queue' | 'mixed-queue'; maxDownstreamBurstRate?: object; maxDownstreamRate?: object; maxDuration?: object; maxUpstreamBurstRate?: object; maxUpstreamRate?: object; minDuration?: object; packetDelayBudget?: object; packetErrorLossRate?: number; priority?: number; serviceClass?: string; targetMinDownstreamRate?: object; targetMinUpstreamRate?: object; }[]",
    markdown:
      "## retrieve_qos_profiles\n\n`client.qualityondemand.retrieveQosProfiles(device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }, name?: string, status?: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED', x-correlator?: string): object[]`\n\n**post** `/qualityondemand/retrieve-qos-profiles`\n\nReturns all QoS Profiles that match the given criteria.\n**NOTES:**\n- The access token may be either a 2-legged or 3-legged access token.\n- If the access token is 3-legged, all returned QoS Profiles will be available to the subject (device) associated with the access token.\n- If the access token is 2-legged and a device filter is provided, all returned QoS Profiles will be available to that device. If multiple device identifiers are provided within the device property, only QoS Profiles available to the device identifier chosen by the implementation will be returned, even if the identifiers do not match the same device. API provider does not perform any logic to validate/correlate that the indicated device identifiers match the same device. No error should be returned if the identifiers are otherwise valid to prevent API consumers correlating different identifiers with a given end user.\n- This call uses the POST method instead of GET to comply with the CAMARA Commonalities guidelines for sending sensitive or complex data in API calls. Since the device field may contain personally identifiable information, it should not be sent via GET. Additionally, this call may include complex data structures.\n  [CAMARA API Design Guidelines](https://github.com/camaraproject/Commonalities/blob/r3.3/documentation/API-design-guidelines.md#post-or-get-for-transferring-sensitive-or-complex-data)\n\n\n### Parameters\n\n- `device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }`\n  End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\n\nThe developer can choose to provide the below specified device identifiers:\n\n* `ipv4Address`\n* `ipv6Address`\n* `phoneNumber`\nNOTE1: the network operator might support only a subset of these options. The API consumer can provide multiple identifiers to be compatible across different operators. In this case the identifiers MUST belong to the same device.\nNOTE2: as for this Commonalities release, we are enforcing that the networkAccessIdentifier is only part of the schema for future-proofing, and CAMARA does not currently allow its use. After the CAMARA meta-release work is concluded and the relevant issues are resolved, its use will need to be explicitly documented in the guidelines.\n\n  - `ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }`\n    The device should be identified by either the public (observed) IP address and port as seen by the application server, or the private (local) and any public (observed) IP addresses in use by the device (this information can be obtained by various means, for example from some DNS servers).\n\nIf the allocated and observed IP addresses are the same (i.e. NAT is not in use) then  the same address should be specified for both publicAddress and privateAddress.\n\nIf NAT64 is in use, the device should be identified by its publicAddress and publicPort, or separately by its allocated IPv6 address (field ipv6Address of the Device object)\n\nIn all cases, publicAddress must be specified, along with at least one of either privateAddress or publicPort, dependent upon which is known. In general, mobile devices cannot be identified by their public IPv4 address alone.\n\n  - `ipv6Address?: string`\n    The device should be identified by the observed IPv6 address, or by any single IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to the /64 prefix).\n\nThe session shall apply to all IP flows between the device subnet and the specified application server, unless further restricted by the optional parameters devicePorts or applicationServerPorts.\n\n  - `networkAccessIdentifier?: string`\n    A public identifier addressing a subscription in a mobile network. In 3GPP terminology, it corresponds to the GPSI formatted with the External Identifier ({Local Identifier}@{Domain Identifier}). Unlike the telephone number, the network access identifier is not subjected to portability ruling in force, and is individually managed by each operator.\n  - `phoneNumber?: string`\n    A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `name?: string`\n  A unique name for identifying a specific QoS profile.\nThis may follow different formats depending on the service providers implementation.\nSome options addresses:\n  - A UUID style string\n  - Support for predefined profile names like `QOS_E`, `QOS_S`, `QOS_M`, and `QOS_L`\n  - A searchable descriptive name\n\n\n- `status?: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED'`\n  The current status of the QoS Profile\n- `ACTIVE`- QoS Profile is available to be used\n- `INACTIVE`- QoS Profile is not currently available to be deployed\n- `DEPRECATED`- QoS profile is actively being used in a QoD session, but can not be deployed in new QoD sessions\n\n\n- `x-correlator?: string`\n  Value for the x-correlator\n\n### Returns\n\n- `{ name: string; status: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED'; countryAvailability?: { countryName: string; networks?: string[]; }[]; description?: string; jitter?: object; l4sQueueType?: 'non-l4s-queue' | 'l4s-queue' | 'mixed-queue'; maxDownstreamBurstRate?: object; maxDownstreamRate?: object; maxDuration?: object; maxUpstreamBurstRate?: object; maxUpstreamRate?: object; minDuration?: object; packetDelayBudget?: object; packetErrorLossRate?: number; priority?: number; serviceClass?: string; targetMinDownstreamRate?: object; targetMinUpstreamRate?: object; }[]`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst qosProfiles = await client.qualityondemand.retrieveQosProfiles();\n\nconsole.log(qosProfiles);\n```",
    perLanguage: {
      cli: {
        method: 'qualityondemand retrieve_qos_profiles',
        example: "camara qualityondemand retrieve-qos-profiles \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Qualityondemand.GetQosProfiles',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tqosProfiles, err := client.Qualityondemand.GetQosProfiles(context.TODO(), camara.QualityondemandGetQosProfilesParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", qosProfiles)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/qualityondemand/retrieve-qos-profiles \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "name": "voice"\n        }\'',
      },
      php: {
        method: 'qualityondemand->retrieveQosProfiles',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$qosProfiles = $client->qualityondemand->retrieveQosProfiles(\n  device: [\n    'ipv4Address' => [\n      'privateAddress' => '203.0.113.0',\n      'publicAddress' => '203.0.113.0',\n      'publicPort' => 59765,\n    ],\n    'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n    'networkAccessIdentifier' => '123456789@domain.com',\n    'phoneNumber' => '+123456789',\n  ],\n  name: 'voice',\n  status: QosProfileStatus::ACTIVE,\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($qosProfiles);",
      },
      typescript: {
        method: 'client.qualityondemand.retrieveQosProfiles',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst qosProfiles = await client.qualityondemand.retrieveQosProfiles();\n\nconsole.log(qosProfiles);",
      },
    },
  },
  {
    name: 'retrieve_qos_profile',
    endpoint: '/qualityondemand/qos-profiles/{name}',
    httpMethod: 'get',
    summary: 'Get QoS Profile for a given name',
    description:
      'Returns a QoS Profile that matches the given name.\n\nThe access token may be either a 2-legged or 3-legged access token. If the access token is 3-legged, a QoS Profile is only returned if available to all subjects associated with the access token.\n',
    stainlessPath: '(resource) qualityondemand > (method) retrieve_qos_profile',
    qualified: 'client.qualityondemand.retrieveQosProfile',
    params: ['name: string;', 'x-correlator?: string;'],
    response:
      "{ name: string; status: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED'; countryAvailability?: { countryName: string; networks?: string[]; }[]; description?: string; jitter?: object; l4sQueueType?: 'non-l4s-queue' | 'l4s-queue' | 'mixed-queue'; maxDownstreamBurstRate?: object; maxDownstreamRate?: object; maxDuration?: object; maxUpstreamBurstRate?: object; maxUpstreamRate?: object; minDuration?: object; packetDelayBudget?: object; packetErrorLossRate?: number; priority?: number; serviceClass?: string; targetMinDownstreamRate?: object; targetMinUpstreamRate?: object; }",
    markdown:
      "## retrieve_qos_profile\n\n`client.qualityondemand.retrieveQosProfile(name: string, x-correlator?: string): { name: string; status: qos_profile_status; countryAvailability?: object[]; description?: string; jitter?: duration; l4sQueueType?: 'non-l4s-queue' | 'l4s-queue' | 'mixed-queue'; maxDownstreamBurstRate?: rate; maxDownstreamRate?: rate; maxDuration?: duration; maxUpstreamBurstRate?: rate; maxUpstreamRate?: rate; minDuration?: duration; packetDelayBudget?: duration; packetErrorLossRate?: number; priority?: number; serviceClass?: string; targetMinDownstreamRate?: rate; targetMinUpstreamRate?: rate; }`\n\n**get** `/qualityondemand/qos-profiles/{name}`\n\nReturns a QoS Profile that matches the given name.\n\nThe access token may be either a 2-legged or 3-legged access token. If the access token is 3-legged, a QoS Profile is only returned if available to all subjects associated with the access token.\n\n\n### Parameters\n\n- `name: string`\n  A unique name for identifying a specific QoS profile.\nThis may follow different formats depending on the service providers implementation.\nSome options addresses:\n  - A UUID style string\n  - Support for predefined profile names like `QOS_E`, `QOS_S`, `QOS_M`, and `QOS_L`\n  - A searchable descriptive name\n\n\n- `x-correlator?: string`\n  Value for the x-correlator\n\n### Returns\n\n- `{ name: string; status: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED'; countryAvailability?: { countryName: string; networks?: string[]; }[]; description?: string; jitter?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }; l4sQueueType?: 'non-l4s-queue' | 'l4s-queue' | 'mixed-queue'; maxDownstreamBurstRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }; maxDownstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }; maxDuration?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }; maxUpstreamBurstRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }; maxUpstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }; minDuration?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }; packetDelayBudget?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }; packetErrorLossRate?: number; priority?: number; serviceClass?: string; targetMinDownstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }; targetMinUpstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }; }`\n  Data type with attributes of a QosProfile\n\n\n  - `name: string`\n  - `status: 'ACTIVE' | 'INACTIVE' | 'DEPRECATED'`\n  - `countryAvailability?: { countryName: string; networks?: string[]; }[]`\n  - `description?: string`\n  - `jitter?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }`\n  - `l4sQueueType?: 'non-l4s-queue' | 'l4s-queue' | 'mixed-queue'`\n  - `maxDownstreamBurstRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }`\n  - `maxDownstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }`\n  - `maxDuration?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }`\n  - `maxUpstreamBurstRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }`\n  - `maxUpstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }`\n  - `minDuration?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }`\n  - `packetDelayBudget?: { unit?: 'Days' | 'Hours' | 'Minutes' | 'Seconds' | 'Milliseconds' | 'Microseconds' | 'Nanoseconds'; value?: number; }`\n  - `packetErrorLossRate?: number`\n  - `priority?: number`\n  - `serviceClass?: string`\n  - `targetMinDownstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }`\n  - `targetMinUpstreamRate?: { unit?: 'bps' | 'kbps' | 'Mbps' | 'Gbps' | 'Tbps'; value?: number; }`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst qosProfile = await client.qualityondemand.retrieveQosProfile('voice');\n\nconsole.log(qosProfile);\n```",
    perLanguage: {
      cli: {
        method: 'qualityondemand retrieve_qos_profile',
        example:
          "camara qualityondemand retrieve-qos-profile \\\n  --bearer-token 'My Bearer Token' \\\n  --name voice",
      },
      go: {
        method: 'client.Qualityondemand.GetQosProfile',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tqosProfile, err := client.Qualityondemand.GetQosProfile(\n\t\tcontext.TODO(),\n\t\t"voice",\n\t\tcamara.QualityondemandGetQosProfileParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", qosProfile.Name)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/qualityondemand/qos-profiles/$NAME \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'qualityondemand->retrieveQosProfile',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$qosProfile = $client->qualityondemand->retrieveQosProfile(\n  'voice', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($qosProfile);",
      },
      typescript: {
        method: 'client.qualityondemand.retrieveQosProfile',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst qosProfile = await client.qualityondemand.retrieveQosProfile('voice');\n\nconsole.log(qosProfile.name);",
      },
    },
  },
  {
    name: 'retrieve_identifier',
    endpoint: '/deviceidentifier/retrieve-identifier',
    httpMethod: 'post',
    summary: 'Get details about the specific device being used by a given mobile subscriber',
    description: 'Get details about the specific device being used by a given mobile subscriber',
    stainlessPath: '(resource) deviceidentifier > (method) retrieve_identifier',
    qualified: 'client.deviceidentifier.retrieveIdentifier',
    params: [
      'device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; };',
      'x-correlator?: string;',
    ],
    response:
      '{ device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; imei?: string; imeisv?: string; lastChecked?: string; manufacturer?: string; model?: string; tac?: string; }',
    markdown:
      "## retrieve_identifier\n\n`client.deviceidentifier.retrieveIdentifier(device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }, x-correlator?: string): { device?: device_identifier_device; imei?: string; imeisv?: string; lastChecked?: string; manufacturer?: string; model?: string; tac?: string; }`\n\n**post** `/deviceidentifier/retrieve-identifier`\n\nGet details about the specific device being used by a given mobile subscriber\n\n### Parameters\n\n- `device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }`\n  End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\nThe developer can choose to provide the below specified device identifiers:\n* `ipv4Address`\n* `ipv6Address`\n* `phoneNumber`\n* `networkAccessIdentifier`\nNOTE 1: The MNO might support only a subset of these options. The API invoker can provide multiple identifiers to be compatible across different MNOs. In this case the identifiers MUST belong to the same device.\nNOTE 2: For the current Commonalities release, we are enforcing that the networkAccessIdentifier is only part of the schema for future-proofing, and CAMARA does not currently allow its use. After the CAMARA meta-release work is concluded and the relevant issues are resolved, its use will need to be explicitly documented in the guidelines.\n\n  - `ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }`\n    The device should be identified by either the public (observed) IP address and port as seen by the application server, or the private (local) and any public (observed) IP addresses in use by the device (this information can be obtained by various means, for example from some DNS servers).\n\nIf the allocated and observed IP addresses are the same (i.e. NAT is not in use) then  the same address should be specified for both publicAddress and privateAddress.\n\nIf NAT64 is in use, the device should be identified by its publicAddress and publicPort, or separately by its allocated IPv6 address (field ipv6Address of the Device object)\n\nIn all cases, publicAddress must be specified, along with at least one of either privateAddress or publicPort, dependent upon which is known. In general, mobile devices cannot be identified by their public IPv4 address alone.\n\n  - `ipv6Address?: string`\n    The device should be identified by the observed IPv6 address, or by any single IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to the /64 prefix).\n\n  - `networkAccessIdentifier?: string`\n    A public identifier addressing a subscription in a mobile network. In 3GPP terminology, it corresponds to the GPSI formatted with the External Identifier ({Local Identifier}@{Domain Identifier}). Unlike the telephone number, the network access identifier is not subjected to portability ruling in force, and is individually managed by each operator.\n  - `phoneNumber?: string`\n    A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; imei?: string; imeisv?: string; lastChecked?: string; manufacturer?: string; model?: string; tac?: string; }`\n\n  - `device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }`\n  - `imei?: string`\n  - `imeisv?: string`\n  - `lastChecked?: string`\n  - `manufacturer?: string`\n  - `model?: string`\n  - `tac?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.deviceidentifier.retrieveIdentifier();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'deviceidentifier retrieve_identifier',
        example: "camara deviceidentifier retrieve-identifier \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Deviceidentifier.GetIdentifier',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Deviceidentifier.GetIdentifier(context.TODO(), camara.DeviceidentifierGetIdentifierParams{\n\t\tDeviceIdentifierRequestBody: camara.DeviceIdentifierRequestBodyParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Device)\n}\n',
      },
      http: {
        example:
          "curl https://api.example.com/camara/deviceidentifier/retrieve-identifier \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $CAMARA_BEARER_TOKEN\" \\\n    -d '{}'",
      },
      php: {
        method: 'deviceidentifier->retrieveIdentifier',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->deviceidentifier->retrieveIdentifier(\n  device: [\n    'ipv4Address' => [\n      'privateAddress' => '84.125.93.10',\n      'publicAddress' => '84.125.93.10',\n      'publicPort' => 59765,\n    ],\n    'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n    'networkAccessIdentifier' => '123456789@example.com',\n    'phoneNumber' => '+123456789',\n  ],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.deviceidentifier.retrieveIdentifier',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.deviceidentifier.retrieveIdentifier();\n\nconsole.log(response.device);",
      },
    },
  },
  {
    name: 'retrieve_type',
    endpoint: '/deviceidentifier/retrieve-type',
    httpMethod: 'post',
    summary: 'Get details about the type of device being used by a given mobile subscriber',
    description: 'Get details about the type of device being used by a given mobile subscriber',
    stainlessPath: '(resource) deviceidentifier > (method) retrieve_type',
    qualified: 'client.deviceidentifier.retrieveType',
    params: [
      'device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; };',
      'x-correlator?: string;',
    ],
    response:
      '{ device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; lastChecked?: string; manufacturer?: string; model?: string; tac?: string; }',
    markdown:
      "## retrieve_type\n\n`client.deviceidentifier.retrieveType(device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }, x-correlator?: string): { device?: device_identifier_device; lastChecked?: string; manufacturer?: string; model?: string; tac?: string; }`\n\n**post** `/deviceidentifier/retrieve-type`\n\nGet details about the type of device being used by a given mobile subscriber\n\n### Parameters\n\n- `device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }`\n  End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\nThe developer can choose to provide the below specified device identifiers:\n* `ipv4Address`\n* `ipv6Address`\n* `phoneNumber`\n* `networkAccessIdentifier`\nNOTE 1: The MNO might support only a subset of these options. The API invoker can provide multiple identifiers to be compatible across different MNOs. In this case the identifiers MUST belong to the same device.\nNOTE 2: For the current Commonalities release, we are enforcing that the networkAccessIdentifier is only part of the schema for future-proofing, and CAMARA does not currently allow its use. After the CAMARA meta-release work is concluded and the relevant issues are resolved, its use will need to be explicitly documented in the guidelines.\n\n  - `ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }`\n    The device should be identified by either the public (observed) IP address and port as seen by the application server, or the private (local) and any public (observed) IP addresses in use by the device (this information can be obtained by various means, for example from some DNS servers).\n\nIf the allocated and observed IP addresses are the same (i.e. NAT is not in use) then  the same address should be specified for both publicAddress and privateAddress.\n\nIf NAT64 is in use, the device should be identified by its publicAddress and publicPort, or separately by its allocated IPv6 address (field ipv6Address of the Device object)\n\nIn all cases, publicAddress must be specified, along with at least one of either privateAddress or publicPort, dependent upon which is known. In general, mobile devices cannot be identified by their public IPv4 address alone.\n\n  - `ipv6Address?: string`\n    The device should be identified by the observed IPv6 address, or by any single IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to the /64 prefix).\n\n  - `networkAccessIdentifier?: string`\n    A public identifier addressing a subscription in a mobile network. In 3GPP terminology, it corresponds to the GPSI formatted with the External Identifier ({Local Identifier}@{Domain Identifier}). Unlike the telephone number, the network access identifier is not subjected to portability ruling in force, and is individually managed by each operator.\n  - `phoneNumber?: string`\n    A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; lastChecked?: string; manufacturer?: string; model?: string; tac?: string; }`\n\n  - `device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }`\n  - `lastChecked?: string`\n  - `manufacturer?: string`\n  - `model?: string`\n  - `tac?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.deviceidentifier.retrieveType();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'deviceidentifier retrieve_type',
        example: "camara deviceidentifier retrieve-type \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Deviceidentifier.GetType',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Deviceidentifier.GetType(context.TODO(), camara.DeviceidentifierGetTypeParams{\n\t\tDeviceIdentifierRequestBody: camara.DeviceIdentifierRequestBodyParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Device)\n}\n',
      },
      http: {
        example:
          "curl https://api.example.com/camara/deviceidentifier/retrieve-type \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $CAMARA_BEARER_TOKEN\" \\\n    -d '{}'",
      },
      php: {
        method: 'deviceidentifier->retrieveType',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->deviceidentifier->retrieveType(\n  device: [\n    'ipv4Address' => [\n      'privateAddress' => '84.125.93.10',\n      'publicAddress' => '84.125.93.10',\n      'publicPort' => 59765,\n    ],\n    'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n    'networkAccessIdentifier' => '123456789@example.com',\n    'phoneNumber' => '+123456789',\n  ],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.deviceidentifier.retrieveType',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.deviceidentifier.retrieveType();\n\nconsole.log(response.device);",
      },
    },
  },
  {
    name: 'retrieve_ppid',
    endpoint: '/deviceidentifier/retrieve-ppid',
    httpMethod: 'post',
    summary: 'Get a pseudonymous identifier for device being used by a given mobile subscriber',
    description: 'Get a pseudonymous identifier for device being used by a given mobile subscriber',
    stainlessPath: '(resource) deviceidentifier > (method) retrieve_ppid',
    qualified: 'client.deviceidentifier.retrievePpid',
    params: [
      'device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; };',
      'x-correlator?: string;',
    ],
    response:
      '{ device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; lastChecked?: string; ppid?: string; }',
    markdown:
      "## retrieve_ppid\n\n`client.deviceidentifier.retrievePpid(device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }, x-correlator?: string): { device?: device_identifier_device; lastChecked?: string; ppid?: string; }`\n\n**post** `/deviceidentifier/retrieve-ppid`\n\nGet a pseudonymous identifier for device being used by a given mobile subscriber\n\n### Parameters\n\n- `device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }`\n  End-user equipment able to connect to a mobile network. Examples of devices include smartphones or IoT sensors/actuators.\nThe developer can choose to provide the below specified device identifiers:\n* `ipv4Address`\n* `ipv6Address`\n* `phoneNumber`\n* `networkAccessIdentifier`\nNOTE 1: The MNO might support only a subset of these options. The API invoker can provide multiple identifiers to be compatible across different MNOs. In this case the identifiers MUST belong to the same device.\nNOTE 2: For the current Commonalities release, we are enforcing that the networkAccessIdentifier is only part of the schema for future-proofing, and CAMARA does not currently allow its use. After the CAMARA meta-release work is concluded and the relevant issues are resolved, its use will need to be explicitly documented in the guidelines.\n\n  - `ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }`\n    The device should be identified by either the public (observed) IP address and port as seen by the application server, or the private (local) and any public (observed) IP addresses in use by the device (this information can be obtained by various means, for example from some DNS servers).\n\nIf the allocated and observed IP addresses are the same (i.e. NAT is not in use) then  the same address should be specified for both publicAddress and privateAddress.\n\nIf NAT64 is in use, the device should be identified by its publicAddress and publicPort, or separately by its allocated IPv6 address (field ipv6Address of the Device object)\n\nIn all cases, publicAddress must be specified, along with at least one of either privateAddress or publicPort, dependent upon which is known. In general, mobile devices cannot be identified by their public IPv4 address alone.\n\n  - `ipv6Address?: string`\n    The device should be identified by the observed IPv6 address, or by any single IPv6 address from within the subnet allocated to the device (e.g. adding ::0 to the /64 prefix).\n\n  - `networkAccessIdentifier?: string`\n    A public identifier addressing a subscription in a mobile network. In 3GPP terminology, it corresponds to the GPSI formatted with the External Identifier ({Local Identifier}@{Domain Identifier}). Unlike the telephone number, the network access identifier is not subjected to portability ruling in force, and is individually managed by each operator.\n  - `phoneNumber?: string`\n    A public identifier addressing a telephone subscription. In mobile networks it corresponds to the MSISDN (Mobile Station International Subscriber Directory Number). In order to be globally unique it has to be formatted in international format, according to E.164 standard, prefixed with '+'.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ device?: { ipv4Address?: device_identifier_device_ipv4_addr; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; lastChecked?: string; ppid?: string; }`\n\n  - `device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }`\n  - `lastChecked?: string`\n  - `ppid?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst response = await client.deviceidentifier.retrievePpid();\n\nconsole.log(response);\n```",
    perLanguage: {
      cli: {
        method: 'deviceidentifier retrieve_ppid',
        example: "camara deviceidentifier retrieve-ppid \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Deviceidentifier.GetPpid',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tresponse, err := client.Deviceidentifier.GetPpid(context.TODO(), camara.DeviceidentifierGetPpidParams{\n\t\tDeviceIdentifierRequestBody: camara.DeviceIdentifierRequestBodyParam{},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", response.Ppid)\n}\n',
      },
      http: {
        example:
          "curl https://api.example.com/camara/deviceidentifier/retrieve-ppid \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $CAMARA_BEARER_TOKEN\" \\\n    -d '{}'",
      },
      php: {
        method: 'deviceidentifier->retrievePpid',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$response = $client->deviceidentifier->retrievePpid(\n  device: [\n    'ipv4Address' => [\n      'privateAddress' => '84.125.93.10',\n      'publicAddress' => '84.125.93.10',\n      'publicPort' => 59765,\n    ],\n    'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n    'networkAccessIdentifier' => '123456789@example.com',\n    'phoneNumber' => '+123456789',\n  ],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($response);",
      },
      typescript: {
        method: 'client.deviceidentifier.retrievePpid',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst response = await client.deviceidentifier.retrievePpid();\n\nconsole.log(response.ppid);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/simswap/subscriptions',
    httpMethod: 'post',
    summary: 'Create a sim swap event subscription for a phone number',
    description: 'Create a sim swap event subscription for a phone number',
    stainlessPath: '(resource) simswap.subscriptions > (method) create',
    qualified: 'client.simswap.subscriptions.create',
    params: [
      'config: { subscriptionDetail: { phoneNumber?: string; }; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; };',
      "protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';",
      'sink: string;',
      "types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[];",
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'x-correlator?: string;',
    ],
    response:
      "{ id: string; config: { subscriptionDetail: object; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## create\n\n`client.simswap.subscriptions.create(config: { subscriptionDetail: object; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }, protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA', sink: string, types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[], sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, x-correlator?: string): { id: string; config: sim_swap_config; protocol: sim_swap_protocol; sink: string; types: sim_swap_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**post** `/simswap/subscriptions`\n\nCreate a sim swap event subscription for a phone number\n\n### Parameters\n\n- `config: { subscriptionDetail: { phoneNumber?: string; }; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  Implementation-specific configuration parameters needed by the subscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime` or `subscriptionMaxEvents` to limit subscription lifetime.\nEvent type attributes must be defined in `subscriptionDetail`\n\n  - `subscriptionDetail: { phoneNumber?: string; }`\n    The detail of the requested event subscription\n  - `subscriptionExpireTime?: string`\n    The subscription expiration time (in date-time format) requested by the API consumer. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\n  - `subscriptionMaxEvents?: number`\n    Identifies the maximum number of event reports to be generated (>=1) requested by the API consumer - Once this number is reached, the subscription ends.\n\n\n- `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  Identifier of a delivery protocol. Only HTTP is allowed for now\n\n- `sink: string`\n  The address to which events shall be delivered using the selected protocol.\n\n- `types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]`\n  Camara Event types eligible for subscription:\n- org.camaraproject.sim-swap-subscriptions.v0.swapped: receive a notification when a sim swap is performed on the line.\n\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential. With the current API version the type MUST be set to ACCESSTOKEN.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { phoneNumber?: string; }; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst simSwapSubscription = await client.simswap.subscriptions.create({\n  config: { subscriptionDetail: {} },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.sim-swap-subscriptions.v0.swapped'],\n});\n\nconsole.log(simSwapSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions create',
        example:
          "camara simswap:subscriptions create \\\n  --bearer-token 'My Bearer Token' \\\n  --config '{subscriptionDetail: {}}' \\\n  --protocol HTTP \\\n  --sink https://endpoint.example.com/sink \\\n  --type org.camaraproject.sim-swap-subscriptions.v0.swapped",
      },
      go: {
        method: 'client.Simswap.Subscriptions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsimSwapSubscription, err := client.Simswap.Subscriptions.New(context.TODO(), camara.SimswapSubscriptionNewParams{\n\t\tConfig: camara.SimSwapConfigParam{\n\t\t\tSubscriptionDetail: camara.SimSwapConfigSubscriptionDetailParam{\n\t\t\t\tPhoneNumber: camara.String("+123456789"),\n\t\t\t},\n\t\t\tSubscriptionMaxEvents:  camara.Int(10),\n\t\t\tSubscriptionExpireTime: camara.Time(time.Now()),\n\t\t},\n\t\tProtocol: camara.SimSwapProtocolHTTP,\n\t\tSink:     "https://endpoint.example.com/sink",\n\t\tTypes:    []camara.SimSwapSubscriptionEventType{camara.SimSwapSubscriptionEventTypeOrgCamaraprojectSimSwapSubscriptionsV0Swapped},\n\t\tSinkCredential: camara.SimswapSubscriptionNewParamsSinkCredential{\n\t\t\tCredentialType: "ACCESSTOKEN",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", simSwapSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/simswap/subscriptions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "config": {\n            "subscriptionDetail": {\n              "phoneNumber": "+123456789"\n            },\n            "subscriptionExpireTime": "2025-01-17T13:18:23.682Z",\n            "subscriptionMaxEvents": 10\n          },\n          "protocol": "HTTP",\n          "sink": "https://endpoint.example.com/sink",\n          "types": [\n            "org.camaraproject.sim-swap-subscriptions.v0.swapped"\n          ]\n        }\'',
      },
      php: {
        method: 'simswap->subscriptions->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$simSwapSubscription = $client->simswap->subscriptions->create(\n  config: [\n    'subscriptionDetail' => ['phoneNumber' => '+123456789'],\n    'subscriptionExpireTime' => new \\DateTimeImmutable(\n      '2025-01-17T13:18:23.682Z'\n    ),\n    'subscriptionMaxEvents' => 10,\n  ],\n  protocol: SimSwapProtocol::HTTP,\n  sink: 'https://endpoint.example.com/sink',\n  types: [\n    SimSwapSubscriptionEventType::ORG_CAMARAPROJECT_SIM_SWAP_SUBSCRIPTIONS_V0_SWAPPED,\n  ],\n  sinkCredential: ['credentialType' => 'ACCESSTOKEN'],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($simSwapSubscription);",
      },
      typescript: {
        method: 'client.simswap.subscriptions.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst simSwapSubscription = await client.simswap.subscriptions.create({\n  config: {\n    subscriptionDetail: { phoneNumber: '+123456789' },\n    subscriptionMaxEvents: 10,\n    subscriptionExpireTime: '2025-01-17T13:18:23.682Z',\n  },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.sim-swap-subscriptions.v0.swapped'],\n  sinkCredential: { credentialType: 'ACCESSTOKEN' },\n});\n\nconsole.log(simSwapSubscription.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/simswap/subscriptions',
    httpMethod: 'get',
    summary: 'Retrieve a list of sim swap event subscription',
    description: 'Retrieve a list of sim swap event subscription(s)',
    stainlessPath: '(resource) simswap.subscriptions > (method) list',
    qualified: 'client.simswap.subscriptions.list',
    params: ['x-correlator?: string;'],
    response:
      "{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]",
    markdown:
      "## list\n\n`client.simswap.subscriptions.list(x-correlator?: string): object[]`\n\n**get** `/simswap/subscriptions`\n\nRetrieve a list of sim swap event subscription(s)\n\n### Parameters\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst simSwapSubscriptions = await client.simswap.subscriptions.list();\n\nconsole.log(simSwapSubscriptions);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions list',
        example: "camara simswap:subscriptions list \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Simswap.Subscriptions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsimSwapSubscriptions, err := client.Simswap.Subscriptions.List(context.TODO(), camara.SimswapSubscriptionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", simSwapSubscriptions)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/simswap/subscriptions \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'simswap->subscriptions->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$simSwapSubscriptions = $client->simswap->subscriptions->list(\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($simSwapSubscriptions);",
      },
      typescript: {
        method: 'client.simswap.subscriptions.list',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst simSwapSubscriptions = await client.simswap.subscriptions.list();\n\nconsole.log(simSwapSubscriptions);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/simswap/subscriptions/{subscriptionId}',
    httpMethod: 'get',
    summary: 'Retrieve a sim swap event subscription for a phone number',
    description: 'retrieve event subscription information for a given subscription.',
    stainlessPath: '(resource) simswap.subscriptions > (method) retrieve',
    qualified: 'client.simswap.subscriptions.retrieve',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response:
      "{ id: string; config: { subscriptionDetail: object; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## retrieve\n\n`client.simswap.subscriptions.retrieve(subscriptionId: string, x-correlator?: string): { id: string; config: sim_swap_config; protocol: sim_swap_protocol; sink: string; types: sim_swap_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**get** `/simswap/subscriptions/{subscriptionId}`\n\nretrieve event subscription information for a given subscription.\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { phoneNumber?: string; }; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: 'org.camaraproject.sim-swap-subscriptions.v0.swapped'[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst simSwapSubscription = await client.simswap.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(simSwapSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions retrieve',
        example:
          "camara simswap:subscriptions retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Simswap.Subscriptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsimSwapSubscription, err := client.Simswap.Subscriptions.Get(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.SimswapSubscriptionGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", simSwapSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/simswap/subscriptions/$SUBSCRIPTION_ID \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'simswap->subscriptions->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$simSwapSubscription = $client->simswap->subscriptions->retrieve(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($simSwapSubscription);",
      },
      typescript: {
        method: 'client.simswap.subscriptions.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst simSwapSubscription = await client.simswap.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(simSwapSubscription.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/simswap/subscriptions/{subscriptionId}',
    httpMethod: 'delete',
    summary: 'Delete a sim swap event subscription',
    description: 'delete a  given event subscription.',
    stainlessPath: '(resource) simswap.subscriptions > (method) delete',
    qualified: 'client.simswap.subscriptions.delete',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response: '{ id?: string; }',
    markdown:
      "## delete\n\n`client.simswap.subscriptions.delete(subscriptionId: string, x-correlator?: string): { id?: string; }`\n\n**delete** `/simswap/subscriptions/{subscriptionId}`\n\ndelete a  given event subscription.\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id?: string; }`\n  Response for a event-type subscription request managed asynchronously (Creation or Deletion)\n\n  - `id?: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.simswap.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions delete',
        example:
          "camara simswap:subscriptions delete \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Simswap.Subscriptions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Simswap.Subscriptions.Delete(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.SimswapSubscriptionDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/simswap/subscriptions/$SUBSCRIPTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'simswap->subscriptions->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->simswap->subscriptions->delete(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.simswap.subscriptions.delete',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.simswap.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/deviceroamingstatus/subscriptions',
    httpMethod: 'post',
    summary: 'Create a device roaming status event subscription for a device',
    description: 'Create a device roaming status event subscription for a device',
    stainlessPath: '(resource) deviceroamingstatus.subscriptions > (method) create',
    qualified: 'client.deviceroamingstatus.subscriptions.create',
    params: [
      'config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; };',
      "protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';",
      'sink: string;',
      'types: string[];',
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'x-correlator?: string;',
    ],
    response:
      "{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## create\n\n`client.deviceroamingstatus.subscriptions.create(config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }, protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA', sink: string, types: string[], sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, x-correlator?: string): { id: string; config: device_roaming_status_config; protocol: device_roaming_status_protocol; sink: string; types: device_roaming_status_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**post** `/deviceroamingstatus/subscriptions`\n\nCreate a device roaming status event subscription for a device\n\n### Parameters\n\n- `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  Implementation-specific configuration parameters needed by the subscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`\nSpecific event type attributes must be defined in `subscriptionDetail`\nNote: if a request is performed for several event type, all subscribed event will use same `config` parameters.\n\n  - `subscriptionDetail: { device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }`\n    The detail of the requested event subscription.\n  - `initialEvent?: boolean`\n    Set to `true` by API consumer if consumer wants to get an event as soon as the subscription is created and current situation reflects event request.\nExample: Consumer request Roaming event. If consumer sets initialEvent to true and device is in roaming situation, an event is triggered.\n\n  - `subscriptionExpireTime?: string`\n    The subscription expiration time (in date-time format) requested by the API consumer. It must follow [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) and must have time zone.\n  - `subscriptionMaxEvents?: number`\n    Identifies the maximum number of event reports to be generated (>=1) requested by the API consumer - Once this number is reached, the subscription ends.\n\n- `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  Identifier of a delivery protocol. Only HTTP is allowed for now\n\n- `sink: string`\n  The address to which events shall be delivered using the selected protocol.\n\n- `types: string[]`\n  Camara Event types eligible to be delivered by this subscription.\nNote: for the current Commonalities version (v0.5) only one event type per subscription is allowed, yet in the following releases use of array of event types SHALL be specified without changing this definition.\n\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: string[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceRoamingStatusSubscription = await client.deviceroamingstatus.subscriptions.create({\n  config: { subscriptionDetail: {} },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.device-roaming-status-subscriptions.v0.roaming-status'],\n});\n\nconsole.log(deviceRoamingStatusSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions create',
        example:
          "camara deviceroamingstatus:subscriptions create \\\n  --bearer-token 'My Bearer Token' \\\n  --config '{subscriptionDetail: {}}' \\\n  --protocol HTTP \\\n  --sink https://endpoint.example.com/sink \\\n  --type org.camaraproject.device-roaming-status-subscriptions.v0.roaming-status",
      },
      go: {
        method: 'client.Deviceroamingstatus.Subscriptions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceRoamingStatusSubscription, err := client.Deviceroamingstatus.Subscriptions.New(context.TODO(), camara.DeviceroamingstatusSubscriptionNewParams{\n\t\tConfig: camara.DeviceRoamingStatusConfigParam{\n\t\t\tSubscriptionDetail: camara.DeviceRoamingStatusConfigSubscriptionDetailParam{\n\t\t\t\tDevice: camara.DeviceRoamingStatusConfigSubscriptionDetailDeviceParam{\n\t\t\t\t\tPhoneNumber: camara.String("+123456789"),\n\t\t\t\t},\n\t\t\t},\n\t\t\tSubscriptionExpireTime: camara.Time(time.Now()),\n\t\t\tSubscriptionMaxEvents:  camara.Int(5),\n\t\t\tInitialEvent:           camara.Bool(true),\n\t\t},\n\t\tProtocol: camara.DeviceRoamingStatusProtocolHTTP,\n\t\tSink:     "https://endpoint.example.com/sink",\n\t\tTypes:    []camara.DeviceRoamingStatusSubscriptionEventType{camara.DeviceRoamingStatusSubscriptionEventTypeOrgCamaraprojectDeviceRoamingStatusSubscriptionsV0RoamingStatus},\n\t\tSinkCredential: camara.DeviceroamingstatusSubscriptionNewParamsSinkCredential{\n\t\t\tCredentialType: "ACCESSTOKEN",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceRoamingStatusSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/deviceroamingstatus/subscriptions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "config": {\n            "subscriptionDetail": {\n              "device": {\n                "phoneNumber": "+123456789"\n              }\n            },\n            "initialEvent": true,\n            "subscriptionExpireTime": "2023-01-17T13:18:23.682Z",\n            "subscriptionMaxEvents": 5\n          },\n          "protocol": "HTTP",\n          "sink": "https://endpoint.example.com/sink",\n          "types": [\n            "org.camaraproject.device-roaming-status-subscriptions.v0.roaming-status"\n          ]\n        }\'',
      },
      php: {
        method: 'deviceroamingstatus->subscriptions->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceRoamingStatusSubscription = $client\n  ->deviceroamingstatus\n  ->subscriptions\n  ->create(\n  config: [\n    'subscriptionDetail' => [\n      'device' => [\n        'ipv4Address' => [\n          'privateAddress' => '84.125.93.10',\n          'publicAddress' => '84.125.93.10',\n          'publicPort' => 59765,\n        ],\n        'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n        'networkAccessIdentifier' => '123456789@example.com',\n        'phoneNumber' => '+123456789',\n      ],\n    ],\n    'initialEvent' => true,\n    'subscriptionExpireTime' => new \\DateTimeImmutable(\n      '2023-01-17T13:18:23.682Z'\n    ),\n    'subscriptionMaxEvents' => 5,\n  ],\n  protocol: DeviceRoamingStatusProtocol::HTTP,\n  sink: 'https://endpoint.example.com/sink',\n  types: [\n    DeviceRoamingStatusSubscriptionEventType::ORG_CAMARAPROJECT_DEVICE_ROAMING_STATUS_SUBSCRIPTIONS_V0_ROAMING_STATUS,\n  ],\n  sinkCredential: ['credentialType' => 'ACCESSTOKEN'],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($deviceRoamingStatusSubscription);",
      },
      typescript: {
        method: 'client.deviceroamingstatus.subscriptions.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceRoamingStatusSubscription = await client.deviceroamingstatus.subscriptions.create({\n  config: {\n    subscriptionDetail: { device: { phoneNumber: '+123456789' } },\n    subscriptionExpireTime: '2023-01-17T13:18:23.682Z',\n    subscriptionMaxEvents: 5,\n    initialEvent: true,\n  },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.device-roaming-status-subscriptions.v0.roaming-status'],\n  sinkCredential: { credentialType: 'ACCESSTOKEN' },\n});\n\nconsole.log(deviceRoamingStatusSubscription.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/deviceroamingstatus/subscriptions',
    httpMethod: 'get',
    summary: 'Retrieve a list of device roaming status event subscription',
    description: 'Retrieve a list of device roaming status event subscription(s)',
    stainlessPath: '(resource) deviceroamingstatus.subscriptions > (method) list',
    qualified: 'client.deviceroamingstatus.subscriptions.list',
    params: ['x-correlator?: string;'],
    response:
      "{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]",
    markdown:
      "## list\n\n`client.deviceroamingstatus.subscriptions.list(x-correlator?: string): object[]`\n\n**get** `/deviceroamingstatus/subscriptions`\n\nRetrieve a list of device roaming status event subscription(s)\n\n### Parameters\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceRoamingStatusSubscriptions = await client.deviceroamingstatus.subscriptions.list();\n\nconsole.log(deviceRoamingStatusSubscriptions);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions list',
        example: "camara deviceroamingstatus:subscriptions list \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Deviceroamingstatus.Subscriptions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceRoamingStatusSubscriptions, err := client.Deviceroamingstatus.Subscriptions.List(context.TODO(), camara.DeviceroamingstatusSubscriptionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceRoamingStatusSubscriptions)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/deviceroamingstatus/subscriptions \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'deviceroamingstatus->subscriptions->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceRoamingStatusSubscriptions = $client\n  ->deviceroamingstatus\n  ->subscriptions\n  ->list(xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46');\n\nvar_dump($deviceRoamingStatusSubscriptions);",
      },
      typescript: {
        method: 'client.deviceroamingstatus.subscriptions.list',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceRoamingStatusSubscriptions = await client.deviceroamingstatus.subscriptions.list();\n\nconsole.log(deviceRoamingStatusSubscriptions);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/deviceroamingstatus/subscriptions/{subscriptionId}',
    httpMethod: 'get',
    summary: 'Retrieve a roaming status event subscription for a device',
    description: 'retrieve device roaming status subscription information for a given subscription.',
    stainlessPath: '(resource) deviceroamingstatus.subscriptions > (method) retrieve',
    qualified: 'client.deviceroamingstatus.subscriptions.retrieve',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response:
      "{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## retrieve\n\n`client.deviceroamingstatus.subscriptions.retrieve(subscriptionId: string, x-correlator?: string): { id: string; config: device_roaming_status_config; protocol: device_roaming_status_protocol; sink: string; types: device_roaming_status_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**get** `/deviceroamingstatus/subscriptions/{subscriptionId}`\n\nretrieve device roaming status subscription information for a given subscription.\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: string[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceRoamingStatusSubscription = await client.deviceroamingstatus.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(deviceRoamingStatusSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions retrieve',
        example:
          "camara deviceroamingstatus:subscriptions retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Deviceroamingstatus.Subscriptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceRoamingStatusSubscription, err := client.Deviceroamingstatus.Subscriptions.Get(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.DeviceroamingstatusSubscriptionGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceRoamingStatusSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/deviceroamingstatus/subscriptions/$SUBSCRIPTION_ID \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'deviceroamingstatus->subscriptions->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceRoamingStatusSubscription = $client\n  ->deviceroamingstatus\n  ->subscriptions\n  ->retrieve(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($deviceRoamingStatusSubscription);",
      },
      typescript: {
        method: 'client.deviceroamingstatus.subscriptions.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceRoamingStatusSubscription = await client.deviceroamingstatus.subscriptions.retrieve(\n  'qs15-h556-rt89-1298',\n);\n\nconsole.log(deviceRoamingStatusSubscription.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/deviceroamingstatus/subscriptions/{subscriptionId}',
    httpMethod: 'delete',
    summary: 'Delete a device-roaming-status event subscription for a device',
    description: 'Delete a given device-roaming-status subscription by ID',
    stainlessPath: '(resource) deviceroamingstatus.subscriptions > (method) delete',
    qualified: 'client.deviceroamingstatus.subscriptions.delete',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response: '{ id: string; }',
    markdown:
      "## delete\n\n`client.deviceroamingstatus.subscriptions.delete(subscriptionId: string, x-correlator?: string): { id: string; }`\n\n**delete** `/deviceroamingstatus/subscriptions/{subscriptionId}`\n\nDelete a given device-roaming-status subscription by ID\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; }`\n  Response for a device reachability status operation managed asynchronously (Creation or Deletion)\n\n  - `id: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.deviceroamingstatus.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions delete',
        example:
          "camara deviceroamingstatus:subscriptions delete \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Deviceroamingstatus.Subscriptions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Deviceroamingstatus.Subscriptions.Delete(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.DeviceroamingstatusSubscriptionDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/deviceroamingstatus/subscriptions/$SUBSCRIPTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'deviceroamingstatus->subscriptions->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->deviceroamingstatus->subscriptions->delete(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.deviceroamingstatus.subscriptions.delete',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.deviceroamingstatus.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/devicereachabilitystatus/subscriptions',
    httpMethod: 'post',
    summary: 'Create a device reachability status event subscription for a device',
    description: 'Create a device reachability status event subscription for a device',
    stainlessPath: '(resource) devicereachabilitystatus.subscriptions > (method) create',
    qualified: 'client.devicereachabilitystatus.subscriptions.create',
    params: [
      'config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; };',
      "protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';",
      'sink: string;',
      'types: string[];',
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'x-correlator?: string;',
    ],
    response:
      "{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## create\n\n`client.devicereachabilitystatus.subscriptions.create(config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }, protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA', sink: string, types: string[], sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, x-correlator?: string): { id: string; config: device_reachability_status_config; protocol: device_reachability_status_protocol; sink: string; types: device_reachability_status_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**post** `/devicereachabilitystatus/subscriptions`\n\nCreate a device reachability status event subscription for a device\n\n### Parameters\n\n- `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  Implementation-specific configuration parameters needed by the subscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`\nSpecific event type attributes must be defined in `subscriptionDetail`\nNote: if a request is performed for several event type, all subscribed event will use same `config` parameters.\n\n  - `subscriptionDetail: { device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }`\n    The detail of the requested event subscription.\n  - `initialEvent?: boolean`\n    Set to `true` by API consumer if consumer wants to get an event as soon as the subscription is created and current situation reflects event request.\nExample: Consumer subscribes to reachability SMS. If consumer sets initialEvent to true and device is already reachable by SMS, an event is triggered.\n\n  - `subscriptionExpireTime?: string`\n    The subscription expiration time (in date-time format) requested by the API consumer.\n  - `subscriptionMaxEvents?: number`\n    Identifies the maximum number of event reports to be generated (>=1) requested by the API consumer - Once this number is reached, the subscription ends.\n\n- `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  Identifier of a delivery protocol. Only HTTP is allowed for now\n\n- `sink: string`\n  The address to which events shall be delivered using the selected protocol.\n\n- `types: string[]`\n  Camara Event types eligible to be delivered by this subscription.\nNote: For the current Commonalities API design guidelines, only one event type per subscription is allowed, yet in the following releases use of array of event types SHALL be specified without changing this definition.\n\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: string[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceReachabilityStatusSubscription = await client.devicereachabilitystatus.subscriptions.create({\n  config: { subscriptionDetail: {} },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.device-reachability-status-subscriptions.v0.reachability-data'],\n});\n\nconsole.log(deviceReachabilityStatusSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions create',
        example:
          "camara devicereachabilitystatus:subscriptions create \\\n  --bearer-token 'My Bearer Token' \\\n  --config '{subscriptionDetail: {}}' \\\n  --protocol HTTP \\\n  --sink https://endpoint.example.com/sink \\\n  --type org.camaraproject.device-reachability-status-subscriptions.v0.reachability-data",
      },
      go: {
        method: 'client.Devicereachabilitystatus.Subscriptions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceReachabilityStatusSubscription, err := client.Devicereachabilitystatus.Subscriptions.New(context.TODO(), camara.DevicereachabilitystatusSubscriptionNewParams{\n\t\tConfig: camara.DeviceReachabilityStatusConfigParam{\n\t\t\tSubscriptionDetail: camara.DeviceReachabilityStatusConfigSubscriptionDetailParam{\n\t\t\t\tDevice: camara.DeviceReachabilityStatusConfigSubscriptionDetailDeviceParam{\n\t\t\t\t\tPhoneNumber: camara.String("+123456789"),\n\t\t\t\t},\n\t\t\t},\n\t\t\tSubscriptionExpireTime: camara.Time(time.Now()),\n\t\t\tSubscriptionMaxEvents:  camara.Int(5),\n\t\t\tInitialEvent:           camara.Bool(true),\n\t\t},\n\t\tProtocol: camara.DeviceReachabilityStatusProtocolHTTP,\n\t\tSink:     "https://endpoint.example.com/sink",\n\t\tTypes:    []camara.DeviceReachabilityStatusSubscriptionEventType{camara.DeviceReachabilityStatusSubscriptionEventTypeOrgCamaraprojectDeviceReachabilityStatusSubscriptionsV0ReachabilityData},\n\t\tSinkCredential: camara.DevicereachabilitystatusSubscriptionNewParamsSinkCredential{\n\t\t\tCredentialType: "ACCESSTOKEN",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceReachabilityStatusSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicereachabilitystatus/subscriptions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "config": {\n            "subscriptionDetail": {\n              "device": {\n                "phoneNumber": "+123456789"\n              }\n            },\n            "initialEvent": true,\n            "subscriptionExpireTime": "2023-01-17T13:18:23.682Z",\n            "subscriptionMaxEvents": 5\n          },\n          "protocol": "HTTP",\n          "sink": "https://endpoint.example.com/sink",\n          "types": [\n            "org.camaraproject.device-reachability-status-subscriptions.v0.reachability-data"\n          ]\n        }\'',
      },
      php: {
        method: 'devicereachabilitystatus->subscriptions->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceReachabilityStatusSubscription = $client\n  ->devicereachabilitystatus\n  ->subscriptions\n  ->create(\n  config: [\n    'subscriptionDetail' => [\n      'device' => [\n        'ipv4Address' => [\n          'privateAddress' => '84.125.93.10',\n          'publicAddress' => '84.125.93.10',\n          'publicPort' => 59765,\n        ],\n        'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n        'networkAccessIdentifier' => '123456789@example.com',\n        'phoneNumber' => '+123456789',\n      ],\n    ],\n    'initialEvent' => true,\n    'subscriptionExpireTime' => new \\DateTimeImmutable(\n      '2023-01-17T13:18:23.682Z'\n    ),\n    'subscriptionMaxEvents' => 5,\n  ],\n  protocol: DeviceReachabilityStatusProtocol::HTTP,\n  sink: 'https://endpoint.example.com/sink',\n  types: [\n    DeviceReachabilityStatusSubscriptionEventType::ORG_CAMARAPROJECT_DEVICE_REACHABILITY_STATUS_SUBSCRIPTIONS_V0_REACHABILITY_DATA,\n  ],\n  sinkCredential: ['credentialType' => 'ACCESSTOKEN'],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($deviceReachabilityStatusSubscription);",
      },
      typescript: {
        method: 'client.devicereachabilitystatus.subscriptions.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceReachabilityStatusSubscription =\n  await client.devicereachabilitystatus.subscriptions.create({\n    config: {\n      subscriptionDetail: { device: { phoneNumber: '+123456789' } },\n      subscriptionExpireTime: '2023-01-17T13:18:23.682Z',\n      subscriptionMaxEvents: 5,\n      initialEvent: true,\n    },\n    protocol: 'HTTP',\n    sink: 'https://endpoint.example.com/sink',\n    types: ['org.camaraproject.device-reachability-status-subscriptions.v0.reachability-data'],\n    sinkCredential: { credentialType: 'ACCESSTOKEN' },\n  });\n\nconsole.log(deviceReachabilityStatusSubscription.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/devicereachabilitystatus/subscriptions',
    httpMethod: 'get',
    summary: 'Retrieve a list of device reachability status event subscription',
    description: 'Retrieve a list of device reachability status event subscription(s)',
    stainlessPath: '(resource) devicereachabilitystatus.subscriptions > (method) list',
    qualified: 'client.devicereachabilitystatus.subscriptions.list',
    params: ['x-correlator?: string;'],
    response:
      "{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]",
    markdown:
      "## list\n\n`client.devicereachabilitystatus.subscriptions.list(x-correlator?: string): object[]`\n\n**get** `/devicereachabilitystatus/subscriptions`\n\nRetrieve a list of device reachability status event subscription(s)\n\n### Parameters\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceReachabilityStatusSubscriptions = await client.devicereachabilitystatus.subscriptions.list();\n\nconsole.log(deviceReachabilityStatusSubscriptions);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions list',
        example: "camara devicereachabilitystatus:subscriptions list \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Devicereachabilitystatus.Subscriptions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceReachabilityStatusSubscriptions, err := client.Devicereachabilitystatus.Subscriptions.List(context.TODO(), camara.DevicereachabilitystatusSubscriptionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceReachabilityStatusSubscriptions)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicereachabilitystatus/subscriptions \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'devicereachabilitystatus->subscriptions->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceReachabilityStatusSubscriptions = $client\n  ->devicereachabilitystatus\n  ->subscriptions\n  ->list(xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46');\n\nvar_dump($deviceReachabilityStatusSubscriptions);",
      },
      typescript: {
        method: 'client.devicereachabilitystatus.subscriptions.list',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceReachabilityStatusSubscriptions =\n  await client.devicereachabilitystatus.subscriptions.list();\n\nconsole.log(deviceReachabilityStatusSubscriptions);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/devicereachabilitystatus/subscriptions/{subscriptionId}',
    httpMethod: 'get',
    summary: 'Retrieve a device reachability status event subscription for a device',
    description: 'Retrieve a given subscription by ID',
    stainlessPath: '(resource) devicereachabilitystatus.subscriptions > (method) retrieve',
    qualified: 'client.devicereachabilitystatus.subscriptions.retrieve',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response:
      "{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## retrieve\n\n`client.devicereachabilitystatus.subscriptions.retrieve(subscriptionId: string, x-correlator?: string): { id: string; config: device_reachability_status_config; protocol: device_reachability_status_protocol; sink: string; types: device_reachability_status_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**get** `/devicereachabilitystatus/subscriptions/{subscriptionId}`\n\nRetrieve a given subscription by ID\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: string[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: string[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst deviceReachabilityStatusSubscription = await client.devicereachabilitystatus.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(deviceReachabilityStatusSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions retrieve',
        example:
          "camara devicereachabilitystatus:subscriptions retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Devicereachabilitystatus.Subscriptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tdeviceReachabilityStatusSubscription, err := client.Devicereachabilitystatus.Subscriptions.Get(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.DevicereachabilitystatusSubscriptionGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", deviceReachabilityStatusSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicereachabilitystatus/subscriptions/$SUBSCRIPTION_ID \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'devicereachabilitystatus->subscriptions->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$deviceReachabilityStatusSubscription = $client\n  ->devicereachabilitystatus\n  ->subscriptions\n  ->retrieve(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($deviceReachabilityStatusSubscription);",
      },
      typescript: {
        method: 'client.devicereachabilitystatus.subscriptions.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst deviceReachabilityStatusSubscription =\n  await client.devicereachabilitystatus.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(deviceReachabilityStatusSubscription.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/devicereachabilitystatus/subscriptions/{subscriptionId}',
    httpMethod: 'delete',
    summary: 'Delete a device reachability status event subscription for a device',
    description: 'Delete a given subscription by ID',
    stainlessPath: '(resource) devicereachabilitystatus.subscriptions > (method) delete',
    qualified: 'client.devicereachabilitystatus.subscriptions.delete',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response: '{ id: string; }',
    markdown:
      "## delete\n\n`client.devicereachabilitystatus.subscriptions.delete(subscriptionId: string, x-correlator?: string): { id: string; }`\n\n**delete** `/devicereachabilitystatus/subscriptions/{subscriptionId}`\n\nDelete a given subscription by ID\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; }`\n  Response for a device reachability status operation managed asynchronously (Creation or Deletion)\n\n  - `id: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.devicereachabilitystatus.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions delete',
        example:
          "camara devicereachabilitystatus:subscriptions delete \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Devicereachabilitystatus.Subscriptions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Devicereachabilitystatus.Subscriptions.Delete(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.DevicereachabilitystatusSubscriptionDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/devicereachabilitystatus/subscriptions/$SUBSCRIPTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'devicereachabilitystatus->subscriptions->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->devicereachabilitystatus->subscriptions->delete(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.devicereachabilitystatus.subscriptions.delete',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.devicereachabilitystatus.subscriptions.delete(\n  'qs15-h556-rt89-1298',\n);\n\nconsole.log(subscription.id);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/connectednetworktype/subscriptions',
    httpMethod: 'post',
    summary:
      'Create a subscription for receiving notifications on changes to the connected network type of a device',
    description:
      'Create a subscription for receiving notifications on changes to the connected network type of a device.',
    stainlessPath: '(resource) connectednetworktype.subscriptions > (method) create',
    qualified: 'client.connectednetworktype.subscriptions.create',
    params: [
      'config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; };',
      "protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA';",
      'sink: string;',
      "types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[];",
      "sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; };",
      'x-correlator?: string;',
    ],
    response:
      "{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## create\n\n`client.connectednetworktype.subscriptions.create(config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }, protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA', sink: string, types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[], sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }, x-correlator?: string): { id: string; config: connected_network_type_config; protocol: connected_network_type_protocol; sink: string; types: connected_network_type_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**post** `/connectednetworktype/subscriptions`\n\nCreate a subscription for receiving notifications on changes to the connected network type of a device.\n\n### Parameters\n\n- `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  Implementation-specific configuration parameters needed by the subscription manager for acquiring events.\nIn CAMARA we have predefined attributes like `subscriptionExpireTime`, `subscriptionMaxEvents`, `initialEvent`\nSpecific event type attributes must be defined in `subscriptionDetail`\nNote: if a request is performed for several event type, all subscribed event will use same `config` parameters.\n\n  - `subscriptionDetail: { device?: { ipv4Address?: { privateAddress?: string; publicAddress?: string; publicPort?: number; }; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }`\n    The detail of the requested event subscription.\n  - `initialEvent?: boolean`\n    Set to `true` by API consumer if consumer wants to get an event as soon as the subscription is created and current situation reflects event request.\nExample: Consumer request area entered event. If consumer sets initialEvent to true and device is already in the geofence, an event is triggered\n\n  - `subscriptionExpireTime?: string`\n    The subscription expiration time (in date-time format) requested by the API consumer.\n  - `subscriptionMaxEvents?: number`\n    Identifies the maximum number of event reports to be generated (>=1) requested by the API consumer - Once this number is reached, the subscription ends.\n\n- `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  Identifier of a delivery protocol. Only HTTP is allowed for now\n\n- `sink: string`\n  The address to which events shall be delivered using the selected protocol.\n\n- `types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]`\n  Camara Event types eligible to be delivered by this subscription.\nNote: As of now we enforce to have only event type per subscription.\n\n\n- `sinkCredential?: { credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'; }`\n  A sink credential provides authentication or authorization information necessary to enable delivery of events to a target.\n  - `credentialType: 'PLAIN' | 'ACCESSTOKEN' | 'REFRESHTOKEN'`\n    The type of the credential.\nNote: Type of the credential - MUST be set to ACCESSTOKEN for now\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst connectedNetworkTypeSubscription = await client.connectednetworktype.subscriptions.create({\n  config: { subscriptionDetail: {} },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'],\n});\n\nconsole.log(connectedNetworkTypeSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions create',
        example:
          "camara connectednetworktype:subscriptions create \\\n  --bearer-token 'My Bearer Token' \\\n  --config '{subscriptionDetail: {}}' \\\n  --protocol HTTP \\\n  --sink https://endpoint.example.com/sink \\\n  --type org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed",
      },
      go: {
        method: 'client.Connectednetworktype.Subscriptions.New',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\t"time"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tconnectedNetworkTypeSubscription, err := client.Connectednetworktype.Subscriptions.New(context.TODO(), camara.ConnectednetworktypeSubscriptionNewParams{\n\t\tConfig: camara.ConnectedNetworkTypeConfigParam{\n\t\t\tSubscriptionDetail: camara.ConnectedNetworkTypeConfigSubscriptionDetailParam{\n\t\t\t\tDevice: camara.ConnectedNetworkTypeConfigSubscriptionDetailDeviceParam{\n\t\t\t\t\tPhoneNumber: camara.String("+123456789"),\n\t\t\t\t},\n\t\t\t},\n\t\t\tSubscriptionExpireTime: camara.Time(time.Now()),\n\t\t\tSubscriptionMaxEvents:  camara.Int(5),\n\t\t\tInitialEvent:           camara.Bool(true),\n\t\t},\n\t\tProtocol: camara.ConnectedNetworkTypeProtocolHTTP,\n\t\tSink:     "https://endpoint.example.com/sink",\n\t\tTypes:    []camara.ConnectedNetworkTypeSubscriptionEventType{camara.ConnectedNetworkTypeSubscriptionEventTypeOrgCamaraprojectConnectedNetworkTypeSubscriptionsV0NetworkTypeChanged},\n\t\tSinkCredential: camara.ConnectednetworktypeSubscriptionNewParamsSinkCredential{\n\t\t\tCredentialType: "ACCESSTOKEN",\n\t\t},\n\t})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", connectedNetworkTypeSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectednetworktype/subscriptions \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN" \\\n    -d \'{\n          "config": {\n            "subscriptionDetail": {\n              "device": {\n                "phoneNumber": "+123456789"\n              }\n            },\n            "initialEvent": true,\n            "subscriptionExpireTime": "2023-01-17T13:18:23.682Z",\n            "subscriptionMaxEvents": 5\n          },\n          "protocol": "HTTP",\n          "sink": "https://endpoint.example.com/sink",\n          "types": [\n            "org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed"\n          ]\n        }\'',
      },
      php: {
        method: 'connectednetworktype->subscriptions->create',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$connectedNetworkTypeSubscription = $client\n  ->connectednetworktype\n  ->subscriptions\n  ->create(\n  config: [\n    'subscriptionDetail' => [\n      'device' => [\n        'ipv4Address' => [\n          'privateAddress' => '84.125.93.10',\n          'publicAddress' => '84.125.93.10',\n          'publicPort' => 59765,\n        ],\n        'ipv6Address' => '2001:db8:85a3:8d3:1319:8a2e:370:7344',\n        'networkAccessIdentifier' => '123456789@example.com',\n        'phoneNumber' => '+123456789',\n      ],\n    ],\n    'initialEvent' => true,\n    'subscriptionExpireTime' => new \\DateTimeImmutable(\n      '2023-01-17T13:18:23.682Z'\n    ),\n    'subscriptionMaxEvents' => 5,\n  ],\n  protocol: ConnectedNetworkTypeProtocol::HTTP,\n  sink: 'https://endpoint.example.com/sink',\n  types: [\n    ConnectedNetworkTypeSubscriptionEventType::ORG_CAMARAPROJECT_CONNECTED_NETWORK_TYPE_SUBSCRIPTIONS_V0_NETWORK_TYPE_CHANGED,\n  ],\n  sinkCredential: ['credentialType' => 'ACCESSTOKEN'],\n  xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',\n);\n\nvar_dump($connectedNetworkTypeSubscription);",
      },
      typescript: {
        method: 'client.connectednetworktype.subscriptions.create',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst connectedNetworkTypeSubscription = await client.connectednetworktype.subscriptions.create({\n  config: {\n    subscriptionDetail: { device: { phoneNumber: '+123456789' } },\n    subscriptionExpireTime: '2023-01-17T13:18:23.682Z',\n    subscriptionMaxEvents: 5,\n    initialEvent: true,\n  },\n  protocol: 'HTTP',\n  sink: 'https://endpoint.example.com/sink',\n  types: ['org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'],\n  sinkCredential: { credentialType: 'ACCESSTOKEN' },\n});\n\nconsole.log(connectedNetworkTypeSubscription.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/connectednetworktype/subscriptions',
    httpMethod: 'get',
    summary: 'Retrieve a list of device connected network type event subscription',
    description: 'Retrieve a list of device connected network type event subscription(s)',
    stainlessPath: '(resource) connectednetworktype.subscriptions > (method) list',
    qualified: 'client.connectednetworktype.subscriptions.list',
    params: ['x-correlator?: string;'],
    response:
      "{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]",
    markdown:
      "## list\n\n`client.connectednetworktype.subscriptions.list(x-correlator?: string): object[]`\n\n**get** `/connectednetworktype/subscriptions`\n\nRetrieve a list of device connected network type event subscription(s)\n\n### Parameters\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: object; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }[]`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst connectedNetworkTypeSubscriptions = await client.connectednetworktype.subscriptions.list();\n\nconsole.log(connectedNetworkTypeSubscriptions);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions list',
        example: "camara connectednetworktype:subscriptions list \\\n  --bearer-token 'My Bearer Token'",
      },
      go: {
        method: 'client.Connectednetworktype.Subscriptions.List',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tconnectedNetworkTypeSubscriptions, err := client.Connectednetworktype.Subscriptions.List(context.TODO(), camara.ConnectednetworktypeSubscriptionListParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", connectedNetworkTypeSubscriptions)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectednetworktype/subscriptions \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'connectednetworktype->subscriptions->list',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$connectedNetworkTypeSubscriptions = $client\n  ->connectednetworktype\n  ->subscriptions\n  ->list(xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46');\n\nvar_dump($connectedNetworkTypeSubscriptions);",
      },
      typescript: {
        method: 'client.connectednetworktype.subscriptions.list',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst connectedNetworkTypeSubscriptions = await client.connectednetworktype.subscriptions.list();\n\nconsole.log(connectedNetworkTypeSubscriptions);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/connectednetworktype/subscriptions/{subscriptionId}',
    httpMethod: 'get',
    summary: 'Retrieve a device connected network type event subscription for a device',
    description: 'retrieve ConnectedNetworkType subscription information for a given subscription ID.',
    stainlessPath: '(resource) connectednetworktype.subscriptions > (method) retrieve',
    qualified: 'client.connectednetworktype.subscriptions.retrieve',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response:
      "{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }",
    markdown:
      "## retrieve\n\n`client.connectednetworktype.subscriptions.retrieve(subscriptionId: string, x-correlator?: string): { id: string; config: connected_network_type_config; protocol: connected_network_type_protocol; sink: string; types: connected_network_type_subscription_event_type[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n\n**get** `/connectednetworktype/subscriptions/{subscriptionId}`\n\nretrieve ConnectedNetworkType subscription information for a given subscription ID.\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; config: { subscriptionDetail: object; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }; protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'; sink: string; types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]; expiresAt?: string; startsAt?: string; status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'; }`\n  Represents a event-type subscription.\n\n  - `id: string`\n  - `config: { subscriptionDetail: { device?: { ipv4Address?: object; ipv6Address?: string; networkAccessIdentifier?: string; phoneNumber?: string; }; }; initialEvent?: boolean; subscriptionExpireTime?: string; subscriptionMaxEvents?: number; }`\n  - `protocol: 'HTTP' | 'MQTT3' | 'MQTT5' | 'AMQP' | 'NATS' | 'KAFKA'`\n  - `sink: string`\n  - `types: 'org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'[]`\n  - `expiresAt?: string`\n  - `startsAt?: string`\n  - `status?: 'ACTIVATION_REQUESTED' | 'ACTIVE' | 'EXPIRED' | 'INACTIVE' | 'DELETED'`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst connectedNetworkTypeSubscription = await client.connectednetworktype.subscriptions.retrieve('qs15-h556-rt89-1298');\n\nconsole.log(connectedNetworkTypeSubscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions retrieve',
        example:
          "camara connectednetworktype:subscriptions retrieve \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Connectednetworktype.Subscriptions.Get',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tconnectedNetworkTypeSubscription, err := client.Connectednetworktype.Subscriptions.Get(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.ConnectednetworktypeSubscriptionGetParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", connectedNetworkTypeSubscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectednetworktype/subscriptions/$SUBSCRIPTION_ID \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'connectednetworktype->subscriptions->retrieve',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$connectedNetworkTypeSubscription = $client\n  ->connectednetworktype\n  ->subscriptions\n  ->retrieve(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($connectedNetworkTypeSubscription);",
      },
      typescript: {
        method: 'client.connectednetworktype.subscriptions.retrieve',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst connectedNetworkTypeSubscription = await client.connectednetworktype.subscriptions.retrieve(\n  'qs15-h556-rt89-1298',\n);\n\nconsole.log(connectedNetworkTypeSubscription.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/connectednetworktype/subscriptions/{subscriptionId}',
    httpMethod: 'delete',
    summary: 'Delete connected network type event subscription for a device',
    description: 'delete a given ConnectedNetworkType subscription.',
    stainlessPath: '(resource) connectednetworktype.subscriptions > (method) delete',
    qualified: 'client.connectednetworktype.subscriptions.delete',
    params: ['subscriptionId: string;', 'x-correlator?: string;'],
    response: '{ id: string; }',
    markdown:
      "## delete\n\n`client.connectednetworktype.subscriptions.delete(subscriptionId: string, x-correlator?: string): { id: string; }`\n\n**delete** `/connectednetworktype/subscriptions/{subscriptionId}`\n\ndelete a given ConnectedNetworkType subscription.\n\n### Parameters\n\n- `subscriptionId: string`\n  The unique identifier of the subscription in the scope of the subscription manager. When this information is contained within an event notification, this concept SHALL be referred as subscriptionId as per Commonalities Event Notification Model.\n\n- `x-correlator?: string`\n\n### Returns\n\n- `{ id: string; }`\n  Response for a event-type subscription request managed asynchronously (Creation or Deletion)\n\n  - `id: string`\n\n### Example\n\n```typescript\nimport Camara from 'camara-sdk';\n\nconst client = new Camara();\n\nconst subscription = await client.connectednetworktype.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription);\n```",
    perLanguage: {
      cli: {
        method: 'subscriptions delete',
        example:
          "camara connectednetworktype:subscriptions delete \\\n  --bearer-token 'My Bearer Token' \\\n  --subscription-id qs15-h556-rt89-1298",
      },
      go: {
        method: 'client.Connectednetworktype.Subscriptions.Delete',
        example:
          'package main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"),\n\t)\n\tsubscription, err := client.Connectednetworktype.Subscriptions.Delete(\n\t\tcontext.TODO(),\n\t\t"qs15-h556-rt89-1298",\n\t\tcamara.ConnectednetworktypeSubscriptionDeleteParams{},\n\t)\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", subscription.ID)\n}\n',
      },
      http: {
        example:
          'curl https://api.example.com/camara/connectednetworktype/subscriptions/$SUBSCRIPTION_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $CAMARA_BEARER_TOKEN"',
      },
      php: {
        method: 'connectednetworktype->subscriptions->delete',
        example:
          "<?php\n\nrequire_once dirname(__DIR__) . '/vendor/autoload.php';\n\n$client = new Client(bearerToken: 'My Bearer Token');\n\n$subscription = $client->connectednetworktype->subscriptions->delete(\n  'qs15-h556-rt89-1298', xCorrelator: 'b4333c46-49c0-4f62-80d7-f0ef930f1c46'\n);\n\nvar_dump($subscription);",
      },
      typescript: {
        method: 'client.connectednetworktype.subscriptions.delete',
        example:
          "import Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst subscription = await client.connectednetworktype.subscriptions.delete('qs15-h556-rt89-1298');\n\nconsole.log(subscription.id);",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'go',
    content:
      '# Camara Go API Library\n\n<a href="https://pkg.go.dev/github.com/stainless-sdks/camara-go"><img src="https://pkg.go.dev/badge/github.com/stainless-sdks/camara-go.svg" alt="Go Reference"></a>\n\nThe Camara Go library provides convenient access to the Camara REST API\nfrom applications written in Go.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Camara MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=camara-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNhbWFyYS1zZGstbWNwIl0sImVudiI6eyJDQU1BUkFfQkVBUkVSX1RPS0VOIjoiTXkgQ29ubmVjdGVkIE5ldHdvcmsgVHlwZSBUb2tlbiIsIkNBTUFSQV9ERVZJQ0VfTE9DQVRJT05fTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgRGV2aWNlIExvY2F0aW9uIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIkNBTUFSQV9OT1RJRklDQVRJT05TX0FQSV9LRVkiOiJNeSBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfUE9QVUxBVElPTl9ERU5TSVRZX0RBVEFfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgUG9wdWxhdGlvbiBEZW5zaXR5IERhdGEgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX1JFR0lPTl9ERVZJQ0VfQ09VTlRfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgUmVnaW9uIERldmljZSBDb3VudCBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfQ09OTkVDVElWSVRZX0lOU0lHSFRTX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IENvbm5lY3Rpdml0eSBJbnNpZ2h0cyBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfU0lNX1NXQVBfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgU2ltIFN3YXAgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX0RFVklDRV9ST0FNSU5HX1NUQVRVU19OT1RJRklDQVRJT05TX0FQSV9LRVkiOiJNeSBEZXZpY2UgUm9hbWluZyBTdGF0dXMgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX0RFVklDRV9SRUFDSEFCSUxJVFlfU1RBVFVTX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IERldmljZSBSZWFjaGFiaWxpdHkgU3RhdHVzIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIkNBTUFSQV9DT05ORUNURURfTkVUV09SS19UWVBFX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IENvbm5lY3RlZCBOZXR3b3JrIFR5cGUgTm90aWZpY2F0aW9ucyBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22camara-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22camara-sdk-mcp%22%5D%2C%22env%22%3A%7B%22CAMARA_BEARER_TOKEN%22%3A%22My%20Connected%20Network%20Type%20Token%22%2C%22CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Location%20Notifications%20API%20Key%22%2C%22CAMARA_NOTIFICATIONS_API_KEY%22%3A%22My%20Notifications%20API%20Key%22%2C%22CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY%22%3A%22My%20Population%20Density%20Data%20Notifications%20API%20Key%22%2C%22CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY%22%3A%22My%20Region%20Device%20Count%20Notifications%20API%20Key%22%2C%22CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY%22%3A%22My%20Connectivity%20Insights%20Notifications%20API%20Key%22%2C%22CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY%22%3A%22My%20Sim%20Swap%20Notifications%20API%20Key%22%2C%22CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Roaming%20Status%20Notifications%20API%20Key%22%2C%22CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Reachability%20Status%20Notifications%20API%20Key%22%2C%22CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY%22%3A%22My%20Connected%20Network%20Type%20Notifications%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n\n\n```go\nimport (\n\t"github.com/stainless-sdks/camara-go" // imported as SDK_PackageName\n)\n```\n\n\n\nOr to pin the version:\n\n\n\n```sh\ngo get -u \'github.com/stainless-sdks/camara-go@v0.0.1\'\n```\n\n\n\n## Requirements\n\nThis library requires Go 1.22+.\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n```go\npackage main\n\nimport (\n\t"context"\n\t"fmt"\n\n\t"github.com/stainless-sdks/camara-go"\n\t"github.com/stainless-sdks/camara-go/option"\n)\n\nfunc main() {\n\tclient := camara.NewClient(\n\t\toption.WithBearerToken("My Bearer Token"), // defaults to os.LookupEnv("CAMARA_BEARER_TOKEN")\n\t)\n\tscoring, err := client.Customerinsights.Scoring.Get(context.TODO(), camara.CustomerinsightScoringGetParams{})\n\tif err != nil {\n\t\tpanic(err.Error())\n\t}\n\tfmt.Printf("%+v\\n", scoring.ScoringType)\n}\n\n```\n\n### Request fields\n\nAll request parameters are wrapped in a generic `Field` type,\nwhich we use to distinguish zero values from null or omitted fields.\n\nThis prevents accidentally sending a zero value if you forget a required parameter,\nand enables explicitly sending `null`, `false`, `\'\'`, or `0` on optional parameters.\nAny field not specified is not sent.\n\nTo construct fields with values, use the helpers `String()`, `Int()`, `Float()`, or most commonly, the generic `F[T]()`.\nTo send a null, use `Null[T]()`, and to send a nonconforming value, use `Raw[T](any)`. For example:\n\n```go\nparams := FooParams{\n\tName: SDK_PackageName.F("hello"),\n\n\t// Explicitly send `"description": null`\n\tDescription: SDK_PackageName.Null[string](),\n\n\tPoint: SDK_PackageName.F(SDK_PackageName.Point{\n\t\tX: SDK_PackageName.Int(0),\n\t\tY: SDK_PackageName.Int(1),\n\n\t\t// In cases where the API specifies a given type,\n\t\t// but you want to send something else, use `Raw`:\n\t\tZ: SDK_PackageName.Raw[int64](0.01), // sends a float\n\t}),\n}\n```\n\n### Response objects\n\nAll fields in response structs are value types (not pointers or wrappers).\n\nIf a given field is `null`, not present, or invalid, the corresponding field\nwill simply be its zero value.\n\nAll response structs also include a special `JSON` field, containing more detailed\ninformation about each property, which you can use like so:\n\n```go\nif res.Name == "" {\n\t// true if `"name"` is either not present or explicitly null\n\tres.JSON.Name.IsNull()\n\n\t// true if the `"name"` key was not present in the response JSON at all\n\tres.JSON.Name.IsMissing()\n\n\t// When the API returns data that cannot be coerced to the expected type:\n\tif res.JSON.Name.IsInvalid() {\n\t\traw := res.JSON.Name.Raw()\n\n\t\tlegacyName := struct{\n\t\t\tFirst string `json:"first"`\n\t\t\tLast  string `json:"last"`\n\t\t}{}\n\t\tjson.Unmarshal([]byte(raw), &legacyName)\n\t\tname = legacyName.First + " " + legacyName.Last\n\t}\n}\n```\n\nThese `.JSON` structs also include an `Extras` map containing\nany properties in the json response that were not specified\nin the struct. This can be useful for API features not yet\npresent in the SDK.\n\n```go\nbody := res.JSON.ExtraFields["my_unexpected_field"].Raw()\n```\n\n### RequestOptions\n\nThis library uses the functional options pattern. Functions defined in the\n`SDK_PackageOptionName` package return a `RequestOption`, which is a closure that mutates a\n`RequestConfig`. These options can be supplied to the client or at individual\nrequests. For example:\n\n```go\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\t// Adds a header to every request made by the client\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "custom_header_info"),\n)\n\nclient.Customerinsights.Scoring.Get(context.TODO(), ...,\n\t// Override the header\n\tSDK_PackageOptionName.WithHeader("X-Some-Header", "some_other_custom_header_info"),\n\t// Add an undocumented field to the request body, using sjson syntax\n\tSDK_PackageOptionName.WithJSONSet("some.json.path", map[string]string{"my": "object"}),\n)\n```\n\nSee the [full list of request options](https://pkg.go.dev/github.com/stainless-sdks/camara-go/SDK_PackageOptionName).\n\n### Pagination\n\nThis library provides some conveniences for working with paginated list endpoints.\n\nYou can use `.ListAutoPaging()` methods to iterate through items across all pages:\n\n\n\nOr you can use simple `.List()` methods to fetch a single page and receive a standard response object\nwith additional helper methods like `.GetNextPage()`, e.g.:\n\n\n\n### Errors\n\nWhen the API returns a non-success status code, we return an error with type\n`*SDK_PackageName.Error`. This contains the `StatusCode`, `*http.Request`, and\n`*http.Response` values of the request, as well as the JSON of the error body\n(much like other response objects in the SDK).\n\nTo handle errors, we recommend that you use the `errors.As` pattern:\n\n```go\n_, err := client.Customerinsights.Scoring.Get(context.TODO(), camara.CustomerinsightScoringGetParams{})\nif err != nil {\n\tvar apierr *camara.Error\n\tif errors.As(err, &apierr) {\n\t\tprintln(string(apierr.DumpRequest(true)))  // Prints the serialized HTTP request\n\t\tprintln(string(apierr.DumpResponse(true))) // Prints the serialized HTTP response\n\t}\n\tpanic(err.Error()) // GET "/customerinsights/scoring/retrieve": 400 Bad Request { ... }\n}\n```\n\nWhen other errors occur, they are returned unwrapped; for example,\nif HTTP transport fails, you might receive `*url.Error` wrapping `*net.OpError`.\n\n### Timeouts\n\nRequests do not time out by default; use context to configure a timeout for a request lifecycle.\n\nNote that if a request is [retried](#retries), the context timeout does not start over.\nTo set a per-retry timeout, use `SDK_PackageOptionName.WithRequestTimeout()`.\n\n```go\n// This sets the timeout for the request, including all the retries.\nctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)\ndefer cancel()\nclient.Customerinsights.Scoring.Get(\n\tctx,\n\tcamara.CustomerinsightScoringGetParams{},\n\t// This sets the per-retry timeout\n\toption.WithRequestTimeout(20*time.Second),\n)\n```\n\n### File uploads\n\nRequest parameters that correspond to file uploads in multipart requests are typed as\n`param.Field[io.Reader]`. The contents of the `io.Reader` will by default be sent as a multipart form\npart with the file name of "anonymous_file" and content-type of "application/octet-stream".\n\nThe file name and content-type can be customized by implementing `Name() string` or `ContentType()\nstring` on the run-time type of `io.Reader`. Note that `os.File` implements `Name() string`, so a\nfile returned by `os.Open` will be sent with the file name on disk.\n\nWe also provide a helper `SDK_PackageName.FileParam(reader io.Reader, filename string, contentType string)`\nwhich can be used to wrap any `io.Reader` with the appropriate file name and content type.\n\n\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nWe retry by default all connection errors, 408 Request Timeout, 409 Conflict, 429 Rate Limit,\nand >=500 Internal errors.\n\nYou can use the `WithMaxRetries` option to configure or disable this:\n\n```go\n// Configure the default for all requests:\nclient := camara.NewClient(\n\toption.WithMaxRetries(0), // default is 2\n)\n\n// Override per-request:\nclient.Customerinsights.Scoring.Get(\n\tcontext.TODO(),\n\tcamara.CustomerinsightScoringGetParams{},\n\toption.WithMaxRetries(5),\n)\n```\n\n\n### Accessing raw response data (e.g. response headers)\n\nYou can access the raw HTTP response data by using the `option.WithResponseInto()` request option. This is useful when\nyou need to examine response headers, status codes, or other details.\n\n```go\n// Create a variable to store the HTTP response\nvar response *http.Response\nscoring, err := client.Customerinsights.Scoring.Get(\n\tcontext.TODO(),\n\tcamara.CustomerinsightScoringGetParams{},\n\toption.WithResponseInto(&response),\n)\nif err != nil {\n\t// handle error\n}\nfmt.Printf("%+v\\n", scoring)\n\nfmt.Printf("Status Code: %d\\n", response.StatusCode)\nfmt.Printf("Headers: %+#v\\n", response.Header)\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.Get`, `client.Post`, and other HTTP verbs.\n`RequestOptions` on the client, such as retries, will be respected when making these requests.\n\n```go\nvar (\n    // params can be an io.Reader, a []byte, an encoding/json serializable object,\n    // or a "…Params" struct defined in this library.\n    params map[string]interface{}\n\n    // result can be an []byte, *http.Response, a encoding/json deserializable object,\n    // or a model defined in this library.\n    result *http.Response\n)\nerr := client.Post(context.Background(), "/unspecified", params, &result)\nif err != nil {\n    …\n}\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use either the `SDK_PackageOptionName.WithQuerySet()`\nor the `SDK_PackageOptionName.WithJSONSet()` methods.\n\n```go\nparams := FooNewParams{\n    ID:   SDK_PackageName.F("id_xxxx"),\n    Data: SDK_PackageName.F(FooNewParamsData{\n        FirstName: SDK_PackageName.F("John"),\n    }),\n}\nclient.Foo.New(context.Background(), params, SDK_PackageOptionName.WithJSONSet("data.last_name", "Doe"))\n```\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may either access the raw JSON of the response as a string\nwith `result.JSON.RawJSON()`, or get the raw JSON of a particular field on the result with\n`result.JSON.Foo.Raw()`.\n\nAny fields that are not present on the response struct will be saved and can be accessed by `result.JSON.ExtraFields()` which returns the extra fields as a `map[string]Field`.\n\n### Middleware\n\nWe provide `SDK_PackageOptionName.WithMiddleware` which applies the given\nmiddleware to requests.\n\n```go\nfunc Logger(req *http.Request, next SDK_PackageOptionName.MiddlewareNext) (res *http.Response, err error) {\n\t// Before the request\n\tstart := time.Now()\n\tLogReq(req)\n\n\t// Forward the request to the next handler\n\tres, err = next(req)\n\n\t// Handle stuff after the request\n\tend := time.Now()\n\tLogRes(res, err, start - end)\n\n    return res, err\n}\n\nclient := SDK_PackageName.SDK_ClientInitializerName(\n\tSDK_PackageOptionName.WithMiddleware(Logger),\n)\n```\n\nWhen multiple middlewares are provided as variadic arguments, the middlewares\nare applied left to right. If `SDK_PackageOptionName.WithMiddleware` is given\nmultiple times, for example first in the client then the method, the\nmiddleware in the client will run first and the middleware given in the method\nwill run next.\n\nYou may also replace the default `http.Client` with\n`SDK_PackageOptionName.WithHTTPClient(client)`. Only one http client is\naccepted (this overwrites any previous client) and receives requests after any\nmiddleware has been applied.\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n2. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/stainless-sdks/camara-go/issues) with questions, bugs, or suggestions.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n',
  },
  {
    language: 'typescript',
    content:
      "# Camara TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/camara-sdk.svg?label=npm%20(stable))](https://npmjs.org/package/camara-sdk) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/camara-sdk)\n\nThis library provides convenient access to the Camara REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Camara MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=camara-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNhbWFyYS1zZGstbWNwIl0sImVudiI6eyJDQU1BUkFfQkVBUkVSX1RPS0VOIjoiTXkgQ29ubmVjdGVkIE5ldHdvcmsgVHlwZSBUb2tlbiIsIkNBTUFSQV9ERVZJQ0VfTE9DQVRJT05fTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgRGV2aWNlIExvY2F0aW9uIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIkNBTUFSQV9OT1RJRklDQVRJT05TX0FQSV9LRVkiOiJNeSBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfUE9QVUxBVElPTl9ERU5TSVRZX0RBVEFfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgUG9wdWxhdGlvbiBEZW5zaXR5IERhdGEgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX1JFR0lPTl9ERVZJQ0VfQ09VTlRfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgUmVnaW9uIERldmljZSBDb3VudCBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfQ09OTkVDVElWSVRZX0lOU0lHSFRTX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IENvbm5lY3Rpdml0eSBJbnNpZ2h0cyBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfU0lNX1NXQVBfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgU2ltIFN3YXAgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX0RFVklDRV9ST0FNSU5HX1NUQVRVU19OT1RJRklDQVRJT05TX0FQSV9LRVkiOiJNeSBEZXZpY2UgUm9hbWluZyBTdGF0dXMgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX0RFVklDRV9SRUFDSEFCSUxJVFlfU1RBVFVTX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IERldmljZSBSZWFjaGFiaWxpdHkgU3RhdHVzIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIkNBTUFSQV9DT05ORUNURURfTkVUV09SS19UWVBFX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IENvbm5lY3RlZCBOZXR3b3JrIFR5cGUgTm90aWZpY2F0aW9ucyBBUEkgS2V5In19)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22camara-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22camara-sdk-mcp%22%5D%2C%22env%22%3A%7B%22CAMARA_BEARER_TOKEN%22%3A%22My%20Connected%20Network%20Type%20Token%22%2C%22CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Location%20Notifications%20API%20Key%22%2C%22CAMARA_NOTIFICATIONS_API_KEY%22%3A%22My%20Notifications%20API%20Key%22%2C%22CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY%22%3A%22My%20Population%20Density%20Data%20Notifications%20API%20Key%22%2C%22CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY%22%3A%22My%20Region%20Device%20Count%20Notifications%20API%20Key%22%2C%22CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY%22%3A%22My%20Connectivity%20Insights%20Notifications%20API%20Key%22%2C%22CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY%22%3A%22My%20Sim%20Swap%20Notifications%20API%20Key%22%2C%22CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Roaming%20Status%20Notifications%20API%20Key%22%2C%22CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Reachability%20Status%20Notifications%20API%20Key%22%2C%22CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY%22%3A%22My%20Connected%20Network%20Type%20Notifications%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install camara-sdk\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst scoring = await client.customerinsights.scoring.retrieve();\n\nconsole.log(scoring.scoringType);\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport Camara from 'camara-sdk';\n\nconst client = new Camara({\n  bearerToken: process.env['CAMARA_BEARER_TOKEN'], // This is the default and can be omitted\n});\n\nconst scoring: Camara.Customerinsights.ScoringRetrieveResponse =\n  await client.customerinsights.scoring.retrieve();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst scoring = await client.customerinsights.scoring.retrieve().catch(async (err) => {\n  if (err instanceof Camara.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new Camara({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.customerinsights.scoring.retrieve({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new Camara({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.customerinsights.scoring.retrieve({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new Camara();\n\nconst response = await client.customerinsights.scoring.retrieve().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: scoring, response: raw } = await client.customerinsights.scoring\n  .retrieve()\n  .withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(scoring.scoringType);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `CAMARA_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport Camara from 'camara-sdk';\n\nconst client = new Camara({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport Camara from 'camara-sdk';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new Camara({\n  logger: logger.child({ name: 'Camara' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.customerinsights.scoring.retrieve({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport Camara from 'camara-sdk';\nimport fetch from 'my-fetch';\n\nconst client = new Camara({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport Camara from 'camara-sdk';\n\nconst client = new Camara({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport Camara from 'camara-sdk';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new Camara({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport Camara from 'camara-sdk';\n\nconst client = new Camara({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport Camara from 'npm:camara-sdk';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new Camara({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/andreibesleaga/camara-sdk/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
  {
    language: 'cli',
    content:
      "# Camara CLI\n\nThe official CLI for the Camara REST API.\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## Installation\n\n### Installing with Go\n\nTo test or install the CLI locally, you need [Go](https://go.dev/doc/install) version 1.22 or later installed.\n\n~~~sh\ngo install 'github.com/stainless-sdks/camara-cli/cmd/camara@latest'\n~~~\n\nOnce you have run `go install`, the binary is placed in your Go bin directory:\n\n- **Default location**: `$HOME/go/bin` (or `$GOPATH/bin` if GOPATH is set)\n- **Check your path**: Run `go env GOPATH` to see the base directory\n\nIf commands aren't found after installation, add the Go bin directory to your PATH:\n\n~~~sh\n# Add to your shell profile (.zshrc, .bashrc, etc.)\nexport PATH=\"$PATH:$(go env GOPATH)/bin\"\n~~~\n\n### Running Locally\n\nAfter cloning the git repository for this project, you can use the\n`scripts/run` script to run the tool locally:\n\n~~~sh\n./scripts/run args...\n~~~\n\n## Usage\n\nThe CLI follows a resource-based command structure:\n\n~~~sh\ncamara [resource] <command> [flags...]\n~~~\n\n~~~sh\ncamara customerinsights:scoring retrieve \\\n  --bearer-token 'My Bearer Token'\n~~~\n\nFor details about specific commands, use the `--help` flag.\n\n### Environment variables\n\n| Environment variable                                      | Required |\n| --------------------------------------------------------- | -------- |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_BEARER_TOKEN`                                     | yes      |\n| `CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY`            | yes      |\n| `CAMARA_NOTIFICATIONS_API_KEY`                            | yes      |\n| `CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY`    | yes      |\n| `CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY`        | yes      |\n| `CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY`      | yes      |\n| `CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY`                   | yes      |\n| `CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY`      | yes      |\n| `CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY` | yes      |\n| `CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY`     | yes      |\n\n### Global flags\n\n- `--bearer-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--customer-insights-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--device-swap-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--kyc-age-verification-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--kyc-fill-in-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--kyc-match-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--tenure-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--number-recycling-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--otp-validation-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--call-forwarding-signal-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--device-location-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--population-density-data-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--region-device-count-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--web-rtc-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--connectivity-insights-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--quality-on-demand-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--device-identifier-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--sim-swap-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--device-roaming-status-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--device-reachability-status-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--connected-network-type-token` (can also be set with `CAMARA_BEARER_TOKEN` env var)\n- `--device-location-notifications-api-key` (can also be set with `CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY` env var)\n- `--notifications-api-key` (can also be set with `CAMARA_NOTIFICATIONS_API_KEY` env var)\n- `--population-density-data-notifications-api-key` (can also be set with `CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY` env var)\n- `--region-device-count-notifications-api-key` (can also be set with `CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY` env var)\n- `--connectivity-insights-notifications-api-key` (can also be set with `CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY` env var)\n- `--sim-swap-notifications-api-key` (can also be set with `CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY` env var)\n- `--device-roaming-status-notifications-api-key` (can also be set with `CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY` env var)\n- `--device-reachability-status-notifications-api-key` (can also be set with `CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY` env var)\n- `--connected-network-type-notifications-api-key` (can also be set with `CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY` env var)\n- `--help` - Show command line usage\n- `--debug` - Enable debug logging (includes HTTP request/response details)\n- `--version`, `-v` - Show the CLI version\n- `--base-url` - Use a custom API backend URL\n- `--format` - Change the output format (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--format-error` - Change the output format for errors (`auto`, `explore`, `json`, `jsonl`, `pretty`, `raw`, `yaml`)\n- `--transform` - Transform the data output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n- `--transform-error` - Transform the error output using [GJSON syntax](https://github.com/tidwall/gjson/blob/master/SYNTAX.md)\n\n### Passing files as arguments\n\nTo pass files to your API, you can use the `@myfile.ext` syntax:\n\n~~~bash\ncamara <command> --arg @abe.jpg\n~~~\n\nFiles can also be passed inside JSON or YAML blobs:\n\n~~~bash\ncamara <command> --arg '{image: \"@abe.jpg\"}'\n# Equivalent:\ncamara <command> <<YAML\narg:\n  image: \"@abe.jpg\"\nYAML\n~~~\n\nIf you need to pass a string literal that begins with an `@` sign, you can\nescape the `@` sign to avoid accidentally passing a file.\n\n~~~bash\ncamara <command> --username '\\@abe'\n~~~\n\n#### Explicit encoding\n\nFor JSON endpoints, the CLI tool does filetype sniffing to determine whether the\nfile contents should be sent as a string literal (for plain text files) or as a\nbase64-encoded string literal (for binary files). If you need to explicitly send\nthe file as either plain text or base64-encoded data, you can use\n`@file://myfile.txt` (for string encoding) or `@data://myfile.dat` (for\nbase64-encoding). Note that absolute paths will begin with `@file://` or\n`@data://`, followed by a third `/` (for example, `@file:///tmp/file.txt`).\n\n~~~bash\ncamara <command> --arg @data://file.txt\n~~~\n\n## Linking different Go SDK versions\n\nYou can link the CLI against a different version of the Camara Go SDK\nfor development purposes using the `./scripts/link` script.\n\nTo link to a specific version from a repository (version can be a branch,\ngit tag, or commit hash):\n\n~~~bash\n./scripts/link github.com/org/repo@version\n~~~\n\nTo link to a local copy of the SDK:\n\n~~~bash\n./scripts/link ../path/to/camara-go\n~~~\n\nIf you run the link script without any arguments, it will default to `../camara-go`.\n",
  },
  {
    language: 'php',
    content:
      '# Camara PHP API Library\n\nThe Camara PHP library provides convenient access to the Camara REST API from any PHP 8.1.0+ application.\n\n## Installation\n\nTo use this package, install via Composer by adding the following to your application\'s `composer.json`:\n\n<!-- x-release-please-start-version -->\n```json\n{\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "git@github.com:andreibesleaga/camara-php.git"\n    }\n  ],\n  "require": {\n    "andreibesleaga/camara-php": "dev-main"\n  }\n}\n```\n<!-- x-release-please-end -->\n\n## Usage\n\n```php\n<?php\n\n$client = new Client(\n  bearerToken: getenv(\'CAMARA_BEARER_TOKEN\') ?: \'My Bearer Token\'\n);\n\n$scoring = $client->customerinsights->scoring->retrieve();\n\nvar_dump($scoring->scoringType);\n```',
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
