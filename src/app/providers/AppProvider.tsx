/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ToastProvider } from "../context/ToastContext";

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            gcTime: 1000 * 60 * 60 * 24,
            staleTime: Infinity,
          },
        },
      })
  );

  const [persister, setPersister] = useState<any>(undefined);

  useEffect(() => {
    const storagePersister = createSyncStoragePersister({
      storage: window.localStorage,
    });
    setPersister(storagePersister);
  }, []);

  if (!persister) {
    return (
      <ToastProvider>
        <PersistQueryClientProvider
          client={queryClient}
          persistOptions={{
            persister: {
              persistClient: () => {},
              restoreClient: () => {},
            } as any,
          }}
        >
          {children}
        </PersistQueryClientProvider>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister }}
      >
        {children}
      </PersistQueryClientProvider>
    </ToastProvider>
  );
};

export default AppProvider;
