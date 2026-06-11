import type { MachineryMessages } from "./types";

export const machineryAl: MachineryMessages = {
  hero: {
    titleLine1: "Makineritë",
    titleLine2: "Tona",
    navAriaLabel: "Kategoritë e makinave",
    categories: [
      { key: "verticalMills", count: "05" },
      { key: "lathes", count: "03" },
      { key: "laserCutting", count: "01" },
      { key: "bending", count: "01" },
      { key: "measuring", count: "01" },
    ],
  },
  stats: {
    leadBold: "Precizion, progres dhe pasion.",
    leadRest:
      "Halla e IMP-it është ndërtuar rreth një flote kryesore qendrash CNC Haas — freza, torna dhe një UMC me 5 akse — të plotësuar me prerje me lazer, përkulje precize dhe një CMM Wenzel për kontroll të plotë të brendshëm.",
    paragraph:
      "Çdo makinë mbahet aktuale përmes investimeve të vazhdueshme. Hala jonë me 17 makina trajton gjithçka, nga prototipet e vetme deri te prodhimi i vazhdueshëm pa mbikëqyrje me vëllim të lartë.",
    items: [
      { value: "17", suffix: "+", label: "Makina në halë" },
      { value: "5", label: "Akse njëkohësisht" },
      { value: "24", suffix: "/7", label: "Prodhim pa mbikëqyrje" },
      { value: "1987", label: "Themeluar nga Rronifer" },
    ],
  },
  flagship: {
    categoryLabel: "Kategoria 01",
    tag: "5 akse · Kryesore",
    description:
      "Qendër universale makinimi me 5 akse njëkohësisht. Dizajnimi \u201cSS\u201d Super Speed ofron performancë të lartë të spindle-it dhe ndërrime të shpejta të veglave — ideale për komponentë kompleksë me shumë faqe në alumini, çelik dhe titan pa ri-pozicionim.",
    imageAltDescription: "qendër frezimi vertikale me 5 akse",
    specs: [
      { label: "Akset", value: "5 akse njëkohësisht (B+C trunnion)" },
      { label: "Spindle", value: "Super Speed — 15,000 RPM" },
      { label: "Tavolina", value: "500mm diametër, ±110° anësim" },
      { label: "Ndryshues veglash", value: "40+1 anësor" },
      { label: "Kontrolli", value: 'Haas NGC me ekran prekje 15"' },
    ],
  },
  umc1000: {
    categoryLabel: "Kategoria 02",
    tag: "5 akse · Kryesore",
    description:
      "UMC është një qendër e avancuar përpunimi me 5 akse, e projektuar për përpunimin e pjesëve të mëdha dhe komplekse me saktësi të lartë. Hapësira e madhe e punës dhe lëvizjet e zgjeruara mundësojnë përpunimin efikas të sipërfaqeve të shumta në një vendosje të vetme, duke reduktuar kohën e përgatitjes dhe duke rritur produktivitetin. Ideale për industrinë  e automobilave, aeronautikës, prodhimin e veglave dhe komponentëve industrialë.",
    imageAltDescription: "qendër përpunimi UMC 1000",
    specs: [
      { label: "Akset", value: "5 akse njëkohësisht (B+C trunnion)" },
      { label: "Spindle", value: "Inline Direct-Drive Spindle" },
      { label: "Hapësira e punës", value: "Kapacitet i madh për pjesë komplekse" },
      { label: "Ndryshues veglash", value: "Ndryshues anësor me kapacitet të lartë" },
      { label: "Matje", value: "Sistem intuitiv matës pa tela" },
      { label: "Aplikimi", value: "3+2 dhe makinim plotësisht simultan 5-akse" },
    ],
  },
  variants: {
    items: [
      {
        key: "vf1",
        id: "02",
        description:
          "VMC kompakt me hapësirë pune të bollshme për madhësinë e tij. Shpejtësi të larta spindle dhe ndërrime të shpejta të veglave mundësojnë prodhim efikas të pjesëve komplekse me toleranca të ngushta në aeronautikë, automobilistikë dhe mjekësi.",
        specs: [
          { label: "Lëvizje X/Y/Z", value: "508 × 406 × 508 mm" },
          { label: "Spindle", value: "7,500 RPM (30-taper opt.)" },
          { label: "Rapid", value: "25.4 m/min" },
        ],
        tag: "Kompakt · Preciz",
      },
      {
        key: "vf2",
        id: "03",
        description:
          "Kapacitet i përmirësuar mbi VF-1 me hapësirë pune më të madhe, spindle më të shpejtë dhe kohë më të shkurtra ndërrimi veglash. Makinim me precizion të lartë në aeronautikë, automobilistikë dhe prodhim kallëpash.",
        specs: [
          { label: "Lëvizje X/Y/Z", value: "762 × 406 × 508 mm" },
          { label: "Spindle", value: "8,100 RPM" },
          { label: "Rapid", value: "25.4 m/min" },
        ],
        tag: "Kapacitet i rritur",
      },
      {
        key: "vf3",
        id: "04",
        description:
          "Mbi VF-2 me hapësirë pune më të madhe, shpejtësi më të larta spindle dhe kapacitet të përmirësuar veglash. Trajton makinim kompleks në aeronautikë, automobilistikë dhe prodhim kallëpash/dyzash me lehtësi.",
        specs: [
          { label: "Lëvizje X/Y/Z", value: "1,016 × 508 × 635 mm" },
          { label: "Spindle", value: "8,100 RPM" },
          { label: "Kapacitet veglash", value: "24+1 anësor" },
        ],
        tag: "Hapësirë e madhe",
      },
      {
        key: "vf3ss",
        id: "05",
        description:
          "Varianti Super Speed i VF-3 me spindle me shpejtësi të lartë dhe ndërrime të shpejta veglash që reduktojnë ndjeshëm kohën e ciklit. Ideal për makinim me shpejtësi të lartë të aluminit, çelikut dhe titanit.",
        specs: [
          { label: "Spindle", value: "12,000 RPM (SS)" },
          { label: "Rapid", value: "35.6 m/min" },
          { label: "Ndryshim veglash", value: "2.4 sek anë-në-anë" },
        ],
        tag: "Super Speed",
      },
    ],
  },
  lathes: {
    categoryLabel: "Kategoria 02",
    typeLabel: "Lloji",
    items: [
      {
        key: "st20",
        id: "01",
        description:
          "Tornë CNC kompakt dhe shumëllojshëm i ndërtuar për tornim preciz. Ndërtim i fortë dhe spindle me performancë të lartë trajtojnë materiale të ndryshme me efikasitet. Ndërfaqe miqësore dhe sistem kontrolli i avancuar sigurojnë konfigurim të shpejtë — i përshtatshëm nga punëtori të vogla deri te objekte të mëdha prodhimi.",
        tags: [
          "Kundër-stërvilë programueshëm",
          "Kullë veglash",
          "Rapid me shpejtësi të lartë",
          "Gati për ushqyes shufre",
        ],
        type: "Qendër tornimi",
      },
      {
        key: "st30",
        id: "02",
        description:
          "Tornë CNC i fuqishëm dhe i rëndë i projektuar për produktivitet të lartë. Ndërtim i fortë dhe spindle me performancë të lartë për detyra të kërkuara tornimi në shkallë. Ndërfaqe intuitive dhe konfigurim i shpejtë për punëtori të vogla dhe prodhim në shkallë të madhe. I pajisur me kundër-stërvilë programueshëm, kullë veglash dhe rapid me shpejtësi të lartë për makinim preciz të komponentëve kompleksë.",
        tags: [
          "I rëndë",
          "Hapje e madhe",
          "Spindle me çift rrotullues të lartë",
          "Opsion vegla live",
        ],
        type: "Tornim i rëndë",
      },
      {
        key: "xl150",
        id: "03",
        description:
          "Fuqi tornimi CNC preciz që kombinon ndërtim të fortë me aftësi shumëllojshme. Spindle me performancë të lartë dhe kontrolle intuitive sigurojnë operim të rrjedhshëm — perfekt për punëtori të vogla dhe prodhim në shkallë të madhe. Kullë dinamike veglash dhe rapid me shpejtësi të lartë për makinim të shpejtë dhe të saktë të komponentëve kompleksë.",
        tags: [
          "Kullë dinamike veglash",
          "Rapid me shpejtësi të lartë",
          "Kundër-stërvilë servo",
          "Gati për ngarkues portal",
        ],
        type: "Tornim preciz",
      },
    ],
  },
  auxiliary: {
    categoryLabel: "Kategoritë 03 — 05",
    items: [
      {
        key: "laser",
        id: "01",
        status: "Aktive",
        description:
          "Makinë prerjeje me lazer fibër 1.5 kW që përfaqëson kulmin e prerjes industriale precize. Saktësi dhe efikasitet të jashtëzakonshëm në materiale të ndryshme — nga dizajne të holla deri te prodhim në shkallë të madhe. Dizajn i avancuar dhe teknologji moderne sigurojnë prerje të shpejta dhe precize çdo herë.",
        specs: [
          { label: "Fuqia e lazerit", value: "1,500W Fibër" },
          { label: "Zona e prerjes", value: "3,000 × 1,500 mm" },
          { label: "Materialet", value: "Çelik, inox, alumini, tunx" },
          { label: "Trashësia max. e fletës", value: "16mm (çelik i butë)" },
        ],
      },
      {
        key: "bending",
        id: "02",
        status: "Aktive",
        description:
          "Ridefinon efikasitetin dhe precizionin në përkuljen e fletëve metalike. Gjatësi përkuljeje 3,100mm me kapacitet force 174 ton trajton një gamë të gjerë detyrash metalurgjike. Teknologji moderne siguron përkulje të shpejtë dhe të saktë me kohë të reduktuara konfigurimi — nga përkulje të thjeshta deri te gjeometri komplekse.",
        specs: [
          { label: "Gjatësia e përkuljes", value: "3,100 mm" },
          { label: "Forca e përkuljes", value: "174 ton" },
          { label: "Kontrolli", value: "CNC back-gauge, multi-akse" },
          { label: "Shpejtësia", value: "Seria Speed Bend" },
        ],
      },
      {
        key: "measuring",
        id: "03",
        status: "Gjurmues ISO",
        description:
          "Stabil, i besueshëm dhe plotësisht dinamik — Wenzel LH 65 është një CMM urë universale për një gamë të gjerë aplikimesh inspektimi. Teknologjia me kushinë ajri ofron saktësi mekanike të lartë, ergonomi perfekte dhe dinamikë të rritur. Pika referuese e angazhimit tonë për cilësi.",
        specs: [
          { label: "Diapazoni i matjes", value: "650 × 700 × 500 mm" },
          { label: "Kushinët", value: "Urë e plotë me kushinë ajri" },
          { label: "Saktësia", value: "Sub-mikron e arritshme" },
          { label: "Standardet", value: "ISO 10360, VDI/VDE 2617" },
        ],
      },
    ],
  },
  cta: {
    headline: "Lëreni makineritë tona të punojnë për projektin tuaj.",
  },
};
