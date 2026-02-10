import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.customerinsights.scoring.retrieve',
    fullyQualifiedName: 'customerinsights.scoring.retrieve',
    httpMethod: 'post',
    httpPath: '/customerinsights/scoring/retrieve',
  },
  {
    clientCallName: 'client.deviceswap.check',
    fullyQualifiedName: 'deviceswap.check',
    httpMethod: 'post',
    httpPath: '/deviceswap/check',
  },
  {
    clientCallName: 'client.deviceswap.retrieveDate',
    fullyQualifiedName: 'deviceswap.retrieveDate',
    httpMethod: 'post',
    httpPath: '/deviceswap/retrieve-date',
  },
  {
    clientCallName: 'client.knowyourcustomerageverification.verify',
    fullyQualifiedName: 'knowyourcustomerageverification.verify',
    httpMethod: 'post',
    httpPath: '/knowyourcustomerageverification/verify',
  },
  {
    clientCallName: 'client.knowyourcustomerfillIn.create',
    fullyQualifiedName: 'knowyourcustomerfillIn.create',
    httpMethod: 'post',
    httpPath: '/knowyourcustomerfill-in/fill-in',
  },
  {
    clientCallName: 'client.knowyourcustomermatch.match',
    fullyQualifiedName: 'knowyourcustomermatch.match',
    httpMethod: 'post',
    httpPath: '/knowyourcustomermatch/match',
  },
  {
    clientCallName: 'client.tenure.verify',
    fullyQualifiedName: 'tenure.verify',
    httpMethod: 'post',
    httpPath: '/tenure/check-tenure',
  },
  {
    clientCallName: 'client.numberrecycling.checkSubscriberChange',
    fullyQualifiedName: 'numberrecycling.checkSubscriberChange',
    httpMethod: 'post',
    httpPath: '/numberrecycling/check',
  },
  {
    clientCallName: 'client.otpvalidation.sendCode',
    fullyQualifiedName: 'otpvalidation.sendCode',
    httpMethod: 'post',
    httpPath: '/otpvalidation/send-code',
  },
  {
    clientCallName: 'client.otpvalidation.validateCode',
    fullyQualifiedName: 'otpvalidation.validateCode',
    httpMethod: 'post',
    httpPath: '/otpvalidation/validate-code',
  },
  {
    clientCallName: 'client.callforwardingsignal.checkActiveForwardings',
    fullyQualifiedName: 'callforwardingsignal.checkActiveForwardings',
    httpMethod: 'post',
    httpPath: '/callforwardingsignal/call-forwardings',
  },
  {
    clientCallName: 'client.callforwardingsignal.checkUnconditionalForwarding',
    fullyQualifiedName: 'callforwardingsignal.checkUnconditionalForwarding',
    httpMethod: 'post',
    httpPath: '/callforwardingsignal/unconditional-call-forwardings',
  },
  {
    clientCallName: 'client.devicelocation.subscriptions.create',
    fullyQualifiedName: 'devicelocation.subscriptions.create',
    httpMethod: 'post',
    httpPath: '/devicelocation/subscriptions',
  },
  {
    clientCallName: 'client.devicelocation.subscriptions.retrieve',
    fullyQualifiedName: 'devicelocation.subscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/devicelocation/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.devicelocation.subscriptions.list',
    fullyQualifiedName: 'devicelocation.subscriptions.list',
    httpMethod: 'get',
    httpPath: '/devicelocation/subscriptions',
  },
  {
    clientCallName: 'client.devicelocation.subscriptions.delete',
    fullyQualifiedName: 'devicelocation.subscriptions.delete',
    httpMethod: 'delete',
    httpPath: '/devicelocation/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.populationdensitydata.retrieve',
    fullyQualifiedName: 'populationdensitydata.retrieve',
    httpMethod: 'post',
    httpPath: '/populationdensitydata/retrieve',
  },
  {
    clientCallName: 'client.regiondevicecount.getCount',
    fullyQualifiedName: 'regiondevicecount.getCount',
    httpMethod: 'post',
    httpPath: '/regiondevicecount/count',
  },
  {
    clientCallName: 'client.webrtc.sessions.create',
    fullyQualifiedName: 'webrtc.sessions.create',
    httpMethod: 'post',
    httpPath: '/webrtc/sessions',
  },
  {
    clientCallName: 'client.webrtc.sessions.retrieve',
    fullyQualifiedName: 'webrtc.sessions.retrieve',
    httpMethod: 'get',
    httpPath: '/webrtc/sessions/{mediaSessionId}',
  },
  {
    clientCallName: 'client.webrtc.sessions.delete',
    fullyQualifiedName: 'webrtc.sessions.delete',
    httpMethod: 'delete',
    httpPath: '/webrtc/sessions/{mediaSessionId}',
  },
  {
    clientCallName: 'client.webrtc.sessions.updateStatus',
    fullyQualifiedName: 'webrtc.sessions.updateStatus',
    httpMethod: 'put',
    httpPath: '/webrtc/sessions/{mediaSessionId}/status',
  },
  {
    clientCallName: 'client.connectivityinsights.subscriptions.create',
    fullyQualifiedName: 'connectivityinsights.subscriptions.create',
    httpMethod: 'post',
    httpPath: '/connectivityinsights/subscriptions',
  },
  {
    clientCallName: 'client.connectivityinsights.subscriptions.retrieve',
    fullyQualifiedName: 'connectivityinsights.subscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/connectivityinsights/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.connectivityinsights.subscriptions.list',
    fullyQualifiedName: 'connectivityinsights.subscriptions.list',
    httpMethod: 'get',
    httpPath: '/connectivityinsights/subscriptions',
  },
  {
    clientCallName: 'client.connectivityinsights.subscriptions.delete',
    fullyQualifiedName: 'connectivityinsights.subscriptions.delete',
    httpMethod: 'delete',
    httpPath: '/connectivityinsights/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.qualityondemand.retrieveQosProfile',
    fullyQualifiedName: 'qualityondemand.retrieveQosProfile',
    httpMethod: 'get',
    httpPath: '/qualityondemand/qos-profiles/{name}',
  },
  {
    clientCallName: 'client.qualityondemand.retrieveQosProfiles',
    fullyQualifiedName: 'qualityondemand.retrieveQosProfiles',
    httpMethod: 'post',
    httpPath: '/qualityondemand/retrieve-qos-profiles',
  },
  {
    clientCallName: 'client.deviceidentifier.retrieveIdentifier',
    fullyQualifiedName: 'deviceidentifier.retrieveIdentifier',
    httpMethod: 'post',
    httpPath: '/deviceidentifier/retrieve-identifier',
  },
  {
    clientCallName: 'client.deviceidentifier.retrievePpid',
    fullyQualifiedName: 'deviceidentifier.retrievePpid',
    httpMethod: 'post',
    httpPath: '/deviceidentifier/retrieve-ppid',
  },
  {
    clientCallName: 'client.deviceidentifier.retrieveType',
    fullyQualifiedName: 'deviceidentifier.retrieveType',
    httpMethod: 'post',
    httpPath: '/deviceidentifier/retrieve-type',
  },
  {
    clientCallName: 'client.simswap.subscriptions.create',
    fullyQualifiedName: 'simswap.subscriptions.create',
    httpMethod: 'post',
    httpPath: '/simswap/subscriptions',
  },
  {
    clientCallName: 'client.simswap.subscriptions.retrieve',
    fullyQualifiedName: 'simswap.subscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/simswap/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.simswap.subscriptions.list',
    fullyQualifiedName: 'simswap.subscriptions.list',
    httpMethod: 'get',
    httpPath: '/simswap/subscriptions',
  },
  {
    clientCallName: 'client.simswap.subscriptions.delete',
    fullyQualifiedName: 'simswap.subscriptions.delete',
    httpMethod: 'delete',
    httpPath: '/simswap/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.deviceroamingstatus.subscriptions.create',
    fullyQualifiedName: 'deviceroamingstatus.subscriptions.create',
    httpMethod: 'post',
    httpPath: '/deviceroamingstatus/subscriptions',
  },
  {
    clientCallName: 'client.deviceroamingstatus.subscriptions.retrieve',
    fullyQualifiedName: 'deviceroamingstatus.subscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/deviceroamingstatus/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.deviceroamingstatus.subscriptions.list',
    fullyQualifiedName: 'deviceroamingstatus.subscriptions.list',
    httpMethod: 'get',
    httpPath: '/deviceroamingstatus/subscriptions',
  },
  {
    clientCallName: 'client.deviceroamingstatus.subscriptions.delete',
    fullyQualifiedName: 'deviceroamingstatus.subscriptions.delete',
    httpMethod: 'delete',
    httpPath: '/deviceroamingstatus/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.devicereachabilitystatus.subscriptions.create',
    fullyQualifiedName: 'devicereachabilitystatus.subscriptions.create',
    httpMethod: 'post',
    httpPath: '/devicereachabilitystatus/subscriptions',
  },
  {
    clientCallName: 'client.devicereachabilitystatus.subscriptions.retrieve',
    fullyQualifiedName: 'devicereachabilitystatus.subscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/devicereachabilitystatus/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.devicereachabilitystatus.subscriptions.list',
    fullyQualifiedName: 'devicereachabilitystatus.subscriptions.list',
    httpMethod: 'get',
    httpPath: '/devicereachabilitystatus/subscriptions',
  },
  {
    clientCallName: 'client.devicereachabilitystatus.subscriptions.delete',
    fullyQualifiedName: 'devicereachabilitystatus.subscriptions.delete',
    httpMethod: 'delete',
    httpPath: '/devicereachabilitystatus/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.connectednetworktype.subscriptions.create',
    fullyQualifiedName: 'connectednetworktype.subscriptions.create',
    httpMethod: 'post',
    httpPath: '/connectednetworktype/subscriptions',
  },
  {
    clientCallName: 'client.connectednetworktype.subscriptions.retrieve',
    fullyQualifiedName: 'connectednetworktype.subscriptions.retrieve',
    httpMethod: 'get',
    httpPath: '/connectednetworktype/subscriptions/{subscriptionId}',
  },
  {
    clientCallName: 'client.connectednetworktype.subscriptions.list',
    fullyQualifiedName: 'connectednetworktype.subscriptions.list',
    httpMethod: 'get',
    httpPath: '/connectednetworktype/subscriptions',
  },
  {
    clientCallName: 'client.connectednetworktype.subscriptions.delete',
    fullyQualifiedName: 'connectednetworktype.subscriptions.delete',
    httpMethod: 'delete',
    httpPath: '/connectednetworktype/subscriptions/{subscriptionId}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
