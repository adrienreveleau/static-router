# CloudFront Static Router Function

A minimal CloudFront function for static sites.

## Overview

- **Routing Logic:**  
  - Requests without an extension are rewritten:
    - `/about` → `/about.html`
    - Unmatched cases default to `/index.html`
  - Requests with an extension (e.g., `/sitemap.xml`) remain unchanged.

## Astro Configuration

To ensure proper URL rewriting, configure Astro to output files (not directories) by setting the following in your `astro.config.mjs`

```mjs
export default defineConfig({
  build: {
    format: 'file',
  },
});
