// File generated from our OpenAPI spec by Stainless.

import * as Core from 'maisa/core';
import { APIResource } from 'maisa/resource';
import * as MediaAPI from 'maisa/resources/capabilities/media';
import * as Shared from 'maisa/resources/shared';
import { type Uploadable, multipartFormRequestOptions } from 'maisa/core';

export class Media extends APIResource {
  /**
   * Compare extracts of media files based on a specific data. This endpoint supports
   * an additional field `model` documented in this url:
   * https://dash.readme.com/project/clibrain-platform-api/v1.0/docs/capabilities-with-media-via-json-config
   */
  compare(body: MediaCompareParams, options?: Core.RequestOptions): Core.APIPromise<Shared.TextComparator> {
    return this._client.post(
      '/v1/capabilities/compare/media',
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Extracts structured data from a file. The text is analyzed and the variables are
   * extracted. This endpoint supports an additional field `model` documented in this
   * url:
   * https://dash.readme.com/project/clibrain-platform-api/v1.0/docs/capabilities-with-media-via-json-config
   */
  extract(body: MediaExtractParams, options?: Core.RequestOptions): Core.APIPromise<Shared.TextExtractor> {
    return this._client.post(
      '/v1/capabilities/extract/media',
      multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * Summarizes a media file. This endpoint supports an additional field `model`
   * documented in this url:
   * https://dash.readme.com/project/clibrain-platform-api/v1.0/docs/capabilities-with-media-via-json-config
   */
  summarize(body: MediaSummarizeParams, options?: Core.RequestOptions): Core.APIPromise<Shared.TextSummary> {
    return this._client.post(
      '/v1/capabilities/summarize/media',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface MediaCompareParams {
  file1: Uploadable;

  file2: Uploadable;

  /**
   * The language of the output. If not provided, the language used will be the same
   * as the language of the text provided.
   */
  lang?: 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'pl' | 'ro';

  /**
   * The prompt to be used as criteria to compare the texts.
   */
  prompt?: string;

  /**
   * The description of the variable.
   */
  variable1_description?: string;

  /**
   * The name of the variable to be compared.
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
   * The name of the variable to be compared.
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
   * The name of the variable to be compared.
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
   * The name of the variable to be compared.
   */
  variable4_name?: string;

  /**
   * Text Extraction Request Variable Type.
   */
  variable4_type?: 'string' | 'number' | 'date' | 'boolean';
}

export interface MediaExtractParams {
  file: Uploadable;

  /**
   * The language of the output. If not provided, the language used will be the same
   * as the language of the text provided.
   */
  lang?: 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'pl' | 'ro';

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

export interface MediaSummarizeParams {
  file: Uploadable;

  /**
   * Text Summary Request Format.
   */
  format?: 'paragraph' | 'bullet';

  /**
   * The language of the output. If not provided, the language used will be the same
   * as the language of the text provided.
   */
  lang?: 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'sv' | 'pl' | 'ro';

  /**
   * Text Summary Request Length.
   */
  length?: 'short' | 'medium' | 'long';

  /**
   * A hint to the summarization. This can be used to provide a specific
   */
  summary_hint?: string;
}

export namespace Media {
  export import MediaCompareParams = MediaAPI.MediaCompareParams;
  export import MediaExtractParams = MediaAPI.MediaExtractParams;
  export import MediaSummarizeParams = MediaAPI.MediaSummarizeParams;
}
