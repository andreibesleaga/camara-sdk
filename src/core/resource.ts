// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Camara } from '../client';

export abstract class APIResource {
  protected _client: Camara;

  constructor(client: Camara) {
    this._client = client;
  }
}
