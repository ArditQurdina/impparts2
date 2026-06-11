import type { MachineryMessages } from "./types";

export const machineryEn: MachineryMessages = {
  hero: {
    titleLine1: "The",
    titleLine2: "Machinery",
    navAriaLabel: "Machine categories",
    categories: [
      { key: "verticalMills", count: "05" },
      { key: "lathes", count: "03" },
      { key: "laserCutting", count: "01" },
      { key: "bending", count: "01" },
      { key: "measuring", count: "01" },
    ],
  },
  stats: {
    leadBold: "Precision, Progress, and Passion.",
    leadRest:
      "IMP\u2019s floor is built around a core fleet of Haas CNC centres \u2014 mills, lathes, and a 5-axis UMC \u2014 complemented by laser cutting, precision bending, and a Wenzel CMM for full in-house inspection capability.",
    paragraph:
      "Every machine is kept current through ongoing investment. Our 17-machine floor handles everything from single prototype runs to sustained high-volume unmanned production.",
    items: [
      { value: "17", suffix: "+", label: "Machines on Floor" },
      { value: "5", label: "Axis Simultaneous" },
      { value: "24", suffix: "/7", label: "Unmanned Production" },
      { value: "1987", label: "Founded by Rronifer" },
    ],
  },
  flagship: {
    categoryLabel: "Category 01",
    tag: "5-Axis \u00b7 Flagship",
    description:
      "Simultaneous 5-axis universal machining centre. The \u201cSS\u201d Super Speed designation delivers high-speed spindle performance and rapid tool changes \u2014 ideal for complex, multi-face components in aluminium, steel, and titanium without repositioning.",
    imageAltDescription: "5-axis vertical milling centre",
    specs: [
      { label: "Axes", value: "Simultaneous 5-Axis (B+C trunnion)" },
      { label: "Spindle", value: "Super Speed \u2014 15,000 RPM" },
      { label: "Table", value: "500mm diameter, \u00b1110\u00b0 tilt" },
      { label: "Tool Changer", value: "40+1 side-mount" },
      { label: "Control", value: 'Haas NGC with 15" touch screen' },
    ],
  },
  umc1000: {
    categoryLabel: "Category 02",
    tag: "5-Axis Machining Centre",
    description:
      "The UMC 1000 is a high-performance 5-axis machining centre designed for large and complex components. Its extended travels and spacious work envelope provide exceptional flexibility for multi-sided machining, reducing setup times while improving precision and productivity.",
    imageAltDescription: "UMC 1000 machining centre",
    specs: [
      { label: "Axes", value: "Simultaneous 5-Axis (B+C trunnion)" },
      { label: "Spindle", value: "Inline Direct-Drive Spindle" },
      { label: "Work Envelope", value: "Large Capacity for Complex Parts" },
      { label: "Tool Changer", value: "High-Capacity Side-Mount Tool Changer" },
      { label: "Probing", value: "Wireless Intuitive Probing System" },
      { label: "Application", value: "3+2 and Full Simultaneous 5-Axis Machining" },
    ],
  },
  variants: {
    items: [
      {
        key: "vf1",
        id: "02",
        description:
          "Compact VMC with generous work envelope for its footprint. Fast spindle speeds and quick tool changes enable efficient production of complex parts with tight tolerances across aerospace, automotive, and medical applications.",
        specs: [
          { label: "Travel X/Y/Z", value: "508 \u00d7 406 \u00d7 508 mm" },
          { label: "Spindle", value: "7,500 RPM (30-taper opt.)" },
          { label: "Rapid", value: "25.4 m/min" },
        ],
        tag: "Compact \u00b7 Precise",
      },
      {
        key: "vf2",
        id: "03",
        description:
          "Upgraded capacity over the VF-1 with increased work envelope, faster spindle, and improved tool change times. High-precision machining across aerospace, automotive, and mould-making applications.",
        specs: [
          { label: "Travel X/Y/Z", value: "762 \u00d7 406 \u00d7 508 mm" },
          { label: "Spindle", value: "8,100 RPM" },
          { label: "Rapid", value: "25.4 m/min" },
        ],
        tag: "Increased Capacity",
      },
      {
        key: "vf3",
        id: "04",
        description:
          "Building on the VF-2 with a larger work envelope, increased spindle speeds, and enhanced tool capacity. Handles complex machining across aerospace, automotive, and die/mould making with ease.",
        specs: [
          { label: "Travel X/Y/Z", value: "1,016 \u00d7 508 \u00d7 635 mm" },
          { label: "Spindle", value: "8,100 RPM" },
          { label: "Tool Capacity", value: "24+1 side-mount" },
        ],
        tag: "Large Envelope",
      },
      {
        key: "vf3ss",
        id: "05",
        description:
          "The Super Speed variant of the VF-3 with high-speed spindle and rapid tool changes that significantly reduce cycle times. Ideal for high-speed machining of aluminium, steel, and titanium.",
        specs: [
          { label: "Spindle", value: "12,000 RPM (SS)" },
          { label: "Rapid", value: "35.6 m/min" },
          { label: "Tool Change", value: "2.4 sec side-to-side" },
        ],
        tag: "Super Speed",
      },
    ],
  },
  lathes: {
    categoryLabel: "Category 02",
    typeLabel: "Type",
    items: [
      {
        key: "st20",
        id: "01",
        description:
          "Compact, versatile CNC lathe built for precision turning. Robust construction and high-performance spindle handle various materials efficiently. User-friendly interface and advanced control system ensure quick setup \u2014 suitable from small job shops to large production facilities.",
        tags: [
          "Programmable Tailstock",
          "Tool Turret",
          "High-Speed Rapids",
          "Bar Feeder Ready",
        ],
        type: "Turning Centre",
      },
      {
        key: "st30",
        id: "02",
        description:
          "Powerful, heavy-duty CNC lathe engineered for high productivity. Sturdy build and high-performance spindle tackle demanding turning tasks at scale. Intuitive interface and rapid setup cater to both small-scale workshops and large-scale manufacturing. Equipped with programmable tailstock, tool turret, and high-speed rapids for precise machining of intricate components.",
        tags: [
          "Heavy Duty",
          "Large Bore",
          "High Torque Spindle",
          "Live Tooling Option",
        ],
        type: "Heavy Turning",
      },
      {
        key: "xl150",
        id: "03",
        description:
          "Precision CNC turning powerhouse blending robust construction with versatile capabilities. High-performance spindle and intuitive controls ensure seamless operation \u2014 perfect for both small workshops and large-scale production runs. Dynamic tool turret and high-speed rapids deliver swift, accurate machining of complex components.",
        tags: [
          "Dynamic Tool Turret",
          "High-Speed Rapids",
          "Servo Tailstock",
          "Gantry Loader Ready",
        ],
        type: "Precision Turning",
      },
    ],
  },
  auxiliary: {
    categoryLabel: "Categories 03 \u2014 05",
    items: [
      {
        key: "laser",
        id: "01",
        status: "Active",
        description:
          "A 1.5 kW fibre laser cutting machine representing a pinnacle of precision industrial cutting. Exceptional accuracy and efficiency across a variety of materials \u2014 from intricate designs to large-scale production runs. Advanced design and state-of-the-art technology ensure swift, precise cuts every time.",
        specs: [
          { label: "Laser Power", value: "1,500W Fibre" },
          { label: "Cutters Area", value: "3,000 \u00d7 1,500 mm" },
          { label: "Materials", value: "Steel, SS, Aluminium, Brass" },
          { label: "Max Sheet Thickness", value: "16mm (mild steel)" },
        ],
      },
      {
        key: "bending",
        id: "02",
        status: "Active",
        description:
          "Redefines efficiency and precision in sheet metal bending. 3,100mm bending length with 174-ton force capacity handles a wide range of metalworking tasks. Cutting-edge technology ensures rapid and accurate bending with reduced setup times \u2014 from simple bends to complex geometries.",
        specs: [
          { label: "Bending Length", value: "3,100 mm" },
          { label: "Bending Force", value: "174 Tonne" },
          { label: "Control", value: "CNC Back-gauge, Multi-axis" },
          { label: "Speed", value: "Speed Bend Series" },
        ],
      },
      {
        key: "measuring",
        id: "03",
        status: "ISO Traceable",
        description:
          "Stable, reliable, and fully dynamic \u2014 the Wenzel LH 65 is a universal bridge CMM for a wide range of inspection applications. Air-bearing technology delivers high mechanical accuracy, perfect ergonomics, and increased dynamics. The benchmark of our quality commitment.",
        specs: [
          { label: "Measuring Range", value: "650 \u00d7 700 \u00d7 500 mm" },
          { label: "Bearings", value: "Full air-bearing bridge" },
          { label: "Accuracy", value: "Sub-micron achievable" },
          { label: "Standards", value: "ISO 10360, VDI/VDE 2617" },
        ],
      },
    ],
  },
  cta: {
    headline: "Let our machines work for your project.",
  },
};
