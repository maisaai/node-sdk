// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as SearchAPI from '/resources/mainet/search';

export class SearchResource extends APIResource {
  /**
   * Finds content in mainet network
   */
  create(body: SearchCreateParams, options?: Core.RequestOptions): Core.APIPromise<Search> {
    return this._client.post('/v1/mainet/search', { body, ...options });
  }
}

export interface Search {
  /**
   * The list of documents found.
   */
  docs: Array<Search.Doc>;
}

export namespace Search {
  export interface Doc {
    /**
     * The id of the document.
     */
    id: string;

    /**
     * The content of the document.
     */
    content: string;

    /**
     * The source of the document.
     */
    source: string;
  }
}

export interface SearchCreateParams {
  /**
   * The text or query to search for.
   */
  text: string;
}

export namespace SearchResource {
  export import Search = SearchAPI.Search;
  export import SearchCreateParams = SearchAPI.SearchCreateParams;
}
