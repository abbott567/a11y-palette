# A11y Palette

A11y Palette is an accessible colour palette designed to meet a contrast ratio of 4.5:1. By using a contrast ratio of 4.5:1 it will always meet the minimum requirement to pass [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

Colours are available in both Hex and RGB, so you have no excuses for not using an accessible colour combination on your PowerPoint presentation.

The contrast ratio for each combination is also provided automatically.

## How it works
A11y Palette uses NODEJS and SASS and compiles to a static HTML page.

## Modifying the themes
Themes are stored as SASS in the `src/assets/sass/themes` folder.

To modify a theme, clone the repo and modify the sass file. If you want to preview your colour scheme you can use `npm start` to run a local server, and you can view the changes at `http://localhost:3000`.

> Don't go compiling your themes and using them if the ratio is less than 4.5:1 you scoundrel!

When you're done, you can run `npm build` to output your colour palette as a HTML document in the `build` folder.
