# Diagram system

The rules every figure on this site follows. The goal is that a set of drawings made months apart reads as one hand. Companion to [SPEC.md](SPEC.md).

## 1. Does it earn its place?

A diagram is justified when it shows a **mechanism** a reader would otherwise assemble from prose: where data flows, which parts talk, what changes between two options, what state something moves through. If a sentence says it faster, write the sentence.

Never draw: a list with boxes around it, a timeline of a project, an org chart of concepts, or a picture that restates the heading above it.

One figure carries **one claim**, and the caption states that claim.

## 2. Maximize meaning per mark

Following Tufte's data-ink principle: every stroke either carries information or comes out. No decorative frames, no drop shadows, no gradients, no 3D, no icons, no logos. A box exists because something is a distinct component; a line exists because two things actually communicate.

Density ceiling: about seven boxes. Past that, split the figure or raise the level of abstraction.

## 3. Geometry

- **Grid:** all coordinates land on multiples of 4; prefer 8. Shared baselines and equal gaps are most of what makes a drawing look deliberate.
- **viewBox:** width 720 or 780; height to fit content. Never a preset aspect ratio.
- **Boxes:** height 56 (two text lines) or 72 (three); `rx="3"`; stroke 1.5.
- **Gaps:** 40 or more between a box edge and the next element. Text starts 16 inside its box.
- **Lines:** orthogonal or a single clean diagonal. No curves except a rounded feedback path.

## 4. Type

| Role | Size | Weight |
|---|---|---|
| Box title | 13 | 600 |
| Box body | 13 | 400 |
| Arrow or annotation label | 12 | 400 |

Font is the page's system sans, not the body serif — labels are interface text, not prose. Text never goes below 12 in the viewBox, and a label must fit inside its box: roughly `(box width - 32) / 6.5` characters per line at size 13.

Explanations belong in the caption, never in the drawing.

## 5. Color

- Everything is `currentColor`, so figures theme themselves in light and dark.
- **One accent** (`var(--link)`), and it always means the same thing: *the element the surrounding text is arguing about*. Used on at most one box and its connected path per figure.
- Fills: none, except a 15% accent tint to show proportion. No other fills.
- Color never carries meaning alone — the accented element is also labeled.

## 6. Arrows

- Every arrow is labeled, or its meaning is unmistakable from the boxes it joins. An unlabeled arrow means "related somehow", which is not information.
- **Solid** = flow, the normal path. **Dashed** = a constraint, a feedback path, or something that happens only on failure.
- One `<marker>` per page, referenced by id; arrowheads are never images.

## 7. Legibility and accessibility

- Figures sit in a horizontally scrollable wrapper so labels never shrink below about 11 rendered pixels on a phone. A diagram that scrolls is better than one that is unreadable.
- `role="img"` plus `aria-label` on every `<svg>`, carrying the **same claim as the caption** in one sentence. A screen reader user gets the claim, not a list of shapes.
- Contrast meets WCAG AA in both themes; the accent is checked on both grounds.
- No `<script>`, `<style>`, or `<foreignObject>` inside a figure. Nothing about a diagram depends on JavaScript.

## 8. Figure numbering and captions

Figures are numbered automatically by CSS (`counter(figure)`), so inserting one never renumbers anything by hand. The caption:

- states the claim, e.g. "Two of the three sources maintain themselves; the third has no home unless someone gives it one";
- never says "Diagram showing…" or repeats the heading;
- stays one or two sentences.

## 9. Before publishing

1. Read the caption alone. Does it state a claim, and does the drawing prove it?
2. Cover the prose. Does the figure still make sense?
3. View at 390px wide. Is every label legible?
4. Switch to dark mode. Does the accent still read?
5. Delete one more mark. If nothing was lost, leave it deleted.
