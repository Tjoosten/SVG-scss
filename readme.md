# SvG - SCSS port (.be website)

Aangezien de [.be](http://www.scoutsengidsenvlaanderen.be) website qua css een redelijk grote website is. 
Voorzie ik op basis van een phabricator ticket een `SCSS` port. Zodat de css overzichtelijker word. En er meer structuur heerst.

## Welke files worden meegeleverd. 

In deze repository vind je alle scss bestanden voor de .be website. Waaronder ook een gecompileerde CSS versie. 

```bash
svg-theme/
├── dist/
│   ├── style.css
│   ├── style.css.map
│   ├── style.min.css
│   └── style.min.css.map
└── sass/
    ├── base
    │   └── <base components>
    ├── components 
    │   └── <scss components>
    ├── media
    │   └── <media queries>
    └── main.scss
```

