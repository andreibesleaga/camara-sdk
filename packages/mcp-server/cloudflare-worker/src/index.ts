import { makeOAuthConsent } from './app';
import { McpAgent } from 'agents/mcp';
import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { McpOptions, initMcpServer, server, ClientOptions } from 'camara-sdk-mcp/server';
import type { ExportedHandler } from '@cloudflare/workers-types';

type MCPProps = {
  clientProps: ClientOptions;
  clientConfig: McpOptions;
};

/**
 * The information displayed on the OAuth consent screen
 */
const serverConfig: ServerConfig = {
  orgName: 'Camara',
  instructionsUrl: undefined, // Set a url for where you show users how to get an API key
  logoUrl: undefined, // Set a custom logo url to appear during the OAuth flow
  clientProperties: [
    {
      key: 'bearerToken',
      label: 'Bearer Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Bearer Token',
      type: 'password',
    },
    {
      key: 'customerInsightsToken',
      label: 'Customer Insights Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Customer Insights Token',
      type: 'password',
    },
    {
      key: 'deviceSwapToken',
      label: 'Device Swap Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Swap Token',
      type: 'password',
    },
    {
      key: 'kycAgeVerificationToken',
      label: 'KYC Age Verification Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My KYC Age Verification Token',
      type: 'password',
    },
    {
      key: 'kycFillInToken',
      label: 'KYC Fill In Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My KYC Fill In Token',
      type: 'password',
    },
    {
      key: 'kycMatchToken',
      label: 'KYC Match Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My KYC Match Token',
      type: 'password',
    },
    {
      key: 'tenureToken',
      label: 'Tenure Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Tenure Token',
      type: 'password',
    },
    {
      key: 'numberRecyclingToken',
      label: 'Number Recycling Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Number Recycling Token',
      type: 'password',
    },
    {
      key: 'otpValidationToken',
      label: 'Otp Validation Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Otp Validation Token',
      type: 'password',
    },
    {
      key: 'callForwardingSignalToken',
      label: 'Call Forwarding Signal Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Call Forwarding Signal Token',
      type: 'password',
    },
    {
      key: 'deviceLocationToken',
      label: 'Device Location Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Location Token',
      type: 'password',
    },
    {
      key: 'populationDensityDataToken',
      label: 'Population Density Data Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Population Density Data Token',
      type: 'password',
    },
    {
      key: 'regionDeviceCountToken',
      label: 'Region Device Count Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Region Device Count Token',
      type: 'password',
    },
    {
      key: 'webRtcToken',
      label: 'Web Rtc Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Web Rtc Token',
      type: 'password',
    },
    {
      key: 'connectivityInsightsToken',
      label: 'Connectivity Insights Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Connectivity Insights Token',
      type: 'password',
    },
    {
      key: 'qualityOnDemandToken',
      label: 'Quality On Demand Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Quality On Demand Token',
      type: 'password',
    },
    {
      key: 'deviceIdentifierToken',
      label: 'Device Identifier Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Identifier Token',
      type: 'password',
    },
    {
      key: 'simSwapToken',
      label: 'Sim Swap Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Sim Swap Token',
      type: 'password',
    },
    {
      key: 'deviceRoamingStatusToken',
      label: 'Device Roaming Status Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Roaming Status Token',
      type: 'password',
    },
    {
      key: 'deviceReachabilityStatusToken',
      label: 'Device Reachability Status Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Reachability Status Token',
      type: 'password',
    },
    {
      key: 'connectedNetworkTypeToken',
      label: 'Connected Network Type Token',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Connected Network Type Token',
      type: 'password',
    },
    {
      key: 'deviceLocationNotificationsAPIKey',
      label: 'Device Location Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Location Notifications API Key',
      type: 'password',
    },
    {
      key: 'notificationsAPIKey',
      label: 'Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Notifications API Key',
      type: 'password',
    },
    {
      key: 'populationDensityDataNotificationsAPIKey',
      label: 'Population Density Data Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Population Density Data Notifications API Key',
      type: 'password',
    },
    {
      key: 'regionDeviceCountNotificationsAPIKey',
      label: 'Region Device Count Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Region Device Count Notifications API Key',
      type: 'password',
    },
    {
      key: 'connectivityInsightsNotificationsAPIKey',
      label: 'Connectivity Insights Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Connectivity Insights Notifications API Key',
      type: 'password',
    },
    {
      key: 'simSwapNotificationsAPIKey',
      label: 'Sim Swap Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Sim Swap Notifications API Key',
      type: 'password',
    },
    {
      key: 'deviceRoamingStatusNotificationsAPIKey',
      label: 'Device Roaming Status Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Roaming Status Notifications API Key',
      type: 'password',
    },
    {
      key: 'deviceReachabilityStatusNotificationsAPIKey',
      label: 'Device Reachability Status Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Device Reachability Status Notifications API Key',
      type: 'password',
    },
    {
      key: 'connectedNetworkTypeNotificationsAPIKey',
      label: 'Connected Network Type Notifications API Key',
      description: '',
      required: true,
      default: undefined,
      placeholder: 'My Connected Network Type Notifications API Key',
      type: 'password',
    },
  ],
};

export class MyMCP extends McpAgent<Env, unknown, MCPProps> {
  server = server;

  async init() {
    initMcpServer({
      server: this.server,
      clientOptions: this.props.clientProps,
      mcpOptions: this.props.clientConfig,
    });
  }
}

export type ServerConfig = {
  /**
   * The name of the company/project
   */
  orgName: string;

  /**
   * An optional company logo image
   */
  logoUrl?: string;

  /**
   * An optional URL with instructions for users to get an API key
   */
  instructionsUrl?: string;

  /**
   * Properties collected to initialize the client
   */
  clientProperties: ClientProperty[];
};

export type ClientProperty = {
  key: string;
  label: string;
  description?: string;
  required: boolean;
  default?: unknown;
  placeholder?: string;
  type: 'string' | 'number' | 'password' | 'select';
  options?: { label: string; value: string }[];
};

// Export the OAuth handler as the default
export default new OAuthProvider({
  apiHandlers: {
    // @ts-expect-error
    '/sse': MyMCP.serveSSE('/sse'), // legacy SSE
    // @ts-expect-error
    '/mcp': MyMCP.serve('/mcp'), // Streaming HTTP
  },
  // Type assertion needed due to Headers type mismatch between Hono and @cloudflare/workers-types
  // At runtime, Hono's fetch handler is fully compatible with ExportedHandler
  defaultHandler: makeOAuthConsent(serverConfig) as unknown as ExportedHandler,
  authorizeEndpoint: '/authorize',
  tokenEndpoint: '/token',
  clientRegistrationEndpoint: '/register',
});
