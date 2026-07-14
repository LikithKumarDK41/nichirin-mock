---
name: Nichirin Imperial Manufacturing System
colors:
  surface: '#f8f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#5f3f3b'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#946e69'
  outline-variant: '#e9bcb6'
  surface-tint: '#c0000d'
  primary: '#b7000c'
  on-primary: '#ffffff'
  primary-container: '#e60012'
  on-primary-container: '#fff7f6'
  inverse-primary: '#ffb4aa'
  secondary: '#5b5d72'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0fa'
  on-secondary-container: '#616378'
  tertiary: '#0058b2'
  on-tertiary: '#ffffff'
  tertiary-container: '#0070e0'
  on-tertiary-container: '#f9f8ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#930007'
  secondary-fixed: '#e0e0fa'
  secondary-fixed-dim: '#c4c5dd'
  on-secondary-fixed: '#181a2c'
  on-secondary-fixed-variant: '#444559'
  tertiary-fixed: '#d7e3ff'
  tertiary-fixed-dim: '#abc7ff'
  on-tertiary-fixed: '#001b3f'
  on-tertiary-fixed-variant: '#00458f'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  status-success: '#28A745'
  status-warning: '#FB8C00'
  status-error: '#E60012'
  status-info: '#0056B3'
  border-subtle: '#D1D5DB'
  sidebar-bg: '#1A1C2E'
  table-header: '#F1F3F5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  mono-data:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 16px
  panel-padding: 16px
  table-row-height: 40px
  header-height: 64px
  sidebar-width: 260px
---

## Brand & Style

The design system is engineered for high-stakes manufacturing environments, specifically for MES (Manufacturing Execution Systems) and Control Card administration. The brand personality is **authoritative, precise, and disciplined**, reflecting Japanese corporate standards. It prioritizes information density and operational clarity over decorative elements.

The visual style is **Corporate / Modern** with a lean toward **Industrial Minimalism**. It utilizes a "flat" design philosophy to eliminate distractions. The UI uses a "White Base" strategy for content areas to ensure maximum legibility under factory lighting, while using deep charcoal structural elements to provide a clear mental model of the software's architecture. There are no gradients, shadows, or blurs; depth is achieved through thin borders and tonal layering.

## Colors

The palette is rooted in a high-contrast industrial scheme. 

*   **Primary (Nichirin Red):** Reserved strictly for active states, critical calls to action, and primary brand markers. It must be used sparingly to maintain its psychological impact as a "priority" signal.
*   **Structure (Deep Navy/Charcoal):** Used for the global sidebar and primary navigation to ground the application.
*   **Backgrounds:** A clean `#FFFFFF` is used for all data-entry and card surfaces, while `#F5F7F9` provides a subtle "canvas" to separate the background from the UI containers.
*   **Functional Status:** Standardized colors for manufacturing states: Green for "Completed," Orange for "QC/Pending," and Red for "NG/Blocked."

## Typography

This design system uses **Inter** for its neutral, highly legible glyphs, which are essential for reading complex part numbers and technical specifications. 

The hierarchy is "Dense but Readable." We prioritize smaller font sizes (13px and 14px) for body content to allow more data to be visible on-screen at once, reflecting the needs of an admin portal. 

*   **Labels:** Use all-caps with slight letter-spacing for field headers and table headers to distinguish them from data.
*   **Weight:** Use Semibold (600) for structural headers and Bold (700) for critical status or numerical values.
*   **Mobile:** Headlines scale down by 20% on mobile devices, though the primary target for this system is desktop terminals.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. The sidebar and header are fixed-position elements, while the main content area utilizes a fluid 12-column grid to maximize the visibility of wide enterprise tables.

*   **Rhythm:** Based on a 4px baseline grid. Most component internal spacing uses 8px (2 units) or 16px (4 units).
*   **Density:** Components are tightly packed. Tables use a 40px row height to balance information density with touch/click accuracy.
*   **Breakpoints:** 
    *   *Desktop (1440px+):* Full sidebar expanded.
    *   *Tablet (1024px):* Sidebar collapses to icons.
    *   *Mobile (768px):* Hidden sidebar with hamburger menu; tables become scrollable or transform into card-stacks.

## Elevation & Depth

This design system avoids traditional box-shadows. Instead, it uses **Tonal Layers** and **1px Borders** to define hierarchy.

*   **Level 0 (Canvas):** `#F5F7F9` – The furthest back layer.
*   **Level 1 (Panels/Cards):** `#FFFFFF` with a 1px border of `#D1D5DB`.
*   **Level 2 (Modals/Drawers):** `#FFFFFF` with a slightly darker 1px border and a very subtle 10% black overlay on the background to focus attention.
*   **Dividers:** Use 1px solid lines. Vertical dividers in the header or tables should be light gray (`#E5E7EB`), while a primary red divider can be used to separate a page title from the content area.

## Shapes

In alignment with the formal Japanese corporate aesthetic, shapes are **predominantly rectangular**. 

*   **Base Radius:** 4px (Soft) is applied to buttons, input fields, and panels. This provides a professional touch without looking overly "consumer-grade" or friendly.
*   **Tables:** Table corners should remain sharp (0px) at the outer container, with internal cells having no radius.
*   **Badges:** Status badges use a 2px radius for a "stamped" appearance rather than a pill shape.

## Components

**Buttons**
- **Primary:** Solid Nichirin Red (`#E60012`) with white text. 4px radius. No shadow.
- **Secondary:** White background, 1px Gray border, Charcoal text.
- **Ghost:** No background or border, Red text for actions, Charcoal text for navigation.

**Tables (Core Component)**
- Header: Light gray background (`#F1F3F5`), Bold caps labels.
- Rows: White background, 1px bottom border. Hover state: `#F9FAFB`.
- Cell Alignment: Numerical data is right-aligned; text is left-aligned.

**Status Badges**
- Structured as a small rectangle with a left-hand 4px solid color stripe indicating the status (Green/Orange/Red/Blue). Background is a 10% opacity tint of the status color.

**Input Fields**
- 1px border. On focus, the border changes to Nichirin Red. Label is positioned above the field in `label-bold` style.

**Sidebar**
- Background: `#1A1C2E`.
- Active State: A 4px vertical Red line on the far left of the active menu item, with a subtle text color change to white.
- Icons: Monolinear, 20px size, white or light gray.

**Drawers**
- Used for "Control Card" details to maintain context of the main list. Slides from the right, occupying 40% of the screen width. White background with a distinct 1px left border.