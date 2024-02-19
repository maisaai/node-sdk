// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as FromDocxAPI from '/resources/file-interpreter/from-docx';
import { type Uploadable, multipartFormRequestOptions } from '/core';

export class FromDocx extends APIResource {
  /**
   * Interprets docx file and returns a zip file with the markdown and media files.
   */
  create(body: FromDocxCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-docx',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromDocxCreateResponse = unknown;

export interface FromDocxCreateParams {
  file: Uploadable;
}

export namespace FromDocx {
  export import FromDocxCreateResponse = FromDocxAPI.FromDocxCreateResponse;
  export import FromDocxCreateParams = FromDocxAPI.FromDocxCreateParams;
}
