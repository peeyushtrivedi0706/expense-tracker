import { AppShell } from './components/layout/AppShell';
import { HomePage } from './features/home/page';

export default function App() {
  return (
    <AppShell>
      <HomePage />
    </AppShell>
  );
}
