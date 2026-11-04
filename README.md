# ryantornberg.com

Source for Ryan Tornberg's personal site: static HTML and CSS with no build step. The only script is `theme.js`, the light and dark theme toggle.

## Pages

- `index.html`: the home page.
- `workspace/index.html`: the agent workspace field guide.

Both share `styles.css` and `theme.js`. Figures follow `DIAGRAMS.md`.

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
- Don't publish the resume here. It carries a phone number. The contact section says "sent on request".
- Review every quarter. A stale site is worse than none.
