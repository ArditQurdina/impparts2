import type { MachineryMessages } from "./types";

export const machineryDe: MachineryMessages = {
  hero: {
    titleLine1: "Die",
    titleLine2: "Maschinen",
    navAriaLabel: "Maschinenkategorien",
    categories: [
      { key: "verticalMills", count: "05" },
      { key: "lathes", count: "03" },
      { key: "laserCutting", count: "01" },
      { key: "bending", count: "01" },
      { key: "measuring", count: "01" },
    ],
  },
  stats: {
    leadBold: "Präzision, Fortschritt und Leidenschaft.",
    leadRest:
      "Die IMP-Halle basiert auf einer Kernflotte von Haas-CNC-Zentren — Fräsen, Drehmaschinen und einem 5-Achs-UMC — ergänzt durch Laserschneiden, Präzisionsbiegen und ein Wenzel CMM für vollständige interne Prüfkapazität.",
    paragraph:
      "Jede Maschine wird durch laufende Investitionen auf dem neuesten Stand gehalten. Unsere 17-Maschinen-Halle bewältigt alles von Einzelprototypen bis zur dauerhaften unbeaufsichtigten Großserienfertigung.",
    items: [
      { value: "17", suffix: "+", label: "Maschinen in der Halle" },
      { value: "5", label: "Achsen gleichzeitig" },
      { value: "24", suffix: "/7", label: "Unbeaufsichtigte Fertigung" },
      { value: "1987", label: "Gegründet von Rronifer" },
    ],
  },
  flagship: {
    categoryLabel: "Kategorie 01",
    tag: "5-Achs · Flaggschiff",
    description:
      "Gleichzeitiges 5-Achs-Bearbeitungszentrum. Die \u201eSS\u201c-Super-Speed-Ausführung liefert Hochgeschwindigkeitsspindel und schnelle Werkzeugwechsel — ideal für komplexe Mehrseitenbauteile aus Aluminium, Stahl und Titan ohne Neupositionierung.",
    imageAltDescription: "5-Achs-Vertikalbearbeitungszentrum",
    specs: [
      { label: "Achsen", value: "Gleichzeitig 5-Achs (B+C-Drehtisch)" },
      { label: "Spindel", value: "Super Speed — 15.000 U/min" },
      { label: "Tisch", value: "500 mm Durchmesser, ±110° Neigung" },
      { label: "Werkzeugwechsler", value: "40+1 seitlich" },
      { label: "Steuerung", value: 'Haas NGC mit 15"-Touchscreen' },
    ],
  },
  umc1000: {
    categoryLabel: "Kategorie 02",
    tag: "5-ACHS-UNIVERSALBEARBEITUNGSZENTRUM",
    description:
      "Das UMC 1000 ist ein leistungsstarkes 5-Achs-Bearbeitungszentrum für die präzise Fertigung großer und komplexer Werkstücke. Die großzügigen Verfahrwege und der große Arbeitsbereich ermöglichen eine effiziente Mehrseitenbearbeitung in einer einzigen Aufspannung. Dadurch werden Rüstzeiten reduziert und Produktivität sowie Genauigkeit deutlich erhöht. Ideal für die Luft- und Raumfahrt, den Werkzeugbau, die Automobilindustrie und anspruchsvolle Fertigungsprozesse.",
    imageAltDescription: "UMC 1000 Bearbeitungszentrum",
    specs: [
      { label: "Achsen", value: "Simultane 5-Achs-Bearbeitung (B+C Trunnion)" },
      { label: "Spindel", value: "Inline-Direktantriebsspindel" },
      { label: "Arbeitsraum", value: "Große Kapazität für komplexe Bauteile" },
      { label: "Werkzeugwechsler", value: "Seitlich angeordneter Werkzeugwechsler" },
      { label: "Messsystem", value: "Kabelloses, intuitives Messtastsystem" },
      { label: "Anwendung", value: "3+2- und simultane 5-Achs-Bearbeitung" },
    ],
  },
  variants: {
    items: [
      {
        key: "vf1",
        id: "02",
        description:
          "Kompaktes VMC mit großzügigem Arbeitsraum für seine Abmessungen. Hohe Spindeldrehzahlen und schnelle Werkzeugwechsel ermöglichen effiziente Fertigung komplexer Teile mit engen Toleranzen in Luft- und Raumfahrt, Automotive und Medizintechnik.",
        specs: [
          { label: "Verfahrweg X/Y/Z", value: "508 × 406 × 508 mm" },
          { label: "Spindel", value: "7.500 U/min (30-Taper opt.)" },
          { label: "Eilgang", value: "25,4 m/min" },
        ],
        tag: "Kompakt · Präzise",
      },
      {
        key: "vf2",
        id: "03",
        description:
          "Erweiterte Kapazität gegenüber der VF-1 mit größerem Arbeitsraum, schnellerer Spindel und kürzeren Werkzeugwechselzeiten. Hochpräzise Bearbeitung in Luft- und Raumfahrt, Automotive und Formenbau.",
        specs: [
          { label: "Verfahrweg X/Y/Z", value: "762 × 406 × 508 mm" },
          { label: "Spindel", value: "8.100 U/min" },
          { label: "Eilgang", value: "25,4 m/min" },
        ],
        tag: "Mehr Kapazität",
      },
      {
        key: "vf3",
        id: "04",
        description:
          "Aufbauend auf der VF-2 mit größerem Arbeitsraum, höheren Spindeldrehzahlen und erweitertem Werkzeugmagazin. Bewältigt komplexe Bearbeitung in Luft- und Raumfahrt, Automotive und Werkzeug-/Formenbau.",
        specs: [
          { label: "Verfahrweg X/Y/Z", value: "1.016 × 508 × 635 mm" },
          { label: "Spindel", value: "8.100 U/min" },
          { label: "Werkzeugkapazität", value: "24+1 seitlich" },
        ],
        tag: "Großer Arbeitsraum",
      },
      {
        key: "vf3ss",
        id: "05",
        description:
          "Die Super-Speed-Variante der VF-3 mit Hochgeschwindigkeitsspindel und schnellen Werkzeugwechseln, die Zykluszeiten deutlich verkürzen. Ideal für Hochgeschwindigkeitsbearbeitung von Aluminium, Stahl und Titan.",
        specs: [
          { label: "Spindel", value: "12.000 U/min (SS)" },
          { label: "Eilgang", value: "35,6 m/min" },
          { label: "Werkzeugwechsel", value: "2,4 Sek. seitlich" },
        ],
        tag: "Super Speed",
      },
    ],
  },
  lathes: {
    categoryLabel: "Kategorie 02",
    typeLabel: "Typ",
    items: [
      {
        key: "st20",
        id: "01",
        description:
          "Kompakte, vielseitige CNC-Drehmaschine für präzises Drehen. Robuste Konstruktion und leistungsstarke Spindel bearbeiten verschiedene Materialien effizient. Benutzerfreundliche Oberfläche und fortschrittliches Steuerungssystem ermöglichen schnelle Einrichtung — von kleinen Werkstätten bis zu großen Produktionsanlagen.",
        tags: [
          "Programmierbarer Reitstock",
          "Werkzeugrevolver",
          "Hochgeschwindigkeits-Eilgänge",
          "Stangenlader-ready",
        ],
        type: "Drehzentrum",
      },
      {
        key: "st30",
        id: "02",
        description:
          "Leistungsstarke, schwere CNC-Drehmaschine für hohe Produktivität. Solide Bauweise und Hochleistungsspindel für anspruchsvolle Drehaufgaben im großen Maßstab. Intuitive Bedienung und schnelle Einrichtung für kleine Werkstätten und Großserienfertigung. Mit programmierbarem Reitstock, Werkzeugrevolver und schnellen Eilgängen für präzise Bearbeitung komplexer Bauteile.",
        tags: [
          "Schwerlast",
          "Große Bohrung",
          "Hochdrehmoment-Spindel",
          "Angetriebene Werkzeuge optional",
        ],
        type: "Schweres Drehen",
      },
      {
        key: "xl150",
        id: "03",
        description:
          "Präzisions-CNC-Drehkraftpaket mit robuster Konstruktion und vielseitigen Fähigkeiten. Hochleistungsspindel und intuitive Steuerung für reibungslosen Betrieb — ideal für kleine Werkstätten und Großserien. Dynamischer Werkzeugrevolver und schnelle Eilgänge für zügige, genaue Bearbeitung komplexer Bauteile.",
        tags: [
          "Dynamischer Werkzeugrevolver",
          "Hochgeschwindigkeits-Eilgänge",
          "Servo-Reitstock",
          "Portallader-ready",
        ],
        type: "Präzisionsdrehen",
      },
    ],
  },
  auxiliary: {
    categoryLabel: "Kategorien 03 — 05",
    items: [
      {
        key: "laser",
        id: "01",
        status: "Aktiv",
        description:
          "1,5-kW-Faserlaserschneidmaschine auf höchstem Niveau industrieller Präzision. Außergewöhnliche Genauigkeit und Effizienz bei verschiedensten Materialien — von filigranen Designs bis zur Großserienfertigung. Fortschrittliches Design und modernste Technologie für schnelle, präzise Schnitte.",
        specs: [
          { label: "Laserleistung", value: "1.500 W Faser" },
          { label: "Schneidfläche", value: "3.000 × 1.500 mm" },
          { label: "Materialien", value: "Stahl, Edelstahl, Aluminium, Messing" },
          { label: "Max. Blechdicke", value: "16 mm (Baustahl)" },
        ],
      },
      {
        key: "bending",
        id: "02",
        status: "Aktiv",
        description:
          "Definiert Effizienz und Präzision beim Blechbiegen neu. 3.100 mm Biegelänge mit 174 Tonnen Presskraft für ein breites Spektrum metallverarbeitender Aufgaben. Modernste Technologie für schnelles, genaues Biegen mit kurzen Rüstzeiten — von einfachen bis zu komplexen Geometrien.",
        specs: [
          { label: "Biegelänge", value: "3.100 mm" },
          { label: "Biegekraft", value: "174 Tonnen" },
          { label: "Steuerung", value: "CNC-Anschlag, Mehrachsig" },
          { label: "Geschwindigkeit", value: "Speed Bend Serie" },
        ],
      },
      {
        key: "measuring",
        id: "03",
        status: "ISO-rückverfolgbar",
        description:
          "Stabil, zuverlässig und voll dynamisch — die Wenzel LH 65 ist ein universelles Brücken-CMM für vielfältige Prüfanwendungen. Luftlager-Technologie liefert hohe mechanische Genauigkeit, perfekte Ergonomie und mehr Dynamik. Der Maßstab unseres Qualitätsversprechens.",
        specs: [
          { label: "Messbereich", value: "650 × 700 × 500 mm" },
          { label: "Lagerung", value: "Vollständige Luftlagerbrücke" },
          { label: "Genauigkeit", value: "Submikron erreichbar" },
          { label: "Normen", value: "ISO 10360, VDI/VDE 2617" },
        ],
      },
    ],
  },
  cta: {
    headline: "Lassen Sie unsere Maschinen für Ihr Projekt arbeiten.",
  },
};
