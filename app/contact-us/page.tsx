'use client';

import * as React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, Landmark, ChevronRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    tel: '',
    accountType: 'private',
    callbackPref: 'telephone',
    msg: ''
  });

  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.tel) {
      alert('Veuillez remplir les champs obligatoires (Nom, Email, Téléphone).');
      return;
    }
    setLoading(true);
    // Simulate high-class server dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-white py-12 sm:py-20 animate-fade-in" id="contact-novaris-cabinet-page">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 mb-8 font-sans">
          <Link href="/" className="hover:text-swiss-blue transition-colors animate-pulse">Accueil</Link>
          <ChevronRight className="h-3 w-3 text-gray-300" />
          <span className="text-swiss-navy font-semibold">Nous contacter</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16 animate-fade-in">
          
          {/* Contact coordinates (Left hand, Span 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-swiss-blue block mb-2">
                PRENDRE CONTACT
              </span>
              <h1 className="font-display text-4xl font-light tracking-tight text-swiss-navy leading-tight">
                Entretien Téléphonique
              </h1>
              <p className="mt-4 font-sans text-sm text-gray-500 leading-relaxed">
                ADN FINANCE SA vous accompagne en toute confidentialité pour valoriser et structurer vos actifs. Remplissez le formulaire de rappel ci-contre afin d&apos;être contacté directement par l&apos;un de nos experts financiers ou conseillers.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-gray-100 font-sans text-sm">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-swiss-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-swiss-navy">Adresse</h4>
                  <p className="text-gray-600">
                    Quai Gustave-Ador, 62<br />
                    1207, Genève, Suisse
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-swiss-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-swiss-navy">Téléphone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+41225758747" className="hover:text-swiss-blue font-semibold transition-colors">+41 22 575 87 47</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-swiss-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-swiss-navy">Courriel</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@adnfinance.ch" className="hover:text-swiss-blue font-semibold transition-colors">info@adnfinance.ch</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-swiss-blue shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-swiss-navy">Disponibilité Téléphonique</h4>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 08:30 - 18:00
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Form card (Right hand, Span 7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-gray-100 rounded-none p-6 sm:p-10 shadow-sm relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-swiss-blue/5 rounded-full filter blur-xl pointer-events-none"></div>

            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in" id="success-contact-message">
                <div className="h-16 w-16 bg-swiss-blue/10 text-swiss-blue rounded-full flex items-center justify-center mx-auto">
                  <ShieldCheck className="h-8 w-8 text-swiss-blue" />
                </div>
                <h3 className="font-display text-2xl font-light text-swiss-navy">
                  Demande d&apos;Entretien Discrète Reçue
                </h3>
                <p className="font-sans text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Nous vous remercions de votre confiance. Un conseiller senior évaluera votre demande sous une heure et prendra contact avec vous directement par téléphone.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', tel: '', accountType: 'private', callbackPref: 'telephone', msg: '' }); }}
                    className="inline-flex h-10 items-center justify-center border border-gray-200 bg-white px-6 font-sans text-xs font-semibold uppercase tracking-widest text-swiss-navy hover:bg-slate-50 transition-all cursor-pointer"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-advisory-form">
                <div>
                  <h3 className="font-display text-2xl font-light text-swiss-navy mb-2">Formulaire de Consultation</h3>
                  <p className="font-sans text-xs text-gray-500">
                    Les informations transmises sont traitées en toute confidentialité et strictement protégées sous le secret de gérance financière suisse.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in">
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                      Nom complet <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="M. Jean-Marc Blanc"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 px-4 bg-white border border-gray-200 rounded-none text-sm font-sans focus:outline-none focus:ring-1 focus:ring-swiss-blue"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                      Numéro de téléphone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+41 22 123 45 67"
                      value={formData.tel}
                      onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
                      className="w-full h-11 px-4 bg-white border border-gray-200 rounded-none text-sm font-sans focus:outline-none focus:ring-1 focus:ring-swiss-blue"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                    Adresse Courriel <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jean.blanc@holding.ch"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 bg-white border border-gray-200 rounded-none text-sm font-sans focus:outline-none focus:ring-1 focus:ring-swiss-blue"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                    Type de Compte Souhaité
                  </label>
                  <select
                    value={formData.accountType}
                    onChange={(e) => setFormData({ ...formData, accountType: e.target.value })}
                    className="w-full h-11 px-3 bg-white border border-gray-200 rounded-none text-sm font-sans focus:outline-none focus:ring-1 focus:ring-swiss-blue"
                  >
                    <option value="private">Compte personnel/privé (Dès 50&apos;000 CHF)</option>
                    <option value="pro">Compte professionnel (Dès 50&apos;000 CHF)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                    Brève description du projet (optionnel)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez votre situation patrimoniale ou vos horaires de disponibilité pour l'appel..."
                    value={formData.msg}
                    onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                    className="w-full p-4 bg-white border border-gray-200 rounded-none text-sm font-sans focus:outline-none focus:ring-1 focus:ring-swiss-blue resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex h-12 items-center justify-center bg-swiss-navy text-white font-sans text-xs font-semibold uppercase tracking-widest hover:bg-swiss-blue disabled:bg-gray-400 transition-all cursor-pointer"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Connexion Chiffrée Sécurisée...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-3.5 w-3.5" />
                        Transmettre Demande Confidentielle
                      </span>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-sans">
                  <Landmark className="h-3 w-3 text-swiss-blue" />
                  <span>Enregistré en conformité réglementaire suisse de sécurité financière.</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
