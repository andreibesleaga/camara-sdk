import { makeOAuthConsent } from './app';
import { McpAgent } from 'agents/mcp';
import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { McpOptions, initMcpServer, server, ClientOptions } from 'camara-mcp/server';

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
      description: 'Bearer authentication for notifications',
      required: true,
      default: undefined,
      placeholder: 'My Population Density Data Notifications API Key',
      type: 'password',
    },
    {
      key: 'regionDeviceCountNotificationsAPIKey',
      label: 'Region Device Count Notifications API Key',
      description: 'Bearer authentication for notifications',
      required: true,
      default: undefined,
      placeholder: 'My Region Device Count Notifications API Key',
      type: 'password',
    },
    {
      key: 'connectivityInsightsNotificationsAPIKey',
      label: 'Connectivity Insights Notifications API Key',
      description: 'Bearer authorization for notifications',
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
  defaultHandler: makeOAuthConsent(serverConfig),
  authorizeEndpoint: '/authorize',
  tokenEndpoint: '/token',
  clientRegistrationEndpoint: '/register',
});
