// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Camara from 'camara-sdk';

const client = new Camara({
  deviceLocationNotificationsAPIKey: 'My Device Location Notifications API Key',
  notificationsAPIKey: 'My Notifications API Key',
  populationDensityDataNotificationsAPIKey: 'My Population Density Data Notifications API Key',
  regionDeviceCountNotificationsAPIKey: 'My Region Device Count Notifications API Key',
  connectivityInsightsNotificationsAPIKey: 'My Connectivity Insights Notifications API Key',
  simSwapNotificationsAPIKey: 'My Sim Swap Notifications API Key',
  deviceRoamingStatusNotificationsAPIKey: 'My Device Roaming Status Notifications API Key',
  deviceReachabilityStatusNotificationsAPIKey: 'My Device Reachability Status Notifications API Key',
  connectedNetworkTypeNotificationsAPIKey: 'My Connected Network Type Notifications API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource knowyourcustomerageverification', () => {
  // Prism tests are disabled
  test.skip('verify: only required params', async () => {
    const responsePromise = client.knowyourcustomerageverification.verify({ ageThreshold: 18 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('verify: required and optional params', async () => {
    const response = await client.knowyourcustomerageverification.verify({
      ageThreshold: 18,
      birthdate: '1978-08-22',
      email: 'federicaSanchez.Arjona@example.com',
      familyName: 'Sanchez Arjona',
      familyNameAtBirth: 'YYYY',
      givenName: 'Federica',
      idDocument: '66666666q',
      includeContentLock: true,
      includeParentalControl: true,
      middleNames: 'Sanchez',
      name: 'Federica Sanchez Arjona',
      phoneNumber: '+34629255833',
      'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',
    });
  });
});
