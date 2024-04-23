// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'maisa/core';
import { APIResource } from 'maisa/resource';
import * as FromHTMLAPI from 'maisa/resources/file-interpreter/from-html';
import { type Uploadable, multipartFormRequestOptions } from 'maisa/core';

export class FromHTML extends APIResource {
  /**
   * Interprets html file and returns a markdown file.
   */
  create(body: FromHTMLCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-html',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromHTMLCreateResponse = unknown;

export interface FromHTMLCreateParams {
  file: Uploadable;
}

export namespace FromHTML {
  export import FromHTMLCreateResponse = FromHTMLAPI.FromHTMLCreateResponse;
  export import FromHTMLCreateParams = FromHTMLAPI.FromHTMLCreateParams;
}
