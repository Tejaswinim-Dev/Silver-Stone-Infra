export const WHATSAPP_NUMBER = "919876543210";

export interface Property {
  id: string;
  loc: string;
  size: string;
  sqft: string;
  facing: string;
  price: string;
  pricePerSqYd: string;
  status: "Available" | "Sold Out" | "Reserved";
  plotNo: string;
  roadWidth: string;
  dimensions: string;
  img: string;
  views: {
    front: string;
    east: string;
    top: string;
  };
  description: string;
  highlights: string[];
  specifications: {
    approval: string;
    title: string;
    vastu: string;
    water: string;
    electricity: string;
    road: string;
  };
  nearby: { name: string; distance: string }[];
}

export const properties: Property[] = [
  {
    id: "M-102",
    loc: "Madhuranagar",
    size: "150 Sq. Yds",
    sqft: "1,350 sq.ft",
    facing: "East Facing (Vastu Compliant)",
    price: "₹45 Lakhs",
    pricePerSqYd: "₹30,000 / Sq.Yd",
    status: "Available",
    plotNo: "Plot #102",
    roadWidth: "40 Feet Blacktop Road",
    dimensions: "30' x 45'",
    img: "/plots/M-102/front.jpg",
    views: {
      front: "/plots/M-102/front.jpg",
      east: "/plots/M-102/east.jpg",
      top: "/plots/M-102/top.jpg",
    },
    description: "Premium East-facing luxury villa plot situated in the prime heart of Madhuranagar. Features 100% clear title, HMDA approval, underground electrical cabling, and immediate registration. Ideal for building a 3-4 story luxury independent bungalow.",
    highlights: [
      "100% Clear Title & Spot Registration",
      "HMDA Approved Gated Community Layout",
      "Strict Vastu Compliance with East Entrance",
      "Underground Drainage & Concealed Cables",
      "Avenue Plantation & Solar Streetlights",
      "24/7 Security with Gated Entry Guard"
    ],
    specifications: {
      approval: "HMDA & RERA Approved",
      title: "Clear Marketable Title",
      vastu: "100% East Facing Vastu",
      water: "24/7 Manjeera & Bore Water",
      electricity: "Concealed 3-Phase Underground",
      road: "40 Feet Wide CC & Asphalt"
    },
    nearby: [
      { name: "Madhuranagar Metro Station", distance: "3 Mins (1.2 km)" },
      { name: "Outer Ring Road Exit #4", distance: "8 Mins (4.5 km)" },
      { name: "Super Specialty Hospital", distance: "5 Mins (2.1 km)" },
      { name: "International School", distance: "4 Mins (1.8 km)" }
    ]
  },
  {
    id: "A-405",
    loc: "Ameerpet",
    size: "200 Sq. Yds",
    sqft: "1,800 sq.ft",
    facing: "North-East Corner",
    price: "₹65 Lakhs",
    pricePerSqYd: "₹32,500 / Sq.Yd",
    status: "Available",
    plotNo: "Plot #405",
    roadWidth: "50 Feet Corner Road",
    dimensions: "36' x 50'",
    img: "/plots/A-405/front.jpg",
    views: {
      front: "/plots/A-405/front.jpg",
      east: "/plots/A-405/east.jpg",
      top: "/plots/A-405/top.jpg",
    },
    description: "Rare North-East Corner plot located in central Ameerpet. High commercial and residential appreciation potential with double road frontage. Ready for immediate luxury residence construction.",
    highlights: [
      "North-East Corner Plot Advantage",
      "Dual Road Access (50ft & 30ft)",
      "High Rental & Capital Growth Area",
      "Gated Layout with Central Park",
      "Clear Title with Bank Loan Eligibility"
    ],
    specifications: {
      approval: "GHMC & HMDA Approved",
      title: "Bank Loan Approved (SBI, HDFC)",
      vastu: "Auspicious North-East Corner",
      water: "Dedicated Overhead Tank",
      electricity: "Underground Power Lines",
      road: "50 Feet Wide Avenue"
    },
    nearby: [
      { name: "Ameerpet Metro Hub", distance: "2 Mins (800 m)" },
      { name: "Begumpet Airport Zone", distance: "10 Mins (5.0 km)" },
      { name: "Shopping & Dining Arcade", distance: "2 Mins (500 m)" }
    ]
  },
  {
    id: "G-301",
    loc: "Gachibowli",
    size: "300 Sq. Yds",
    sqft: "2,700 sq.ft",
    facing: "East Facing",
    price: "₹1.2 Crores",
    pricePerSqYd: "₹40,000 / Sq.Yd",
    status: "Available",
    plotNo: "Plot #301",
    roadWidth: "60 Feet Main Boulevard",
    dimensions: "45' x 60'",
    img: "/plots/G-301/front.jpg",
    views: {
      front: "/plots/G-301/front.jpg",
      east: "/plots/G-301/east.jpg",
      top: "/plots/G-301/top.jpg",
    },
    description: "Exclusive ultra-luxury plot in Gachibowli IT Corridor. Flanked by lush green landscape parks and 60ft wide boulevard. Perfect for IT executives seeking luxury living near Financial District.",
    highlights: [
      "Heart of Gachibowli Financial District",
      "60 Feet Wide Grand Entrance Boulevard",
      "Clubhouse & Swimming Pool Access",
      "100% Clear Title with Instant Possession"
    ],
    specifications: {
      approval: "HMDA Approved Layout",
      title: "Freehold Ownership",
      vastu: "East Facing Pure Vastu",
      water: "Centralized RO Water Supply",
      electricity: "Smart Underground Grid",
      road: "60 Feet Asphalt Road"
    },
    nearby: [
      { name: "Financial District", distance: "5 Mins (2.5 km)" },
      { name: "Wipro Circle", distance: "4 Mins (1.9 km)" },
      { name: "IKEA Hyderabad", distance: "8 Mins (4.2 km)" }
    ]
  },
  {
    id: "J-505",
    loc: "Jubilee Hills",
    size: "500 Sq. Yds",
    sqft: "4,500 sq.ft",
    facing: "North-East Facing",
    price: "₹3.5 Crores",
    pricePerSqYd: "₹70,000 / Sq.Yd",
    status: "Available",
    plotNo: "Plot #505 (Road No. 36 enclave)",
    roadWidth: "60 Feet Private Boulevard",
    dimensions: "50' x 90'",
    img: "/plots/J-505/front.jpg",
    views: {
      front: "/plots/J-505/front.jpg",
      east: "/plots/J-505/east.jpg",
      top: "/plots/J-505/top.jpg",
    },
    description: "Flagship luxury estate plot in Jubilee Hills. Elite neighborhood surrounded by celebrity residences, top-tier diplomatic enclaves, and hill-view panoramas.",
    highlights: [
      "Ultra-Prestigious Jubilee Hills Address",
      "Panoramic Hillside & City Skyline Views",
      "High Security Diplomatic Zone Enclave",
      "Vastu Compliant Elevated Topography"
    ],
    specifications: {
      approval: "GHMC Prime Layout",
      title: "Single Owner Clear Title",
      vastu: "Auspicious North-East Facing",
      water: "HMWSSB 24x7 Direct Supply",
      electricity: "High Capacity 3-Phase",
      road: "60 Feet Wide Private Avenue"
    },
    nearby: [
      { name: "Jubilee Hills Club", distance: "3 Mins (1.0 km)" },
      { name: "KBR National Park", distance: "4 Mins (1.5 km)" },
      { name: "Apollo Hospitals", distance: "5 Mins (2.0 km)" }
    ]
  },
  {
    id: "K-210",
    loc: "Kukatpally",
    size: "180 Sq. Yds",
    sqft: "1,620 sq.ft",
    facing: "West Facing",
    price: "₹50 Lakhs",
    pricePerSqYd: "₹27,777 / Sq.Yd",
    status: "Sold Out",
    plotNo: "Plot #210",
    roadWidth: "40 Feet Road",
    dimensions: "30' x 54'",
    img: "/plots/K-210/front.jpg",
    views: {
      front: "/plots/K-210/front.jpg",
      east: "/plots/K-210/east.jpg",
      top: "/plots/K-210/top.jpg",
    },
    description: "Well-connected residential plot in Kukatpally Housing Board layout. Fully developed neighborhood with immediate house construction status.",
    highlights: [
      "KPHB Colony Proximity",
      "Immediate Construction Ready",
      "Surrounded by Schools & Markets"
    ],
    specifications: {
      approval: "HMDA Layout",
      title: "Clear Title",
      vastu: "West Facing",
      water: "Municipal Supply",
      electricity: "TSECL Connection Ready",
      road: "40 Feet Road"
    },
    nearby: [
      { name: "KPHB Metro Station", distance: "5 Mins (2.0 km)" },
      { name: "Forum Sujana Mall", distance: "6 Mins (2.5 km)" }
    ]
  },
  {
    id: "M-105",
    loc: "Madhuranagar",
    size: "250 Sq. Yds",
    sqft: "2,250 sq.ft",
    facing: "North-East Facing",
    price: "₹75 Lakhs",
    pricePerSqYd: "₹30,000 / Sq.Yd",
    status: "Available",
    plotNo: "Plot #105",
    roadWidth: "40 Feet Blacktop Road",
    dimensions: "37.5' x 60'",
    img: "/plots/M-105/front.jpg",
    views: {
      front: "/plots/M-105/front.jpg",
      east: "/plots/M-105/east.jpg",
      top: "/plots/M-105/top.jpg",
    },
    description: "Spacious 250 Sq.Yd North-East facing plot in Madhuranagar. Ideal for building duplex luxury villa with private swimming pool and garden terrace.",
    highlights: [
      "North-East Auspicious Orientation",
      "Wide Frontage for 2-Car Garage",
      "Peaceful Residential Enclave"
    ],
    specifications: {
      approval: "HMDA Approved",
      title: "Spot Registration Available",
      vastu: "100% North-East Vastu",
      water: "24/7 Water Supply",
      electricity: "Concealed Wiring",
      road: "40 Feet Road"
    },
    nearby: [
      { name: "Madhuranagar Park", distance: "1 Min (200 m)" },
      { name: "Metro Station", distance: "4 Mins (1.5 km)" }
    ]
  },
  {
    id: "B-212",
    loc: "Banjara Hills",
    size: "400 Sq. Yds",
    sqft: "3,600 sq.ft",
    facing: "West Facing",
    price: "₹2.8 Crores",
    pricePerSqYd: "₹70,000 / Sq.Yd",
    status: "Sold Out",
    plotNo: "Plot #212 (Road No. 12)",
    roadWidth: "50 Feet Boulevard",
    dimensions: "45' x 80'",
    img: "/plots/B-212/front.jpg",
    views: {
      front: "/plots/B-212/front.jpg",
      east: "/plots/B-212/east.jpg",
      top: "/plots/B-212/top.jpg",
    },
    description: "Premium Banjara Hills Road No. 12 residential plot. Highly sought after prime location with high elite neighbor density.",
    highlights: [
      "Banjara Hills Prime Enclave",
      "High Value Asset",
      "Full Infrastructure Ready"
    ],
    specifications: {
      approval: "GHMC Approved Layout",
      title: "Clear Title",
      vastu: "West Facing",
      water: "Municipal Water 24/7",
      electricity: "3-Phase Power",
      road: "50 Feet Road"
    },
    nearby: [
      { name: "Taj Krishna", distance: "3 Mins (1.2 km)" },
      { name: "GVK One Mall", distance: "4 Mins (1.8 km)" }
    ]
  },
  {
    id: "M-308",
    loc: "Miyapur",
    size: "220 Sq. Yds",
    sqft: "1,980 sq.ft",
    facing: "South-East Facing",
    price: "₹55 Lakhs",
    pricePerSqYd: "₹25,000 / Sq.Yd",
    status: "Available",
    plotNo: "Plot #308",
    roadWidth: "40 Feet Road",
    dimensions: "33' x 60'",
    img: "/plots/M-308/front.jpg",
    views: {
      front: "/plots/M-308/front.jpg",
      east: "/plots/M-308/east.jpg",
      top: "/plots/M-308/top.jpg",
    },
    description: "Affordable luxury plot in rapidly expanding Miyapur zone. Close to Metro terminal, ORR junction, and top educational institutions.",
    highlights: [
      "Near Miyapur Metro Terminal",
      "High Growth Corridor",
      "HMDA Approved Gated Community"
    ],
    specifications: {
      approval: "HMDA Approved",
      title: "Clear Title",
      vastu: "South-East Facing",
      water: "Manjeera Connection",
      electricity: "Underground Power Lines",
      road: "40 Feet Road"
    },
    nearby: [
      { name: "Miyapur Metro Station", distance: "4 Mins (1.8 km)" },
      { name: "Outer Ring Road Junction", distance: "7 Mins (3.5 km)" }
    ]
  }
];
