import { makeOAuthConsent } from './app';
// `agents` and `@modelcontextprotocol/sdk` versions must stay in sync with the
// pins/overrides in package.json. `agents` declares an exact pin on
// `@modelcontextprotocol/sdk`; if our resolved version drifts, npm installs a
// second copy under `agents/node_modules/`, and `initMcpServer`'s runtime
// `instanceof McpServer` check fails because the two `McpServer` classes are
// distinct constructors.
import { McpAgent } from 'agents/mcp';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { ClientOptions } from 'camara-sdk';
import { McpOptions } from 'camara-sdk-mcp/options';
import { initMcpServer, newMcpServer } from 'camara-sdk-mcp/server';
import { configureLogger } from 'camara-sdk-mcp/logger';
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

// `newMcpServer` fetches MCP server instructions from the Stainless API. In a
// Durable Object, that fetch happens inside `blockConcurrencyWhile`; if it
// hangs the DO is reset, and if it rejects the same thing happens. Race
// against a short timeout and catch any rejection so any failure mode lands
// on a fallback server constructed without instructions (the `initialize`
// response simply omits the `instructions` field, which is spec-allowed).
const INSTRUCTIONS_FETCH_TIMEOUT_MS = 5000;

function fallbackMcpServer(): McpServer {
  return new McpServer(
    { name: 'camara_sdk_api', version: '0.18.0' },
    { capabilities: { tools: {}, logging: {} } },
  );
}

async function buildMcpServer(stainlessApiKey?: string): Promise<McpServer> {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  try {
    const fetched = newMcpServer({ stainlessApiKey });
    const timeout = new Promise<null>((resolve) => {
      timeoutId = setTimeout(() => resolve(null), INSTRUCTIONS_FETCH_TIMEOUT_MS);
    });

    const result = await Promise.race([fetched, timeout]);

    if (result != null) {
      return result;
    }
  } catch (error) {
    console.error('Failed to build MCP server from upstream instructions; using fallback', error);
  } finally {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
  }

  return fallbackMcpServer();
}

export class MyMCP extends McpAgent<Env, unknown, MCPProps> {
  #resolveServer!: (server: McpServer) => void;
  #rejectServer!: (error: unknown) => void;
  server: Promise<McpServer> = new Promise<McpServer>((resolve, reject) => {
    this.#resolveServer = resolve;
    this.#rejectServer = reject;
  });

  async init() {
    try {
      if (this.props == null) {
        throw new Error('MCP props are not initialized');
      }

      configureLogger({ level: 'info', pretty: false });

      const server = await buildMcpServer(this.props.clientConfig?.stainlessApiKey);

      await initMcpServer({
        server,
        clientOptions: this.props.clientProps,
        mcpOptions: this.props.clientConfig,
      });

      this.#resolveServer(server);
    } catch (error) {
      this.#rejectServer(error);
      throw error;
    }
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
