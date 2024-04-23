// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'maisa/resource';
import * as SearchAPI from 'maisa/resources/mainet/search';

export class Mainet extends APIResource {
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
}

export namespace Mainet {
  export import Search = SearchAPI.Search;
}
