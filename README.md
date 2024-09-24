# I18n Extension For Quarto

i18n extension for Quarto helps to **manage multiple languages** in your documents. You can use it with a default language or with a language selector.

## Installing

```bash
quarto add ArthurData/quarto-i18n
```

> Requires Quarto >=1.5.0

## Usage

### Use the default language

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

In this case, the default language is Italian. You will not be able to change the language.

### Use the language selector

You can also use a language selector to change the language of your document.

This extension came with a language selector that you can add to your document.

```r
{{< i18n-select choices="fr:Français, en:English" selected="fr" >}}
```

This will add a dropdown to your document that will allow you to change the language. The `choices` attribute is a list of languages that you want to display in the dropdown. The `selected` attribute is the default language.

`fr` is the key of the language and `Français` is the value that will be displayed in the dropdown.

```r
---
title: Revealjs i18n
format:
  revealjs:
    footer: |
      {{< i18n-select choices="fr:Français, en:English, de:Deutsch, it:Italiano" selected="fr" >}}
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

### Use tags

To define the text that you want to translate, you can use the `data-i18n-key` attribute.

There are several ways to define the text that you want to translate:

- Use the `data-i18n-key` attribute with the key of the text that you want to translate as HTML tag:

```r
<span data-i18n-key="morning"></span>
```

- Use the `i18n-key` shortcut with the key of the text that you want to translate as a Lua shortcut:

```r
{{< i18n-key "bed2" >}}
```

This will add a `span` tag with the key of the text that you want to translate.

This solution is **shorter and useful** when you have a lot of text to translate.

_Good to know_: this shortcut comes with a tag parameter that you can use to define the tag that you want to use.

```r
{{< i18n-key "bed2" tag="h1" >}}
```

This will produce a `h1` tag with the key of the text that you want to translate.

## More details

See the [deploy presentation](https://arthurdata.github.io/quarto-i18n/) to see the result and [read the code](https://github.com/ArthurData/quarto-i18n/blob/main/example.qmd) to understand how it works
