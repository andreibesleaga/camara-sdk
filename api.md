# Customerinsights

## Scoring

Types:

- <code><a href="./src/resources/customerinsights/scoring.ts">ScoringRetrieveResponse</a></code>

Methods:

- <code title="post /customerinsights/scoring/retrieve">client.customerinsights.scoring.<a href="./src/resources/customerinsights/scoring.ts">retrieve</a>({ ...params }) -> ScoringRetrieveResponse</code>

# Deviceswap

Types:

- <code><a href="./src/resources/deviceswap.ts">DeviceswapCheckResponse</a></code>
- <code><a href="./src/resources/deviceswap.ts">DeviceswapRetrieveDateResponse</a></code>

Methods:

- <code title="post /deviceswap/check">client.deviceswap.<a href="./src/resources/deviceswap.ts">check</a>({ ...params }) -> DeviceswapCheckResponse</code>
- <code title="post /deviceswap/retrieve-date">client.deviceswap.<a href="./src/resources/deviceswap.ts">retrieveDate</a>({ ...params }) -> DeviceswapRetrieveDateResponse</code>

# Knowyourcustomerageverification

Types:

- <code><a href="./src/resources/knowyourcustomerageverification.ts">KnowyourcustomerageverificationVerifyResponse</a></code>

Methods:

- <code title="post /knowyourcustomerageverification/verify">client.knowyourcustomerageverification.<a href="./src/resources/knowyourcustomerageverification.ts">verify</a>({ ...params }) -> KnowyourcustomerageverificationVerifyResponse</code>

# KnowyourcustomerfillIn

Types:

- <code><a href="./src/resources/knowyourcustomerfill-in.ts">KnowyourcustomerfillInCreateResponse</a></code>

Methods:

- <code title="post /knowyourcustomerfill-in/fill-in">client.knowyourcustomerfillIn.<a href="./src/resources/knowyourcustomerfill-in.ts">create</a>({ ...params }) -> KnowyourcustomerfillInCreateResponse</code>

# Knowyourcustomermatch

Types:

- <code><a href="./src/resources/knowyourcustomermatch.ts">MatchResult</a></code>
- <code><a href="./src/resources/knowyourcustomermatch.ts">KnowyourcustomermatchMatchResponse</a></code>

Methods:

- <code title="post /knowyourcustomermatch/match">client.knowyourcustomermatch.<a href="./src/resources/knowyourcustomermatch.ts">match</a>({ ...params }) -> KnowyourcustomermatchMatchResponse</code>

# Tenure

Types:

- <code><a href="./src/resources/tenure.ts">TenureVerifyResponse</a></code>

Methods:

- <code title="post /tenure/check-tenure">client.tenure.<a href="./src/resources/tenure.ts">verify</a>({ ...params }) -> TenureVerifyResponse</code>

# Numberrecycling

Types:

- <code><a href="./src/resources/numberrecycling.ts">NumberrecyclingCheckSubscriberChangeResponse</a></code>

Methods:

- <code title="post /numberrecycling/check">client.numberrecycling.<a href="./src/resources/numberrecycling.ts">checkSubscriberChange</a>({ ...params }) -> NumberrecyclingCheckSubscriberChangeResponse</code>

# Otpvalidation

Types:

- <code><a href="./src/resources/otpvalidation.ts">OtpvalidationSendCodeResponse</a></code>

Methods:

- <code title="post /otpvalidation/send-code">client.otpvalidation.<a href="./src/resources/otpvalidation.ts">sendCode</a>({ ...params }) -> OtpvalidationSendCodeResponse</code>
- <code title="post /otpvalidation/validate-code">client.otpvalidation.<a href="./src/resources/otpvalidation.ts">validateCode</a>({ ...params }) -> void</code>

# Callforwardingsignal

Types:

- <code><a href="./src/resources/callforwardingsignal.ts">CallForwardingSignal</a></code>
- <code><a href="./src/resources/callforwardingsignal.ts">CallforwardingsignalCheckActiveForwardingsResponse</a></code>
- <code><a href="./src/resources/callforwardingsignal.ts">CallforwardingsignalCheckUnconditionalForwardingResponse</a></code>

Methods:

