export type Property = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  adults: number;
  children: number;
  source: string;
};

// Kept for backward compat
export type IlCasaleProperty = Property;

function decodeEntities(str: string): string {
  return str
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function stripHtml(html: string, maxLen = 220): string {
  return decodeEntities(html.replace(/<[^>]*>/g, ''))
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}

function parseClassList(classList: string[]): { adults: number; children: number } {
  let adults = 0;
  let children = 0;
  for (const cls of classList) {
    const a = cls.match(/^mphb-room-type-adults-(\d+)$/);
    if (a) adults = parseInt(a[1], 10);
    const c = cls.match(/^mphb-room-type-children-(\d+)$/);
    if (c) children = parseInt(c[1], 10);
  }
  return { adults, children };
}

// Correzioni manuali per titoli malformati nel CMS
const NAME_OVERRIDES: Record<string, string> = {
  'ilcasale.com/exclusive': 'CASALE Exclusive x34',
};

// Traduzioni italiane statiche delle descrizioni (i siti sono solo in inglese)
const DESCRIPTIONS_IT: Record<string, string> = {
  // ilcasale.com
  'ilcasale.com/exclusive':
    'L\'intera struttura "CASALE EXCLUSIVE" riservata a te e alla tua famiglia. Ideale per grandi gruppi: 723 m², 34 posti letto (+4 extra), 10 camere doppie, 11 bagni, 9 cucine attrezzate, Wi-Fi, Alexa, piscina condivisa.',
  'ilcasale.com/papavero':
    'L\'appartamento "PAPAVERO" unisce "Ciclamino" e "Mughetto" in un\'unica soluzione. Perfetto per piccoli gruppi o due famiglie. 150 m², 8 posti, 4 camere, 2 bagni, cucina attrezzata, area esterna privata, piscina.',
  'ilcasale.com/mimosa':
    'L\'appartamento "MIMOSA" è il più grande del Residence, al primo piano. 98 m², 5 posti, 2 camere, 2 bagni, cucina attrezzata, Wi-Fi, Alexa, area esterna privata e piscina condivisa.',
  'ilcasale.com/ciclamino':
    'Appartamento "CICLAMINO" su due piani (piano terra e primo). 90 m², 4 posti, 2 camere, 1 bagno, cucina attrezzata, Wi-Fi, Alexa, area esterna privata e piscina condivisa.',
  'ilcasale.com/gardenia':
    'Appartamento "GARDENIA" al piano terra. 70 m², 4 posti, 2 camere matrimoniali, 1 bagno, cucina attrezzata, Wi-Fi, Alexa, area esterna privata e piscina condivisa.',
  'ilcasale.com/girasole':
    'Appartamento "GIRASOLE" su due piani. 70 m², 4 posti, 2 camere, 1 bagno, cucina attrezzata, Wi-Fi, Alexa, area esterna privata con tavolo e ombrellone, piscina condivisa.',
  'ilcasale.com/geranio':
    'Appartamento "GERANIO" su due piani. 70 m², 4 posti, 2 camere matrimoniali, 1 bagno, cucina attrezzata, Wi-Fi, Alexa, area esterna privata e piscina condivisa.',
  'ilcasale.com/mughetto':
    'Appartamento "MUGHETTO" su due piani. 60 m², 4 posti, 2 camere, 1 bagno, cucina attrezzata, Wi-Fi, Alexa, area esterna privata con tavolo e ombrellone, piscina condivisa.',
  'ilcasale.com/rosa':
    'Appartamento "ROSA" su tre piani, perfetto per una famiglia. 80 m², 4 posti, 2 camere, bagno privato en suite, cucina al piano terra, Wi-Fi, Alexa, area esterna privata e piscina.',
  'ilcasale.com/ortensia':
    'Appartamento "ORTENSIA" ideale per una famiglia. Piano singolo con 2 bagni. 55 m², 3 posti, 1 camera matrimoniale con letto singolo aggiunto, cucina attrezzata, Wi-Fi, Alexa, piscina.',
  'ilcasale.com/glicine':
    'Appartamento "GLICINE" perfetto per coppie o famiglie con un bambino piccolo. 40 m², 2 posti, 1 camera matrimoniale, 1 bagno con doccia e bidet, cucina attrezzata, Wi-Fi, piscina.',

  // hotelsanmichele.net
  'hotelsanmichele.net/suite-belvedere':
    'La Suite Belvedere è la soluzione più confortevole. Al terzo piano, con zona soggiorno, letto king size e balcone panoramico sulla Valdichiana. Cucina separata attrezzata, due bagni con doccia, pavimenti in cotto originale.',
  'hotelsanmichele.net/suite-masaccio':
    'La Suite Masaccio è la camera più grande del palazzo, con un affresco del XV secolo attribuito alla bottega di Masaccio. Letto king size, secondo letto matrimoniale su soppalco raggiungibile da scala storica, bagno con vasca e doccia.',
  'hotelsanmichele.net/suite-sotto-il-sole':
    'Suite "Sotto il Sole", la nostra camera migliore per lune di miele ed eventi speciali. Cucina attrezzata, letto king size, vasca idromassaggio. Grande terrazza panoramica aperta su tre lati con vista sulla Valdichiana e i tetti di Cortona.',
  'hotelsanmichele.net/suite-torretta':
    'Suite "La Torretta" in una torre del XV secolo con vista a 360° sulla Valdichiana. Jacuzzi per due persone in camera, alcova romantica, pavimenti in legno massello. Ideale per anniversari e luna di miele.',
  'hotelsanmichele.net/suite-terrazza':
    'Suite "La Terrazza" al secondo piano. Zona giorno con divano e tavolo, letto king size, soppalco con divano. Splendida terrazza panoramica coperta con vista sulla Valdichiana e i tetti di Cortona, vasca idromassaggio.',
  'hotelsanmichele.net/quadruple-room':
    'Camera quadrupla ideale per famiglie e gruppi. Letto matrimoniale e due singoli (configurabile con due matrimoniali). Agli ultimi piani del palazzo con ascensore. Vista sulla Valdichiana o sui tetti di Cortona.',
  'hotelsanmichele.net/triple-room':
    'Camera tripla ideale per famiglie o piccoli gruppi. Letto matrimoniale e singolo (o tre singoli su richiesta). Al terzo e quarto piano, con ascensore. Vista sulla Valdichiana o sui tetti di Cortona, bagno con doccia o vasca.',
  'hotelsanmichele.net/superior-room':
    'Camera Superior spaziosa e luminosa agli ultimi piani, con vista sul centro storico. Pavimenti originali in cotto, travi in legno, arredi antichi eleganti. Bagno en suite con doccia walk-in o vasca.',
  'hotelsanmichele.net/classic-room':
    'Camera Classic luminosa con arredi antichi d\'epoca. Distribuita ai vari piani del palazzo storico con vista sul centro di Cortona. Pavimenti in cotto originale, Wi-Fi gratuito, bagno privato con doccia.',
  'hotelsanmichele.net/economy-room':
    'Camera Economy, la soluzione più conveniente. Al primo e secondo piano su piccolo cortile interno. Pavimenti in cotto e mobili antichi. Dotata di Wi-Fi, TV, bagno privato con doccia, aria condizionata e cassaforte.',
  'hotelsanmichele.net/single-room':
    'Camera Singola ideale per viaggiatori d\'affari o solitari. Al primo o quarto piano del palazzo storico. Letto queen size, bagno privato con doccia, aria condizionata, Wi-Fi, TV con canali internazionali.',
};

async function fetchFromSite(
  baseUrl: string,
  sourceName: string,
  locale: string
): Promise<Property[]> {
  try {
    const res = await fetch(
      `${baseUrl}/wp-json/wp/v2/mphb_room_type?per_page=100&_embed=true`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const items = await res.json();
    return items.map(
      (item: Record<string, unknown>): Property => {
        const { adults, children } = parseClassList((item.class_list as string[]) ?? []);
        const domain = new URL(baseUrl).hostname;
        const slug = item.slug as string;
        const key = `${domain}/${slug}`;
        const rawName = stripHtml((item.title as Record<string, string>)?.rendered ?? '');
        const name = NAME_OVERRIDES[key] ?? rawName;
        const rawDescription = stripHtml(
          (item.content as Record<string, string>)?.rendered ?? ''
        );
        const description =
          locale === 'it' ? (DESCRIPTIONS_IT[key] ?? rawDescription) : rawDescription;
        return {
          id: item.id as number,
          name,
          description,
          image:
            (
              (item._embedded as Record<string, unknown>)?.[
                'wp:featuredmedia'
              ] as Array<Record<string, string>>
            )?.[0]?.source_url ?? '',
          url: (item.link as string) ?? '',
          adults,
          children,
          source: sourceName,
        };
      }
    );
  } catch {
    return [];
  }
}

export async function fetchAllProperties(locale = 'it'): Promise<Property[]> {
  const [ilCasale, sanMichele] = await Promise.all([
    fetchFromSite('https://ilcasale.com', 'Il Casale', locale),
    fetchFromSite('https://hotelsanmichele.net', 'Hotel San Michele', locale),
  ]);
  return [...ilCasale, ...sanMichele];
}

export async function fetchIlCasaleProperties(locale = 'it') {
  return fetchFromSite('https://ilcasale.com', 'Il Casale', locale);
}
