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

describe('resource sessions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.webrtc.sessions.create({ registrationId: 'registrationId' });
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
    const response = await client.webrtc.sessions.create({
      registrationId: 'registrationId',
      answer: { sdp: 'sdp' },
      callType: 'REGULAR',
      locationDetails: {
        confidence: { pdf: 'normal', value: 0 },
        coordinates: {
          latitude: 0,
          longitude: 0,
          radius: 0,
        },
        method: 'GPS',
        shape: 'Circle',
        timestamp: '2019-12-27T18:11:19.117Z',
      },
      body_media_session_id: '0AEE1B58BAEEDA3EABA42B32EBB3DFE07E9CFF402EAF9EED8EF',
      offer: {
        sdp: 'v=0\r\no=- 8066321617929821805 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\nm=audio 42988 RTP/SAVPF 102 113\r\nc=IN IP6 2001:e0:410:2448:7a05:9b11:66f2:c9e\r\nb=AS:64\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=candidate:1645903805 1 udp 2122262783 2001:e0:410:2448:7a05:9b11:66f2:c9e 42988 typ host generation 0 network-id 3 network-cost 900\r\na=ice-ufrag:4eKp\r\na=ice-pwd:D4sF5Pv9vx9ggaqxBlHbAFMx\r\na=ice-options:trickle renomination\r\na=mid:audio\r\na=extmap:2 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=sendrecv\r\na=rtcp-mux\r\na=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:Xm3YciqVIWFNSwy19e9MvfZ2YOdAZil7oT/tHjdf\r\na=rtpmap:102 AMR-WB/16000\r\na=fmtp:102 octet-align=0; mode-set=0,1,2; mode-change-capability=2\r\na=rtpmap:113 telephone-event/16000\r\n',
      },
      originatorAddress: 'tel:+17085852753',
      originatorName: 'tel:+17085852753',
      receiverAddress: 'tel:+17085854000',
      receiverName: 'tel:+17085854000',
      status: 'Ringing',
      'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.webrtc.sessions.retrieve('mediaSessionId');
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
      client.webrtc.sessions.retrieve(
        'mediaSessionId',
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.webrtc.sessions.delete('mediaSessionId');
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
      client.webrtc.sessions.delete(
        'mediaSessionId',
        { 'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('updateStatus', async () => {
    const responsePromise = client.webrtc.sessions.updateStatus('mediaSessionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('updateStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.webrtc.sessions.updateStatus(
        'mediaSessionId',
        {
          answer: { sdp: 'sdp' },
          callType: 'REGULAR',
          locationDetails: {
            confidence: { pdf: 'normal', value: 0 },
            coordinates: {
              latitude: 0,
              longitude: 0,
              radius: 0,
            },
            method: 'GPS',
            shape: 'Circle',
            timestamp: '2019-12-27T18:11:19.117Z',
          },
          body_media_session_id: '0AEE1B58BAEEDA3EABA42B32EBB3DFE07E9CFF402EAF9EED8EF',
          offer: { sdp: 'sdp' },
          originatorAddress: 'tel:+11234567899',
          originatorName: 'Alice',
          receiverAddress: 'tel:+11234567899',
          receiverName: 'Bob',
          status: 'Ringing',
          'x-correlator': 'b4333c46-49c0-4f62-80d7-f0ef930f1c46',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Camara.NotFoundError);
  });
});
