// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as FromPdfAPI from '/resources/file-interpreter/from-pdf';
import { type Uploadable, multipartFormRequestOptions } from '/core';

export class FromPdf extends APIResource {
  /**
   * Transform PDF to Markdown
   */
  create(params: FromPdfCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    const { max_pages, ...body } = params;
    return this._client.post(
      '/v1/file-interpreter/from-pdf',
      multipartFormRequestOptions({ query: { max_pages }, body, ...options }),
    );
  }
}

export type FromPdfCreateResponse = unknown;

export interface FromPdfCreateParams {
  /**
   * Body param:
   */
  file: Uploadable;

  /**
   * Query param:
   */
  max_pages?: number | null;
}

export namespace FromPdf {
  export import FromPdfCreateResponse = FromPdfAPI.FromPdfCreateResponse;
  export import FromPdfCreateParams = FromPdfAPI.FromPdfCreateParams;
}
