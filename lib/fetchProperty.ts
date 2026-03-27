export type PropertyData = {
  id: number;
  name: string;
  description: string;
  image: string;
  url: string;
};

export async function fetchProperty(id: number): Promise<PropertyData | null> {
  try {
    const res = await fetch(`https://rent.xo.estate/?p=${id}`, {
      next: { revalidate: 3600 }, // cache 1 ora
    });

    if (!res.ok) return null;

    const html = await res.text();

    // Estrae il JSON-LD con i dati della property
    const match = html.match(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
    );
    if (!match) return null;

    for (const tag of match) {
      const json = tag.replace(/<script[^>]*>/, '').replace(/<\/script>/, '');
      try {
        const data = JSON.parse(json);
        const graph = data['@graph'] as Array<Record<string, unknown>>;
        if (!graph) continue;

        const webpage = graph.find((n) => n['@type'] === 'WebPage') as
          | Record<string, unknown>
          | undefined;
        if (!webpage) continue;

        const imageObj = webpage['image'] as Record<string, unknown> | undefined;
        const image = imageObj?.['url'] as string | undefined;
        const url = webpage['url'] as string | undefined;
        const description = webpage['description'] as string | undefined;
        const nameRaw = webpage['name'] as string | undefined;
        // Rimuove il suffisso " - XO ESTATE RENTAL"
        const name = nameRaw?.replace(/\s*-\s*XO ESTATE RENTAL$/i, '').trim();

        if (name && url) {
          return {
            id,
            name: name ?? `Property ${id}`,
            description: description ?? '',
            image: image ?? '',
            url,
          };
        }
      } catch {
        continue;
      }
    }

    return null;
  } catch {
    return null;
  }
}
