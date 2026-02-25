// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'camara-sdk';
import { McpOptions } from './options';

export const parseClientAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { connectedNetworkTypeNotificationsAPIKey: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(
          'Unsupported authorization scheme. Expected the "Authorization" header to be a supported scheme (Bearer).',
        );
    }
  } else if (required) {
    throw new Error('Missing required Authorization header; see WWW-Authenticate header for details.');
  }

  const customerInsightsToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const bearerToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const deviceSwapToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const kycAgeVerificationToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const kycFillInToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const kycMatchToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const tenureToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const numberRecyclingToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const otpValidationToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const callForwardingSignalToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const deviceLocationToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const deviceLocationNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-device-location-notifications-api-key']) ?
      req.headers['x-camara-device-location-notifications-api-key'][0]
    : req.headers['x-camara-device-location-notifications-api-key'];
  const notificationsAPIKey =
    Array.isArray(req.headers['x-camara-notifications-api-key']) ?
      req.headers['x-camara-notifications-api-key'][0]
    : req.headers['x-camara-notifications-api-key'];
  const populationDensityDataToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const populationDensityDataNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-population-density-data-notifications-api-key']) ?
      req.headers['x-camara-population-density-data-notifications-api-key'][0]
    : req.headers['x-camara-population-density-data-notifications-api-key'];
  const regionDeviceCountToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const regionDeviceCountNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-region-device-count-notifications-api-key']) ?
      req.headers['x-camara-region-device-count-notifications-api-key'][0]
    : req.headers['x-camara-region-device-count-notifications-api-key'];
  const webRtcToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const connectivityInsightsToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const connectivityInsightsNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-connectivity-insights-notifications-api-key']) ?
      req.headers['x-camara-connectivity-insights-notifications-api-key'][0]
    : req.headers['x-camara-connectivity-insights-notifications-api-key'];
  const qualityOnDemandToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const deviceIdentifierToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const simSwapToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const simSwapNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-sim-swap-notifications-api-key']) ?
      req.headers['x-camara-sim-swap-notifications-api-key'][0]
    : req.headers['x-camara-sim-swap-notifications-api-key'];
  const deviceRoamingStatusToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const deviceRoamingStatusNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-device-roaming-status-notifications-api-key']) ?
      req.headers['x-camara-device-roaming-status-notifications-api-key'][0]
    : req.headers['x-camara-device-roaming-status-notifications-api-key'];
  const deviceReachabilityStatusToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const deviceReachabilityStatusNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-device-reachability-status-notifications-api-key']) ?
      req.headers['x-camara-device-reachability-status-notifications-api-key'][0]
    : req.headers['x-camara-device-reachability-status-notifications-api-key'];
  const connectedNetworkTypeToken =
    Array.isArray(req.headers['x-camara-bearer-token']) ?
      req.headers['x-camara-bearer-token'][0]
    : req.headers['x-camara-bearer-token'];
  const connectedNetworkTypeNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-connected-network-type-notifications-api-key']) ?
      req.headers['x-camara-connected-network-type-notifications-api-key'][0]
    : req.headers['x-camara-connected-network-type-notifications-api-key'];
  return {
    customerInsightsToken,
    bearerToken,
    deviceSwapToken,
    kycAgeVerificationToken,
    kycFillInToken,
    kycMatchToken,
    tenureToken,
    numberRecyclingToken,
    otpValidationToken,
    callForwardingSignalToken,
    deviceLocationToken,
    deviceLocationNotificationsAPIKey,
    notificationsAPIKey,
    populationDensityDataToken,
    populationDensityDataNotificationsAPIKey,
    regionDeviceCountToken,
    regionDeviceCountNotificationsAPIKey,
    webRtcToken,
    connectivityInsightsToken,
    connectivityInsightsNotificationsAPIKey,
    qualityOnDemandToken,
    deviceIdentifierToken,
    simSwapToken,
    simSwapNotificationsAPIKey,
    deviceRoamingStatusToken,
    deviceRoamingStatusNotificationsAPIKey,
    deviceReachabilityStatusToken,
    deviceReachabilityStatusNotificationsAPIKey,
    connectedNetworkTypeToken,
    connectedNetworkTypeNotificationsAPIKey,
  };
};

export const getStainlessApiKey = (req: IncomingMessage, mcpOptions: McpOptions): string | undefined => {
  // Try to get the key from the x-stainless-api-key header
  const headerKey =
    Array.isArray(req.headers['x-stainless-api-key']) ?
      req.headers['x-stainless-api-key'][0]
    : req.headers['x-stainless-api-key'];
  if (headerKey && typeof headerKey === 'string') {
    return headerKey;
  }

  // Fall back to value set in the mcpOptions (e.g. from environment variable), if provided
  return mcpOptions.stainlessApiKey;
};
