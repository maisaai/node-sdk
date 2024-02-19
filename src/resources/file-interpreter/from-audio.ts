// File generated from our OpenAPI spec by Stainless.

import * as Core from '/core';
import { APIResource } from '/resource';
import * as FromAudioAPI from '/resources/file-interpreter/from-audio';
import { type Uploadable, multipartFormRequestOptions } from '/core';

export class FromAudio extends APIResource {
  /**
   * Interprets an audio file and returns a description of the audio.
   */
  create(body: FromAudioCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post(
      '/v1/file-interpreter/from-audio',
      multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export type FromAudioCreateResponse = unknown;

export interface FromAudioCreateParams {
  file: Uploadable;
}

export namespace FromAudio {
  export import FromAudioCreateResponse = FromAudioAPI.FromAudioCreateResponse;
  export import FromAudioCreateParams = FromAudioAPI.FromAudioCreateParams;
}
