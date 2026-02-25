# Camara TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export CAMARA_BEARER_TOKEN="My Bearer Token"
export CAMARA_BEARER_TOKEN="My Customer Insights Token"
export CAMARA_BEARER_TOKEN="My Device Swap Token"
export CAMARA_BEARER_TOKEN="My KYC Age Verification Token"
export CAMARA_BEARER_TOKEN="My KYC Fill In Token"
export CAMARA_BEARER_TOKEN="My KYC Match Token"
export CAMARA_BEARER_TOKEN="My Tenure Token"
export CAMARA_BEARER_TOKEN="My Number Recycling Token"
export CAMARA_BEARER_TOKEN="My Otp Validation Token"
export CAMARA_BEARER_TOKEN="My Call Forwarding Signal Token"
export CAMARA_BEARER_TOKEN="My Device Location Token"
export CAMARA_BEARER_TOKEN="My Population Density Data Token"
export CAMARA_BEARER_TOKEN="My Region Device Count Token"
export CAMARA_BEARER_TOKEN="My Web Rtc Token"
export CAMARA_BEARER_TOKEN="My Connectivity Insights Token"
export CAMARA_BEARER_TOKEN="My Quality On Demand Token"
export CAMARA_BEARER_TOKEN="My Device Identifier Token"
export CAMARA_BEARER_TOKEN="My Sim Swap Token"
export CAMARA_BEARER_TOKEN="My Device Roaming Status Token"
export CAMARA_BEARER_TOKEN="My Device Reachability Status Token"
export CAMARA_BEARER_TOKEN="My Connected Network Type Token"
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
        "CAMARA_BEARER_TOKEN": "My Customer Insights Token",
        "CAMARA_BEARER_TOKEN": "My Device Swap Token",
        "CAMARA_BEARER_TOKEN": "My KYC Age Verification Token",
        "CAMARA_BEARER_TOKEN": "My KYC Fill In Token",
        "CAMARA_BEARER_TOKEN": "My KYC Match Token",
        "CAMARA_BEARER_TOKEN": "My Tenure Token",
        "CAMARA_BEARER_TOKEN": "My Number Recycling Token",
        "CAMARA_BEARER_TOKEN": "My Otp Validation Token",
        "CAMARA_BEARER_TOKEN": "My Call Forwarding Signal Token",
        "CAMARA_BEARER_TOKEN": "My Device Location Token",
        "CAMARA_BEARER_TOKEN": "My Population Density Data Token",
        "CAMARA_BEARER_TOKEN": "My Region Device Count Token",
        "CAMARA_BEARER_TOKEN": "My Web Rtc Token",
        "CAMARA_BEARER_TOKEN": "My Connectivity Insights Token",
        "CAMARA_BEARER_TOKEN": "My Quality On Demand Token",
        "CAMARA_BEARER_TOKEN": "My Device Identifier Token",
        "CAMARA_BEARER_TOKEN": "My Sim Swap Token",
        "CAMARA_BEARER_TOKEN": "My Device Roaming Status Token",
        "CAMARA_BEARER_TOKEN": "My Device Reachability Status Token",
        "CAMARA_BEARER_TOKEN": "My Connected Network Type Token",
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

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=camara-sdk-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImNhbWFyYS1zZGstbWNwIl0sImVudiI6eyJDQU1BUkFfQkVBUkVSX1RPS0VOIjoiTXkgQ29ubmVjdGVkIE5ldHdvcmsgVHlwZSBUb2tlbiIsIkNBTUFSQV9ERVZJQ0VfTE9DQVRJT05fTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgRGV2aWNlIExvY2F0aW9uIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIkNBTUFSQV9OT1RJRklDQVRJT05TX0FQSV9LRVkiOiJNeSBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfUE9QVUxBVElPTl9ERU5TSVRZX0RBVEFfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgUG9wdWxhdGlvbiBEZW5zaXR5IERhdGEgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX1JFR0lPTl9ERVZJQ0VfQ09VTlRfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgUmVnaW9uIERldmljZSBDb3VudCBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfQ09OTkVDVElWSVRZX0lOU0lHSFRTX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IENvbm5lY3Rpdml0eSBJbnNpZ2h0cyBOb3RpZmljYXRpb25zIEFQSSBLZXkiLCJDQU1BUkFfU0lNX1NXQVBfTk9USUZJQ0FUSU9OU19BUElfS0VZIjoiTXkgU2ltIFN3YXAgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX0RFVklDRV9ST0FNSU5HX1NUQVRVU19OT1RJRklDQVRJT05TX0FQSV9LRVkiOiJNeSBEZXZpY2UgUm9hbWluZyBTdGF0dXMgTm90aWZpY2F0aW9ucyBBUEkgS2V5IiwiQ0FNQVJBX0RFVklDRV9SRUFDSEFCSUxJVFlfU1RBVFVTX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IERldmljZSBSZWFjaGFiaWxpdHkgU3RhdHVzIE5vdGlmaWNhdGlvbnMgQVBJIEtleSIsIkNBTUFSQV9DT05ORUNURURfTkVUV09SS19UWVBFX05PVElGSUNBVElPTlNfQVBJX0tFWSI6Ik15IENvbm5lY3RlZCBOZXR3b3JrIFR5cGUgTm90aWZpY2F0aW9ucyBBUEkgS2V5In19)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22camara-sdk-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22camara-sdk-mcp%22%5D%2C%22env%22%3A%7B%22CAMARA_BEARER_TOKEN%22%3A%22My%20Connected%20Network%20Type%20Token%22%2C%22CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Location%20Notifications%20API%20Key%22%2C%22CAMARA_NOTIFICATIONS_API_KEY%22%3A%22My%20Notifications%20API%20Key%22%2C%22CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY%22%3A%22My%20Population%20Density%20Data%20Notifications%20API%20Key%22%2C%22CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY%22%3A%22My%20Region%20Device%20Count%20Notifications%20API%20Key%22%2C%22CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY%22%3A%22My%20Connectivity%20Insights%20Notifications%20API%20Key%22%2C%22CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY%22%3A%22My%20Sim%20Swap%20Notifications%20API%20Key%22%2C%22CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Roaming%20Status%20Notifications%20API%20Key%22%2C%22CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY%22%3A%22My%20Device%20Reachability%20Status%20Notifications%20API%20Key%22%2C%22CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY%22%3A%22My%20Connected%20Network%20Type%20Notifications%20API%20Key%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add camara_sdk_mcp_api --env CAMARA_BEARER_TOKEN="My Bearer Token" CAMARA_BEARER_TOKEN="My Customer Insights Token" CAMARA_BEARER_TOKEN="My Device Swap Token" CAMARA_BEARER_TOKEN="My KYC Age Verification Token" CAMARA_BEARER_TOKEN="My KYC Fill In Token" CAMARA_BEARER_TOKEN="My KYC Match Token" CAMARA_BEARER_TOKEN="My Tenure Token" CAMARA_BEARER_TOKEN="My Number Recycling Token" CAMARA_BEARER_TOKEN="My Otp Validation Token" CAMARA_BEARER_TOKEN="My Call Forwarding Signal Token" CAMARA_BEARER_TOKEN="My Device Location Token" CAMARA_BEARER_TOKEN="My Population Density Data Token" CAMARA_BEARER_TOKEN="My Region Device Count Token" CAMARA_BEARER_TOKEN="My Web Rtc Token" CAMARA_BEARER_TOKEN="My Connectivity Insights Token" CAMARA_BEARER_TOKEN="My Quality On Demand Token" CAMARA_BEARER_TOKEN="My Device Identifier Token" CAMARA_BEARER_TOKEN="My Sim Swap Token" CAMARA_BEARER_TOKEN="My Device Roaming Status Token" CAMARA_BEARER_TOKEN="My Device Reachability Status Token" CAMARA_BEARER_TOKEN="My Connected Network Type Token" CAMARA_DEVICE_LOCATION_NOTIFICATIONS_API_KEY="My Device Location Notifications API Key" CAMARA_NOTIFICATIONS_API_KEY="My Notifications API Key" CAMARA_POPULATION_DENSITY_DATA_NOTIFICATIONS_API_KEY="My Population Density Data Notifications API Key" CAMARA_REGION_DEVICE_COUNT_NOTIFICATIONS_API_KEY="My Region Device Count Notifications API Key" CAMARA_CONNECTIVITY_INSIGHTS_NOTIFICATIONS_API_KEY="My Connectivity Insights Notifications API Key" CAMARA_SIM_SWAP_NOTIFICATIONS_API_KEY="My Sim Swap Notifications API Key" CAMARA_DEVICE_ROAMING_STATUS_NOTIFICATIONS_API_KEY="My Device Roaming Status Notifications API Key" CAMARA_DEVICE_REACHABILITY_STATUS_NOTIFICATIONS_API_KEY="My Device Reachability Status Notifications API Key" CAMARA_CONNECTED_NETWORK_TYPE_NOTIFICATIONS_API_KEY="My Connected Network Type Notifications API Key" -- npx -y camara-sdk-mcp
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
| `x-camara-bearer-token` | `customerInsightsToken` | CustomerInsightsopenId |
| `x-camara-bearer-token` | `bearerToken` | openId |
| `x-camara-bearer-token` | `deviceSwapToken` | DeviceSwapopenId |
| `x-camara-bearer-token` | `kycAgeVerificationToken` | KnowYourCustomerAgeVerificationopenId |
| `x-camara-bearer-token` | `kycFillInToken` | KnowYourCustomerFill-inopenId |
| `x-camara-bearer-token` | `kycMatchToken` | KnowYourCustomerMatchopenId |
| `x-camara-bearer-token` | `tenureToken` | TenureopenId |
| `x-camara-bearer-token` | `numberRecyclingToken` | NumberRecyclingopenId |
| `x-camara-bearer-token` | `otpValidationToken` | OTPValidationopenId |
| `x-camara-bearer-token` | `callForwardingSignalToken` | CallForwardingSignalopenId |
| `x-camara-bearer-token` | `deviceLocationToken` | DeviceLocationopenId |
| `x-camara-device-location-notifications-api-key` | `deviceLocationNotificationsAPIKey` | DeviceLocationnotificationsBearerAuth |
| `x-camara-notifications-api-key` | `notificationsAPIKey` | notificationsBearerAuth |
| `x-camara-bearer-token` | `populationDensityDataToken` | PopulationDensityDataopenId |
| `x-camara-population-density-data-notifications-api-key` | `populationDensityDataNotificationsAPIKey` | PopulationDensityDatanotificationsBearerAuth |
| `x-camara-bearer-token` | `regionDeviceCountToken` | RegionDeviceCountopenId |
| `x-camara-region-device-count-notifications-api-key` | `regionDeviceCountNotificationsAPIKey` | RegionDeviceCountnotificationsBearerAuth |
| `x-camara-bearer-token` | `webRtcToken` | WebRTCopenId |
| `x-camara-bearer-token` | `connectivityInsightsToken` | ConnectivityInsightsopenId |
| `x-camara-connectivity-insights-notifications-api-key` | `connectivityInsightsNotificationsAPIKey` | ConnectivityInsightsnotificationsBearerAuth |
| `x-camara-bearer-token` | `qualityOnDemandToken` | QualityOnDemandopenId |
| `x-camara-bearer-token` | `deviceIdentifierToken` | DeviceIdentifieropenId |
| `x-camara-bearer-token` | `simSwapToken` | SimSwapopenId |
| `x-camara-sim-swap-notifications-api-key` | `simSwapNotificationsAPIKey` | SimSwapnotificationsBearerAuth |
| `x-camara-bearer-token` | `deviceRoamingStatusToken` | DeviceRoamingStatusopenId |
| `x-camara-device-roaming-status-notifications-api-key` | `deviceRoamingStatusNotificationsAPIKey` | DeviceRoamingStatusnotificationsBearerAuth |
| `x-camara-bearer-token` | `deviceReachabilityStatusToken` | DeviceReachabilityStatusopenId |
| `x-camara-device-reachability-status-notifications-api-key` | `deviceReachabilityStatusNotificationsAPIKey` | DeviceReachabilityStatusnotificationsBearerAuth |
| `x-camara-bearer-token` | `connectedNetworkTypeToken` | ConnectedNetworkTypeopenId |
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
