/* ===========================================================
   AFRAVIVA HOMES — property data
   Single source of truth for listing, ledger, and detail pages.
   status: "ready" | "progress" | "tbc"
   ledgerPos: 0–100, position along the readiness axis
   ledgerRow: "above" | "below" — avoids label collisions

   Timeline distribution (per Aug 2026 portfolio brief, updated):
   1 completed · 1 Q4 2026 · 1 Q1 2027 · 1 mid-2027 · 1 Q3 2027
   · 1 Q4 2028 · 1 Q1 2029 · 1 still to be announced
   =========================================================== */

const AFRAVIVA_PROPERTIES = [
  {
    slug: "the-marquis",
    name: "The Marquis",
    developer: "Hayer One",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Kileleshwa / Lavington Green",
    lat: -1.2807,
    lng: 36.7817,
    status: "ready",
    statusLabel: "Ready now",
    quarterLabel: "Move in today",
    ledgerPos: 4,
    ledgerRow: "below",
    beds: "3 bedroom",
    description: "The first Afra<span class=\"v-flag\">V</span>iva address ready to walk into. The Marquis sits on a quiet Kileleshwa side street, close enough to Nairobi's business districts for an easy commute, far enough for the street to stay calm after 6pm.",
    longDescription: "Kileleshwa and neighbouring Lavington Green have spent a decade becoming Nairobi's most reliable mid-rise address for professionals who want space without a long commute. The Marquis adds to that with finished, fully furnished and serviced units — what you view is what you move into, not a rendering of what might be. Suited to stays from a few nights to a long-term lease.",
    facts: [
      { label: "Status", value: "Ready now" },
      { label: "Unit size", value: "153 square metres gross area" },
      { label: "Developer", value: "Hayer One" },
      { label: "Neighbourhood", value: "Kileleshwa / Lavington Green" }
    ],
    specs: [
      { label: "Occupancy", value: "Immediate" },
      { label: "Unit type", value: "3 bedroom, fully furnished, 2 baths, SQ, 2 balconies" },
      { label: "Parking", value: "2 parking spots plus a storage room" }
    ],
    gallery: [
      { src: "assets/img/marquis.jpg", caption: "Exterior & pool" },
      { src: "assets/img/marquis 1.jpg", caption: "Children's playground — rooftop" },
      { src: "assets/img/marquis general view.jpg", caption: "Exterior — twin towers" },
      { src: "assets/img/marquis living room.jpg", caption: "Living room" },
      { src: "assets/img/marquis kitchen.jpg", caption: "Kitchen" },
      { src: "assets/img/marquis bathroom.jpg", caption: "Bathroom" },
      { src: "assets/img/marquis in.jpg", caption: "Living room" },
      { src: "assets/img/marquis in 1.jpg", caption: "Bedroom" },
      { src: "assets/img/marquis in 2.jpg", caption: "Living room — TV area" },
      { src: "assets/img/marquis in 3.jpg", caption: "Living & dining area" },
      { src: "assets/img/marquis gym.jpg", caption: "Gym" },
      { src: "assets/img/marquis pool.jpg", caption: "Pool" },
      { src: "assets/img/marquis playground for kids.jpg", caption: "Children's playground" },
      { src: "assets/img/marquis playground for kids1.jpg", caption: "Children's playground — swings" }
    ],
    coverImage: "assets/img/marquis general view.jpg",
    artVariant: "towers"
  },
  {
    slug: "capricorn",
    name: "Capricorn",
    developer: "Staroot",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Kilimani, across from Yaya Mall",
    lat: -1.2932,
    lng: 36.7869,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. Q4 2026",
    ledgerPos: 12,
    ledgerRow: "above",
    beds: "2 bed",
    description: "Staroot's Capricorn is rising in Kilimani, a short walk from Yaya Mall and the neighbourhood's café strip. Reservations are open ahead of a targeted Q4 2026 handover.",
    longDescription: "Kilimani remains Nairobi's most in-demand serviced-apartment zone for young professionals and short-stay guests alike, and Capricorn is positioned to serve that demand directly — walkable to shopping, restaurants, and coworking spaces, with a construction timeline that puts occupancy in the final quarter of 2026.",
    facts: [
      { label: "Status", value: "Under construction" },
      { label: "Target", value: "2026 Q4" },
      { label: "Unit size", value: "103 sqm gross area" },
      { label: "Developer", value: "Staroot" },
      { label: "Neighbourhood", value: "Kilimani, across from Yaya Mall" }
    ],
    specs: [
      { label: "Target occupancy", value: "2026 Q4" },
      { label: "Unit type", value: "2 bed, furnished, 2 bath, top floor view towards CBD" },
      { label: "Parking", value: "1 car park" }
    ],
    gallery: [
      { src: "assets/img/capricon aerialview.jpg", caption: "Aerial view" },
      { src: "assets/img/capricon living room.jpg", caption: "Living room" },
      { src: "assets/img/capricon living room1.jpg", caption: "Living & dining area" },
      { src: "assets/img/capricon kitchen.jpg", caption: "Kitchen" },
      { src: "assets/img/capricon bedroom.jpg", caption: "Bedroom" },
      { src: "assets/img/capricorn unit layout.jpeg", caption: "Unit floor plan" },
      { src: "assets/img/capricorn layout coloured.jpeg", caption: "Unit floor plan — styled" }
    ],
    coverImage: "assets/img/capricon aerialview.jpg",
    artVariant: "towers"
  },
  {
    slug: "1870-west",
    name: "1870 West",
    developer: "HassConsult",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Westlands, between Westgate and Sarit malls",
    lat: -1.2590,
    lng: 36.8028,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. Q1 2027",
    ledgerPos: 20,
    ledgerRow: "below",
    beds: "2 bed",
    description: "\u201CAtmospheric residences at the crown jewel of Westlands.\u201D 1870 West's full 32-storey structure is complete, rising above Lower Kabete Road near the Westgate roundabout, with interior fit-out now underway across the tower.",
    longDescription: "Westlands has consolidated as Nairobi's second business district, and 1870 West is built around that shift — a serviced address for people who work in or near Westlands and want to cut the commute down to a walk, whether they're staying a week or a year. As of the September 2025 site progress report, all 32 floors (including both amenity floors and the roof) have been cast and the structure stands complete; block walling, plastering and screed works are finished, while tiling, ceilings, doors, lifts and MEP fit-out continue floor by floor.",
    facts: [
      { label: "Status", value: "Under construction" },
      { label: "Target", value: "2027 Q1" },
      { label: "Unit size", value: "92 sqm gross area" },
      { label: "Developer", value: "HassConsult" },
      { label: "Neighbourhood", value: "Westlands, between Westgate and Sarit malls" }
    ],
    specs: [
      { label: "Unit type", value: "2 bed, plus 2 bathroom, fully furnished" },
      { label: "Parking", value: "1 car park" },
      { label: "Construction stage (Sep 2025 report)", value: "32-storey structure & roof cast \u2014 tiling, ceilings, doors, lifts and MEP fit-out ongoing" },
      { label: "Project team", value: "Architect: Bowman Associates \u00B7 Main contractor: Zhejiang Chengjian Construction Africa (ZJCC) \u00B7 Project managers: LMJ Consultancy \u00B7 Development manager & selling agent: HassConsult" }
    ],
    gallery: [
      { src: "assets/img/1870 under construction.jpg", caption: "Under construction \u2014 early stage" },
      { src: "assets/img/1870 under construction1.jpg", caption: "Under construction \u2014 tower rising" },
      { src: "assets/img/1870 under construction2.jpg", caption: "Under construction \u2014 street view" }
    ],
    coverImage: "assets/img/1870 under construction1.jpg",
    artVariant: "towers"
  },
  {
    slug: "gemini",
    name: "Gemini",
    developer: "Staroot",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Brookside, Westlands, near Waiyaki Way",
    lat: -1.2592,
    lng: 36.7920,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. 2027",
    ledgerPos: 31,
    ledgerRow: "above",
    beds: "2 bed",
    description: "\u201CWhere the stars live.\u201D Gemini rises in Westlands' Brookside pocket, near Waiyaki Way, from the team behind Capricorn — with Kenya's first rooftop paddle court, a heated infinity pool, and a skyline view over the city.",
    longDescription: "Gemini pairs a quiet Brookside address with resort-grade amenities rarely found outside a hotel: a courtyard pool and garden at ground level, a co-work space and private cinema for downtime, and a rooftop that turns into Kenya's first sky-high paddle court and heated infinity pool. Built by Staroot — the team behind Capricorn in Kilimani — with Proxima Real Estate as development consultants.",
    facts: [
      { label: "Status", value: "Under construction" },
      { label: "Unit size", value: "58 sqm gross area" },
      { label: "Developer", value: "Staroot" },
      { label: "Neighbourhood", value: "Brookside, Westlands, near Waiyaki Way" }
    ],
    specs: [
      { label: "Unit type", value: "2 bed, 2 bath, fully furnished, top floor facing CBD" },
      { label: "Parking", value: "1 car park" },
      { label: "Construction works", value: "Structure complete" },
      { label: "Development consultant", value: "Proxima Real Estate" }
    ],
    amenities: [
      "Rooftop lounge & bar",
      "Kenya's first rooftop paddle court",
      "Heated rooftop infinity pool",
      "Rooftop barbecue terrace",
      "Courtyard pool & garden",
      "Fully equipped gym (Star Fit) & yoga studio",
      "Spa / sauna",
      "Private cinema",
      "Co-work space",
      "Children's play area",
      "Coffee shop",
      "Arrival concierge",
      "24/7 security",
      "Car parking"
    ],
    investment: [
      { label: "Average price (1 & 2 bed)", value: "KES 16.5M" },
      { label: "Average ROI", value: "11.2%" },
      { label: "Average monthly rental", value: "KES 125,000" },
      { label: "Rental growth (3 yrs)", value: "12%" },
      { label: "Price growth (3 yrs)", value: "27%" },
      { label: "Airbnb occupancy", value: "72%" },
      { label: "Payment plan", value: "30% deposit \u00B7 50% during construction \u00B7 20% on completion" }
    ],
    gallery: [
      { src: "assets/img/gemini phase 2.jpg", caption: "Exterior render \u2014 night" },
      { src: "assets/img/gemini living room.jpg", caption: "Living room" },
      { src: "assets/img/gemini living room1.jpg", caption: "Living room \u2014 pool view" },
      { src: "assets/img/gemini kitchen.jpg", caption: "Kitchen" },
      { src: "assets/img/gemini bedroom.jpg", caption: "Bedroom" },
      { src: "assets/img/gemini balcony relaxing area.jpg", caption: "Balcony" },
      { src: "assets/img/gemini artcafte.jpg", caption: "Artcaff\u00E9" },
      { src: "assets/img/gemini gym.jpg", caption: "Gym" },
      { src: "assets/img/gemini rooftop play pouch.jpg", caption: "Rooftop paddle court" },
      { src: "assets/img/gemini under construction.jpg", caption: "Under construction" }
    ],
    coverImage: "assets/img/gemini phase 2.jpg",
    artVariant: "towers"
  },
  {
    slug: "kai-apartments",
    name: "Kai Apartments",
    developer: "HassConsult, AYCE Investments and Studio OMT Architects",
    region: "coast",
    regionLabel: "Coast",
    neighbourhood: "Diani Beach Road, near central Diani, Carrefour and the airport",
    lat: -4.2950,
    lng: 39.5825,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. Q3 2027",
    ledgerPos: 37,
    ledgerRow: "below",
    beds: "1 bed",
    description: "Kai — \u201Cthe ultimate seaside escape\u201D — sits inland of Diani's beach strip, a Grade A development already 75% sold. Meticulously crafted 1- and 2-bedroom residences across four floors, from Kshs 10.5M, with an elevated rooftop pool and sunken lounge above the treeline.",
    longDescription: "Diani continues to draw both short-stay holidaymakers and a growing base of remote workers relocating from Nairobi. Kai is built for long stays as much as short ones — a real, serviced address, not just a holiday unit, just a short stroll to the beach. Ground-floor residences come with private gardens; upper floors share a rooftop infinity pool, sunken pool lounge and oceanview retreat cabanas.",
    facts: [
      { label: "Status", value: "Under construction \u2014 75% sold" },
      { label: "Unit size", value: "62 sqm gross area" },
      { label: "Developer", value: "HassConsult, AYCE Investments and Studio OMT Architects" },
      { label: "Neighbourhood", value: "Diani Beach Road, near central Diani, Carrefour and the airport" }
    ],
    specs: [
      { label: "Target occupancy", value: "2027 Q3" },
      { label: "Unit type", value: "One bed, one bath, fully furnished" },
      { label: "Construction stage", value: "Initial structure finished" },
      { label: "Access", value: "10 minutes from Diani Airport \u00B7 57 minutes from Mombasa International Airport via the Dongo Kundu Bypass" }
    ],
    pricing: [
      {
        type: "1 Bed Residence",
        details: [
          { label: "Price", value: "Kshs 10.5M" },
          { label: "Value on completion", value: "Kshs 12M" },
          { label: "Deposit", value: "Kshs 3.15M" },
          { label: "30 monthly instalments", value: "Kshs 210,000" },
          { label: "Completion payment", value: "Kshs 1.05M" },
          { label: "Capital gains (2 yrs)", value: "15%" },
          { label: "Rental furnished yield", value: "10%" }
        ]
      },
      {
        type: "2 Bed Residence",
        details: [
          { label: "Price", value: "Kshs 19M" },
          { label: "Value on completion", value: "Kshs 20.9M" },
          { label: "Deposit", value: "Kshs 5.7M" },
          { label: "30 monthly instalments", value: "Kshs 380,000" },
          { label: "Completion payment", value: "Kshs 1.9M" },
          { label: "Capital gains (2 yrs)", value: "10%" },
          { label: "Rental furnished yield", value: "10%" }
        ]
      }
    ],
    amenities: [
      "Rooftop infinity swimming pool",
      "Sunken pool lounge",
      "Oceanview retreat cabanas",
      "Private gardens (ground floor residences)",
      "Grade A seaside finishes"
    ],
    gallery: [
      { src: "assets/img/kai diani.jpg", caption: "Diani — seaside setting" },
      { src: "assets/img/kai aeria view.jpeg", caption: "Aerial view" },
      { src: "assets/img/kai living area.jpg", caption: "Living area" },
      { src: "assets/img/kai pool area.jpg", caption: "Pool area — evening" },
      { src: "assets/img/kai pool with view to the ocean.jpg", caption: "Rooftop pool — ocean view" },
      { src: "assets/img/kai balcon view.jpeg", caption: "Balcony with private bath" },
      { src: "assets/img/kai balcon view 1.jpeg", caption: "Balcony — ocean view" },
      { src: "assets/img/kai interior renders.jpeg", caption: "Bedroom — ocean view" }
    ],
    coverImage: "assets/img/kai aeria view.jpeg",
    artVariant: "coast"
  },
  {
    slug: "enaki",
    name: "Enaki",
    developer: "HassConsult",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Village Market, near UN embassies, resort amenities",
    lat: -1.222769,
    lng: 36.786828,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. Q4 2028",
    ledgerPos: 77,
    ledgerRow: "above",
    beds: "1 bed",
    description: "\u201CThe art of the possible.\u201D Enaki is a 22-acre mixed-use town on Red Hill Road, right on the edge of Nyari, Gigiri and Kitisuru — a walkable district anchored by a 6.3-acre botanical garden on one end and a retail Town Square on the other, with the residences woven between.",
    longDescription: "Enaki takes its name from Enso, the Japanese zen symbol for the circle of togetherness, and Koiyaki, a Maasai name meaning \u201Cone of a good heart.\u201D Set within the UN-approved \u201Cblue zone,\u201D the 22-acre masterplan runs from the Five Senses Botanical Garden at one end, through the Living Parkside and Living Townside residences, to the Town Square at the other \u2014 all connected by the pedestrian Enaki Walk and the Enso Bridge. Living Townside's 1- and 2-bed residences sit closest to the Town Square, with access to a fitness pool, zen pool, gym, dance studio, screening room and sports lounge.",
    facts: [
      { label: "Status", value: "Under construction" },
      { label: "Target", value: "2028 Q4" },
      { label: "Unit size", value: "63 sqm gross area" },
      { label: "Developer", value: "HassConsult" },
      { label: "Neighbourhood", value: "Village Market, near UN embassies, resort amenities" }
    ],
    specs: [
      { label: "Target occupancy", value: "2028 Q4" },
      { label: "Unit type", value: "One bed, one bath, fully furnished" },
      { label: "Development scale", value: "22 acres \u2014 Five Senses Botanical Garden (6.3 acres) \u00B7 residential resort (9.6 acres) \u00B7 Town Square (6.2 acres)" },
      { label: "Coordinates", value: "-1.222769, 36.786828" },
      { label: "Project team", value: "Architect: Bowman & Associates \u00B7 Project manager: Limojade Management \u00B7 Botanical garden master planner: iGreens, Spain" }
    ],
    amenities: [
      "Five Senses Botanical Garden (6.3 acres)",
      "Enaki Walk & Enso Bridge",
      "The Duka convenience store",
      "Business Hub & Reading Room",
      "Dance Studio & Screening Room",
      "Sports Lounge",
      "Gymnasium & Juice Bar",
      "19m Fitness Pool",
      "Zen Pool with steam room & sauna",
      "Leisure Pool & Play Pod",
      "Anko Forest",
      "Town Square \u2014 50+ retail outlets",
      "Grand reception lobby & concierge",
      "Golf cart route"
    ],
    gallery: [
      { src: "assets/img/enaki.jpeg", caption: "Landscaped garden walk" },
      { src: "assets/img/enaki aerial view.jpeg", caption: "Aerial view" },
      { src: "assets/img/enaki apartment view.jpeg", caption: "Exterior — entrance" }
    ],
    coverImage: "assets/img/enaki apartment view.jpeg",
    artVariant: "towers"
  },
  {
    slug: "sensei",
    name: "Sensei",
    developer: "HassConsult, AYCE Investments and Studio OMT Architects",
    region: "coast",
    regionLabel: "Coast",
    neighbourhood: "Nyali, Mombasa — private beach, south end of Nyali Beach, resort amenities",
    lat: -4.0600,
    lng: 39.7050,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. Q1 2029",
    ledgerPos: 85,
    ledgerRow: "below",
    beds: "1 bed duplex",
    description: "Sensei brings Afra<span class=\"v-flag\">V</span>iva's portfolio to one of Mombasa's premier beachside locations, on a private stretch at the south end of Nyali Beach, with occupancy targeted for Q1 2029.",
    longDescription: "Nyali is Mombasa's most established residential and short-stay address, and Sensei sits on a private beach at the south end of Nyali Beach with resort-style amenities. Sensei is being built to the same serviced standard as Afra<span class=\"v-flag\">V</span>iva's Nairobi properties, giving the coast portfolio a second anchor alongside Diani.",
    facts: [
      { label: "Status", value: "Under construction" },
      { label: "Target", value: "2029 Q1" },
      { label: "Unit size", value: "130 sqm" },
      { label: "Developer", value: "HassConsult, AYCE Investments and Studio OMT Architects" },
      { label: "Neighbourhood", value: "Nyali, Mombasa — private beach, south end of Nyali Beach, resort amenities" }
    ],
    specs: [
      { label: "Target occupancy", value: "2029 Q1" },
      { label: "Unit type", value: "One bed, split-level duplex with two seaside balcony views" }
    ],
    artVariant: "coast"
  },
  {
    slug: "eighth-address",
    name: "The Eighth Address",
    developer: "To be announced",
    region: "tbc",
    regionLabel: "To be announced",
    neighbourhood: "Location to be announced",
    status: "tbc",
    statusLabel: "Coming soon",
    quarterLabel: "Est. 2029",
    ledgerPos: 96,
    ledgerRow: "above",
    beds: "—",
    description: "Afra<span class=\"v-flag\">V</span>iva's portfolio keeps growing — an eighth address is on the slate, with location and developer still to be announced.",
    longDescription: "",
    facts: [],
    specs: [],
    artVariant: "tbc"
  }
];

function afravivaGetProperty(slug){
  return AFRAVIVA_PROPERTIES.find(p => p.slug === slug);
}
