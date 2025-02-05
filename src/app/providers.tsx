'use client';

import { SessionProvider } from 'next-auth/react';
import { QueryClient, QueryClientProvider, useIsFetching } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import LoadingPage from '@/components/shared-components/loading-page';

type Props = {
  children?: React.ReactNode;
};

export const Providers = ({ children }: Props) => {
  const queryClient = new QueryClient();
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools /> */}
        <Suspense fallback={<LoadingPage show />}>
        {/* <LoadingPage show={isFetching} /> */}
        {children}
        </Suspense>
      </QueryClientProvider>
    </SessionProvider>
  );
};
