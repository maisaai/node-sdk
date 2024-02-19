// File generated from our OpenAPI spec by Stainless.

import * as Core from 'maisa/core';
import { APIResource } from 'maisa/resource';
import * as FromImageAPI from 'maisa/resources/file-interpreter/from-image';
import { type Uploadable, multipartFormRequestOptions } from 'maisa/core';

export class FromImageResource extends APIResource {
  /**
   * Interprets an image file and returns a description of the image.
   */
  create(body: FromImageCreateParams, options?: Core.RequestOptions): Core.APIPromise<FromImage> {
    return this._client.post(
      '/v1/file-interpreter/from-image',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface FromImage {
  imageCaption: string;
}

export interface FromImageCreateParams {
  file: Uploadable;
}

export namespace FromImageResource {
  export import FromImage = FromImageAPI.FromImage;
  export import FromImageCreateParams = FromImageAPI.FromImageCreateParams;
}
