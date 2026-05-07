import type { PropsWithChildren } from 'react';

export function AppShell({ children }: PropsWithChildren) {
  return (
    <main style={{ padding: 24, fontFamily: 'Segoe UI, sans-serif' }}>
      <h1>Expense Tracker</h1>
      {children}
    </main>
  );
}
