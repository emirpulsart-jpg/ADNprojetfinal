'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <span className="text-swiss-navy font-semibold">Mentions légales</span>
        </div>

        <div className="max-w-3xl mb-12 space-y-4">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-swiss-blue block">
            Informations réglementaires
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-swiss-navy leading-tight">
            Mentions légales
          </h1>
          <p className="font-sans text-sm text-gray-500 leading-relaxed">
            Informations légales relatives à ADN FINANCE SA et aux conditions d&apos;utilisation de ce site.
          </p>
        </div>

        <div className="space-y-10 font-sans text-sm text-gray-600 leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Identité & coordonnées</h2>
            <p>
              ADN FINANCE SA<br />
              Quai Gustave-Ador, 62<br />
              1207 Genève, Suisse<br />
              Téléphone : <a href="tel:+41225758747" className="text-swiss-blue hover:underline">+41 22 575 87 47</a><br />
              E-mail : <a href="mailto:info@adnfinance.ch" className="text-swiss-blue hover:underline">info@adnfinance.ch</a>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Activité réglementée</h2>
            <p>
              ADN FINANCE SA est un cabinet de conseil financier et gérant de fortune indépendant enregistré en Suisse. Ses activités s&apos;exercent conformément à la Loi fédérale sur les établissements financiers (LEFin) et à la Loi fédérale sur les services financiers (LSFin). La surveillance prudentielle est assurée par un organisme de surveillance agréé par l&apos;Autorité fédérale de surveillance des marchés financiers (FINMA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus de ce site (textes, graphismes, logos, structure) est protégé par le droit d&apos;auteur. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable écrite d&apos;ADN FINANCE SA est interdite.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Avertissement financier</h2>
            <p>
              Les informations publiées sur ce site ont un caractère général et ne constituent ni une offre, ni une sollicitation, ni un conseil en investissement personnalisé. Les performances passées ne préjugent pas des performances futures. Tout investissement comporte un risque de perte en capital.
            </p>
            <p>
              Les simulations interactives présentées sur ce site sont fournies à titre strictement illustratif et ne sauraient constituer une recommandation contractuelle d&apos;arbitrage d&apos;actifs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Responsabilité</h2>
            <p>
              ADN FINANCE SA s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées, sans garantie d&apos;exhaustivité ou d&apos;actualité permanente. L&apos;utilisation du site se fait sous la responsabilité exclusive de l&apos;utilisateur.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens vers des sites tiers. ADN FINANCE SA n&apos;exerce aucun contrôle sur leur contenu et décline toute responsabilité quant aux informations qui y sont publiées.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-sans text-base font-bold text-swiss-navy uppercase tracking-wider">Droit applicable</h2>
            <p>
              Le présent site et ses mentions légales sont régis par le droit suisse. Le for juridique compétent est, sous réserve de dispositions légales impératives, celui du canton de Genève.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
