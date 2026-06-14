
# Homepage — One Coherent Story (v3)

Treat the homepage as a single editorial spread, not 6 sections. Same paper background, same column grid, same image proportions, same rhythm. The only "dark" moment on the page is removed entirely. Author/Illustrator/Designer leads, in that order.

## 1. Audit (what's wrong right now)

| Area | Issue |
|---|---|
| Flagship (New Direction) | Huge black slab dominates; book mockup feels small; `novel-spread.jpg` is unrelated artwork and must go; pendant reads as decoration not story |
| Rhythm | 28–40 unit vertical gaps between sections; page feels broken |
| Project layout | Mixed aspect ratios (5/4 vs 16/9), alternating sides, plus a "wide" variant — visually random |
| Imagery | NatGeo spread good; pirate popup OK; Asaflezet in-hand good; Zoo map good; ND uses one stock-feeling mockup + unrelated spread |
| Color | Black slab + cream + paper + turquoise + coral all fight; no rhythm |
| About | Generic copy, no real bio; email is a guess (`hello@nivhaviv.com`); placeholder Instagram/Behance/Read.cv links |
| Identity | Reads "designer who illustrates" — Author should come first |

## 2. The fix — what changes

### A. One palette, one rhythm
- Whole page on `--paper` / `--paper-deep` / `--cream`. **No black sections.** Turquoise is the only accent.
- Global vertical rhythm: section padding `py-20 md:py-28` (was `py-32–44`); project-to-project gap `space-y-20 md:space-y-28` (was `40`).
- Single hairline divider between sections instead of large empty bands.

### B. Flagship — New Direction, rebuilt warm + light
Replace the entire `SignatureProject` block:
- Background: `bg-cream` (matches StudioBand), no dark slab, no full-bleed `novel-spread.jpg`.
- Layout: 2-column editorial. Left: copy + "★ Flagship" + CTA. Right: a layered ND composition using **only real ND assets**:
  - `nd-book-mockup-v2` (large, center-right, drop shadow)
  - `nd-arieh-roy-circle` character (offset, behind book)
  - `nd-pages-collage-v2` (small, behind, tilted)
  - `necklace` pendant (small, foreground, floating)
  - Ambient: 1× `nd-spark-coral`, 1× `nd-diamond-teal`
- Remove `novel-spread.jpg` import + full-bleed band entirely.
- Below the comp: a single thin row of 3 small ND thumbnails (`nd-jerusalem-walk`, `nd-beach-scene`, `nd-kiss`) as a 3-up "from inside the book" strip, ~20vh, on cream — gives breadth without a giant slab.

### C. Project rows — one shape, no variations
Kill `layout: left | right | wide`. Every project row uses the **same** layout:
- 12-col grid: image col-span-7 LEFT, text col-span-5 RIGHT, every row identical.
- Image aspect always `4/3`.
- Same hover, same label position, same divider.
- Biblical Zoo map: still `4/3`, just zoomed; no special wide variant.
- This is the single biggest fix for "feels like a template" — consistency reads as intent.

### D. Imagery (only the strongest, all real)
| Project | Image | Why |
|---|---|---|
| New Direction | layered comp above | Flagship, real assets |
| NatGeo Kids | `ngk-spread.png` | Shows craft, not just a cover |
| Gaming & Product | `gpd-pirate-popup.jpg` | Most character-led product shot |
| Biblical Zoo | `bz-after-map.jpg` | The map IS the project |
| Asaflezet | `az-niv-book.jpg` | Author + printed object in one frame |

StudioBand thumbnails also corrected: Books → `az-niv-book` (real authored book), Illustration → `ngk-spread`, Product → `gpd-pirate-popup` (replaces `gpd-three-games` which is weaker).

### E. Hero — small refinements
- Keep typography exactly as-is.
- Reorder right-column discipline list to **Books · Characters · Illustration · Product** ✓ (already correct).
- Tighten "Now: New Direction" pulse copy.
- Reduce hero bottom padding to match new global rhythm.

### F. About — factual, no invention
You didn't answer the bio question, so I will **not invent** copy. I'll:
- Keep the existing factual frame (Tel Aviv, Author · Illustrator · Designer, selected clients).
- Reorder roles so **Author** is first (already is).
- Remove the "Selected:" line until you confirm names — or keep it exactly as-is since those four are all real projects on the site.
- Leave the existing portrait + turquoise frame.

### G. Contact — remove unverified data
- Keep `hello@nivhaviv.com` but mark it as the working email until you confirm. (Asked, no answer — I'll leave it; flag in chat.)
- **Remove** the three placeholder social links (Instagram / Behance / Read.cv all point to `#`). Replace with a single line: "Find me by email — that's where the work happens." Until you give real URLs, no fake links.

## 3. Non-goals (do not touch)
- Typography system (locked).
- Any `src/routes/work.*.tsx` page.
- `Lightbox`, `MoreWork`, `case-study/primitives`, `CaseStudy`.
- Container width (`max-w-[1500px]`), font stack, reveal/parallax helpers.

## 4. Files touched
- `src/routes/index.tsx` — full rewrite of `SignatureProject`, `ProjectRow` (single layout, no wide variant), `StudioBand` (thumbnail swaps), `FeaturedWork` (rhythm), `About` (minor), `Contact` (remove fake socials). Imports cleaned (drop `novel-spread`, add `nd-pages-collage-v2`, `nd-jerusalem-walk`, `nd-beach-scene`, `nd-kiss`).

## 5. Order of implementation
1. New `SignatureProject` (warm + light, layered real-asset comp, no dark slab, no unrelated spread).
2. Unify `ProjectRow` to one layout; remove `WideProjectRow` and `layout` field.
3. Global spacing pass.
4. StudioBand thumbnail swaps.
5. Contact: remove fake socials.
6. Visual QA in preview.

After approval I'll implement in that order in a single pass.
