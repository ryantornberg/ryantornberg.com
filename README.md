# ryantornberg.com

Source for Ryan Tornberg's personal site: static HTML and CSS with no build step.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy (Cloudflare Pages)

1. Push this repo to GitHub.
2. In Cloudflare, go to Workers & Pages, create a Pages project, and connect the repo. Leave the build command empty and set the output directory to `/`.
3. Under the project's Custom domains, add `ryantornberg.com`. If the domain is registered elsewhere, point its nameservers at Cloudflare, or add the CNAME record Cloudflare shows.

## Content rules

- Describe the type of work, never employer-specific details, ticket numbers or unfixed issues.
- Don't publish the resume here. It carries a phone number. The contact section says "sent on request".
- Review every quarter. A stale site is worse than none.
