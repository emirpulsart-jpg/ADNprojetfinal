import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ADN Finance : Contactez nous',
  description:
    'Prenez contact avec ADN Finance pour bénéficier d\'un accompagnement personnalisé en gestion de patrimoine. Notre équipe est à votre écoute.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
