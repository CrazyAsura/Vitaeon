import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { store, persistor } from '../store';
import { queryClient } from '../lib/react-query';
import { config } from '../theme/gluestack.config';

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <GluestackUIProvider config={config}>
            {children}
          </GluestackUIProvider>
        </QueryClientProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
