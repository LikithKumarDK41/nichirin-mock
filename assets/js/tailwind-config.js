if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          "on-tertiary": "var(--color-on-tertiary, #ffffff)",
          "on-surface-variant": "var(--color-on-surface-variant, #43474e)",
          "inverse-on-surface": "var(--color-inverse-on-surface, #f2f0f3)",
          "tertiary-container": "var(--color-tertiary-container, #391303)",
          "background": "var(--color-background, #faf9fc)",
          "on-tertiary-fixed": "var(--color-on-tertiary-fixed, #351002)",
          "on-primary-fixed-variant": "var(--color-on-primary-fixed-variant, #2f486a)",
          "on-secondary": "var(--color-on-secondary, #ffffff)",
          "surface-bright": "var(--color-surface-bright, #faf9fc)",
          "surface-container-low": "var(--color-surface-container-low, #f4f3f6)",
          "on-error": "var(--color-on-error, #ffffff)",
          "tertiary": "var(--color-tertiary, #110200)",
          "outline": "var(--color-outline, #74777f)",
          "tertiary-fixed-dim": "var(--color-tertiary-fixed-dim, #fdb69a)",
          "surface-container-lowest": "var(--color-surface-container-lowest, #ffffff)",
          "surface": "var(--color-surface, #faf9fc)",
          "on-surface": "var(--color-on-surface, #1a1c1e)",
          "secondary-container": "var(--color-secondary-container, #7af2f2)",
          "on-secondary-fixed": "var(--color-on-secondary-fixed, #002020)",
          "secondary-fixed": "var(--color-secondary-fixed, #7df5f5)",
          "primary-container": "var(--color-primary-container, #001f3f)",
          "on-primary-container": "var(--color-on-primary-container, #6f88ad)",
          "on-tertiary-container": "var(--color-on-tertiary-container, #b5785f)",
          "on-error-container": "var(--color-on-error-container, #93000a)",
          "on-background": "var(--color-on-background, #1a1c1e)",
          "on-primary-fixed": "var(--color-on-primary-fixed, #001c3a)",
          "tertiary-fixed": "var(--color-tertiary-fixed, #ffdbce)",
          "surface-container-high": "var(--color-surface-container-high, #e9e7eb)",
          "inverse-surface": "var(--color-inverse-surface, #2f3033)",
          "on-tertiary-fixed-variant": "var(--color-on-tertiary-fixed-variant, #6b3a25)",
          "inverse-primary": "var(--color-inverse-primary, #afc8f0)",
          "surface-dim": "var(--color-surface-dim, #dbd9dd)",
          "on-secondary-container": "var(--color-on-secondary-container, #006e6e)",
          "surface-container-highest": "var(--color-surface-container-highest, #e3e2e5)",
          "outline-variant": "var(--color-outline-variant, #c4c6cf)",
          "secondary": "var(--color-secondary, #006a6a)",
          "on-primary": "var(--color-on-primary, #ffffff)",
          "primary": "var(--color-primary, #000613)",
          "on-secondary-fixed-variant": "var(--color-on-secondary-fixed-variant, #004f4f)",
          "surface-tint": "var(--color-surface-tint, #476083)",
          "surface-variant": "var(--color-surface-variant, #e3e2e5)",
          "primary-fixed": "var(--color-primary-fixed, #d4e3ff)",
          "error": "var(--color-error, #ba1a1a)",
          "primary-fixed-dim": "var(--color-primary-fixed-dim, #afc8f0)",
          "surface-container": "var(--color-surface-container, #efedf0)",
          "error-container": "var(--color-error-container, #ffdad6)",
          "secondary-fixed-dim": "var(--color-secondary-fixed-dim, #5dd9d8)"
        },
        "borderRadius": {
          "DEFAULT": "0.125rem",
          "lg": "0.25rem",
          "xl": "0.5rem",
          "full": "0.75rem"
        },
        "spacing": {
          "stack-gap-md": "16px",
          "sidebar-width": "260px",
          "header-height": "64px",
          "stack-gap-sm": "8px",
          "grid-gutter": "20px",
          "container-padding": "24px"
        },
        "fontFamily": {
          "headline-sm": ["Inter", "sans-serif"],
          "label-bold": ["Inter", "sans-serif"],
          "headline-md": ["Inter", "sans-serif"],
          "body-md": ["Inter", "sans-serif"],
          "body-lg": ["Inter", "sans-serif"],
          "headline-lg": ["Inter", "sans-serif"],
          "body-sm": ["Inter", "sans-serif"],
          "data-tabular": ["Inter", "sans-serif"]
        },
        "fontSize": {
          "headline-sm": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
          "label-bold": ["11px", { "lineHeight": "16px", "fontWeight": "700" }],
          "headline-md": ["20px", { "lineHeight": "28px", "fontWeight": "600" }],
          "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
          "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
          "headline-lg": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
          "body-sm": ["12px", { "lineHeight": "18px", "fontWeight": "400" }],
          "data-tabular": ["13px", { "lineHeight": "16px", "fontWeight": "500" }]
        }
      }
    }
  };
}
