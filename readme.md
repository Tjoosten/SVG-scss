![logo](https://github.com/Tjoosten/SVG-scss/blob/master/repo-assets/logo.jpg)

# SvG - SCSS port (.be website)
![davidDm](https://david-dm.org/Tjoosten/SVG-scss.svg)
[![GitHub release](https://img.shields.io/github/release/Tjoosten/SVG-scss.svg)](https://github.com/Tjoosten/SVG-scss/tree/master)
[![Build Status](https://travis-ci.org/Tjoosten/SVG-scss.svg?branch=master)](https://travis-ci.org/Tjoosten/SVG-scss)
[![GitHub issues](https://img.shields.io/github/issues/Tjoosten/SVG-scss.svg?style=flat-square)](https://github.com/Tjoosten/SVG-scss/issues)

Aangezien de [.be](http://www.scoutsengidsenvlaanderen.be) website qua css een redelijk grote website is. 
Voorzie ik op basis van een phabricator ticket een `SCSS` port. Zodat de css overzichtelijker word. En er meer structuur heerst.

## Welke files worden meegeleverd. 

In deze repository vind je alle scss bestanden voor de .be website. Waaronder ook een gecompileerde CSS versie. 

```bash
svg-theme/
├── dist/
│   ├── style.css
│   └── style.min.css
└── sass/
    ├── base
    │   └── <base components>
    ├── components 
    │   └── <scss components>
    ├── media
    │   └── <media queries>
    └── main.scss
```

## Gulp pre-processor

Deze repository is meegeleverd met een Gulpfile die enkele taken van je overneemt. Hier onder vind je een lijst. 

| Task:                  | Beschrijving:                                   |
| :--------------------- | :---------------------------------------------- |
| `help`                 | Display the help message.                       | 
| `sass:development`     | Generates the css file for development.         |
| `sass:lint`            | Lint the scss files against the code standards. |
| `sass:production`      | Minify the css.                                 |
| `sass:watch`           | Watch the scss files during development.        |

# Versioning 

Voor transparantie in de release cirkel voor deze repository. Word er gebruik gemaakt van de Semver versioning 

# Licentie 

Bij deze doe ik alle afstand qua licentie rechten op deze css code. Alle rechten worden voorbehouden
en beheerd door Scouts en Gidsen Vlaanderen. Ik heb juist deze repository ontwikkeld met als doel hun te helpen 
met het brengen van structuur in hun layout voor de .be site. 

Tevens heb ik ook niet de bedoeling om onrechtmatig rechten te verkrijgen en of te beheren. 

