import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADN FINANCE : A propos',
  description:
    'Découvrez ADN FINANCE SA, intermédiaire financier agréé à Genève, supervisé par la FINMA et soumis à la LSFin et à la LEFin.',
};

export default function ProposLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
