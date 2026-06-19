import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gestion professionnelle - ADN Finance',
  description:
    'Optimisez la trésorerie de votre société avec ADN Finance. Allocations structurées, conformité LEFin et LSFin, banques dépositaires suisses agréées.',
};

export default function GestionCorporateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
