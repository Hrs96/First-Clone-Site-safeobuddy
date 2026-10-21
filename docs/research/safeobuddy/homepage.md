# SafeObuddy homepage research

Inspected `https://safeobuddy.com/` on 2026-10-22. Scope is the supplied homepage only.

## Route ownership

| Source URL | Local route | Implementation |
| --- | --- | --- |
| `https://safeobuddy.com/` | `/` | `src/app/page.tsx`, `src/app/globals.css` |

Product, industry, software, blog, login, and contact links remain pointed at the source site because their pages were not requested. Product and Solutions menus open locally and link to the source destinations.

## Page structure

1. Sticky header with product and solutions dropdowns, login, and quote action.
2. Two-column hero with the “Cargo that never goes missing” headline, three fleet metrics, lock status callout, and driver score card.
3. Repeating live activity ticker and fleet-name marquee.
4. Four hardware product cards.
5. Four-step dispatch-to-delivery workflow.
6. Fleet software capabilities beside a dashboard image.
7. Eight photographic industry cards and a fleet image band.
8. Three field-result quotes.
9. Marketplace and discovery names.
10. Five expandable FAQ items.
11. Quote CTA and multi-column footer.

## Visual and interaction notes

- Near-black navy background, warm gold highlights, thin blue-gray borders, subtle radial glows, and glass-like hero status cards.
- Source uses Inter for body text. The display family is declared as Cormorant Garamond with a Georgia serif fallback; the visible source heading uses the serif fallback.
- Desktop has a sticky header, two-column hero, four-column product and industry grids, and three quote cards. At narrow widths the hero and software blocks stack; the product and industry cards become two columns; navigation becomes a toggleable menu.
- Products and Solutions open dropdowns. FAQ buttons expand one answer at a time. The activity ticker and fleet names scroll continuously. Product and industry cards have hover emphasis.
- The clone uses local copies of the images and Inter font listed below. Navigation outside `/` remains external.

## Local asset map

All files are saved beneath `public/sites/safeobuddy/` and downloaded from `https://safeobuddy.com/assets/` unless stated otherwise.

| Local file | Use |
| --- | --- |
| `hero-lock-C8qY4Ofe.jpg` | Hero lock photograph |
| `padlock-hero-BehdicD8.jpg` | GPS padlock product card |
| `product-fixedlock-pW0p-a3E.jpg` | Fixed smart lock product card |
| `product-vltd-DA1VK2ix.jpg` | AIS-140 product card |
| `product-camera-DbZAGpwu.jpg` | Fleet camera product card |
| `software-dashboard-qOt1Mu0t.jpg` | Fleet software dashboard |
| `usecase-ecom-D1BIkbqd.jpg` | E-Commerce card |
| `usecase-container-B4eN3fxA.jpg` | Shipping Containers card |
| `usecase-milk-DO4brZ53.jpg` | Milk Tankers card |
| `usecase-fuel-BYrpu08C.jpg` | Fuel Tankers card |
| `usecase-trailer-Ds4PLqgI.jpg` | Closed Body Tankers card |
| `usecase-highvalue-DjwJhrnJ.jpg` | Oil & Gas card |
| `usecase-truck-FE5BeI4W.jpg` | Mining Vehicles card |
| `usecase-cab-qx-ZLFKf.jpg` | Middle Mile card |
| `industry-fleet-DfJ9wJ4f.jpg` | Fleet photo band |
| `fonts/inter-latin-var.woff2` | Inter variable font from Google Fonts |

## Verification

- `npm run lint` — passed.
- `npm run typecheck` — passed.
- `npm run build -- --webpack` — passed; `/` was statically prerendered.
- `npm run check` — the default Turbopack build failed in this sandbox while starting a child Node process to process CSS. The equivalent Webpack production build passed.

The source desktop view and mobile navigation were inspected. A local browser comparison is still to be completed outside this sandbox, which cannot connect to its local development server.
