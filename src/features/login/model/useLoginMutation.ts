import { useMutation } from 'react-query';
import { authApiClient } from '../../../entities/auth/api/auth-api-client';
import { useNotify } from '../../../entities/auth/model/hooks/useNotify';
import { persistentStorage } from '../../../shared/model/services/persistent.storage';

export function useLoginMutation() {
  const notify = useNotify();

  const { mutate } = useMutation({
    mutationKey: 'useLoginMutation',
    mutationFn: authApiClient.login,
    onSuccess: data => {
      notify({
        title: 'Login success',
        status: 'success'
      });

      persistentStorage.setAccessToken(data.accessToken);
    },
    onError: error => {
      notify({
        title: 'Login failed',
        status: 'error'
      });
    }
  });

  return {
    login: mutate
  };
}
