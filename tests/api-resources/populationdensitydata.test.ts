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

describe('resource populationdensitydata', () => {
  // Prism doesn't support callbacks yet
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.populationdensitydata.retrieve({
      area: { areaType: 'POLYGON' },
      endTime: '2024-04-23T14:44:18.165Z',
      startTime: '2024-04-23T14:44:18.165Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.populationdensitydata.retrieve({
      area: { areaType: 'POLYGON' },
      endTime: '2024-04-23T14:44:18.165Z',
      startTime: '2024-04-23T14:44:18.165Z',
      precision: 7,
      sink: 'https://endpoint.example.com/sink',
      sinkCredential: { credentialType: 'PLAIN' },
      'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',
    });
  });
});
