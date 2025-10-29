# Brand Logo Collection Guide

This document lists all the brands from your career history that need high-quality logos for the portfolio montage.

## Logo Requirements

- **Format**: SVG (preferred) or PNG with transparent background
- **Quality**: High-resolution (at least 500px width for PNG)
- **Style**: Official brand logos (current or historical versions from your tenure)
- **Location**: Save to `/public/images/logos/{slug}.svg` or `.png`

---

## Logos Needed (32 Total)

### 1999-2005: Public Health Sector

1. **Indiana Department of Health**
   - Slug: `indiana-health`
   - Source: Official IN.gov branding
   - Notes: State seal or department logo

### 2005-2007: Client Portfolio

2. **Indiana Heart Gallery**
   - Slug: `indiana-heart-gallery`
   - Source: indianaadoptionprogram.org

3. **International Medical Group (IMG)**
   - Slug: `img-global`
   - Source: imglobal.com press kit

4. **RASK Corporation**
   - Slug: `rask-corp`
   - Source: raskcorp.com

5. **Framing 4 Yourself**
   - Slug: `framing-4-yourself`
   - Source: framing4yourself.com

### 2007-2010: Government

6. **State of Indiana**
   - Slug: `state-of-indiana`
   - Source: Official IN.gov branding
   - Notes: State seal

### 2010-2011: Retail

7. **The Shade Store**
   - Slug: `the-shade-store`
   - Source: theshadestore.com or press kit

### 2012-2015: Health & Wellness Media

8. **Everyday Health**
   - Slug: `everyday-health`
   - Source: everydayhealth.com brand guidelines

9. **What to Expect**
   - Slug: `what-to-expect`
   - Source: whattoexpect.com

10. **MedPage Today**
    - Slug: `medpage-today`
    - Source: medpagetoday.com

11. **Diabetes Daily**
    - Slug: `diabetes-daily`
    - Source: diabetesdaily.com

12. **Jillian Michaels**
    - Slug: `jillian-michaels`
    - Source: jillianmichaels.com

13. **SparkAmerica**
    - Slug: `spark-america`
    - Source: Archive or alternate branding

### 2015-2018: Condé Nast Portfolio (16 Brands)

**IMPORTANT**: Condé Nast brands have strict brand guidelines. Use official logos from their press kits or brand guidelines pages.

14. **Architectural Digest**
    - Slug: `architectural-digest`
    - Source: AD press kit / Condé Nast brand center

15. **Allure**
    - Slug: `allure`
    - Source: Allure press kit

16. **Ars Technica**
    - Slug: `ars-technica`
    - Source: arstechnica.com (Condé Nast acquired 2008)

17. **Bon Appétit**
    - Slug: `bon-appetit`
    - Source: Bon Appétit press kit

18. **Condé Nast Traveler**
    - Slug: `conde-nast-traveler`
    - Source: CNTraveler press kit

19. **Epicurious**
    - Slug: `epicurious`
    - Source: Epicurious brand guidelines

20. **Glamour**
    - Slug: `glamour`
    - Source: Glamour press kit

21. **GQ**
    - Slug: `gq`
    - Source: GQ press kit

22. **Pitchfork**
    - Slug: `pitchfork`
    - Source: Pitchfork brand guidelines (Condé Nast acquired 2015)

23. **Self**
    - Slug: `self`
    - Source: Self magazine press kit

24. **Teen Vogue**
    - Slug: `teen-vogue`
    - Source: Teen Vogue press kit

25. **Them**
    - Slug: `them`
    - Source: them.us brand guidelines

26. **The New Yorker**
    - Slug: `the-new-yorker`
    - Source: New Yorker press kit (iconic typeface logo)

27. **Vanity Fair**
    - Slug: `vanity-fair`
    - Source: Vanity Fair press kit

28. **Vogue**
    - Slug: `vogue`
    - Source: Vogue press kit (serif wordmark)

29. **Wired**
    - Slug: `wired`
    - Source: Wired press kit (bold sans-serif)

### 2018-2025: Career Platforms

30. **The Muse**
    - Slug: `the-muse`
    - Source: themuse.com/press or brand guidelines

31. **Fairy God Boss**
    - Slug: `fairy-god-boss`
    - Source: fairygodboss.com

32. **Purpose Jobs**
    - Slug: `purpose-jobs`
    - Source: purpose.jobs

---

## How to Source Logos

### Priority Sources (in order):

1. **Official Press Kits**
   - Look for "Press" or "Media Kit" in website footer
   - Usually at: `{domain}/press`, `/about/press`, `/media`

2. **Brand Guidelines / Brand Center**
   - Condé Nast: https://www.condenast.com/brands
   - Individual brand press pages

3. **Current Website**
   - Extract SVG logo from site header using browser DevTools
   - Right-click logo → Inspect → Copy SVG code

4. **Brandfetch / Clearbit**
   - https://brandfetch.com (free logo downloads)
   - https://logo.clearbit.com/{domain} (API)

5. **Wikimedia Commons**
   - High-quality logos for major brands
   - Check licensing

### Logo Extraction Tips

**For SVG logos:**

```bash
# Save as /public/images/logos/{slug}.svg
```

**For PNG logos:**

- Download highest resolution available
- Remove background if needed (use remove.bg or Photoshop)
- Save at minimum 500px width

---

## Display Strategy

The logos will be displayed in a responsive grid/montage:

- Grouped by era/company type
- Grayscale with color on hover
- Responsive sizing (larger for major brands like Vogue, GQ, Wired)
- Link to corresponding portfolio screenshot or live site

---

## Component Structure (Planned)

```typescript
// components/LogoMontage.tsx
interface Logo {
  name: string;
  slug: string;
  file: string; // filename in /public/images/logos/
  period: string;
  category: string;
}
```

This will be rendered at the bottom of portfolio/experience pages.
