// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Maisa, { toFile } from 'maisa';
import { Response } from 'node-fetch';

const maisa = new Maisa({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fromPdfScanned', () => {
  test('create: only required params', async () => {
    const responsePromise = maisa.fileInterpreter.fromPdfScanned.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await maisa.fileInterpreter.fromPdfScanned.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      lang: 'en',
      max_pages: 0,
      variable1_description: 'The name of the person.',
      variable1_name: 'Name',
      variable1_type: 'string',
      variable2_description: 'The name of the person.',
      variable2_name: 'Name',
      variable2_type: 'string',
      variable3_description: 'The name of the person.',
      variable3_name: 'Name',
      variable3_type: 'string',
      variable4_description: 'The name of the person.',
      variable4_name: 'Name',
      variable4_type: 'string',
    });
  });
});
