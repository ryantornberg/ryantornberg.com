# ryantornberg.com — spec

What this site is for, what belongs on it, and what does not. Written 2026-09-20. Revisit when the job search ends.

## Purpose

One job: a hiring manager or recruiter who has your name spends 15 to 60 seconds and comes away convinced you think clearly at scale. Everything else is secondary.

Concretely, the site is the URL that goes in the Portfolio field of an application, in a LinkedIn message, and at the end of a cover letter. Its existence is worth more than its traffic.

## Audience, in priority order

1. A hiring manager for a principal, staff, architect or head-of-engineering role, skimming before a screen.
2. A recruiter checking that the résumé claims are real.
3. An engineer who found an essay on its own and may pass it on.

Not the audience: search engines, other job seekers, or a general technical readership. No SEO work, no newsletter, no comments.

## What it must do

- Say what Ryan does, in his own words, above the fold.
- Show proof that a resume cannot carry: reasoning, decisions, and diagrams of real mechanisms.
- Give one obvious way to make contact.
- Load fast, read well on a phone, and work in light and dark themes.
- Survive neglect. Nothing on it should look stale in three months.

## What it must not do

- No employer-specific detail: no internal product names, ticket numbers, customer names, screenshots of internal tools, or unfixed security issues. The type of work is publishable; the specifics are not.
- No resume PDF. It carries a phone number. Contact says "sent on request".
- No fabricated metrics. Every number traces to something checkable in Ryan's own records.
- No blog cadence, no "thoughts" posts, no reposted industry commentary.
- No analytics that track individuals, no chat widgets, no popups, no cookie banner (because nothing sets cookies).

## Structure

```
/                       home: positioning, three proof points, work, writing, about, contact
/writing/<slug>.html    one essay or case study per page
/SPEC.md                this file
/README.md              how to run and deploy
```

Home page sections, in order: cover (headline, one-line positioning), three proof points as measures, Work (what he does, four short blocks), Writing (essays, newest first), About, Contact.

## Content rules

- **Essays are case studies, not opinions.** Each shows a real situation, the decision, what was rejected, and the outcome. If it could have been written by someone who had not done the work, it does not go up.
- **Every claim is checkable by Ryan.** Numbers come from his own logs, plans and commits.
- **Diagrams earn their place** by showing a mechanism the prose would take a paragraph to describe. Hand-authored inline SVG, `currentColor` plus one accent, no libraries.
- **Plain language.** Short sentences, active voice, no jargon that a competent engineering manager outside his stack would have to look up.
- **First person.** The site is him talking, not a company describing a person.

## Current content

| Page | Purpose |
|---|---|
| Home | Positioning and routing. |
| How an agent workspace works | The AI-tooling proof, with four diagrams. The strongest asset for AI-adoption roles. |
| The question nobody asked | Cross-industry judgment: three questions that catch expensive failures early. |
| Plausible is not checked | Verification discipline; answers the "do you trust AI output?" interview screen. |

Planned, in priority order: a migration case study (moving a live product between codebases without a freeze), and a short "Now" line stating what he is working on, dated.

## Design

- Cover: one saturated blue field (`#1d3c9e`) with large condensed type as the image, in the spirit of Blue Note record sleeves. The rest of the page is quiet.
- Type: Archivo (condensed widths) for display, Source Serif 4 for body.
- Layout: left-aligned, 66-character measure for text, wider frame for diagrams.
- No motion. No hover effects beyond link underlines.
- Light and dark themes via `prefers-color-scheme`, both tested.

## Technical

- Static HTML and CSS. No build step, no framework, no JavaScript.
- Hosted on GitHub Pages from `main` at `github.com/ryantornberg/ryantornberg.com`, custom domain via `CNAME`.
- DNS at Porkbun: four A records at GitHub Pages' addresses, `www` as a CNAME.
- Fonts from Google Fonts with a real fallback stack; everything else self-contained.

## Maintenance

- Quarterly review, 15 minutes: is the positioning still right, is anything stale, does the resume line still match.
- A new essay only when there is something real to say. Three good pages beat ten filler ones.
- If two quarterly reviews pass with no edits and no applications in flight, take the site down or freeze it rather than let it rot.

## Success

There is no traffic target. The site works if:

1. It gets linked in every application and outreach message.
2. At least one interviewer mentions having read something on it.
3. Nothing on it ever has to be walked back.
