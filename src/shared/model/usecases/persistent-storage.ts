import { UserCredentials } from '../../../entities/auth/api/auth-api-client';

export interface PersistentStorage {
  getAccessToken(): string | null;
  getRefreshToken(): string | null;
  setAccessToken(accessToken: string): void;
  setRefreshToken(refreshToken: string): void;
  /**
   * @deprecated
   */
  saveTokens(tokens: UserCredentials): void;
  cleanStorage(): void;
}
