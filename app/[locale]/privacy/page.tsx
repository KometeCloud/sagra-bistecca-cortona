import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'it' ? 'Privacy Policy & Cookie Policy' : 'Privacy Policy & Cookie Policy',
    description: locale === 'it'
      ? 'Informativa sulla privacy e sui cookie della Sagra della Bistecca di Cortona.'
      : 'Privacy and cookie policy for the Sagra della Bistecca di Cortona.',
    robots: { index: false, follow: false },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isIt = locale === 'it';

  return (
    <section className="pt-32 pb-20 bg-[#FAF5EC] min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-4xl font-bold text-[var(--color-chianti)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-[var(--color-terra)] opacity-50 mb-10">
          {isIt ? 'Ultimo aggiornamento: Aprile 2026' : 'Last updated: April 2026'}
        </p>

        <div className="prose prose-stone max-w-none space-y-8 text-[var(--color-terra)]">

          {/* 1. Titolare */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {isIt ? '1. Titolare del Trattamento' : '1. Data Controller'}
            </h2>
            <p className="opacity-80 leading-relaxed">
              {isIt ? (
                <>
                  <strong>ASD Cortona Camucia Calcio</strong><br />
                  Loc. Il Sasso, Camucia, 52044 Cortona (AR), Italia<br />
                  Email: <a href="mailto:info@sagradellabistecca.com" className="text-[var(--color-chianti)] underline">info@sagradellabistecca.com</a>
                </>
              ) : (
                <>
                  <strong>ASD Cortona Camucia Calcio</strong><br />
                  Loc. Il Sasso, Camucia, 52044 Cortona (AR), Italy<br />
                  Email: <a href="mailto:info@sagradellabistecca.com" className="text-[var(--color-chianti)] underline">info@sagradellabistecca.com</a>
                </>
              )}
            </p>
          </section>

          {/* 2. Dati raccolti */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {isIt ? '2. Dati Raccolti' : '2. Data Collected'}
            </h2>
            <p className="opacity-80 leading-relaxed mb-3">
              {isIt
                ? 'Raccogliamo i seguenti dati personali:'
                : 'We collect the following personal data:'}
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>
                {isIt
                  ? 'Dati forniti tramite il modulo di prenotazione gruppi: nome, cognome, email, telefono, numero di ospiti.'
                  : 'Data provided through the group booking form: name, surname, email, phone number, number of guests.'}
              </li>
              <li>
                {isIt
                  ? 'Dati di navigazione raccolti tramite Google Analytics (solo previo consenso): indirizzo IP anonimizzato, pagine visitate, durata della sessione, dispositivo utilizzato.'
                  : 'Navigation data collected via Google Analytics (only with consent): anonymized IP address, pages visited, session duration, device used.'}
              </li>
            </ul>
          </section>

          {/* 3. Finalità */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {isIt ? '3. Finalità del Trattamento' : '3. Purpose of Processing'}
            </h2>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li>
                {isIt
                  ? 'Gestione delle richieste di prenotazione per gruppi (base giuridica: esecuzione di un contratto/precontratto).'
                  : 'Managing group booking requests (legal basis: performance of a contract/pre-contract).'}
              </li>
              <li>
                {isIt
                  ? 'Analisi statistica del traffico sul sito per migliorare l\'esperienza utente (base giuridica: consenso).'
                  : 'Statistical analysis of website traffic to improve user experience (legal basis: consent).'}
              </li>
            </ul>
          </section>

          {/* 4. Terze parti */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {isIt ? '4. Terze Parti' : '4. Third Parties'}
            </h2>
            <p className="opacity-80 leading-relaxed mb-3">
              {isIt
                ? 'I dati possono essere trasmessi ai seguenti soggetti terzi:'
                : 'Data may be transmitted to the following third parties:'}
            </p>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              <li><strong>Web3Forms</strong> — {isIt ? 'ricezione e inoltro delle richieste del modulo di contatto.' : 'receiving and forwarding contact form requests.'}</li>
              <li><strong>Google Analytics</strong> — {isIt ? 'analisi statistica del traffico (solo previo consenso).' : 'statistical traffic analysis (only with consent).'}</li>
              <li><strong>Vercel Inc.</strong> — {isIt ? 'hosting e distribuzione del sito web.' : 'website hosting and delivery.'}</li>
              <li><strong>Tailor Tickets</strong> — {isIt ? 'gestione e vendita dei biglietti online.' : 'online ticket management and sales.'}</li>
            </ul>
          </section>

          {/* 5. Cookie */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              Cookie Policy
            </h2>
            <p className="opacity-80 leading-relaxed mb-4">
              {isIt
                ? 'Questo sito utilizza le seguenti tipologie di cookie:'
                : 'This website uses the following types of cookies:'}
            </p>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 border border-[var(--color-crema-dark)]">
                <h3 className="font-semibold text-[var(--color-terra)] mb-1">
                  {isIt ? 'Cookie tecnici (necessari)' : 'Technical cookies (necessary)'}
                </h3>
                <p className="text-sm opacity-70">
                  {isIt
                    ? 'Necessari per il corretto funzionamento del sito (lingua selezionata, preferenze cookie). Non richiedono consenso.'
                    : 'Necessary for the correct functioning of the site (selected language, cookie preferences). Do not require consent.'}
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[var(--color-crema-dark)]">
                <h3 className="font-semibold text-[var(--color-terra)] mb-1">
                  {isIt ? 'Cookie analitici (Google Analytics)' : 'Analytics cookies (Google Analytics)'}
                </h3>
                <p className="text-sm opacity-70">
                  {isIt
                    ? 'Utilizzati per raccogliere informazioni statistiche sull\'utilizzo del sito in forma anonima. Attivati solo previo consenso esplicito dell\'utente.'
                    : 'Used to collect anonymous statistical information about website usage. Activated only with explicit user consent.'}
                </p>
              </div>
            </div>

            <p className="opacity-70 text-sm mt-4">
              {isIt
                ? 'Puoi revocare il consenso in qualsiasi momento cancellando i cookie del browser o aggiornando le tue preferenze.'
                : 'You can withdraw consent at any time by clearing your browser cookies or updating your preferences.'}
            </p>
          </section>

          {/* 6. Diritti */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {isIt ? '6. I Tuoi Diritti' : '6. Your Rights'}
            </h2>
            <p className="opacity-80 leading-relaxed mb-3">
              {isIt
                ? 'Ai sensi del GDPR (Reg. UE 2016/679) hai diritto a:'
                : 'Under the GDPR (EU Reg. 2016/679) you have the right to:'}
            </p>
            <ul className="list-disc pl-5 space-y-1 opacity-80">
              <li>{isIt ? 'Accedere ai tuoi dati personali' : 'Access your personal data'}</li>
              <li>{isIt ? 'Rettificare dati inesatti' : 'Rectify inaccurate data'}</li>
              <li>{isIt ? 'Richiedere la cancellazione dei dati' : 'Request erasure of data'}</li>
              <li>{isIt ? 'Opporti al trattamento' : 'Object to processing'}</li>
              <li>{isIt ? 'Richiedere la portabilità dei dati' : 'Request data portability'}</li>
              <li>{isIt ? 'Revocare il consenso in qualsiasi momento' : 'Withdraw consent at any time'}</li>
            </ul>
            <p className="opacity-80 leading-relaxed mt-3">
              {isIt
                ? 'Per esercitare i tuoi diritti scrivi a: '
                : 'To exercise your rights, write to: '}
              <a href="mailto:info@sagradellabistecca.com" className="text-[var(--color-chianti)] underline">
                info@sagradellabistecca.com
              </a>
            </p>
          </section>

          {/* 7. Conservazione */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {isIt ? '7. Conservazione dei Dati' : '7. Data Retention'}
            </h2>
            <p className="opacity-80 leading-relaxed">
              {isIt
                ? 'I dati raccolti tramite il modulo di contatto sono conservati per il tempo strettamente necessario a gestire la richiesta. I dati analitici sono conservati per 26 mesi secondo le impostazioni predefinite di Google Analytics.'
                : 'Data collected through the contact form is retained for the time strictly necessary to handle the request. Analytics data is retained for 26 months according to Google Analytics default settings.'}
            </p>
          </section>

          {/* 8. Reclami */}
          <section>
            <h2 className="font-display text-2xl font-bold text-[var(--color-chianti)] mb-3">
              {isIt ? '8. Reclami' : '8. Complaints'}
            </h2>
            <p className="opacity-80 leading-relaxed">
              {isIt
                ? 'Hai il diritto di presentare reclamo all\'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).'
                : 'You have the right to lodge a complaint with the Italian Data Protection Authority (www.garanteprivacy.it).'}
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}
