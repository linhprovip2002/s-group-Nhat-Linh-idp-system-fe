import { httpClient } from '../../../shared/api/http-client.factories';

export interface LoginRequest {
  username: string;
  password: string;
}

export interface UserCredentials {
  accessToken: string;
}

export interface RenewTokensRequest {
  refreshToken: string;
}

export const authApiClient = {
  login(body: LoginRequest) {
    return httpClient.request<UserCredentials>({
      method: 'post',
      data: body,
      url: '/auth/login'
    });
  },
  renewTokens(refreshToken: string) {
    return httpClient.request<UserCredentials>({
      method: 'post',
      data: { refreshToken } as RenewTokensRequest,
      url: '/auth/tokens/renew'
    });
  },
  logout(refreshToken: string) {
    return httpClient.request<UserCredentials>({
      method: 'delete',
      data: { refreshToken } as RenewTokensRequest,
      url: '/auth/logout'
    });
  },
  registerByCredentials(payload: LoginRequest): Promise<UserCredentials> {
    return Promise.resolve({ accessToken: '' });
  }
};
