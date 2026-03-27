export type Property = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  bedrooms: number;
  bathrooms: number;
  capacity: number;
  source: string; // nome struttura per il filtro
};

// Kept for backward compat (unused externally now)
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

async function fetchFromSite(baseUrl: string, sourceName: string): Promise<Property[]> {
  try {
    const res = await fetch(
      `${baseUrl}/wp-json/wp/v2/mphb_room_type?per_page=100&_embed=true`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const items = await res.json();
    return items.map(
      (item: Record<string, unknown>): Property => ({
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
        bedrooms: (item.bedrooms as number) ?? 0,
        bathrooms: (item.bathrooms as number) ?? 0,
        capacity: ((item.capacity as Record<string, number>)?.adults as number) ?? 0,
        source: sourceName,
      })
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

// Backward compat
export async function fetchIlCasaleProperties() {
  return fetchFromSite('https://ilcasale.com', 'Il Casale');
}
