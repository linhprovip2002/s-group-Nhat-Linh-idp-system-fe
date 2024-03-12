import { PersistentStorage } from 'src/shared/model/usecases/persistent-storage';
import { UserCredentials } from '../../../entities/auth/api/auth-api-client';

const AUTHENTICATION_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

export const persistentStorage: PersistentStorage = {
  /**
   * @deprecated
   */
  saveTokens(tokens: UserCredentials): void {},
  getAccessToken(): string | null {
    return window.localStorage.getItem(AUTHENTICATION_KEY);
  },
  getRefreshToken(): string | null {
    return window.localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  setAccessToken(accessToken: string): void {
    window.localStorage.setItem(AUTHENTICATION_KEY, accessToken);
  },
  setRefreshToken(refreshToken: string): void {
    window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },
  cleanStorage(): void {
    window.localStorage.removeItem(AUTHENTICATION_KEY);
    window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  }
};
