// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'maisa/core';
import { APIResource } from 'maisa/resource';
import * as FromPdfScannedAPI from 'maisa/resources/file-interpreter/from-pdf-scanned';
import { type Uploadable, multipartFormRequestOptions } from 'maisa/core';

export class FromPdfScanned extends APIResource {
  /**
   * Interprets pdf file and returns some extracted variables.
   */
  create(body: FromPdfScannedCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-pdf-scanned',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromPdfScannedCreateResponse = unknown;

export interface FromPdfScannedCreateParams {
  file: Uploadable;

  /**
   * The language of the output. If not provided, the language used will be the same
   * as the language of the text provided.
   */
  lang?: 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'pl' | 'ro';

  /**
   * The maximum number of pages to be extracted.
   */
  max_pages?: number;

  /**
   * The description of the variable.
   */
  variable1_description?: string;

  /**
   * The name of the variable to be extracted.
   */
  variable1_name?: string;

  /**
   * Text Extraction Request Variable Type.
   */
  variable1_type?: 'string' | 'number' | 'date' | 'boolean';

  /**
   * The description of the variable.
   */
  variable2_description?: string;

  /**
   * The name of the variable to be extracted.
   */
  variable2_name?: string;

  /**
   * Text Extraction Request Variable Type.
   */
  variable2_type?: 'string' | 'number' | 'date' | 'boolean';

  /**
   * The description of the variable.
   */
  variable3_description?: string;

  /**
   * The name of the variable to be extracted.
   */
  variable3_name?: string;

  /**
   * Text Extraction Request Variable Type.
   */
  variable3_type?: 'string' | 'number' | 'date' | 'boolean';

  /**
   * The description of the variable.
   */
  variable4_description?: string;

  /**
   * The name of the variable to be extracted.
   */
  variable4_name?: string;

  /**
   * Text Extraction Request Variable Type.
   */
  variable4_type?: 'string' | 'number' | 'date' | 'boolean';
}

export namespace FromPdfScanned {
  export import FromPdfScannedCreateResponse = FromPdfScannedAPI.FromPdfScannedCreateResponse;
  export import FromPdfScannedCreateParams = FromPdfScannedAPI.FromPdfScannedCreateParams;
}
