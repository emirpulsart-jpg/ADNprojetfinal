import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Planificateur d\'intérêts composés - ADN Finance',
  description:
    'Simulateur patrimonial ADN Finance : comparez l\'évolution historique d\'un capital investi face à l\'inflation suisse. Outil illustratif à titre indicatif.',
};

export default function PlanificateurLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