- <code title="post /callforwardingsignal/call-forwardings">client.callforwardingsignal.<a href="./src/resources/callforwardingsignal.ts">checkActiveForwardings</a>({ ...params }) -> CallforwardingsignalCheckActiveForwardingsResponse</code>
- <code title="post /callforwardingsignal/unconditional-call-forwardings">client.callforwardingsignal.<a href="./src/resources/callforwardingsignal.ts">checkUnconditionalForwarding</a>({ ...params }) -> CallforwardingsignalCheckUnconditionalForwardingResponse</code>

# Devicelocation

## Subscriptions

Types:

- <code><a href="./src/resources/devicelocation/subscriptions.ts">DeviceLocationArea</a></code>
- <code><a href="./src/resources/devicelocation/subscriptions.ts">DeviceLocationConfig</a></code>
- <code><a href="./src/resources/devicelocation/subscriptions.ts">DeviceLocationDevice</a></code>
- <code><a href="./src/resources/devicelocation/subscriptions.ts">DeviceLocationProtocol</a></code>
- <code><a href="./src/resources/devicelocation/subscriptions.ts">DeviceLocationSubscription</a></code>
- <code><a href="./src/resources/devicelocation/subscriptions.ts">DeviceLocationSubscriptionEventType</a></code>
- <code><a href="./src/resources/devicelocation/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/devicelocation/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /devicelocation/subscriptions">client.devicelocation.subscriptions.<a href="./src/resources/devicelocation/subscriptions.ts">create</a>({ ...params }) -> DeviceLocationSubscription</code>
- <code title="get /devicelocation/subscriptions/{subscriptionId}">client.devicelocation.subscriptions.<a href="./src/resources/devicelocation/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> DeviceLocationSubscription</code>
- <code title="get /devicelocation/subscriptions">client.devicelocation.subscriptions.<a href="./src/resources/devicelocation/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /devicelocation/subscriptions/{subscriptionId}">client.devicelocation.subscriptions.<a href="./src/resources/devicelocation/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> SubscriptionDeleteResponse</code>

# Populationdensitydata

Types:

- <code><a href="./src/resources/populationdensitydata.ts">PopulationdensitydataRetrieveResponse</a></code>

Methods:

- <code title="post /populationdensitydata/retrieve">client.populationdensitydata.<a href="./src/resources/populationdensitydata.ts">retrieve</a>({ ...params }) -> PopulationdensitydataRetrieveResponse</code>

# Regiondevicecount

Types:

- <code><a href="./src/resources/regiondevicecount.ts">RegiondevicecountGetCountResponse</a></code>

Methods:

- <code title="post /regiondevicecount/count">client.regiondevicecount.<a href="./src/resources/regiondevicecount.ts">getCount</a>({ ...params }) -> RegiondevicecountGetCountResponse</code>

# Webrtc

## Sessions

Types:

- <code><a href="./src/resources/webrtc/sessions.ts">MediaSessionInformation</a></code>
- <code><a href="./src/resources/webrtc/sessions.ts">SdpDescriptor</a></code>

Methods:

- <code title="post /webrtc/sessions">client.webrtc.sessions.<a href="./src/resources/webrtc/sessions.ts">create</a>({ ...params }) -> MediaSessionInformation</code>
- <code title="get /webrtc/sessions/{mediaSessionId}">client.webrtc.sessions.<a href="./src/resources/webrtc/sessions.ts">retrieve</a>(mediaSessionID, { ...params }) -> MediaSessionInformation</code>
- <code title="delete /webrtc/sessions/{mediaSessionId}">client.webrtc.sessions.<a href="./src/resources/webrtc/sessions.ts">delete</a>(mediaSessionID, { ...params }) -> void</code>
- <code title="put /webrtc/sessions/{mediaSessionId}/status">client.webrtc.sessions.<a href="./src/resources/webrtc/sessions.ts">updateStatus</a>(mediaSessionID, { ...params }) -> MediaSessionInformation</code>

# Connectivityinsights

## Subscriptions

Types:

- <code><a href="./src/resources/connectivityinsights/subscriptions.ts">Config</a></code>
- <code><a href="./src/resources/connectivityinsights/subscriptions.ts">Protocol</a></code>
- <code><a href="./src/resources/connectivityinsights/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/connectivityinsights/subscriptions.ts">SubscriptionEventType</a></code>
- <code><a href="./src/resources/connectivityinsights/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/connectivityinsights/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /connectivityinsights/subscriptions">client.connectivityinsights.subscriptions.<a href="./src/resources/connectivityinsights/subscriptions.ts">create</a>({ ...params }) -> Subscription</code>
- <code title="get /connectivityinsights/subscriptions/{subscriptionId}">client.connectivityinsights.subscriptions.<a href="./src/resources/connectivityinsights/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> Subscription</code>
- <code title="get /connectivityinsights/subscriptions">client.connectivityinsights.subscriptions.<a href="./src/resources/connectivityinsights/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /connectivityinsights/subscriptions/{subscriptionId}">client.connectivityinsights.subscriptions.<a href="./src/resources/connectivityinsights/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> SubscriptionDeleteResponse</code>

