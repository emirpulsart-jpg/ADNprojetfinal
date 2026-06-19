'use client';

import Link from 'next/link';
import { ChevronRight, Users } from 'lucide-react';

export default function ProposPage() {
  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-slate-300" />
          <span className="text-swiss-navy font-semibold">À propos</span>
        </div>

        <div className="max-w-3xl mb-14 space-y-5">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-swiss-blue block">
            ADN FINANCE SA
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
            Un intermédiaire financier agréé
          </h1>
          <p className="font-sans text-base text-slate-500 leading-relaxed">
            Nous nous adaptons aux nouveaux défis de la finance afin d&apos;allier sécurité et contrôle du risque au service de la clientèle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          <div className="border border-slate-100 bg-slate-50/50 p-5 space-y-2">
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              ADN FINANCE est inscrite au registre des gestionnaires de fortune et est supervisée par la FINMA.
            </p>
          </div>
          <div className="border border-slate-100 bg-slate-50/50 p-5 space-y-2">
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              Nous sommes soumis à la Loi sur les services financiers (LSFin) et à la Loi sur les établissements financiers (LEFin).
            </p>
          </div>
          <div className="border border-slate-100 bg-slate-50/50 p-5 space-y-2">
            <p className="font-sans text-xs text-slate-600 leading-relaxed">
              <Link href="/mentions-legales" className="text-swiss-blue hover:underline font-semibold">
                Consultez nos mentions légales et nos partenaires institutionnels
              </Link>
            </p>
          </div>
        </div>

        <div className="space-y-10 font-sans text-sm text-slate-600 leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-swiss-blue shrink-0" />
              <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">
                Une relation de confiance durable
              </h2>
            </div>
            <p>
              Grâce à une interaction régulière avec nos clients, nous pouvons adapter en tout temps les portefeuilles en fonction des demandes et besoins de chaque investisseur.
            </p>
            <p>
              Ceci permet de bâtir une relation de confiance à long terme entre l&apos;investisseur et la société. La personnalisation est au centre de notre réflexion de manière à élaborer des solutions pérennes et créatives, au plus près de vos besoins réels, tout en maîtrisant les limites de vos capacités d&apos;investissement et d&apos;exposition.
            </p>
          </section>

          <section className="space-y-4 border-t border-slate-100 pt-10">
            <h2 className="font-display text-2xl font-light text-swiss-navy tracking-tight">
              Préservation et valorisation de votre patrimoine
            </h2>
            <p>
              Notre vocation est de veiller en toute indépendance et neutralité à la préservation et à la valorisation de votre patrimoine, qu&apos;il soit privé ou que vous soyez propriétaire d&apos;une entreprise que vous souhaitez transmettre à terme avec un capital disponible.
            </p>
            <p>
              Pour ce faire, nous proposons un <strong className="text-swiss-navy">mandat de gestion discrétionnaire</strong>, exercé dans le respect du secret professionnel suisse et des exigences réglementaires applicables.
            </p>
          </section>

          <div className="pt-6">
            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center bg-swiss-navy px-8 font-sans text-xs font-bold uppercase tracking-widest text-white hover:bg-swiss-blue transition-all"
            >
              Être contacté par un expert financier
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
