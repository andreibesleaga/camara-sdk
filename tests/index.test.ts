// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIPromise } from 'camara-sdk/core/api-promise';

import util from 'node:util';
import Camara from 'camara-sdk';
import { APIUserAbortError } from 'camara-sdk';
const defaultFetch = fetch;

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new Camara({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
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
    });

    test('they are used in the request', async () => {
      const { req } = await client.buildRequest({ path: '/foo', method: 'post' });
      expect(req.headers.get('x-my-default-header')).toEqual('2');
    });

    test('can ignore `undefined` and leave the default', async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect(req.headers.get('x-my-default-header')).toEqual('2');
    });

    test('can be removed with `null`', async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect(req.headers.has('x-my-default-header')).toBe(false);
    });
  });
  describe('logging', () => {
    const env = process.env;

    beforeEach(() => {
      process.env = { ...env };
      process.env['CAMARA_LOG'] = undefined;
    });

    afterEach(() => {
      process.env = env;
    });

    const forceAPIResponseForClient = async (client: Camara) => {
      await new APIPromise(
        client,
        Promise.resolve({
          response: new Response(),
          controller: new AbortController(),
          requestLogID: 'log_000000',
          retryOfRequestLogID: undefined,
          startTime: Date.now(),
          options: {
            method: 'get',
            path: '/',
          },
        }),
      );
    };

    test('debug logs when log level is debug', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      const client = new Camara({
        logger: logger,
        logLevel: 'debug',
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
      });

      await forceAPIResponseForClient(client);
      expect(debugMock).toHaveBeenCalled();
    });

    test('default logLevel is warn', async () => {
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
      });
      expect(client.logLevel).toBe('warn');
    });

    test('debug logs are skipped when log level is info', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      const client = new Camara({
        logger: logger,
        logLevel: 'info',
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
      });

      await forceAPIResponseForClient(client);
      expect(debugMock).not.toHaveBeenCalled();
    });

    test('debug logs happen with debug env var', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      process.env['CAMARA_LOG'] = 'debug';
      const client = new Camara({
        logger: logger,
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
      });
      expect(client.logLevel).toBe('debug');

      await forceAPIResponseForClient(client);
      expect(debugMock).toHaveBeenCalled();
    });

    test('warn when env var level is invalid', async () => {
      const warnMock = jest.fn();
      const logger = {
        debug: jest.fn(),
        info: jest.fn(),
        warn: warnMock,
        error: jest.fn(),
      };

      process.env['CAMARA_LOG'] = 'not a log level';
      const client = new Camara({
        logger: logger,
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
      });
      expect(client.logLevel).toBe('warn');
      expect(warnMock).toHaveBeenCalledWith(
        'process.env[\'CAMARA_LOG\'] was set to "not a log level", expected one of ["off","error","warn","info","debug"]',
      );
    });

    test('client log level overrides env var', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      process.env['CAMARA_LOG'] = 'debug';
      const client = new Camara({
        logger: logger,
        logLevel: 'off',
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
      });

      await forceAPIResponseForClient(client);
      expect(debugMock).not.toHaveBeenCalled();
    });

    test('no warning logged for invalid env var level + valid client level', async () => {
      const warnMock = jest.fn();
      const logger = {
        debug: jest.fn(),
        info: jest.fn(),
        warn: warnMock,
        error: jest.fn(),
      };

      process.env['CAMARA_LOG'] = 'not a log level';
      const client = new Camara({
        logger: logger,
        logLevel: 'debug',
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
      });
      expect(client.logLevel).toBe('debug');
      expect(warnMock).not.toHaveBeenCalled();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
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
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
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
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
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
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Camara({
      baseURL: 'http://localhost:5000/',
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
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('explicit global fetch', async () => {
    // make sure the global fetch type is assignable to our Fetch type
    const client = new Camara({
      baseURL: 'http://localhost:5000/',
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
      fetch: defaultFetch,
    });
  });

  test('custom signal', async () => {
    const client = new Camara({
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
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
      fetch: (...args) => {
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              defaultFetch(...args)
                .then(resolve)
                .catch(reject),
            300,
          ),
        );
      },
    });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(APIUserAbortError);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('normalized method', async () => {
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      capturedRequest = init;
      return new Response(JSON.stringify({}), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Camara({
      baseURL: 'http://localhost:5000/',
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
      fetch: testFetch,
    });

    await client.patch('/foo');
    expect(capturedRequest?.method).toEqual('PATCH');
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/custom/path/',
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
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/custom/path',
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
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    afterEach(() => {
      process.env['CAMARA_BASE_URL'] = undefined;
    });

    test('explicit option', () => {
      const client = new Camara({
        baseURL: 'https://example.com',
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
      });
      expect(client.baseURL).toEqual('https://example.com');
    });

    test('env variable', () => {
      process.env['CAMARA_BASE_URL'] = 'https://example.com/from_env';
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
      });
      expect(client.baseURL).toEqual('https://example.com/from_env');
    });

    test('empty env variable', () => {
      process.env['CAMARA_BASE_URL'] = ''; // empty
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
      });
      expect(client.baseURL).toEqual('https://api.example.com/camara');
    });

    test('blank env variable', () => {
      process.env['CAMARA_BASE_URL'] = '  '; // blank
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
      });
      expect(client.baseURL).toEqual('https://api.example.com/camara');
    });

    test('in request options', () => {
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
      });
      expect(client.buildURL('/foo', null, 'http://localhost:5000/option')).toEqual(
        'http://localhost:5000/option/foo',
      );
    });

    test('in request options overridden by client options', () => {
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
        baseURL: 'http://localhost:5000/client',
      });
      expect(client.buildURL('/foo', null, 'http://localhost:5000/option')).toEqual(
        'http://localhost:5000/client/foo',
      );
    });

    test('in request options overridden by env variable', () => {
      process.env['CAMARA_BASE_URL'] = 'http://localhost:5000/env';
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
      });
      expect(client.buildURL('/foo', null, 'http://localhost:5000/option')).toEqual(
        'http://localhost:5000/env/foo',
      );
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Camara({
      maxRetries: 4,
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
    });
    expect(client.maxRetries).toEqual(4);

    // default
    const client2 = new Camara({
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
    });
    expect(client2.maxRetries).toEqual(2);
  });

  describe('withOptions', () => {
    test('creates a new client with overridden options', async () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/',
        maxRetries: 3,
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
      });

      const newClient = client.withOptions({
        maxRetries: 5,
        baseURL: 'http://localhost:5001/',
      });

      // Verify the new client has updated options
      expect(newClient.maxRetries).toEqual(5);
      expect(newClient.baseURL).toEqual('http://localhost:5001/');

      // Verify the original client is unchanged
      expect(client.maxRetries).toEqual(3);
      expect(client.baseURL).toEqual('http://localhost:5000/');

      // Verify it's a different instance
      expect(newClient).not.toBe(client);
      expect(newClient.constructor).toBe(client.constructor);
    });

    test('inherits options from the parent client', async () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/',
        defaultHeaders: { 'X-Test-Header': 'test-value' },
        defaultQuery: { 'test-param': 'test-value' },
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
      });

      const newClient = client.withOptions({
        baseURL: 'http://localhost:5001/',
      });

      // Test inherited options remain the same
      expect(newClient.buildURL('/foo', null)).toEqual('http://localhost:5001/foo?test-param=test-value');

      const { req } = await newClient.buildRequest({ path: '/foo', method: 'get' });
      expect(req.headers.get('x-test-header')).toEqual('test-value');
    });

    test('respects runtime property changes when creating new client', () => {
      const client = new Camara({
        baseURL: 'http://localhost:5000/',
        timeout: 1000,
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
      });

      // Modify the client properties directly after creation
      client.baseURL = 'http://localhost:6000/';
      client.timeout = 2000;

      // Create a new client with withOptions
      const newClient = client.withOptions({
        maxRetries: 10,
      });

      // Verify the new client uses the updated properties, not the original ones
      expect(newClient.baseURL).toEqual('http://localhost:6000/');
      expect(newClient.timeout).toEqual(2000);
      expect(newClient.maxRetries).toEqual(10);

      // Original client should still have its modified properties
      expect(client.baseURL).toEqual('http://localhost:6000/');
      expect(client.timeout).toEqual(2000);
      expect(client.maxRetries).not.toEqual(10);

      // Verify URL building uses the updated baseURL
      expect(newClient.buildURL('/bar', null)).toEqual('http://localhost:6000/bar');
    });
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['CAMARA_BEARER_TOKEN'] = 'My Bearer Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Customer Insights Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Device Swap Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My KYC Age Verification Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My KYC Fill In Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My KYC Match Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Tenure Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Number Recycling Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Otp Validation Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Call Forwarding Signal Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Device Location Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Population Density Data Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Region Device Count Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Web Rtc Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Connectivity Insights Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Quality On Demand Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Device Identifier Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Sim Swap Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Device Roaming Status Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Device Reachability Status Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'My Connected Network Type Token';
    process.env['CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY'] = 'My Device Location Notifications API Key';
    process.env['CAMARA_NOTIFICATIONS_API_KEY'] = 'My Notifications API Key';
    process.env['CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY'] =
      'My Population Density Data Notifications API Key';
    process.env['CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY'] =
      'My Region Device Count Notifications API Key';
    process.env['CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY'] =
      'My Connectivity Insights Notifications API Key';
    process.env['CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY'] = 'My Sim Swap Notifications API Key';
    process.env['CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY'] =
      'My Device Roaming Status Notifications API Key';
    process.env['CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY'] =
      'My Device Reachability Status Notifications API Key';
    process.env['CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY'] =
      'My Connected Network Type Notifications API Key';
    const client = new Camara();
    expect(client.bearerToken).toBe('My Bearer Token');
    expect(client.customerInsightsToken).toBe('My Customer Insights Token');
    expect(client.deviceSwapToken).toBe('My Device Swap Token');
    expect(client.kycAgeVerificationToken).toBe('My KYC Age Verification Token');
    expect(client.kycFillInToken).toBe('My KYC Fill In Token');
    expect(client.kycMatchToken).toBe('My KYC Match Token');
    expect(client.tenureToken).toBe('My Tenure Token');
    expect(client.numberRecyclingToken).toBe('My Number Recycling Token');
    expect(client.otpValidationToken).toBe('My Otp Validation Token');
    expect(client.callForwardingSignalToken).toBe('My Call Forwarding Signal Token');
    expect(client.deviceLocationToken).toBe('My Device Location Token');
    expect(client.populationDensityDataToken).toBe('My Population Density Data Token');
    expect(client.regionDeviceCountToken).toBe('My Region Device Count Token');
    expect(client.webRtcToken).toBe('My Web Rtc Token');
    expect(client.connectivityInsightsToken).toBe('My Connectivity Insights Token');
    expect(client.qualityOnDemandToken).toBe('My Quality On Demand Token');
    expect(client.deviceIdentifierToken).toBe('My Device Identifier Token');
    expect(client.simSwapToken).toBe('My Sim Swap Token');
    expect(client.deviceRoamingStatusToken).toBe('My Device Roaming Status Token');
    expect(client.deviceReachabilityStatusToken).toBe('My Device Reachability Status Token');
    expect(client.connectedNetworkTypeToken).toBe('My Connected Network Type Token');
    expect(client.deviceLocationNotificationsAPIKey).toBe('My Device Location Notifications API Key');
    expect(client.notificationsAPIKey).toBe('My Notifications API Key');
    expect(client.populationDensityDataNotificationsAPIKey).toBe(
      'My Population Density Data Notifications API Key',
    );
    expect(client.regionDeviceCountNotificationsAPIKey).toBe('My Region Device Count Notifications API Key');
    expect(client.connectivityInsightsNotificationsAPIKey).toBe(
      'My Connectivity Insights Notifications API Key',
    );
    expect(client.simSwapNotificationsAPIKey).toBe('My Sim Swap Notifications API Key');
    expect(client.deviceRoamingStatusNotificationsAPIKey).toBe(
      'My Device Roaming Status Notifications API Key',
    );
    expect(client.deviceReachabilityStatusNotificationsAPIKey).toBe(
      'My Device Reachability Status Notifications API Key',
    );
    expect(client.connectedNetworkTypeNotificationsAPIKey).toBe(
      'My Connected Network Type Notifications API Key',
    );
  });

  test('with overridden environment variable arguments', () => {
    // set options via env var
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Bearer Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Customer Insights Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Device Swap Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My KYC Age Verification Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My KYC Fill In Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My KYC Match Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Tenure Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Number Recycling Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Otp Validation Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Call Forwarding Signal Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Device Location Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Population Density Data Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Region Device Count Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Web Rtc Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Connectivity Insights Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Quality On Demand Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Device Identifier Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Sim Swap Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Device Roaming Status Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Device Reachability Status Token';
    process.env['CAMARA_BEARER_TOKEN'] = 'another My Connected Network Type Token';
    process.env['CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY'] =
      'another My Device Location Notifications API Key';
    process.env['CAMARA_NOTIFICATIONS_API_KEY'] = 'another My Notifications API Key';
    process.env['CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY'] =
      'another My Population Density Data Notifications API Key';
    process.env['CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY'] =
      'another My Region Device Count Notifications API Key';
    process.env['CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY'] =
      'another My Connectivity Insights Notifications API Key';
    process.env['CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY'] = 'another My Sim Swap Notifications API Key';
    process.env['CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY'] =
      'another My Device Roaming Status Notifications API Key';
    process.env['CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY'] =
      'another My Device Reachability Status Notifications API Key';
    process.env['CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY'] =
      'another My Connected Network Type Notifications API Key';
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
    });
    expect(client.bearerToken).toBe('My Bearer Token');
    expect(client.customerInsightsToken).toBe('My Customer Insights Token');
    expect(client.deviceSwapToken).toBe('My Device Swap Token');
    expect(client.kycAgeVerificationToken).toBe('My KYC Age Verification Token');
    expect(client.kycFillInToken).toBe('My KYC Fill In Token');
    expect(client.kycMatchToken).toBe('My KYC Match Token');
    expect(client.tenureToken).toBe('My Tenure Token');
    expect(client.numberRecyclingToken).toBe('My Number Recycling Token');
    expect(client.otpValidationToken).toBe('My Otp Validation Token');
    expect(client.callForwardingSignalToken).toBe('My Call Forwarding Signal Token');
    expect(client.deviceLocationToken).toBe('My Device Location Token');
    expect(client.populationDensityDataToken).toBe('My Population Density Data Token');
    expect(client.regionDeviceCountToken).toBe('My Region Device Count Token');
    expect(client.webRtcToken).toBe('My Web Rtc Token');
    expect(client.connectivityInsightsToken).toBe('My Connectivity Insights Token');
    expect(client.qualityOnDemandToken).toBe('My Quality On Demand Token');
    expect(client.deviceIdentifierToken).toBe('My Device Identifier Token');
    expect(client.simSwapToken).toBe('My Sim Swap Token');
    expect(client.deviceRoamingStatusToken).toBe('My Device Roaming Status Token');
    expect(client.deviceReachabilityStatusToken).toBe('My Device Reachability Status Token');
    expect(client.connectedNetworkTypeToken).toBe('My Connected Network Type Token');
    expect(client.deviceLocationNotificationsAPIKey).toBe('My Device Location Notifications API Key');
    expect(client.notificationsAPIKey).toBe('My Notifications API Key');
    expect(client.populationDensityDataNotificationsAPIKey).toBe(
      'My Population Density Data Notifications API Key',
    );
    expect(client.regionDeviceCountNotificationsAPIKey).toBe('My Region Device Count Notifications API Key');
    expect(client.connectivityInsightsNotificationsAPIKey).toBe(
      'My Connectivity Insights Notifications API Key',
    );
    expect(client.simSwapNotificationsAPIKey).toBe('My Sim Swap Notifications API Key');
    expect(client.deviceRoamingStatusNotificationsAPIKey).toBe(
      'My Device Roaming Status Notifications API Key',
    );
    expect(client.deviceReachabilityStatusNotificationsAPIKey).toBe(
      'My Device Reachability Status Notifications API Key',
    );
    expect(client.connectedNetworkTypeNotificationsAPIKey).toBe(
      'My Connected Network Type Notifications API Key',
    );
  });
});

