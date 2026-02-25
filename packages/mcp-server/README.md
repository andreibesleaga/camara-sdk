# Camara TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export CAMARA_BEARER_TOKEN="My Bearer Token"
export CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY="My Device Location Notifications API Key"
export CAMARA_NOTIFICATIONS_API_KEY="My Notifications API Key"
export CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY="My Population Density Data Notifications API Key"
export CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY="My Region Device Count Notifications API Key"
export CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY="My Connectivity Insights Notifications API Key"
export CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY="My Sim Swap Notifications API Key"
export CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY="My Device Roaming Status Notifications API Key"
export CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY="My Device Reachability Status Notifications API Key"
export CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY="My Connected Network Type Notifications API Key"
npx -y camara-sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "camara_sdk_api": {
      "command": "npx",
      "args": ["-y", "camara-sdk-mcp"],
      "env": {
        "CAMARA_BEARER_TOKEN": "My Bearer Token",
        "CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY": "My Device Location Notifications API Key",
        "CAMARA_NOTIFICATIONS_API_KEY": "My Notifications API Key",
        "CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY": "My Population Density Data Notifications API Key",
        "CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY": "My Region Device Count Notifications API Key",
        "CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY": "My Connectivity Insights Notifications API Key",
        "CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY": "My Sim Swap Notifications API Key",
        "CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY": "My Device Roaming Status Notifications API Key",
        "CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY": "My Device Reachability Status Notifications API Key",
        "CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY": "My Connected Network Type Notifications API Key"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=camara-sdk-mcp&config=eyJuYW1lIjoiY2FtYXJhLXNkay1tY3AiLCJ0cmFuc3BvcnQiOiJodHRwIiwidXJsIjoiaHR0cHM6Ly9jYW1hcmEuc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC1jYW1hcmEtYmVhcmVyLXRva2VuIjoiTXkgQmVhcmVyIFRva2VuIiwieC1jYW1hcmEtZGV2aWNlLWxvY2F0aW9uLW5vdGlmaWNhdGlvbnMtYXBpLWtleSI6Ik15IERldmljZSBMb2NhdGlvbiBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJ4LWNhbWFyYS1ub3RpZmljYXRpb25zLWFwaS1rZXkiOiJNeSBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJ4LWNhbWFyYS1wb3B1bGF0aW9uLWRlbnNpdHktZGF0YS1ub3RpZmljYXRpb25zLWFwaS1rZXkiOiJNeSBQb3B1bGF0aW9uIERlbnNpdHkgRGF0YSBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJ4LWNhbWFyYS1yZWdpb24tZGV2aWNlLWNvdW50LW5vdGlmaWNhdGlvbnMtYXBpLWtleSI6Ik15IFJlZ2lvbiBEZXZpY2UgQ291bnQgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwieC1jYW1hcmEtY29ubmVjdGl2aXR5LWluc2lnaHRzLW5vdGlmaWNhdGlvbnMtYXBpLWtleSI6Ik15IENvbm5lY3Rpdml0eSBJbnNpZ2h0cyBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJ4LWNhbWFyYS1zaW0tc3dhcC1ub3RpZmljYXRpb25zLWFwaS1rZXkiOiJNeSBTaW0gU3dhcCBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJ4LWNhbWFyYS1kZXZpY2Utcm9hbWluZy1zdGF0dXMtbm90aWZpY2F0aW9ucy1hcGkta2V5IjoiTXkgRGV2aWNlIFJvYW1pbmcgU3RhdHVzIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIngtY2FtYXJhLWRldmljZS1yZWFjaGFiaWxpdHktc3RhdHVzLW5vdGlmaWNhdGlvbnMtYXBpLWtleSI6Ik15IERldmljZSBSZWFjaGFiaWxpdHkgU3RhdHVzIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIngtY2FtYXJhLWNvbm5lY3RlZC1uZXR3b3JrLXR5cGUtbm90aWZpY2F0aW9ucy1hcGkta2V5IjoiTXkgQ29ubmVjdGVkIE5ldHdvcmsgVHlwZSBOb3RpZmljYXRpb25zIEFQSSBLZXkifX0)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22camara-sdk-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fcamara.stlmcp.com%22%2C%22headers%22%3A%7B%22x-camara-bearer-token%22%3A%22My%20Bearer%20Token%22%2C%22x-camara-device-location-notifications-api-key%22%3A%22My%20Device%20Location%20Notifications%20API%20Key%22%2C%22x-camara-notifications-api-key%22%3A%22My%20Notifications%20API%20Key%22%2C%22x-camara-population-density-data-notifications-api-key%22%3A%22My%20Population%20Density%20Data%20Notifications%20API%20Key%22%2C%22x-camara-region-device-count-notifications-api-key%22%3A%22My%20Region%20Device%20Count%20Notifications%20API%20Key%22%2C%22x-camara-connectivity-insights-notifications-api-key%22%3A%22My%20Connectivity%20Insights%20Notifications%20API%20Key%22%2C%22x-camara-sim-swap-notifications-api-key%22%3A%22My%20Sim%20Swap%20Notifications%20API%20Key%22%2C%22x-camara-device-roaming-status-notifications-api-key%22%3A%22My%20Device%20Roaming%20Status%20Notifications%20API%20Key%22%2C%22x-camara-device-reachability-status-notifications-api-key%22%3A%22My%20Device%20Reachability%20Status%20Notifications%20API%20Key%22%2C%22x-camara-connected-network-type-notifications-api-key%22%3A%22My%20Connected%20Network%20Type%20Notifications%20API%20Key%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add camara_sdk_mcp_api --header "x-camara-bearer-token: My Bearer Token" --header "x-camara-device-location-notifications-api-key: My Device Location Notifications API Key" --header "x-camara-notifications-api-key: My Notifications API Key" --header "x-camara-population-density-data-notifications-api-key: My Population Density Data Notifications API Key" --header "x-camara-region-device-count-notifications-api-key: My Region Device Count Notifications API Key" --header "x-camara-connectivity-insights-notifications-api-key: My Connectivity Insights Notifications API Key" --header "x-camara-sim-swap-notifications-api-key: My Sim Swap Notifications API Key" --header "x-camara-device-roaming-status-notifications-api-key: My Device Roaming Status Notifications API Key" --header "x-camara-device-reachability-status-notifications-api-key: My Device Reachability Status Notifications API Key" --header "x-camara-connected-network-type-notifications-api-key: My Connected Network Type Notifications API Key" --transport http https://camara.stlmcp.com
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------- |
| `x-camara-bearer-token` | `bearerToken` | openId |
| `x-camara-device-location-notifications-api-key` | `deviceLocationNotificationsAPIKey` | DeviceLocationnotificationsBearerAuth |
| `x-camara-notifications-api-key` | `notificationsAPIKey` | notificationsBearerAuth |
| `x-camara-population-density-data-notifications-api-key` | `populationDensityDataNotificationsAPIKey` | PopulationDensityDatanotificationsBearerAuth |
| `x-camara-region-device-count-notifications-api-key` | `regionDeviceCountNotificationsAPIKey` | RegionDeviceCountnotificationsBearerAuth |
| `x-camara-connectivity-insights-notifications-api-key` | `connectivityInsightsNotificationsAPIKey` | ConnectivityInsightsnotificationsBearerAuth |
| `x-camara-sim-swap-notifications-api-key` | `simSwapNotificationsAPIKey` | SimSwapnotificationsBearerAuth |
| `x-camara-device-roaming-status-notifications-api-key` | `deviceRoamingStatusNotificationsAPIKey` | DeviceRoamingStatusnotificationsBearerAuth |
| `x-camara-device-reachability-status-notifications-api-key` | `deviceReachabilityStatusNotificationsAPIKey` | DeviceReachabilityStatusnotificationsBearerAuth |
| `x-camara-connected-network-type-notifications-api-key` | `connectedNetworkTypeNotificationsAPIKey` | ConnectedNetworkTypenotificationsBearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "camara_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```
