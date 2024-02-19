// File generated from our OpenAPI spec by Stainless.

import { APIResource } from '/resource';
import * as EmbeddingsAPI from '/resources/models/embeddings';
import * as RerankAPI from '/resources/models/rerank';

export class Models extends APIResource {
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);
  rerank: RerankAPI.RerankResource = new RerankAPI.RerankResource(this._client);
}

export namespace Models {
  export import Embeddings = EmbeddingsAPI.Embeddings;
  export import EmbeddingCreateParams = EmbeddingsAPI.EmbeddingCreateParams;
  export import RerankResource = RerankAPI.RerankResource;
  export import Rerank = RerankAPI.Rerank;
  export import RerankCreateParams = RerankAPI.RerankCreateParams;
}
