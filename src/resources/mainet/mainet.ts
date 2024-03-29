// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'maisa/resource';
import * as SearchAPI from 'maisa/resources/mainet/search';

export class Mainet extends APIResource {
  search: SearchAPI.SearchResource = new SearchAPI.SearchResource(this._client);
}

export namespace Mainet {
  export import SearchResource = SearchAPI.SearchResource;
  export import Search = SearchAPI.Search;
  export import SearchCreateParams = SearchAPI.SearchCreateParams;
}
