# FORMA&CO Portfolio Rebuild

A self-contained rebuild of the FORMA&CO editorial portfolio landing page, paired with Figma documentation files that explain how to recreate, extend, and systematize the design accurately.

## Overview

This workspace has two jobs:

1. Rebuild the landing page in code as a single-file site.
2. Document the related Figma design library clearly enough that another designer or AI can make accurate additions without guessing.

## Figma Links

- Figma Community file: [Portfolio Template - Version 1 - Kimo](https://www.figma.com/community/file/1629510104826490144)
- Figma design file reference: [🤖 Portfolio Template - Version 1 - Kimo](https://www.figma.com/design/ShAzZxH9FV5NWgESuppOHz/%F0%9F%A4%96-Portfolio-Template---Version-1---Kimo)

## Included Files

| File | Purpose |
|---|---|
| [index.html](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/index.html) | Final single-page website rebuild |
| [animation-guidelines.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/animation-guidelines.md) | Motion and interaction system |
| [figma-forma-page-prompt.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/figma-forma-page-prompt.md) | Prompt for recreating the page in Figma |
| [figma-library-context.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/figma-library-context.md) | Full library structure and AI handoff context |
| [figma-variables-and-component-styling.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/figma-variables-and-component-styling.md) | Variables, styles, and primitive styling rules |
| [figma-components-variants-styles.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/figma-components-variants-styles.md) | Focused component + variant reference |

## Website Stack

The site is intentionally simple to run and easy to move.

- Tailwind v3 via CDN
- Inline custom CSS for tokens and effects
- GSAP `3.12.5`
- ScrollTrigger `3.12.5`
- Lenis `1.1.14`
- No build step
- No framework

## Local Preview

Run a local server from this folder:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/
```

## Design Direction

The work is based on a clear visual system:

- editorial
- brutalist
- quiet
- tactile
- high-contrast
- serif-led display typography
- one acid-lime accent

## Figma Documentation Guide

If you are using this repo as a handoff for Figma work, read the docs in this order:

1. [figma-library-context.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/figma-library-context.md)  
   Start here for the overall structure of the file, page hierarchy, and source-of-truth locations.

2. [figma-variables-and-component-styling.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/figma-variables-and-component-styling.md)  
   Use this for variables, paint styles, text styles, and primitive component styling logic.

3. [figma-components-variants-styles.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/figma-components-variants-styles.md)  
   Use this as the quick reference for component types, variant names, and properties.

4. [animation-guidelines.md](/Users/mengjiaoge/Desktop/Webpage%202%20-%20Portfolio/animation-guidelines.md)  
   Use this for motion behavior, hover states, and reduced-motion rules.

## What the Figma Docs Help With

The markdown files are written to help an AI or designer:

- understand the design library structure
- identify the correct source pages in the file
- reuse the right components instead of redrawing them
- choose the right variants
- apply the correct tokens and styles
- preserve consistency between code and Figma

## Recommended Use

Use this repo if you want to:

- study the FORMA&CO landing page rebuild
- reuse the motion and layout system
- transfer the design into Figma
- document a Figma library for future AI-assisted design work

## Notes

- `index.html` is self-contained on purpose.
- The Figma markdown files are written as AI-ready handoff docs, so they are more explicit than a normal design README.
- There is a temporary editor swap file in the folder, `.animation-guidelines.md.swp`, which is not part of the actual deliverable.

## License / Usage

Add your preferred license, attribution, or publishing terms here before making the repository public.
