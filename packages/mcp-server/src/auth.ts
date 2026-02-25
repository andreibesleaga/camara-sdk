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

  const bearerToken =
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
  const populationDensityDataNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-population-density-data-notifications-api-key']) ?
      req.headers['x-camara-population-density-data-notifications-api-key'][0]
    : req.headers['x-camara-population-density-data-notifications-api-key'];
  const regionDeviceCountNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-region-device-count-notifications-api-key']) ?
      req.headers['x-camara-region-device-count-notifications-api-key'][0]
    : req.headers['x-camara-region-device-count-notifications-api-key'];
  const connectivityInsightsNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-connectivity-insights-notifications-api-key']) ?
      req.headers['x-camara-connectivity-insights-notifications-api-key'][0]
    : req.headers['x-camara-connectivity-insights-notifications-api-key'];
  const simSwapNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-sim-swap-notifications-api-key']) ?
      req.headers['x-camara-sim-swap-notifications-api-key'][0]
    : req.headers['x-camara-sim-swap-notifications-api-key'];
  const deviceRoamingStatusNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-device-roaming-status-notifications-api-key']) ?
      req.headers['x-camara-device-roaming-status-notifications-api-key'][0]
    : req.headers['x-camara-device-roaming-status-notifications-api-key'];
  const deviceReachabilityStatusNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-device-reachability-status-notifications-api-key']) ?
      req.headers['x-camara-device-reachability-status-notifications-api-key'][0]
    : req.headers['x-camara-device-reachability-status-notifications-api-key'];
  const connectedNetworkTypeNotificationsAPIKey =
    Array.isArray(req.headers['x-camara-connected-network-type-notifications-api-key']) ?
      req.headers['x-camara-connected-network-type-notifications-api-key'][0]
    : req.headers['x-camara-connected-network-type-notifications-api-key'];
  return {
    bearerToken,
    deviceLocationNotificationsAPIKey,
    notificationsAPIKey,
    populationDensityDataNotificationsAPIKey,
    regionDeviceCountNotificationsAPIKey,
    connectivityInsightsNotificationsAPIKey,
    simSwapNotificationsAPIKey,
    deviceRoamingStatusNotificationsAPIKey,
    deviceReachabilityStatusNotificationsAPIKey,
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
