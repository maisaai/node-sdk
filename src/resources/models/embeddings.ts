// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as EmbeddingsAPI from '/resources/models/embeddings';

export class Embeddings extends APIResource {
  /**
   * Creates embeddings from pieces of text.
   */
  create(body: EmbeddingCreateParams, options?: Core.RequestOptions): Core.APIPromise<Embeddings> {
    return this._client.post('/v1/models/embeddings', { body, ...options });
  }
}

export interface Embeddings {
  /**
   * The embeddings generated from the texts.
   */
  embeddings: Array<Array<number>>;
}

export interface EmbeddingCreateParams {
  /**
   * A list of texts from which we will generate the embeddings.
   */
  texts: Array<string>;
}

export namespace Embeddings {
  export import Embeddings = EmbeddingsAPI.Embeddings;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
}
