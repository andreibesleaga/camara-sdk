# Camara TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
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

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=camara-sdk-mcp&config=eyJuYW1lIjoiY2FtYXJhLXNkay1tY3AiLCJ0cmFuc3BvcnQiOiJzc2UiLCJ1cmwiOiJodHRwczovL2NhbWFyYS5zdGxtY3AuY29tL3NzZSIsImVudiI6eyJDQU1BUkFfREVWSUNFX0xPQ0FUSU9OX05PVElGSUNBVElPTlNfQVBJX0tFWSI6IlNldCB5b3VyIENBTUFSQV9ERVZJQ0VfTE9DQVRJT05fTk9USUZJQ0FUSU9OU19BUElfS0VZIGhlcmUuIiwiQ0FNQVJBX05PVElGSUNBVElPTlNfQVBJX0tFWSI6IlNldCB5b3VyIENBTUFSQV9OT1RJRklDQVRJT05TX0FQSV9LRVkgaGVyZS4iLCJDQU1BUkFfUE9QVUxBVElPTl9ERU5TSVRZX0RBVEFfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiU2V0IHlvdXIgQ0FNQVJBX1BPUFVMQVRJT05fREVOU0lUWV9EQVRBX05PVElGSUNBVElPTlNfQVBJX0tFWSBoZXJlLiIsIkNBTUFSQV9SRUdJT05fREVWSUNFX0NPVU5UX05PVElGSUNBVElPTlNfQVBJX0tFWSI6IlNldCB5b3VyIENBTUFSQV9SRUdJT05fREVWSUNFX0NPVU5UX05PVElGSUNBVElPTlNfQVBJX0tFWSBoZXJlLiIsIkNBTUFSQV9DT05ORUNUSVZJVFlfSU5TSUdIVFNfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiU2V0IHlvdXIgQ0FNQVJBX0NPTk5FQ1RJVklUWV9JTlNJR0hUU19OT1RJRklDQVRJT05TX0FQSV9LRVkgaGVyZS4iLCJDQU1BUkFfU0lNX1NXQVBfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiU2V0IHlvdXIgQ0FNQVJBX1NJTV9TV0FQX05PVElGSUNBVElPTlNfQVBJX0tFWSBoZXJlLiIsIkNBTUFSQV9ERVZJQ0VfUk9BTUlOR19TVEFUVVNfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiU2V0IHlvdXIgQ0FNQVJBX0RFVklDRV9ST0FNSU5HX1NUQVRVU19OT1RJRklDQVRJT05TX0FQSV9LRVkgaGVyZS4iLCJDQU1BUkFfREVWSUNFX1JFQUNIQUJJTElUWV9TVEFUVVNfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiU2V0IHlvdXIgQ0FNQVJBX0RFVklDRV9SRUFDSEFCSUxJVFlfU1RBVFVTX05PVElGSUNBVElPTlNfQVBJX0tFWSBoZXJlLiIsIkNBTUFSQV9DT05ORUNURURfTkVUV09SS19UWVBFX05PVElGSUNBVElPTlNfQVBJX0tFWSI6IlNldCB5b3VyIENBTUFSQV9DT05ORUNURURfTkVUV09SS19UWVBFX05PVElGSUNBVElPTlNfQVBJX0tFWSBoZXJlLiJ9fQ)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22camara-sdk-mcp%22%2C%22type%22%3A%22sse%22%2C%22url%22%3A%22https%3A%2F%2Fcamara.stlmcp.com%2Fsse%22%2C%22env%22%3A%7B%22CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY%20here.%22%2C%22CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY%22%3A%22Set%20your%20CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add camara_sdk_mcp_api --env CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY="Your CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY here." CAMARA_NOTIFICATIONS_API_KEY="Your CAMARA_NOTIFICATIONS_API_KEY here." CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY="Your CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY here." CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY="Your CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY here." CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY="Your CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY here." CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY="Your CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY here." CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY="Your CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY here." CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY="Your CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY here." CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY="Your CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY here." --transport sse https://camara.stlmcp.com/sse
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
