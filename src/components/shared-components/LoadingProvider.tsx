import React from 'react';
import LoadingPage from './loading-page';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

function LoadingProvider({ children }: { children: React.ReactNode }) {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    <>
      {(isFetching > 0 || isMutating > 0) && <LoadingPage show />}
      {children}
    </>
  );
}

export default LoadingProvider;
