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
npx -y camara-mcp@latest
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
      "args": ["-y", "camara-mcp", "--client=claude", "--tools=dynamic"],
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

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

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

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "camara-mcp/server";

// import a specific tool
import retrieveCustomerinsightsScoring from "camara-mcp/tools/customerinsights/scoring/retrieve-customerinsights-scoring";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [retrieveCustomerinsightsScoring, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `customerinsights.scoring`:

- `retrieve_customerinsights_scoring` (`write`): Retrieves Scoring information, for the user associated with the provided `idDocument`, `phoneNumber` or the combination of both parameters.
  It also allows to select the type of the Scoring scale measurement.

### Resource `deviceswap`:

- `check_deviceswap` (`write`): Check if device swap has been performed during a past period
- `retrieve_date_deviceswap` (`write`): Get timestamp of last device swap for a mobile user account provided with phone number.

### Resource `knowyourcustomerageverification`:

- `verify_knowyourcustomerageverification` (`write`): Verify that the age of the subscriber associated with a phone number is equal to or greater than the specified age threshold value.

  As it is possible that the person holding the contract and the end-user of the subscription may not be the same, the endpoint also admits a list of optional properties to be included in the request to improve the identification. The response may optionally include the `identityMatchScore` property with a value that indicates how certain it is that the information returned relates to the person that the API Client is requesting. To increase the reliability of the information returned, the API Provider may include in the response the `verifiedStatus` property, indicating whether the identity information in its possession has been verified against an identification document legally accepted as an age verification document (Note). Note: Depending on the country, credit-check or other mechanism can be used instead of official identification for Age Verification. For details, please contact API Provider.

  If the API Client indicates request properties `includeContentLock` or `includeParentalControl` with value `true` and the API Provider implements this functionality, then the response will also include `contentLock` and `parentalControl` properties to indicate if the subscription has any kind of content filtering enabled. On the other hand, if the request properties are not included or the API Client specifies value `false`, then the response properties will not be returned. If the API Provider doesn't implement this functionality, request properties will be ignored and response properties won't be returned in any case.

### Resource `knowyourcustomerfill_in`:

- `create_knowyourcustomerfill_in` (`write`): Providing information related to a customer identity stored the account data bound to the customer's phone number.

### Resource `knowyourcustomermatch`:

- `match_knowyourcustomermatch` (`write`): Verify matching of a number of attributes related to a customer identity against the verified data bound to their phone number in the Operator systems. Regardless of whether the `phoneNumber` is explicitly stated in the request body, at least one of the other fields must be provided, otherwise a `HTTP 400 - KNOW_YOUR_CUSTOMER.INVALID_PARAM_COMBINATION` error will be returned.

  In order to proceed with the match check, some Operators may have the requirement to perform an additional level of validation based on the `idDocument` property. This means that, in those cases, the `idDocument` is required and the provided value needs to match the one stored in the Operator system associated with the indicated `phoneNumber`. This validation will be done before proceeding with the match check of the rest of the properties. The following two rules apply only in the cases where the Operator have the requirement to validate the `idDocument`:

  - If no `idDocument` is provided, then a `HTTP 403 - KNOW_YOUR_CUSTOMER.ID_DOCUMENT_REQUIRED` error will be returned.
  - If the provided `idDocument` does not match the one stored in the Operator systems, then a `HTTP 403 - KNOW_YOUR_CUSTOMER.ID_DOCUMENT_MISMATCH` error will be returned.

  The API will return the result of the matching process for each requested attribute. This means that the response will **only** contain the attributes for which validation has been requested. Possible values are:

  - **true**: the attribute provided matches with the one in the Operator systems, which is equal to a `match_score` of 100.
  - **false**: the attribute provided does not match with the one in the Operator systems.
  - **not_available**: the attribute is not available to validate.

### Resource `tenure`:

- `verify_tenure` (`write`): Verifies a specified length of tenure, based on a provided date, for a network subscriber to establish a level of trust for the network subscription identifier.

### Resource `numberrecycling`:

- `check_subscriber_change_numberrecycling` (`write`): Check whether the subscriber of the phone number has changed.

### Resource `otpvalidation`:

- `send_code_otpvalidation` (`write`): Sends an SMS with the desired message and an OTP code to the received phone number.
- `validate_code_otpvalidation` (`write`): Verifies the code is valid for the received authenticationId

### Resource `callforwardingsignal`:

- `create_call_forwarding_callforwardingsignal` (`write`): This endpoint provides information about which type of call forwarding service is active. More than one service can be active, e.g. conditional and unconditional. This endpoint exceeds the main scope of the Call Forwarding Signal API, for this reason an error code 501 can be returned.
- `create_unconditional_call_forwarding_callforwardingsignal` (`write`): This endpoint provides information about the status of the unconditional call forwarding, being active or not.

### Resource `devicelocation.subscriptions`:

- `create_devicelocation_subscriptions` (`write`): Create a subscription for a device to receive notifications when the device enters or exits a specified area.
- `retrieve_devicelocation_subscriptions` (`read`): Retrieve Geofencing subscription information for a given subscription ID.
- `list_devicelocation_subscriptions` (`read`): Retrieve a list of geofencing event subscription(s).
- `delete_devicelocation_subscriptions` (`write`): Delete a given Geofencing subscription.

### Resource `populationdensitydata`:

- `retrieve_populationdensitydata` (`write`): Retrieves population density estimation together with the estimation range related for a time slot for a given area (described as a polygon) as a data set consisting of a sequence of equally-sized objects covering the input polygon area.

### Resource `regiondevicecount`:

- `get_count_regiondevicecount` (`write`): Get the number of devices in the specified area during a certain time interval.
  - The query area can be a circle or a polygon composed of longitude and latitude points.
  - If the areaType is circle, the circleCenter and circleRadius must be provided; if the area is a polygon, the point list must be provided.
  - If starttime and endtime are not passed in,this api should return the current number of devices in the area.
  - If the device appears in the specified area at least once during the certain time interval, it should be counted.

### Resource `webrtc.sessions`:

- `create_webrtc_sessions` (`write`): Creates a voice and/or video session
- `retrieve_webrtc_sessions` (`read`): Get the media Session description based on `mediaSessionId`.

  ** The client shall construct the API path using the `mediaSessionId` supplied
  in the session creation response (origination) or in the invitation notification
  (termination). **

- `cancel_webrtc_sessions` (`write`): Cancel a 1-1 media session (as originator),
  Decline a 1-1 media session (as receiver),
  Terminate a 1-1 an ongoing media session
  ** The client shall construct the API path using the mediaSessionId supplied in the session creation response (origination) or in the invitation notification (termination). **'
- `update_status_webrtc_sessions` (`write`): Update the status of the media session, this may include updating SDP media

  The API consumer shall construct the API path using the `mediaSessionId` supplied in the session creation response (origination) or in the invitation notification (termination).

### Resource `connectivityinsights.subscriptions`:

- `create_connectivityinsights_subscriptions` (`write`): Create a Connectivity insights subscription for a device
- `retrieve_connectivityinsights_subscriptions` (`read`): Retrieve a given subscription by ID
- `list_connectivityinsights_subscriptions` (`read`): Operation to list subscriptions authorized to be retrieved by the
  provided access token.
- `delete_connectivityinsights_subscriptions` (`write`): Delete a given subscription by ID

### Resource `qualityondemand`:

- `retrieve_qos_profile_qualityondemand` (`read`): Returns a QoS Profile that matches the given name.

  The access token may be either a 2-legged or 3-legged access token. If the access token is 3-legged, a QoS Profile is only returned if available to all subjects associated with the access token.

- `retrieve_qos_profiles_qualityondemand` (`write`): Returns all QoS Profiles that match the given criteria.
  **NOTES:**
  - The access token may be either a 2-legged or 3-legged access token.
  - If the access token is 3-legged, all returned QoS Profiles will be available to the subject (device) associated with the access token.
  - If the access token is 2-legged and a device filter is provided, all returned QoS Profiles will be available to that device. If multiple device identifiers are provided within the device property, only QoS Profiles available to the device identifier chosen by the implementation will be returned, even if the identifiers do not match the same device. API provider does not perform any logic to validate/correlate that the indicated device identifiers match the same device. No error should be returned if the identifiers are otherwise valid to prevent API consumers correlating different identifiers with a given end user.
  - This call uses the POST method instead of GET to comply with the CAMARA Commonalities guidelines for sending sensitive or complex data in API calls. Since the device field may contain personally identifiable information, it should not be sent via GET. Additionally, this call may include complex data structures.
    [CAMARA API Design Guidelines](https://github.com/camaraproject/Commonalities/blob/r3.3/documentation/API-design-guidelines.md#post-or-get-for-transferring-sensitive-or-complex-data)

### Resource `deviceidentifier`:

- `retrieve_identifier_deviceidentifier` (`write`): Get details about the specific device being used by a given mobile subscriber
- `retrieve_ppid_deviceidentifier` (`write`): Get a pseudonymous identifier for device being used by a given mobile subscriber
- `retrieve_type_deviceidentifier` (`write`): Get details about the type of device being used by a given mobile subscriber

### Resource `simswap.subscriptions`:

- `create_simswap_subscriptions` (`write`): Create a sim swap event subscription for a phone number
- `retrieve_simswap_subscriptions` (`read`): retrieve event subscription information for a given subscription.
- `list_simswap_subscriptions` (`read`): Retrieve a list of sim swap event subscription(s)
- `delete_simswap_subscriptions` (`write`): delete a given event subscription.

### Resource `deviceroamingstatus.subscriptions`:

- `create_deviceroamingstatus_subscriptions` (`write`): Create a device roaming status event subscription for a device
- `retrieve_deviceroamingstatus_subscriptions` (`read`): retrieve device roaming status subscription information for a given subscription.
- `list_deviceroamingstatus_subscriptions` (`read`): Retrieve a list of device roaming status event subscription(s)
- `delete_deviceroamingstatus_subscriptions` (`write`): Delete a given device-roaming-status subscription by ID

### Resource `devicereachabilitystatus.subscriptions`:

- `create_devicereachabilitystatus_subscriptions` (`write`): Create a device reachability status event subscription for a device
- `retrieve_devicereachabilitystatus_subscriptions` (`read`): Retrieve a given subscription by ID
- `list_devicereachabilitystatus_subscriptions` (`read`): Retrieve a list of device reachability status event subscription(s)
- `delete_devicereachabilitystatus_subscriptions` (`write`): Delete a given subscription by ID

### Resource `connectednetworktype.subscriptions`:

- `create_connectednetworktype_subscriptions` (`write`): Create a subscription for receiving notifications on changes to the connected network type of a device.
- `retrieve_connectednetworktype_subscriptions` (`read`): retrieve ConnectedNetworkType subscription information for a given subscription ID.
- `list_connectednetworktype_subscriptions` (`read`): Retrieve a list of device connected network type event subscription(s)
- `delete_connectednetworktype_subscriptions` (`write`): delete a given ConnectedNetworkType subscription.
