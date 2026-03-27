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

async function fetchFromSite(baseUrl: string, sourceName: string): Promise<Property[]> {
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
        return {
          id: item.id as number,
          name: stripHtml((item.title as Record<string, string>)?.rendered ?? ''),
          description: stripHtml((item.content as Record<string, string>)?.rendered ?? ''),
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

export async function fetchAllProperties(): Promise<Property[]> {
  const [ilCasale, sanMichele] = await Promise.all([
    fetchFromSite('https://ilcasale.com', 'Il Casale'),
    fetchFromSite('https://hotelsanmichele.net', 'Hotel San Michele'),
  ]);
  return [...ilCasale, ...sanMichele];
}

export async function fetchIlCasaleProperties() {
  return fetchFromSite('https://ilcasale.com', 'Il Casale');
}