# Qualityondemand

Types:

- <code><a href="./src/resources/qualityondemand.ts">Duration</a></code>
- <code><a href="./src/resources/qualityondemand.ts">QosProfile</a></code>
- <code><a href="./src/resources/qualityondemand.ts">QosProfileStatus</a></code>
- <code><a href="./src/resources/qualityondemand.ts">Rate</a></code>
- <code><a href="./src/resources/qualityondemand.ts">QualityondemandRetrieveQosProfilesResponse</a></code>

Methods:

- <code title="get /qualityondemand/qos-profiles/{name}">client.qualityondemand.<a href="./src/resources/qualityondemand.ts">retrieveQosProfile</a>(name, { ...params }) -> QosProfile</code>
- <code title="post /qualityondemand/retrieve-qos-profiles">client.qualityondemand.<a href="./src/resources/qualityondemand.ts">retrieveQosProfiles</a>({ ...params }) -> QualityondemandRetrieveQosProfilesResponse</code>

# Deviceidentifier

Types:

- <code><a href="./src/resources/deviceidentifier.ts">DeviceIdentifierDevice</a></code>
- <code><a href="./src/resources/deviceidentifier.ts">DeviceIdentifierDeviceIpv4Addr</a></code>
- <code><a href="./src/resources/deviceidentifier.ts">DeviceIdentifierRequestBody</a></code>
- <code><a href="./src/resources/deviceidentifier.ts">DeviceidentifierRetrieveIdentifierResponse</a></code>
- <code><a href="./src/resources/deviceidentifier.ts">DeviceidentifierRetrievePpidResponse</a></code>
- <code><a href="./src/resources/deviceidentifier.ts">DeviceidentifierRetrieveTypeResponse</a></code>

Methods:

- <code title="post /deviceidentifier/retrieve-identifier">client.deviceidentifier.<a href="./src/resources/deviceidentifier.ts">retrieveIdentifier</a>({ ...params }) -> DeviceidentifierRetrieveIdentifierResponse</code>
- <code title="post /deviceidentifier/retrieve-ppid">client.deviceidentifier.<a href="./src/resources/deviceidentifier.ts">retrievePpid</a>({ ...params }) -> DeviceidentifierRetrievePpidResponse</code>
- <code title="post /deviceidentifier/retrieve-type">client.deviceidentifier.<a href="./src/resources/deviceidentifier.ts">retrieveType</a>({ ...params }) -> DeviceidentifierRetrieveTypeResponse</code>

# Simswap

## Subscriptions

Types:

- <code><a href="./src/resources/simswap/subscriptions.ts">SimSwapConfig</a></code>
- <code><a href="./src/resources/simswap/subscriptions.ts">SimSwapProtocol</a></code>
- <code><a href="./src/resources/simswap/subscriptions.ts">SimSwapSubscription</a></code>
- <code><a href="./src/resources/simswap/subscriptions.ts">SimSwapSubscriptionEventType</a></code>
- <code><a href="./src/resources/simswap/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/simswap/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /simswap/subscriptions">client.simswap.subscriptions.<a href="./src/resources/simswap/subscriptions.ts">create</a>({ ...params }) -> SimSwapSubscription</code>
- <code title="get /simswap/subscriptions/{subscriptionId}">client.simswap.subscriptions.<a href="./src/resources/simswap/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> SimSwapSubscription</code>
- <code title="get /simswap/subscriptions">client.simswap.subscriptions.<a href="./src/resources/simswap/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /simswap/subscriptions/{subscriptionId}">client.simswap.subscriptions.<a href="./src/resources/simswap/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> SubscriptionDeleteResponse</code>

# Deviceroamingstatus

## Subscriptions

Types:

