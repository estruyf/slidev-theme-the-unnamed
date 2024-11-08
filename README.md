# Slidev Theme - The unnamed

[![NPM version](https://img.shields.io/npm/v/slidev-theme-the-unnamed?color=F141A8&label=)](https://www.npmjs.com/package/slidev-theme-the-unnamed)

A [Slidev](https://sli.dev/) theme based on the [The unnamed - VS Code theme](https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-unnamed-theme) by [Elio Struyf](https://elio.dev).

The unnamed theme allows you to fully customize its colors to fit your brand.

## Usage

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

```yaml
---
theme: the-unnamed
---
```

## Layouts

The theme currently has the following layouts:

- `default`
- `cover`
- `center`
- `section`
- `two-cols`
- `about-me`
- and the ones from Slidev itself

### Cover

![](/assets/cover.png)

**Usage**

```yaml
---
layout: cover
background: <image url or HEX or rbg or rgba> (optional)
---
```

### About me

![](/assets/about-me.png)

**Usage**

```yaml
---
layout: about-me

helloMsg: Hello!
name: <name>
imageSrc: <image url>
position: <left or right>
job: <job title>
line1: 
line2: 
social1: 
social2: 
social3: 
---
```

### Center

![](/assets/center.png)

**Usage**

```yaml
---
layout: center
background: <image url or HEX or rbg or rgba> (optional)
---
```

### Section

![](/assets/section.png)

**Usage**

```yaml
---
layout: section
background: <image url or HEX or rbg or rgba> (optional)
---
```

### Two columns

![](/assets/two-cols.png)

**Usage**

```yaml
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

### Default

![](/assets/default.png)

**Usage**

```yaml
---
layout: default
background: <image url or HEX or rbg or rgba> (optional)
---
```

## Cusomizations

You can customize the theme by adding the following frontmatter to your `slides.md`.

```yaml
themeConfig:
  color: "#F3EFF5"
  background: "#161C2C"

  code-background: "#0F131E"
  code-border: "#242d34"

  accents-teal: "#44FFD2"
  accents-yellow: "#FFE45E"
  accents-red: "#FE4A49"
  accents-lightblue: "#15C2CB"
  accents-blue: "#5EADF2"
  accents-vulcan: "#0E131F"

  header-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  default-headingBg: var(--slidev-theme-accents-yellow)
  default-headingColor: var(--slidev-theme-accents-vulcan)
  default-background: var(--slidev-theme-background)
  default-font-size: 1.1em

  center-headingBg: var(--slidev-theme-accents-blue)
  center-headingColor: var(--slidev-theme-accents-vulcan)
  center-background: var(--slidev-theme-background)
  center-font-size: 1.1em

  cover-headingBg: var(--slidev-theme-accents-teal)
  cover-headingColor: var(--slidev-theme-accents-vulcan)
  cover-background: var(--slidev-theme-background)
  cover-font-size: 1.1em

  section-headingBg: var(--slidev-theme-accents-lightblue)
  section-headingColor: var(--slidev-theme-accents-vulcan)
  section-background: var(--slidev-theme-background)
  section-font-size: 1.1em

  aboutme-background: var(--slidev-theme-color)
  aboutme-color: var(--slidev-theme-background)
  aboutme-helloBg: var(--slidev-theme-accents-yellow)
  aboutme-helloColor: var(--slidev-theme-background)
  aboutme-nameColor: var(--slidev-theme-accents-red)
  aboutme-font-size: 1.1em

  code-background: var(--slidev-theme-code-background)
  code-color: var(--slidev-theme-code-color)
  code-font-size: 1.1em
```

> **Info**: we made it possible to change all the accent colors, or define your own colors per type of slide.

<br />
<br />

[![Visitors](https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Festruyf%2Fslidev-theme-the-unnamed&countColor=%23F141A8)](https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Festruyf%2Fslidev-theme-the-unnamed)
