# Portfolio Screenshots Summary

## ✅ Completed Captures (28 sites)

Successfully captured screenshots from the Wayback Machine:

1. Indiana Department of Health (2005)
2. Indiana Heart Gallery (2007)
3. International Medical Group (2007)
4. RASK Corporation (2007)
5. Framing 4 Yourself (2007)
6. State of Indiana (2010)
7. The Shade Store (2011)
8. Everyday Health (2015)
9. What to Expect (2015)
10. MedPage Today (2015)
11. Jillian Michaels (2015)
12. SparkAmerica (2015)
13. Architectural Digest (2018)
14. Allure (2018)
15. Ars Technica (2018)
16. Bon Appétit (2018)
17. Condé Nast Traveler (2018)
18. Epicurious (2018)
19. Glamour (2018)
20. GQ (2018)
21. Pitchfork (2018)
22. Self (2018)
23. Teen Vogue (2018)
24. Them (2018)
25. The New Yorker (2018)
26. Vanity Fair (2018)
27. The Muse (2025)
28. Fairy God Boss (2025)

**Location**: `/public/images/portfolio/`
**Format**: 1200x1200 PNG screenshots
**Size**: ~150-900KB per screenshot

---

## ❌ Failed Captures (4 sites)

These sites timed out during capture (networkidle wait exceeded 60s):

1. **Diabetes Daily** - Wayback Machine page too slow
2. **Vogue** - Wayback Machine page too slow
3. **Wired** - Wayback Machine page too slow
4. **Purpose Jobs** - Wayback Machine page too slow (2025 snapshot may not exist)

**Recommendation**: Manually capture or skip if too garbled

---

## Next Steps

### Logo Collection

See [`docs/logo-collection-guide.md`](./logo-collection-guide.md) for detailed logo sourcing instructions.

**Priority brands to collect first**:

1. **Major Condé Nast brands** (Vogue, GQ, Wired, New Yorker, Vanity Fair)
2. **The Muse** (longest tenure, most recent)
3. **Everyday Health**
4. **State of Indiana**

**Component ready**: `components/LogoMontage.tsx`
**Data structure**: `data/logos.ts`

### Usage

Add to any page:

```tsx
import { LogoMontage } from '@/components/LogoMontage';

<LogoMontage
  title="Trusted by Leading Brands"
  description="26 years building high-traffic platforms for world-class organizations"
  showPeriods={false} // or true to group by era
/>;
```

---

## File Structure

```
public/images/
├── blog/           # Blog post hero images (6 files)
├── portfolio/      # Career screenshots (28 files)
└── logos/          # Brand logos (0 files - ready for collection)
```
