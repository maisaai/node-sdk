// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'maisa/resource';
import * as FromAudioAPI from 'maisa/resources/file-interpreter/from-audio';
import * as FromDocxAPI from 'maisa/resources/file-interpreter/from-docx';
import * as FromHTMLAPI from 'maisa/resources/file-interpreter/from-html';
import * as FromImageAPI from 'maisa/resources/file-interpreter/from-image';
import * as FromPdfAPI from 'maisa/resources/file-interpreter/from-pdf';

export class FileInterpreter extends APIResource {
  fromPdf: FromPdfAPI.FromPdf = new FromPdfAPI.FromPdf(this._client);
  fromDocx: FromDocxAPI.FromDocx = new FromDocxAPI.FromDocx(this._client);
  fromHTML: FromHTMLAPI.FromHTML = new FromHTMLAPI.FromHTML(this._client);
  fromImage: FromImageAPI.FromImageResource = new FromImageAPI.FromImageResource(this._client);
  fromAudio: FromAudioAPI.FromAudio = new FromAudioAPI.FromAudio(this._client);
}

export namespace FileInterpreter {
  export import FromPdf = FromPdfAPI.FromPdf;
  export import FromPdfCreateResponse = FromPdfAPI.FromPdfCreateResponse;
  export import FromPdfCreateParams = FromPdfAPI.FromPdfCreateParams;
  export import FromDocx = FromDocxAPI.FromDocx;
  export import FromDocxCreateResponse = FromDocxAPI.FromDocxCreateResponse;
  export import FromDocxCreateParams = FromDocxAPI.FromDocxCreateParams;
  export import FromHTML = FromHTMLAPI.FromHTML;
  export import FromHTMLCreateResponse = FromHTMLAPI.FromHTMLCreateResponse;
  export import FromHTMLCreateParams = FromHTMLAPI.FromHTMLCreateParams;
  export import FromImageResource = FromImageAPI.FromImageResource;
  export import FromImage = FromImageAPI.FromImage;
  export import FromImageCreateParams = FromImageAPI.FromImageCreateParams;
  export import FromAudio = FromAudioAPI.FromAudio;
  export import FromAudioCreateResponse = FromAudioAPI.FromAudioCreateResponse;
  export import FromAudioCreateParams = FromAudioAPI.FromAudioCreateParams;
}
