---
title: "Building Static Sites with Astro"
description: "How to parse local Markdown files and render them statically."
pubDate: 2026-08-05
author: "Site Admin"
coverImage: "./assets/hero.jpg"
coverAlt: "A scenic preview hero image"
---

Welcome to the inaugural blog post!

This post is parsed from an Astro Markdown content collection located inside the `src/articles` directory using the modern Content Layer API.

### Relative Image Example

You can embed images stored directly inside `src/articles/assets/`:

![Local Article Image](./assets/hero.jpg)

### Key Features
* Markdown parsing with YAML frontmatter validation via `glob()`.
* Co-located article assets.
* Clean static slug routing.
