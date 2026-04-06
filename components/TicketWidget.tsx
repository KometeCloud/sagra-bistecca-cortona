'use client';

import { useEffect } from 'react';

const WIDGET_URL =
  'https://www.tickettailor.com/checkout/new-session/id/7970903/chk/d2b6/?ref=website_widget&show_search_filter=true&show_date_filter=true&show_sort=true';

export default function TicketWidget() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src="https://cdn.tickettailor.com/js/widgets/min/widget.js"]'
    );
    if (existing) {
      existing.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.tickettailor.com/js/widgets/min/widget.js';
    script.setAttribute('data-url', WIDGET_URL);
    script.setAttribute('data-type', 'inline');
    script.setAttribute('data-inline-minimal', 'true');
    script.setAttribute('data-inline-show-logo', 'false');
    script.setAttribute('data-inline-bg-fill', 'false');
    script.setAttribute('data-inline-inherit-ref-from-url-param', '');
    script.setAttribute('data-inline-ref', 'website_widget');
    script.async = true;

    const container = document.getElementById('tt-widget-container');
    if (container) {
      container.appendChild(script);
    }
  }, []);

  return (
    <div id="tt-widget-container" className="tt-widget">
      <div className="tt-widget-fallback">
        <p>
          <a
            href={WIDGET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-chianti)] underline font-semibold"
          >
            Click here to buy tickets
          </a>
        </p>
      </div>
    </div>
  );
}
