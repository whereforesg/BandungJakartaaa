# The trip club — Jakarta & Bandung

A mobile-first, illustrated day-one team itinerary. Includes scroll reveals, an itinerary dialog with jump links, a journey progress bar, tap animations, optional sound, and reduced-motion support.

## Run

Requires Node.js. No package installation or credentials required.

```sh
cd /workspace/BandungJakartaaa
npm run dev
```

The server listens on port 3000, or the `PORT` environment variable. Run `npm run check` for JavaScript syntax validation.

Edit the `stops` array in `app.js` to update timing or locations, `style.css` for styling, and `page.html` for the page template. Run `npm run build` to rebuild `index.html`; `npm run dev` also rebuilds automatically. The generated `index.html` is self-contained: styles, vector illustrations, itinerary content, and interactions are embedded, so it can be opened directly in a browser or shared as a single file. All itinerary content remains visible with JavaScript disabled.

Airport arrival is confirmed as 6:30am SGT; Jakarta and Bandung times are local (UTC+7). Event timing and dinner location remain TBC. Travel durations are estimates.
