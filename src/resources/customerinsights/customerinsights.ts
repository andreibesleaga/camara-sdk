// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ScoringAPI from './scoring';
import { Scoring, ScoringRetrieveParams, ScoringRetrieveResponse } from './scoring';

export class Customerinsights extends APIResource {
  scoring: ScoringAPI.Scoring = new ScoringAPI.Scoring(this._client);
}

Customerinsights.Scoring = Scoring;

export declare namespace Customerinsights {
  export {
    Scoring as Scoring,
    type ScoringRetrieveResponse as ScoringRetrieveResponse,
    type ScoringRetrieveParams as ScoringRetrieveParams,
  };
}
