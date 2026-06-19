'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function ProtectionDesDonneesPage() {
  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <span className="text-swiss-navy font-semibold">Protection des données</span>
        </div>

        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-swiss-blue block">
            Confidentialité & conformité
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
            Protection des données
          </h1>
          <p className="font-sans text-sm text-gray-500 leading-relaxed">
            ADN FINANCE SA s&apos;engage à protéger les données personnelles confiées dans le cadre de ses activités de conseil financier et de gestion de fortune.
          </p>
        </div>

        <div className="space-y-10 font-sans text-sm text-gray-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Responsable du traitement</h2>
            <p>
              ADN FINANCE SA<br />
              Quai Gustave-Ador, 62<br />
              1207 Genève, Suisse<br />
              <a href="mailto:info@adnfinance.ch" className="text-swiss-blue hover:underline">info@adnfinance.ch</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Données collectées</h2>
            <p>
              Nous traitons les données strictement nécessaires à la fourniture de nos prestations : identité, coordonnées, informations patrimoniales et financières, correspondances, ainsi que les données transmises via nos formulaires de contact.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Finalités du traitement</h2>
            <p>
              Les données sont utilisées pour répondre à vos demandes, établir une relation d&apos;affaires, assurer le suivi de nos mandats, respecter nos obligations légales et réglementaires (notamment LEFin, LSFin), ainsi que pour la gestion administrative interne.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Base légale & secret professionnel</h2>
            <p>
              Le traitement repose sur l&apos;exécution de mesures précontractuelles ou contractuelles, le respect d&apos;obligations légales, ainsi que sur nos intérêts légitimes. Les informations reçues dans le cadre de la relation d&apos;affaires bénéficient du secret de gérance financière suisse.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Conservation & sécurité</h2>
            <p>
              Les données sont conservées pendant la durée de la relation d&apos;affaires et conformément aux délais légaux applicables. ADN FINANCE SA met en œuvre des mesures techniques et organisationnelles appropriées pour en assurer la confidentialité, l&apos;intégrité et la disponibilité.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Destinataires & transferts</h2>
            <p>
              Les données peuvent être communiquées à des prestataires techniques, des banques dépositaires, des autorités de surveillance ou des autorités compétentes lorsque la loi l&apos;exige. Tout transfert à l&apos;étranger est effectué dans le respect de la législation suisse sur la protection des données.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Vos droits</h2>
            <p>
              Conformément à la loi fédérale sur la protection des données (LPD), vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation du traitement, d&apos;opposition et de portabilité, dans les limites prévues par la loi. Pour exercer vos droits, contactez-nous à l&apos;adresse ci-dessus.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Cookies & navigation</h2>
            <p>
              Ce site peut utiliser des cookies strictement nécessaires à son fonctionnement et à la mesure d&apos;audience. Vous pouvez configurer votre navigateur pour limiter ou refuser certains cookies.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
