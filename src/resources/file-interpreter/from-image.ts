// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'maisa/core';
import { APIResource } from 'maisa/resource';
import * as FromImageAPI from 'maisa/resources/file-interpreter/from-image';
import { type Uploadable, multipartFormRequestOptions } from 'maisa/core';

export class FromImage extends APIResource {
  /**
   * Interprets an image file and returns a description of the image.
   */
  create(body: FromImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-image',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromImageCreateResponse = unknown;

export interface FromImageCreateParams {
  file: Uploadable;
}

export namespace FromImage {
  export import FromImageCreateResponse = FromImageAPI.FromImageCreateResponse;
  export import FromImageCreateParams = FromImageAPI.FromImageCreateParams;
}
