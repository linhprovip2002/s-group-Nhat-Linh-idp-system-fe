import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { authApiClient } from 'src/entities/auth/api/auth-api-client';
import { tokenManager } from 'src/shared/model/services/token-manager';
import { NoLayout } from 'src/shared/ui/components/NoLayout';
import { NextPageWithLayout } from '../src/shared/model/next.types';
import { persistentStorage } from '../src/shared/model/services/persistent.storage';

const LogOutPage: NextPageWithLayout = () => {
  const { replace } = useRouter();

  useEffect(
    function logOutRunner() {
      async function doLogout() {
        const refreshToken = persistentStorage.getRefreshToken();

        refreshToken && (await authApiClient.logout(refreshToken));
        tokenManager.clean();

        await replace('/login');
      }

      doLogout();
    },
    [replace]
  );

  return <></>;
};

LogOutPage.getLayout = NoLayout;

export default LogOutPage;
