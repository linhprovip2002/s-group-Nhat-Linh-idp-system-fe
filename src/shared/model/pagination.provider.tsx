import React, { PropsWithChildren } from 'react';
import { ContextWithDispatcher } from './clients/context.api';
import { PaginationAction, PaginationState } from './clients/pagination.api';
import {
  initialPaginationState,
  paginationReducer
} from './pagination.reducer';
import { noop } from './utils/noop';

type PaginationContextProps = ContextWithDispatcher<
  PaginationState,
  PaginationAction
>;

export const PaginationContext = React.createContext<PaginationContextProps>({
  state: initialPaginationState,
  dispatch: noop
});

export function PaginationProvider({
  children
}: PropsWithChildren): React.ReactElement {
  const [state, dispatch] = React.useReducer(
    paginationReducer,
    initialPaginationState
  );
  return (
    <PaginationContext.Provider value={{ state, dispatch }}>
      {children}
    </PaginationContext.Provider>
  );
}
