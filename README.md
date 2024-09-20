# I18n Extension For Quarto

i18n extension for Quarto helps to manage multiple languages in your documents.

## Installing

```bash
quarto add ArthurData/quarto-i18n
```

> Requires Quarto >=1.5.0

## Usage

You can use it to manage multiple languages in your documents.

Firstly, you can use it with a default language:

```r
---
title: Revealjs i18n
format:
  revealjs:
    i18n:
      defaultLocale: "it"
      fr:
        morning: "Le matin"
        getting-up: "Se lever"
      en:
        morning: "In the morning"
        getting-up: "Getting up"
      de:
        morning: "Morgen"
        getting-up: "Aufstehen"
      it:
        morning: "Al mattino"
        getting-up: "Alzarsi"
revealjs-plugins:
  - i18n
---

<span data-i18n-key="morning"></span>

<span data-i18n-key="getting-up"></span>
```

or you can use it with a select input to change the language:

```r
---
title: Revealjs i18n
format:
  revealjs:
    footer: |
      <select id="data-i18n-switcher" class="reaveljs-select">
        <option selected class="drop-item" value="en">English</option>
        <option class="drop-item" value="fr">French</option>
        <option class="drop-item" value="de">Deutsch</option>
        <option class="drop-item" value="it">Italian</option>
      </select>
    i18n:
      defaultLocale: "fr"
      fr:
        morning: "Le matin"
        getting-up: "Se lever"
      en:
        morning: "In the morning"
        getting-up: "Getting up"
      de:
        morning: "Morgen"
        getting-up: "Aufstehen"
      it:
        morning: "Al mattino"
        getting-up: "Alzarsi"
revealjs-plugins:
  - i18n
---

<span data-i18n-key="morning"></span>

<span data-i18n-key="getting-up"></span>
```

<img src="i18n.gif" width="100%"/></a>
