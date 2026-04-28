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

describe('resource knowyourcustomerfillIn', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.knowyourcustomerfillIn.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
