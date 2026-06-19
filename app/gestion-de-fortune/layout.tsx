import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gestion de patrimoine - Adn Finance',
  description:
    'Découvrez l\'expertise d\'ADN Finance. Une approche personnalisée et disciplinée pour structurer et valoriser votre patrimoine à long terme.',
};

export default function GestionFortuneLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
