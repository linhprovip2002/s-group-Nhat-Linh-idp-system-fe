import {
  HttpClient,
  HttpRequest,
  HttpResponse
} from 'src/shared/api/http-client';
import { PersistentStorage } from '../model/usecases/persistent-storage';

export class AuthorizedHttpClientAdapter implements HttpClient {
  constructor(
    private httpClient: HttpClient,
    private storage: PersistentStorage
  ) {}

  private static toBearer(token: string): string {
    return `Bearer ${token}`;
  }

  request<T>(data: HttpRequest): Promise<HttpResponse<T>> {
    const accessToken = this.storage.getAccessToken();
    const request = {
      ...data,
      headers: data.headers ?? {}
    };

    if (accessToken) {
      Object.assign(request.headers, {
        authorization: AuthorizedHttpClientAdapter.toBearer(accessToken)
      });
    }

    return this.httpClient.request(request);
  }
}
