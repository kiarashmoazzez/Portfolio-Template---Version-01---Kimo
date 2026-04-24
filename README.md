FORMA&CO Portfolio Rebuild
This repository contains a single-file rebuild of the FORMA&CO design-agency landing page, plus a set of markdown handoff documents for implementing, documenting, and rebuilding the same design inside Figma.

What’s in this repo
index.html
the finished single-page website
built with Tailwind CDN, inline styles, GSAP, ScrollTrigger, and Lenis
animation-guidelines.md
motion system and animation behavior
figma-forma-page-prompt.md
prompt for recreating the page inside Figma
figma-library-context.md
explains the overall structure of the target Figma design library
figma-variables-and-component-styling.md
explains the token system, text styles, paint styles, and component styling logic
figma-components-variants-styles.md
focused reference for component types, variants, properties, and styling behavior
Project Goal
The main goal of this workspace is to:

rebuild the FORMA&CO landing page faithfully in code
transfer the design into Figma
document the library clearly enough that another AI or designer can create new work accurately from the existing system
Website Stack
The site in index.html uses:

Tailwind v3 via CDN
inline custom CSS for tokens and effects
GSAP 3.12.5
ScrollTrigger 3.12.5
Lenis 1.1.14
No build step is required.

How to preview locally
From this folder, run:

python3 -m http.server 4173
Then open:

http://127.0.0.1:4173/
Figma Context
The Figma design library this repo was documented against is:

file key: ShAzZxH9FV5NWgESuppOHz
file: 🤖 Portfolio Template - Version 1 - Kimo
The markdown files in this repo were created to help an AI:

understand the design library structure
reuse the correct components
choose the right variants
apply the correct styles and tokens
preserve consistency between code and Figma
Recommended Reading Order
If you are using this repo to build or hand off work, read the files in this order:

figma-library-context.md
figma-variables-and-component-styling.md
figma-components-variants-styles.md
animation-guidelines.md
When to use each markdown file
Use figma-library-context.md when you need:

the overall map of the Figma file
the library/page/component hierarchy
the correct “source of truth” pages
Use figma-variables-and-component-styling.md when you need:

tokens
paint styles
text styles
styling rules for primitives
Use figma-components-variants-styles.md when you need:

a fast reference for component types
variant names
property names
how each component behaves visually
Use animation-guidelines.md when you need:

page-load motion
scroll-trigger motion
hover behavior
reduced-motion rules
Design Direction
The page and Figma documentation are based on this visual direction:

editorial
brutalist
quiet
tactile
high-contrast
serif-led display typography
one acid-lime accent
Notes
index.html is intentionally self-contained for portability.
The Figma docs are written as AI handoff material, so they are more explicit than a normal design README.
There is a swap file in the folder, .animation-guidelines.md.swp, which is editor temporary state and not part of the deliverable.
License / Usage
Add your preferred license or usage terms here before publishing publicly.
