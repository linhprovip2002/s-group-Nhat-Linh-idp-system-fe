import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { persistentStorage } from '../../../../shared/model/services/persistent.storage';

export const useLogOut = () => {
  const { push } = useRouter();

  return useCallback(() => {
    persistentStorage.cleanStorage();
    push('/login');
  }, [push]);
};
