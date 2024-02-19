// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as RerankAPI from '/resources/models/rerank';

export class RerankResource extends APIResource {
  /**
   * Rerank the sentences based on the similarity with the source sentence.
   */
  create(body: RerankCreateParams, options?: Core.RequestOptions): Core.APIPromise<Rerank> {
    return this._client.post('/v1/models/rerank', { body, ...options });
  }
}

export interface Rerank {
  sorted_sentences: Array<string>;
}

export interface RerankCreateParams {
  /**
   * A list of sentences to be reranked.
   */
  sentences: Array<string>;

  /**
   * The sentence to be used as a reference to rerank the sentences.
   */
  source_sentence: string;
}

export namespace RerankResource {
  export import Rerank = RerankAPI.Rerank;
  export import RerankCreateParams = RerankAPI.RerankCreateParams;
}
