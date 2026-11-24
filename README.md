# ryantornberg.com

Source for Ryan Tornberg's personal site: static HTML and CSS with no build step. It has three scripts: `theme.js`, the light and dark theme toggle; `workspace/replay.js`, which steps through the recorded-run figure and the overview sheet one press at a time; and `workspace/rail.js`, which builds the Sections menu and the rail on the long pages. Each page works with none of them.

## Pages

- `index.html`: the home page.
- `workspace/index.html`: the agent workspace field guide.
- `workspace/parts/index.html`: the parts list. A script writes it from its rows; do not edit it by hand.

The home page uses `sheet.css`; the workspace page uses `styles.css`, whose last block gives it the same drawing-sheet look. Both share `theme.js`. Each page loads its stylesheet and scripts with a `?v=` date on the address. Change that value in both pages whenever one of those files changes, so a browser never pairs a new page with an old stylesheet or script. Figures follow `DIAGRAMS.md`.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy (GitHub Pages)

Pushing to `main` publishes the site. GitHub Pages serves the repository root with no build step, usually within a minute or two.

- **Custom domain:** the `CNAME` file holds `ryantornberg.com`. The domain's DNS points four A records at GitHub Pages and a `www` CNAME at `ryantornberg.github.io`.
- **HTTPS:** GitHub provisions the certificate. If it is missing rather than pending, remove and re-add the custom domain in the repository's Pages settings. That rewrites `CNAME` as a commit, so pull before your next edit.

## Content rules

- Describe the type of work, never employer-specific details, ticket numbers or unfixed issues.
- Don't publish the resume here. The contact block says "sent on request".
- Review every quarter. A stale site is worse than none.
