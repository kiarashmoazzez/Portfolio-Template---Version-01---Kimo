## Step 1: Install css

Add this line to the TOP of `/src/styles/index.css` (before any other imports):

```css
@import "<PACKAGE_NAME>/style.css";
```

This import defines all CSS custom properties (color tokens, spacing tokens, radius tokens) used by this design system.

## Step 2: Read the full design system stylesheet

After importing, read the full contents of the stylesheet to understand what tokens are available.
