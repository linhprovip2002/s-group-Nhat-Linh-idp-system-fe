import {
  authApiClient,
  UserCredentials
} from '../../../entities/auth/api/auth-api-client';
import { ITokenManager } from './client/token-manager.interface';
import { persistentStorage } from './persistent.storage';

let renewHandler: Promise<UserCredentials> | undefined;

export const tokenManager: ITokenManager = {
  clean(): void {
    persistentStorage.cleanStorage();
  },
  async renew(): Promise<void> {
    if (!renewHandler) {
      const refreshToken = persistentStorage.getRefreshToken();

      if (!refreshToken) return;

      renewHandler = authApiClient.renewTokens(refreshToken);
    }

    const tokens: UserCredentials = await renewHandler;

    persistentStorage.saveTokens(tokens);

    if (renewHandler) {
      renewHandler = undefined;
    }
  }
};
