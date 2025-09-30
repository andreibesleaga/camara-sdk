// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import retrieve_customerinsights_scoring from './customerinsights/scoring/retrieve-customerinsights-scoring';
import check_deviceswap from './deviceswap/check-deviceswap';
import retrieve_date_deviceswap from './deviceswap/retrieve-date-deviceswap';
import verify_knowyourcustomerageverification from './knowyourcustomerageverification/verify-knowyourcustomerageverification';
import create_knowyourcustomerfill_in from './knowyourcustomerfill-in/create-knowyourcustomerfill-in';
import match_knowyourcustomermatch from './knowyourcustomermatch/match-knowyourcustomermatch';
import verify_tenure from './tenure/verify-tenure';
import check_subscriber_change_numberrecycling from './numberrecycling/check-subscriber-change-numberrecycling';
import send_code_otpvalidation from './otpvalidation/send-code-otpvalidation';
import validate_code_otpvalidation from './otpvalidation/validate-code-otpvalidation';
import create_call_forwarding_callforwardingsignal from './callforwardingsignal/create-call-forwarding-callforwardingsignal';
import create_unconditional_call_forwarding_callforwardingsignal from './callforwardingsignal/create-unconditional-call-forwarding-callforwardingsignal';
import create_devicelocation_subscriptions from './devicelocation/subscriptions/create-devicelocation-subscriptions';
import retrieve_devicelocation_subscriptions from './devicelocation/subscriptions/retrieve-devicelocation-subscriptions';
import list_devicelocation_subscriptions from './devicelocation/subscriptions/list-devicelocation-subscriptions';
import delete_devicelocation_subscriptions from './devicelocation/subscriptions/delete-devicelocation-subscriptions';
import retrieve_populationdensitydata from './populationdensitydata/retrieve-populationdensitydata';
import get_count_regiondevicecount from './regiondevicecount/get-count-regiondevicecount';
import create_webrtc_sessions from './webrtc/sessions/create-webrtc-sessions';
import retrieve_webrtc_sessions from './webrtc/sessions/retrieve-webrtc-sessions';
import cancel_webrtc_sessions from './webrtc/sessions/cancel-webrtc-sessions';
import update_status_webrtc_sessions from './webrtc/sessions/update-status-webrtc-sessions';
import create_connectivityinsights_subscriptions from './connectivityinsights/subscriptions/create-connectivityinsights-subscriptions';
import retrieve_connectivityinsights_subscriptions from './connectivityinsights/subscriptions/retrieve-connectivityinsights-subscriptions';
import list_connectivityinsights_subscriptions from './connectivityinsights/subscriptions/list-connectivityinsights-subscriptions';
import delete_connectivityinsights_subscriptions from './connectivityinsights/subscriptions/delete-connectivityinsights-subscriptions';
import retrieve_qos_profile_qualityondemand from './qualityondemand/retrieve-qos-profile-qualityondemand';
import retrieve_qos_profiles_qualityondemand from './qualityondemand/retrieve-qos-profiles-qualityondemand';
import retrieve_identifier_deviceidentifier from './deviceidentifier/retrieve-identifier-deviceidentifier';
import retrieve_ppid_deviceidentifier from './deviceidentifier/retrieve-ppid-deviceidentifier';
import retrieve_type_deviceidentifier from './deviceidentifier/retrieve-type-deviceidentifier';
import create_simswap_subscriptions from './simswap/subscriptions/create-simswap-subscriptions';
import retrieve_simswap_subscriptions from './simswap/subscriptions/retrieve-simswap-subscriptions';
import list_simswap_subscriptions from './simswap/subscriptions/list-simswap-subscriptions';
import delete_simswap_subscriptions from './simswap/subscriptions/delete-simswap-subscriptions';
import create_deviceroamingstatus_subscriptions from './deviceroamingstatus/subscriptions/create-deviceroamingstatus-subscriptions';
import retrieve_deviceroamingstatus_subscriptions from './deviceroamingstatus/subscriptions/retrieve-deviceroamingstatus-subscriptions';
import list_deviceroamingstatus_subscriptions from './deviceroamingstatus/subscriptions/list-deviceroamingstatus-subscriptions';
import delete_deviceroamingstatus_subscriptions from './deviceroamingstatus/subscriptions/delete-deviceroamingstatus-subscriptions';
import create_devicereachabilitystatus_subscriptions from './devicereachabilitystatus/subscriptions/create-devicereachabilitystatus-subscriptions';
import retrieve_devicereachabilitystatus_subscriptions from './devicereachabilitystatus/subscriptions/retrieve-devicereachabilitystatus-subscriptions';
import list_devicereachabilitystatus_subscriptions from './devicereachabilitystatus/subscriptions/list-devicereachabilitystatus-subscriptions';
import delete_devicereachabilitystatus_subscriptions from './devicereachabilitystatus/subscriptions/delete-devicereachabilitystatus-subscriptions';
import create_connectednetworktype_subscriptions from './connectednetworktype/subscriptions/create-connectednetworktype-subscriptions';
import retrieve_connectednetworktype_subscriptions from './connectednetworktype/subscriptions/retrieve-connectednetworktype-subscriptions';
import list_connectednetworktype_subscriptions from './connectednetworktype/subscriptions/list-connectednetworktype-subscriptions';
import delete_connectednetworktype_subscriptions from './connectednetworktype/subscriptions/delete-connectednetworktype-subscriptions';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_customerinsights_scoring);
addEndpoint(check_deviceswap);
addEndpoint(retrieve_date_deviceswap);
addEndpoint(verify_knowyourcustomerageverification);
addEndpoint(create_knowyourcustomerfill_in);
addEndpoint(match_knowyourcustomermatch);
addEndpoint(verify_tenure);
addEndpoint(check_subscriber_change_numberrecycling);
addEndpoint(send_code_otpvalidation);
addEndpoint(validate_code_otpvalidation);
addEndpoint(create_call_forwarding_callforwardingsignal);
addEndpoint(create_unconditional_call_forwarding_callforwardingsignal);
addEndpoint(create_devicelocation_subscriptions);
addEndpoint(retrieve_devicelocation_subscriptions);
addEndpoint(list_devicelocation_subscriptions);
addEndpoint(delete_devicelocation_subscriptions);
addEndpoint(retrieve_populationdensitydata);
addEndpoint(get_count_regiondevicecount);
addEndpoint(create_webrtc_sessions);
addEndpoint(retrieve_webrtc_sessions);
addEndpoint(cancel_webrtc_sessions);
addEndpoint(update_status_webrtc_sessions);
addEndpoint(create_connectivityinsights_subscriptions);
addEndpoint(retrieve_connectivityinsights_subscriptions);
addEndpoint(list_connectivityinsights_subscriptions);
addEndpoint(delete_connectivityinsights_subscriptions);
addEndpoint(retrieve_qos_profile_qualityondemand);
addEndpoint(retrieve_qos_profiles_qualityondemand);
addEndpoint(retrieve_identifier_deviceidentifier);
addEndpoint(retrieve_ppid_deviceidentifier);
addEndpoint(retrieve_type_deviceidentifier);
addEndpoint(create_simswap_subscriptions);
addEndpoint(retrieve_simswap_subscriptions);
addEndpoint(list_simswap_subscriptions);
addEndpoint(delete_simswap_subscriptions);
addEndpoint(create_deviceroamingstatus_subscriptions);
addEndpoint(retrieve_deviceroamingstatus_subscriptions);
addEndpoint(list_deviceroamingstatus_subscriptions);
addEndpoint(delete_deviceroamingstatus_subscriptions);
addEndpoint(create_devicereachabilitystatus_subscriptions);
addEndpoint(retrieve_devicereachabilitystatus_subscriptions);
addEndpoint(list_devicereachabilitystatus_subscriptions);
addEndpoint(delete_devicereachabilitystatus_subscriptions);
addEndpoint(create_connectednetworktype_subscriptions);
addEndpoint(retrieve_connectednetworktype_subscriptions);
addEndpoint(list_connectednetworktype_subscriptions);
addEndpoint(delete_connectednetworktype_subscriptions);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
