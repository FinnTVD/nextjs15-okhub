"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var traitInputAttr = {
  placeholder: 'z.B. Text hier'
};
var _default = exports.default = {
  assetManager: {
    addButton: 'Bild hinzufügen',
    inputPlh: 'http://path/to/the/image.jpg',
    modalTitle: 'Bild auswählen',
    uploadTitle: 'Dateien hier ablegen oder zum Hochladen anklicken'
  },
  // Here just as a reference, GrapesJS core doesn't contain any block,
  // so this should be omitted from other local files
  blockManager: {
    labels: {
      // 'block-id': 'Block Label',
    },
    categories: {
      // 'category-id': 'Kategorie Label',
    }
  },
  domComponents: {
    names: {
      '': 'Box',
      wrapper: 'Body',
      text: 'Text',
      comment: 'Kommentar',
      image: 'Bild',
      video: 'Video',
      label: 'Label',
      link: 'Link',
      map: 'Karte',
      tfoot: 'Tabellenfuß',
      tbody: 'Tabellenkörper',
      thead: 'Tabellenkopf',
      table: 'Tabelle',
      row: 'Tabellenzeile',
      cell: 'Tabellenzelle'
    }
  },
  deviceManager: {
    device: 'Gerät',
    devices: {
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobileLandscape: 'Mobil Landschaft',
      mobilePortrait: 'Mobil Portrait'
    }
  },
  panels: {
    buttons: {
      titles: {
        preview: 'Vorschau',
        fullscreen: 'Vollbild',
        'sw-visibility': 'Komponenten anzeigen',
        'export-template': 'Code anzeigen',
        'open-sm': 'Style Manager öffnen',
        'open-tm': 'Einstellungen',
        'open-layers': 'Ebenen öffnen',
        'open-blocks': 'Blöcke öffnen'
      }
    }
  },
  selectorManager: {
    label: 'Klassen',
    selected: 'Ausgewählt',
    emptyState: '- Status -',
    states: {
      hover: 'Hover',
      active: 'Click',
      'nth-of-type(2n)': 'Even/Odd'
    }
  },
  styleManager: {
    empty: 'Wählen Sie ein Element aus, bevor Sie den Style Manager verwenden',
    layer: 'Ebenen',
    fileButton: 'Bilder',
    sectors: {
      general: 'Allgemein',
      layout: 'Layout',
      typography: 'Typographie',
      decorations: 'Dekorationen',
      extra: 'Extra',
      flex: 'Flex',
      dimension: 'Größen'
    },
    // The core library generates the name by their `property` name
    properties: {
      float: 'Ausrichtung',
      display: 'Anzeige',
      position: 'Position',
      top: 'Oben',
      right: 'Rechts',
      left: 'Links',
      bottom: 'Unten',
      width: 'Breite',
      height: 'Höhe',
      'max-width': 'Breite max.',
      'max-height': 'Höhe max.',
      margin: 'Äußerer Abstand',
      'margin-top': 'Äußerer Abstand oben',
      'margin-right': 'Äußerer Abstand rechts',
      'margin-left': 'Äußerer Abstand links',
      'margin-bottom': 'Äußerer Abstand unten',
      'margin-top-sub': 'Oben',
      'margin-right-sub': 'Rechts',
      'margin-bottom-sub': 'Unten',
      'margin-left-sub': 'Links',
      'padding-top-sub': 'Oben',
      'padding-right-sub': 'Rechts',
      'padding-bottom-sub': 'Unten',
      'padding-left-sub': 'Links',
      'border-width-sub': 'Breite',
      'border-style-sub': 'Stil',
      'border-color-sub': 'Farbe',
      'border-top-left-radius-sub': 'Oben links',
      'border-top-right-radius-sub': 'Oben rechts',
      'border-bottom-right-radius-sub': 'Unten rechts',
      'border-bottom-left-radius-sub': 'Unten links',
      padding: 'Innerer Abstand',
      'padding-top': 'Innerer Abstand oben',
      'padding-left': 'Innerer Abstand links',
      'padding-right': 'Innerer Abstand rechts',
      'padding-bottom': 'Innerer Abstand unten',
      'font-family': 'Schriftart',
      'font-size': 'Schriftgröße',
      'font-weight': 'Schriftstärke',
      'letter-spacing': 'Zeichenabstand',
      color: 'Schriftfarbe',
      'line-height': 'Zeilenhöhe',
      'text-align': 'Textausrichtung',
      'text-shadow': 'Textschatten',
      'text-shadow-h': 'X',
      'text-shadow-v': 'Y',
      'text-shadow-blur': 'Unschärfe',
      'text-shadow-color': 'Farbe',
      'border-top-left': 'Rand oben links',
      'border-top-right': 'Rand oben rechts',
      'border-bottom-left': 'Rand unten links',
      'border-bottom-right': 'Rand unten rechts',
      'border-radius-top-left': 'Rand Radius oben links',
      'border-radius-top-right': 'Rand Radius oben rechts',
      'border-radius-bottom-left': 'Rand Radius unten links',
      'border-radius-bottom-right': 'Rand Radius unten rechts',
      'border-radius': 'Rand Radius',
      border: 'Rand',
      'border-width': 'Randbreite',
      'border-style': 'Randstil',
      'border-color': 'Randfarbe',
      'box-shadow': 'Boxschatten',
      'box-shadow-h': 'X',
      'box-shadow-v': 'Y',
      'box-shadow-blur': 'Unschärfe',
      'box-shadow-spread': 'Verteilung',
      'box-shadow-color': 'Farbe',
      'box-shadow-type': 'Typ',
      background: 'Hintergrund',
      'background-image': 'Hintergrundbild',
      'background-repeat': 'Hintergrund wiederholen',
      'background-position': 'Hintergrundposition',
      'background-attachment': 'Hintergrundanhang',
      'background-size': 'Hintergrundgröße',
      'background-color': 'Hintergrundfarbe',
      'background-image-sub': 'Bild',
      'background-repeat-sub': 'Wiederholung',
      'background-position-sub': 'Position',
      'background-attachment-sub': 'Anhang',
      'background-size-sub': 'Größe',
      transition: 'Übergang',
      'transition-property': 'Übergang: Typ',
      'transition-duration': 'Übergang: Dauer',
      'transition-timing-function': 'Übergang: Zeitfunktion',
      'transition-property-sub': 'Eigenschaft',
      'transition-duration-sub': 'Dauer',
      'transition-timing-function-sub': 'Zeit',
      perspective: 'Perspektive',
      transform: 'Transformation',
      'transform-rotate-x': 'Rotation X',
      'transform-rotate-y': 'Rotation Y',
      'transform-rotate-z': 'Rotation Z',
      'transform-scale-x': 'Skalierung X',
      'transform-scale-y': 'Skalierung Y',
      'transform-scale-z': 'Skalierung Z',
      'flex-direction': 'Flex Ausrichtung',
      'flex-wrap': 'Flex Wrap',
      'justify-content': 'Vertikale Ausrichtung',
      'align-items': 'Senkrechte Ausrichtung',
      'align-content': 'Achsenausrichtung',
      order: 'Reihenfolge',
      'flex-basis': 'Flex Basis',
      'flex-grow': 'Flex Wachsen',
      'flex-shrink': 'Flex Schrumpfen',
      'align-self': 'Eigene Ausrichtung'
    }
  },
  traitManager: {
    empty: 'Wählen Sie ein Element aus, bevor Sie den Eigenschaftsmanager verwenden',
    label: 'Komponenten Eigenschaften',
    traits: {
      // The core library generates the name by their `name` property
      labels: {
        id: 'ID',
        alt: 'Alternativtext',
        title: 'Titel',
        href: 'Link'
      },
      // In a simple trait, like text input, these are used on input attributes
      attributes: {
        id: traitInputAttr,
        alt: traitInputAttr,
        title: traitInputAttr,
        href: {
          placeholder: 'z.B. https://google.com'
        }
      },
      // In a trait like select, these are used to translate option names
      options: {
        target: {
          false: 'Dieses Fenster',
          _blank: 'Neues Fenster'
        }
      }
    }
  },
  storageManager: {
    recover: 'Möchten Sie ungespeicherte Änderungen wiederherstellen?'
  }
};