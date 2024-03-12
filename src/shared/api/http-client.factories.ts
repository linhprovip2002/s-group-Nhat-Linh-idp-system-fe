import { persistentStorage } from '../model/services/persistent.storage';
import { AuthorizedHttpClientAdapter } from './authorized-http-client.adapter';
import { HttpClientAdapter } from './axios-http-client.adapter';

const axios = require('axios').create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT ?? 'http://localhost:8080'
});

export const httpClient = new HttpClientAdapter(axios);

export const authorizedHttpClient = new AuthorizedHttpClientAdapter(
  httpClient,
  persistentStorage
);
