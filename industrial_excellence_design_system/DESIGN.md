---
name: Industrial Excellence Design System
colors:
  surface: '#faf9fc'
  surface-dim: '#dbd9dd'
  surface-bright: '#faf9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f6'
  surface-container: '#efedf0'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e5'
  on-surface: '#1a1c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f2f0f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#476083'
  primary: '#000613'
  on-primary: '#ffffff'
  primary-container: '#001f3f'
  on-primary-container: '#6f88ad'
  inverse-primary: '#afc8f0'
  secondary: '#006a6a'
  on-secondary: '#ffffff'
  secondary-container: '#7af2f2'
  on-secondary-container: '#006e6e'
  tertiary: '#110200'
  on-tertiary: '#ffffff'
  tertiary-container: '#391303'
  on-tertiary-container: '#b5785f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#afc8f0'
  on-primary-fixed: '#001c3a'
  on-primary-fixed-variant: '#2f486a'
  secondary-fixed: '#7df5f5'
  secondary-fixed-dim: '#5dd9d8'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f4f'
  tertiary-fixed: '#ffdbce'
  tertiary-fixed-dim: '#fdb69a'
  on-tertiary-fixed: '#351002'
  on-tertiary-fixed-variant: '#6b3a25'
  background: '#faf9fc'
  on-background: '#1a1c1e'
  surface-variant: '#e3e2e5'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
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
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
  data-tabular:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  sidebar-width: 260px
  header-height: 64px
  container-padding: 24px
  stack-gap-sm: 8px
  stack-gap-md: 16px
  grid-gutter: 20px
---

## Brand & Style
The design system is engineered for the high-stakes environment of Japanese automotive manufacturing. It prioritizes **Industrial Excellence**, reflecting a brand personality that is disciplined, precise, and authoritative. The target audience consists of shop-floor supervisors, quality engineers, and plant managers who require immediate, unambiguous data visualization to maintain "Monozukuri" (the art of making things) standards.

The visual style is **Corporate / Modern** with a focus on high-density information architecture. It eschews decorative trends like gradients or soft shadows in favor of structural integrity, clear hierarchies, and functional clarity. Every UI element is designed to evoke a sense of security and systemic reliability, ensuring that "Control Card" digitization feels like a natural, robust extension of the physical assembly line.

## Colors
The palette is rooted in corporate stability and functional signaling.
- **Deep Navy (#001F3F):** The primary structural color, used for the global sidebar and primary actions. It represents authority and the professional heritage of the organization.
- **Nichirin Red (#DA2128):** Reserved exclusively for critical alerts, "NG" (Not Good) status markers, and error states. This creates a high-contrast psychological trigger for immediate attention.
- **Teal/Cyan (#00A3A3):** Utilized for secondary accents, dashboard highlights, and "OK" or "Active" progress states. It provides a modern, technological contrast to the navy.
- **Clean White (#FFFFFF) & Grays:** The background and surface colors provide a sterile, focused environment for data entry and monitoring, minimizing cognitive load.

## Typography
This design system employs **Inter** for its systematic approach to legibility and its neutral, professional character. The type scale is optimized for high-density layouts common in MES platforms.

- **Data Presentation:** Use the `data-tabular` style for tables and numerical lists. It utilizes tabular lining to ensure numbers align vertically, which is critical for comparing manufacturing tolerances or batch numbers.
- **Hierarchies:** Headlines are kept modest in size to maximize vertical screen real estate.
- **Labels:** Small, bold caps are used for metadata and form field descriptors to differentiate them from user-generated input.

## Layout & Spacing
The layout follows a **Fixed-Fluid** hybrid model designed for industrial workstations and ruggedized tablets.

- **Sidebar:** A fixed left navigation (Deep Navy) at 260px provides constant access to core modules (Line Monitoring, Quality Control, Reports).
- **Header:** A fixed top bar (White) at 64px houses the Nichirin logo, breadcrumbs for navigation tracking, and user profile.
- **Grid:** The main content area uses a 12-column fluid grid. For data-heavy "Control Cards," columns are often split into 3 or 4-column modules to display parameters side-by-side.
- **Density:** Spacing follows a 4px/8px baseline. Dense data tables should utilize 8px vertical padding to fit maximum rows "above the fold."

## Elevation & Depth
This design system utilizes **Low-contrast outlines** and **Tonal Layers** rather than soft shadows to define depth. This reflects a "Flat-Industrial" aesthetic that feels more like a physical machine interface than a consumer app.

- **Level 0 (Base):** The main background in a very light gray or white.
- **Level 1 (Cards):** Surfaces for content modules, defined by a 1px solid border (#E5E7EB). No shadow is used here to maintain a crisp, engineered look.
- **Level 2 (Popovers/Modals):** These use a sharp, 4px shadow with 10% opacity, tinted with the Primary Navy, to provide just enough separation for temporary task overlays.
- **Dividers:** Thin horizontal lines (#E5E7EB) are the primary tool for separating rows in data tables, ensuring the eye can follow information across wide screens without visual clutter.

## Shapes
The shape language is **Soft (0.25rem)**. This subtle rounding provides a modern touch while maintaining the "serious" feel of professional equipment. Sharp corners are avoided to prevent the UI from feeling "dated," but large radii are strictly prohibited to ensure the UI does not appear casual or playful. All status badges and chips follow this 4px rule, while primary buttons may utilize a slightly larger 6px radius to improve click-target perception.

## Components
- **Control Cards:** The core component. Structured modules with a `headline-sm` title, a thin bottom border, and key-value pairs for manufacturing data.
- **Data Tables:** High-density rows. Use `data-tabular` font. Row hover states should use a very faint Navy tint (#F9FAFB). 
- **Status Badges:** 
    - **OK:** Teal background with white text.
    - **NG (Not Good):** Nichirin Red background with white text.
    - **Pending:** Neutral gray.
- **Buttons:** 
    - **Primary:** Deep Navy with white text. Square-ish, no gradients.
    - **Secondary:** Transparent with a 1px Navy border.
- **Input Fields:** 1px #E5E7EB border that shifts to Teal on focus. Use "Validation Icons" (Checkmark/Warning) within the field for immediate feedback.
- **Breadcrumbs:** Located in the top header, using `body-sm` to show the hierarchy: *Plant > Line A > Control Card #402.*