- <code><a href="./src/resources/deviceroamingstatus/subscriptions.ts">DeviceRoamingStatusConfig</a></code>
- <code><a href="./src/resources/deviceroamingstatus/subscriptions.ts">DeviceRoamingStatusProtocol</a></code>
- <code><a href="./src/resources/deviceroamingstatus/subscriptions.ts">DeviceRoamingStatusSubscription</a></code>
- <code><a href="./src/resources/deviceroamingstatus/subscriptions.ts">DeviceRoamingStatusSubscriptionEventType</a></code>
- <code><a href="./src/resources/deviceroamingstatus/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/deviceroamingstatus/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /deviceroamingstatus/subscriptions">client.deviceroamingstatus.subscriptions.<a href="./src/resources/deviceroamingstatus/subscriptions.ts">create</a>({ ...params }) -> DeviceRoamingStatusSubscription</code>
- <code title="get /deviceroamingstatus/subscriptions/{subscriptionId}">client.deviceroamingstatus.subscriptions.<a href="./src/resources/deviceroamingstatus/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> DeviceRoamingStatusSubscription</code>
- <code title="get /deviceroamingstatus/subscriptions">client.deviceroamingstatus.subscriptions.<a href="./src/resources/deviceroamingstatus/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /deviceroamingstatus/subscriptions/{subscriptionId}">client.deviceroamingstatus.subscriptions.<a href="./src/resources/deviceroamingstatus/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> SubscriptionDeleteResponse</code>

# Devicereachabilitystatus

## Subscriptions

Types:

- <code><a href="./src/resources/devicereachabilitystatus/subscriptions.ts">DeviceReachabilityStatusConfig</a></code>
- <code><a href="./src/resources/devicereachabilitystatus/subscriptions.ts">DeviceReachabilityStatusProtocol</a></code>
- <code><a href="./src/resources/devicereachabilitystatus/subscriptions.ts">DeviceReachabilityStatusSubscription</a></code>
- <code><a href="./src/resources/devicereachabilitystatus/subscriptions.ts">DeviceReachabilityStatusSubscriptionEventType</a></code>
- <code><a href="./src/resources/devicereachabilitystatus/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/devicereachabilitystatus/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /devicereachabilitystatus/subscriptions">client.devicereachabilitystatus.subscriptions.<a href="./src/resources/devicereachabilitystatus/subscriptions.ts">create</a>({ ...params }) -> DeviceReachabilityStatusSubscription</code>
- <code title="get /devicereachabilitystatus/subscriptions/{subscriptionId}">client.devicereachabilitystatus.subscriptions.<a href="./src/resources/devicereachabilitystatus/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> DeviceReachabilityStatusSubscription</code>
- <code title="get /devicereachabilitystatus/subscriptions">client.devicereachabilitystatus.subscriptions.<a href="./src/resources/devicereachabilitystatus/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /devicereachabilitystatus/subscriptions/{subscriptionId}">client.devicereachabilitystatus.subscriptions.<a href="./src/resources/devicereachabilitystatus/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> SubscriptionDeleteResponse</code>

# Connectednetworktype

## Subscriptions

Types:

- <code><a href="./src/resources/connectednetworktype/subscriptions.ts">ConnectedNetworkTypeConfig</a></code>
- <code><a href="./src/resources/connectednetworktype/subscriptions.ts">ConnectedNetworkTypeProtocol</a></code>
- <code><a href="./src/resources/connectednetworktype/subscriptions.ts">ConnectedNetworkTypeSubscription</a></code>
- <code><a href="./src/resources/connectednetworktype/subscriptions.ts">ConnectedNetworkTypeSubscriptionEventType</a></code>
- <code><a href="./src/resources/connectednetworktype/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/connectednetworktype/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /connectednetworktype/subscriptions">client.connectednetworktype.subscriptions.<a href="./src/resources/connectednetworktype/subscriptions.ts">create</a>({ ...params }) -> ConnectedNetworkTypeSubscription</code>
- <code title="get /connectednetworktype/subscriptions/{subscriptionId}">client.connectednetworktype.subscriptions.<a href="./src/resources/connectednetworktype/subscriptions.ts">retrieve</a>(subscriptionID, { ...params }) -> ConnectedNetworkTypeSubscription</code>
- <code title="get /connectednetworktype/subscriptions">client.connectednetworktype.subscriptions.<a href="./src/resources/connectednetworktype/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponse</code>
- <code title="delete /connectednetworktype/subscriptions/{subscriptionId}">client.connectednetworktype.subscriptions.<a href="./src/resources/connectednetworktype/subscriptions.ts">delete</a>(subscriptionID, { ...params }) -> SubscriptionDeleteResponse</code>
