// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Camara from 'camara-sdk';

const client = new Camara({
  bearerToken: 'My Bearer Token',
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

describe('resource deviceswap', () => {
  // Mock server tests are disabled
  test.skip('check', async () => {
    const responsePromise = client.deviceswap.check({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveDate', async () => {
    const responsePromise = client.deviceswap.retrieveDate({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
