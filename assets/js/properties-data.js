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
      { label: "Unit size", value: "153 sqm gross area" },
      { label: "Developer", value: "Hayer One" },
      { label: "Neighbourhood", value: "Kileleshwa / Lavington Green" }
    ],
    specs: [
      { label: "Occupancy", value: "Immediate" },
      { label: "Unit type", value: "3 bedroom, fully furnished, 2 baths, SQ, 2 balconies" },
      { label: "Parking", value: "2 parking spots plus a storage room" }
    ],
    gallery: [
      { src: "assets/img/marquis.jpg", alt: "The Marquis — exterior" },
      { src: "assets/img/marquis 1.jpg", alt: "The Marquis — exterior view" },
      { src: "assets/img/marquis general view.jpg", alt: "The Marquis — general view" },
      { src: "assets/img/marquis living room.jpg", alt: "The Marquis — living room" },
      { src: "assets/img/marquis kitchen.jpg", alt: "The Marquis — kitchen" },
      { src: "assets/img/marquis bathroom.jpg", alt: "The Marquis — bathroom" },
      { src: "assets/img/marquis in.jpg", alt: "The Marquis — interior" },
      { src: "assets/img/marquis in 1.jpg", alt: "The Marquis — interior" },
      { src: "assets/img/marquis in 2.jpg", alt: "The Marquis — interior" },
      { src: "assets/img/marquis in 3.jpg", alt: "The Marquis — interior" },
      { src: "assets/img/marquis gym.jpg", alt: "The Marquis — gym" },
      { src: "assets/img/marquis pool.jpg", alt: "The Marquis — pool" },
      { src: "assets/img/marquis playground for kids.jpg", alt: "The Marquis — children's playground" },
      { src: "assets/img/marquis playground for kids1.jpg", alt: "The Marquis — children's playground" }
    ],
    artVariant: "towers"
  },
  {
    slug: "capricorn",
    name: "Capricorn",
    developer: "Staroot",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Kilimani, across from Yaya Centre",
    lat: -1.2932,
    lng: 36.7869,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. Q4 2026",
    ledgerPos: 12,
    ledgerRow: "above",
    beds: "2 bed",
    description: "Staroot's Capricorn is rising in Kilimani, a short walk from Yaya Centre and the neighbourhood's café strip. Reservations are open ahead of a targeted Q4 2026 handover.",
    longDescription: "Kilimani remains Nairobi's most in-demand serviced-apartment zone for young professionals and short-stay guests alike, and Capricorn is positioned to serve that demand directly — walkable to shopping, restaurants, and coworking spaces, with a construction timeline that puts occupancy in the final quarter of 2026.",
    facts: [
      { label: "Status", value: "Under construction" },
      { label: "Target", value: "Q4 2026 (estimated)" },
      { label: "Unit size", value: "103 sqm gross area" },
      { label: "Developer", value: "Staroot" },
      { label: "Neighbourhood", value: "Kilimani, across from Yaya Centre" }
    ],
    specs: [
      { label: "Target occupancy", value: "Q4 2026 — estimated" },
      { label: "Unit type", value: "2 bed, furnished, 2 bath, top floor view towards CBD" },
      { label: "Parking", value: "1 car park" }
    ],
    gallery: [
      { src: "assets/img/capricon aerialview.jpg", alt: "Capricorn — aerial view" },
      { src: "assets/img/capricon living room.jpg", alt: "Capricorn — living room" },
      { src: "assets/img/capricon living room1.jpg", alt: "Capricorn — living room" },
      { src: "assets/img/capricon kitchen.jpg", alt: "Capricorn — kitchen" },
      { src: "assets/img/capricon bedroom.jpg", alt: "Capricorn — bedroom" }
    ],
    artVariant: "towers"
  },
  {
    slug: "1870-west",
    name: "1870 West",
    developer: "1870 West Limited",
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
      { label: "Status", value: "Under construction \u2014 structure complete" },
      { label: "Unit size", value: "92 sqm gross area" },
      { label: "Developer", value: "1870 West Limited" },
      { label: "Neighbourhood", value: "Westlands, between Westgate and Sarit malls" }
    ],
    specs: [
      { label: "Unit type", value: "2 bed, plus 2 bathroom, fully furnished" },
      { label: "Parking", value: "1 car park" },
      { label: "Construction stage (Sep 2025 report)", value: "32-storey structure & roof cast \u2014 tiling, ceilings, doors, lifts and MEP fit-out ongoing" },
      { label: "Project team", value: "Architect: Bowman Associates \u00B7 Main contractor: Zhejiang Chengjian Construction Africa (ZJCC) \u00B7 Project managers: LMJ Consultancy \u00B7 Development manager & selling agent: HassConsult" }
    ],
    gallery: [
      { src: "assets/img/1870 under construction.jpg", alt: "1870 West \u2014 under construction" },
      { src: "assets/img/1870 under construction1.jpg", alt: "1870 West \u2014 under construction" },
      { src: "assets/img/1870 under construction2.jpg", alt: "1870 West \u2014 under construction" }
    ],
    artVariant: "towers"
  },
  {
    slug: "gemini",
    name: "Gemini",
    developer: "Staroot Real Estate",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Matundu Lane, Brookside, Westlands — near Sarit Centre",
    lat: -1.2592,
    lng: 36.7920,
    status: "progress",
    statusLabel: "Under construction",
    quarterLabel: "Est. 2027",
    ledgerPos: 31,
    ledgerRow: "above",
    beds: "1 & 2 bed",
    description: "\u201CWhere the stars live.\u201D Gemini rises on Matundu Lane in Westlands' Brookside pocket, a minute from Sarit Centre, from the team behind Capricorn — with Kenya's first rooftop paddle court, a heated infinity pool, and a skyline view over the city.",
    longDescription: "Gemini pairs a quiet Brookside address with resort-grade amenities rarely found outside a hotel: a courtyard pool and garden at ground level, a co-work space and private cinema for downtime, and a rooftop that turns into Kenya's first sky-high paddle court and heated infinity pool. Built by Staroot Real Estate — the team behind Capricorn in Kilimani — with Proxima Real Estate as development consultants.",
    facts: [
      { label: "Status", value: "Under construction" },
      { label: "Unit sizes", value: "1 bed \u2013 58 sqm \u00B7 2 bed \u2013 90 sqm" },
      { label: "Developer", value: "Staroot Real Estate" },
      { label: "Neighbourhood", value: "Matundu Lane, Brookside, Westlands \u2014 near Sarit Centre" }
    ],
    specs: [
      { label: "Unit on offer", value: "2 bed, 2 bath, fully furnished, top floor facing CBD" },
      { label: "Parking", value: "1 car park" },
      { label: "Construction stage", value: "Structure complete \u2014 interior fit-out underway" },
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
      { src: "assets/img/gemini phase 2.jpg", alt: "Gemini \u2014 phase 2" },
      { src: "assets/img/gemini living room.jpg", alt: "Gemini \u2014 living room" },
      { src: "assets/img/gemini living room1.jpg", alt: "Gemini \u2014 living room" },
      { src: "assets/img/gemini kitchen.jpg", alt: "Gemini \u2014 kitchen" },
      { src: "assets/img/gemini bedroom.jpg", alt: "Gemini \u2014 bedroom" },
      { src: "assets/img/gemini balcony relaxing area.jpg", alt: "Gemini \u2014 balcony relaxing area" },
      { src: "assets/img/gemini artcafte.jpg", alt: "Gemini \u2014 art caf\u00E9" },
      { src: "assets/img/gemini gym.jpg", alt: "Gemini \u2014 gym" },
      { src: "assets/img/gemini rooftop play pouch.jpg", alt: "Gemini \u2014 rooftop play area" },
      { src: "assets/img/gemini under construction.jpg", alt: "Gemini \u2014 under construction" }
    ],
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
    beds: "1 & 2 bed",
    description: "Kai — \u201Cthe ultimate seaside escape\u201D — sits inland of Diani's beach strip, a Grade A development already 75% sold. Meticulously crafted 1- and 2-bedroom residences across four floors, from Kshs 10.5M, with an elevated rooftop pool and sunken lounge above the treeline.",
    longDescription: "Diani continues to draw both short-stay holidaymakers and a growing base of remote workers relocating from Nairobi. Kai is built for long stays as much as short ones — a real, serviced address, not just a holiday unit, just a short stroll to the beach. Ground-floor residences come with private gardens; upper floors share a rooftop infinity pool, sunken pool lounge and oceanview retreat cabanas.",
    facts: [
      { label: "Status", value: "Under construction \u2014 75% sold" },
      { label: "Unit size", value: "69 sqm gross area" },
      { label: "Developer", value: "HassConsult, AYCE Investments and Studio OMT Architects" },
      { label: "Neighbourhood", value: "Diani Beach Road, near central Diani, Carrefour and the airport" }
    ],
    specs: [
      { label: "Unit types (full range)", value: "Mini 1 Bed (373\u2013374 sq.ft) \u00B7 1 Bed (614\u2013981 sq.ft) \u00B7 1 Bed with Private Garden (630\u20131,263 sq.ft) \u00B7 2 Bed (1,029\u20131,093 sq.ft) \u00B7 2 Bed Plus (1,419 sq.ft) \u00B7 2 Bed Plus with Private Garden (2,710\u20132,804 sq.ft)" },
      { label: "Construction stage", value: "Upper floors in progress \u2014 75% of units sold" },
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
      { src: "assets/img/kai diani.jpg", alt: "Kai Apartments — Diani" },
      { src: "assets/img/kai living area.jpg", alt: "Kai Apartments — living area" },
      { src: "assets/img/kai pool area.jpg", alt: "Kai Apartments — pool area" },
      { src: "assets/img/kai pool with view to the ocean.jpg", alt: "Kai Apartments — pool with ocean view" }
    ],
    artVariant: "coast"
  },
  {
    slug: "enaki",
    name: "Enaki",
    developer: "Rosslyn Suites Ltd",
    region: "nairobi",
    regionLabel: "Nairobi",
    neighbourhood: "Red Hill Road, Nyari \u2014 between Gigiri, Kitisuru and Village Market",
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
      { label: "Unit size", value: "63 sqm gross area" },
      { label: "Developer", value: "Rosslyn Suites Ltd (HassConsult \u2014 development manager & selling agent)" },
      { label: "Neighbourhood", value: "Red Hill Road, Nyari \u2014 between Gigiri, Kitisuru and Village Market" }
    ],
    specs: [
      { label: "Unit type", value: "One bed, one bath, fully furnished (Living Townside)" },
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
      { label: "Target", value: "Q1 2029 (estimated)" },
      { label: "Unit size", value: "130 sqm" },
      { label: "Developer", value: "HassConsult, AYCE Investments and Studio OMT Architects" },
      { label: "Neighbourhood", value: "Nyali, Mombasa — private beach, south end of Nyali Beach, resort amenities" }
    ],
    specs: [
      { label: "Target occupancy", value: "Q1 2029" },
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
