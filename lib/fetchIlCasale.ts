export type IlCasaleProperty = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
  bedrooms: number;
  bathrooms: number;
  capacity: number;
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim().slice(0, 220);
}

export async function fetchIlCasaleProperties(): Promise<IlCasaleProperty[]> {
  try {
    const res = await fetch(
      'https://ilcasale.com/wp-json/wp/v2/mphb_room_type?per_page=100&_embed=true',
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const items = await res.json();
    return items.map(
      (item: Record<string, unknown>): IlCasaleProperty => ({
        id: item.id as number,
        name: (item.title as Record<string, string>)?.rendered ?? '',
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
      })
    );
  } catch {
    return [];
  }
}
