// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Maisa } from './index';

export abstract class APIResource {
  protected _client: Maisa;

  constructor(client: Maisa) {
    this._client = client;
  }
}