describe('request building', () => {
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
  });

  describe('custom headers', () => {
    test('handles undefined', async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        body: { value: 'hello' },
        headers: { 'X-Foo': 'baz', 'x-foo': 'bar', 'x-Foo': undefined, 'x-baz': 'bam', 'X-Baz': null },
      });
      expect(req.headers.get('x-foo')).toEqual('bar');
      expect(req.headers.get('x-Foo')).toEqual('bar');
      expect(req.headers.get('X-Foo')).toEqual('bar');
      expect(req.headers.get('x-baz')).toEqual(null);
    });
  });
});

describe('default encoder', () => {
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
  });

  class Serializable {
    toJSON() {
      return { $type: 'Serializable' };
    }
  }
  class Collection<T> {
    #things: T[];
    constructor(things: T[]) {
      this.#things = Array.from(things);
    }
    toJSON() {
      return Array.from(this.#things);
    }
    [Symbol.iterator]() {
      return this.#things[Symbol.iterator];
    }
  }
  for (const jsonValue of [{}, [], { __proto__: null }, new Serializable(), new Collection(['item'])]) {
    test(`serializes ${util.inspect(jsonValue)} as json`, async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        body: jsonValue,
      });
      expect(req.headers).toBeInstanceOf(Headers);
      expect(req.headers.get('content-type')).toEqual('application/json');
      expect(req.body).toBe(JSON.stringify(jsonValue));
    });
  }

  const encoder = new TextEncoder();
  const asyncIterable = (async function* () {
    yield encoder.encode('a\n');
    yield encoder.encode('b\n');
    yield encoder.encode('c\n');
  })();
  for (const streamValue of [
    [encoder.encode('a\nb\nc\n')][Symbol.iterator](),
    new Response('a\nb\nc\n').body,
    asyncIterable,
  ]) {
    test(`converts ${util.inspect(streamValue)} to ReadableStream`, async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        body: streamValue,
      });
      expect(req.headers).toBeInstanceOf(Headers);
      expect(req.headers.get('content-type')).toEqual(null);
      expect(req.body).toBeInstanceOf(ReadableStream);
      expect(await new Response(req.body).text()).toBe('a\nb\nc\n');
    });
  }

  test(`can set content-type for ReadableStream`, async () => {
    const { req } = await client.buildRequest({
      path: '/foo',
      method: 'post',
      body: new Response('a\nb\nc\n').body,
      headers: { 'Content-Type': 'text/plain' },
    });
    expect(req.headers).toBeInstanceOf(Headers);
    expect(req.headers.get('content-type')).toEqual('text/plain');
    expect(req.body).toBeInstanceOf(ReadableStream);
    expect(await new Response(req.body).text()).toBe('a\nb\nc\n');
  });
});

describe('retries', () => {
  test('retry on timeout', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Promise(
          (resolve, reject) => signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

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
      timeout: 10,
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

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
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).get('x-stainless-retry-count')).toEqual('2');
    expect(count).toEqual(3);
  });

  test('omit retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
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
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': null },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).has('x-stainless-retry-count')).toBe(false);
  });

  test('omit retry count header by default', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
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
      fetch: testFetch,
      maxRetries: 4,
      defaultHeaders: { 'X-Stainless-Retry-Count': null },
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
      }),
    ).toEqual({ a: 1 });

    expect(capturedRequest!.headers as Headers).not.toHaveProperty('x-stainless-retry-count');
  });

  test('overwrite retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
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
      fetch: testFetch,
      maxRetries: 4,
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': '42' },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).get('x-stainless-retry-count')).toEqual('42');
  });

  test('retry on 429 with retry-after', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

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
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after-ms', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After-Ms': '10',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

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
      fetch: testFetch,
    });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });
});
