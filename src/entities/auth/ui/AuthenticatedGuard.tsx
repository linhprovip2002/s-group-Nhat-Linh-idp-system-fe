import { useRouter } from 'next/router';
import { PropsWithChildren, ReactElement, useEffect } from 'react';
import { useLogOut } from '../model/hooks/useLogOut';
import { useUserSession } from '../model/hooks/useUserSession';

export function AuthenticatedGuard({
  children
}: PropsWithChildren): ReactElement {
  const { push } = useRouter();
  const { sessionStatus } = useUserSession();
  const logOut = useLogOut();

  useEffect(
    function interceptUnAuthenticatedUser() {
      if (sessionStatus === 'unauthenticated') {
        logOut();
      }
    },
    [logOut, push, sessionStatus]
  );

  return <>{sessionStatus === 'authenticated' && children}</>;
}
