// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Camara from 'camara-sdk';

const client = new Camara({
  bearerToken: 'My Bearer Token',
  customerInsightsToken: 'My Customer Insights Token',
  deviceSwapToken: 'My Device Swap Token',
  kycAgeVerificationToken: 'My KYC Age Verification Token',
  kycFillInToken: 'My KYC Fill In Token',
  kycMatchToken: 'My KYC Match Token',
  tenureToken: 'My Tenure Token',
  numberRecyclingToken: 'My Number Recycling Token',
  otpValidationToken: 'My Otp Validation Token',
  callForwardingSignalToken: 'My Call Forwarding Signal Token',
  deviceLocationToken: 'My Device Location Token',
  populationDensityDataToken: 'My Population Density Data Token',
  regionDeviceCountToken: 'My Region Device Count Token',
  webRtcToken: 'My Web Rtc Token',
  connectivityInsightsToken: 'My Connectivity Insights Token',
  qualityOnDemandToken: 'My Quality On Demand Token',
  deviceIdentifierToken: 'My Device Identifier Token',
  simSwapToken: 'My Sim Swap Token',
  deviceRoamingStatusToken: 'My Device Roaming Status Token',
  deviceReachabilityStatusToken: 'My Device Reachability Status Token',
  connectedNetworkTypeToken: 'My Connected Network Type Token',
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
    const responsePromise = client.connectednetworktype.subscriptions.create({
      config: { subscriptionDetail: {} },
      protocol: 'HTTP',
      sink: 'https://endpoint.example.com/sink',
      types: ['org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'],
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
    const response = await client.connectednetworktype.subscriptions.create({
      config: {
        subscriptionDetail: {
          device: {
            ipv4Address: {
              privateAddress: '84.125.93.10',
              publicAddress: '84.125.93.10',
              publicPort: 59765,
            },
            ipv6Address: '2001:db8:85a3:8d3:1319:8a2e:370:7344',
            networkAccessIdentifier: '123456789@example.com',
            phoneNumber: '+123456789',
          },
        },
        initialEvent: true,
        subscriptionExpireTime: '2023-01-17T13:18:23.682Z',
        subscriptionMaxEvents: 5,
      },
      protocol: 'HTTP',
      sink: 'https://endpoint.example.com/sink',
      types: ['org.camaraproject.connected-network-type-subscriptions.v0.network-type-changed'],
      sinkCredential: { credentialType: 'ACCESSTOKEN' },
      'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.connectednetworktype.subscriptions.retrieve('qs15-h556-rt89-1298');
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
      client.connectednetworktype.subscriptions.retrieve(
        'qs15-h556-rt89-1298',
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.connectednetworktype.subscriptions.list();
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
      client.connectednetworktype.subscriptions.list(
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.connectednetworktype.subscriptions.delete('qs15-h556-rt89-1298');
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
      client.connectednetworktype.subscriptions.delete(
        'qs15-h556-rt89-1298',
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });
});
