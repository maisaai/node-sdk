// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'maisa/resource';
import * as EmbeddingsAPI from 'maisa/resources/models/embeddings';
import * as RerankAPI from 'maisa/resources/models/rerank';

export class Models extends APIResource {
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);
  rerank: RerankAPI.Rerank = new RerankAPI.Rerank(this._client);
}

export namespace Models {
  export import Embeddings = EmbeddingsAPI.Embeddings;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
  export import Rerank = RerankAPI.Rerank;
}
