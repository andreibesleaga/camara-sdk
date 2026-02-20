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

describe('resource subscriptions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.connectivityinsights.subscriptions.create({
      config: {
        subscriptionDetail: {
          applicationProfileId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          device: {},
        },
      },
      protocol: 'HTTP',
      sink: 'https://endpoint.example.com/sink',
      types: ['org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.connectivityinsights.subscriptions.create({
      config: {
        subscriptionDetail: {
          applicationProfileId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          device: {
            ipv4Address: {
              privateAddress: '84.125.93.10',
              publicAddress: '84.125.93.10',
              publicPort: 59765,
            },
            ipv6Address: '2001:db8:85a3:8d3:1319:8a2e:370:7344',
            networkAccessIdentifier: '123456789@domain.com',
            phoneNumber: '+123456789',
          },
          applicationServer: {
            ipv4Address: '192.168.0.1/24',
            ipv6Address: '2001:db8:85a3:8d3:1319:8a2e:370:7344',
          },
          applicationServerPorts: { ports: [5060, 5070], ranges: [{ from: 5010, to: 5020 }] },
        },
        initialEvent: true,
        subscriptionExpireTime: '2023-07-03T12:27:08.312Z',
        subscriptionMaxEvents: 5,
      },
      protocol: 'HTTP',
      sink: 'https://endpoint.example.com/sink',
      types: ['org.camaraproject.connectivity-insights-subscriptions.v0.network-quality'],
      sinkCredential: { credentialType: 'PLAIN' },
      'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.connectivityinsights.subscriptions.retrieve('qs15-h556-rt89-1298');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectivityinsights.subscriptions.retrieve(
        'qs15-h556-rt89-1298',
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.connectivityinsights.subscriptions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectivityinsights.subscriptions.list(
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.connectivityinsights.subscriptions.delete('qs15-h556-rt89-1298');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.connectivityinsights.subscriptions.delete(
        'qs15-h556-rt89-1298',
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });
});
