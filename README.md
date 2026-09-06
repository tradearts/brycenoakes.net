# brycenoakes.net

Personal website for Bryce Noakes.

## Current build

The homepage is an authored, workshop-led editorial experience built around
Bryce's role in turning creative intent into physical delivery. A dark field-note
opening, warm paper sections and signal-orange transitions give the site its own
atmosphere while verified project evidence stays easy to scan. Public case
studies, private screen-manufacturing material and personal practice remain
clearly separated. The project pages and CV retain a quieter evidence-first
system.

## Local preview

From this folder:

```sh
python3 -m http.server 8088
```

Then open:

`http://127.0.0.1:8088`

## Structure

- `index.html` - page content and semantic structure
- `work/` - project case studies
- `cv.html` - source for the public CV
- `bryce-noakes-cv.pdf` - downloadable public CV
- `styles.css` - responsive visual system
- `script.js` - menu, contact link and progressive reveal behaviour
- `404.html` - branded not-found page for GitHub Pages
- `robots.txt` and `sitemap.xml` - search-engine discovery
- `images/projects/` - curated public project imagery
- `images/studio/` - portrait, workshop and process imagery
- `images/*.jpg` - personal-practice imagery retained from the earlier site
- `IMAGE-SOURCES.md` - source and attribution record
