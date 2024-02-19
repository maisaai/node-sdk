// File generated from our OpenAPI spec by Stainless.

import Maisa from '';
import { Response } from 'node-fetch';

const maisa = new Maisa({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource search', () => {
  test('create: only required params', async () => {
    const responsePromise = maisa.mainet.search.create({
      text: 'Plato, the philosopher, was born in Athens.',
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
    const response = await maisa.mainet.search.create({
      text: 'Plato, the philosopher, was born in Athens.',
    });
  });
});
