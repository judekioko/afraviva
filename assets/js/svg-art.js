/* ===========================================================
   AFRAVIVA HOMES — generative building silhouettes
   No stock photography; consistent brand-colour illustrations
   keyed to each property's variant + status.
   =========================================================== */

const AFRAVIVA_PALETTE = {
  ready:    { bg:"#DDE6DC", fg:"#2C4A3B", accent:"#8FCB9E", win:"#F1ECDC" },
  progress: { bg:"#F1E4C9", fg:"#8A6323", accent:"#B98A46", win:"#F7EFDC" },
  tbc:      { bg:"#EAE4D6", fg:"#8C877A", accent:"#C9C3B2", win:"#F1ECDC" }
};

function windows(x, y, w, h, cols, rows, fill){
  let out = "";
  const gx = w / cols, gy = h / rows;
  const pad = Math.min(gx, gy) * 0.28;
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      out += `<rect x="${(x+c*gx+pad).toFixed(1)}" y="${(y+r*gy+pad).toFixed(1)}" width="${(gx-pad*2).toFixed(1)}" height="${(gy-pad*2).toFixed(1)}" fill="${fill}" opacity="${(0.5+Math.random()*0.5).toFixed(2)}"/>`;
    }
  }
  return out;
}

function towersSVG(status){
  const p = AFRAVIVA_PALETTE[status] || AFRAVIVA_PALETTE.progress;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect width="400" height="300" fill="${p.bg}"/>
    <line x1="0" y1="292" x2="400" y2="292" stroke="${p.fg}" stroke-width="1" opacity="0.25"/>
    <rect x="60" y="112" width="70" height="180" fill="${p.fg}" opacity="0.92"/>
    ${windows(60,112,70,180,4,11,p.win)}
    <rect x="150" y="62" width="90" height="230" fill="${p.fg}"/>
    ${windows(150,62,90,230,5,14,p.win)}
    <rect x="258" y="140" width="62" height="152" fill="${p.fg}" opacity="0.85"/>
    ${windows(258,140,62,152,3,10,p.win)}
    <circle cx="336" cy="66" r="20" fill="${p.accent}" opacity="0.8"/>
  </svg>`;
}

function coastSVG(status){
  const p = AFRAVIVA_PALETTE[status] || AFRAVIVA_PALETTE.progress;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect width="400" height="300" fill="${p.bg}"/>
    <line x1="0" y1="285" x2="400" y2="285" stroke="${p.fg}" stroke-width="1" opacity="0.25"/>
    <rect x="70" y="150" width="260" height="135" fill="${p.fg}" opacity="0.9"/>
    ${windows(70,150,260,135,10,5,p.win)}
    <rect x="110" y="112" width="140" height="42" fill="${p.fg}"/>
    ${windows(110,112,140,42,7,2,p.win)}
    <path d="M40 285 C40 235 20 205 8 195 C26 201 46 221 54 250 C58 221 78 197 96 191 C82 211 68 245 68 285 Z" fill="${p.accent}" opacity="0.85"/>
    <path d="M360 285 C360 245 344 221 332 213 C348 217 364 233 370 255 C374 233 390 215 400 211 C388 227 378 253 378 285 Z" fill="${p.accent}" opacity="0.7"/>
    <circle cx="330" cy="60" r="18" fill="${p.accent}" opacity="0.6"/>
  </svg>`;
}

function tbcSVG(){
  const p = AFRAVIVA_PALETTE.tbc;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect width="400" height="300" fill="${p.bg}"/>
    <rect x="90" y="90" width="220" height="150" fill="none" stroke="${p.fg}" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.6"/>
    <text x="200" y="175" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="12" letter-spacing="1.5" fill="${p.fg}" opacity="0.7">DETAILS PENDING</text>
  </svg>`;
}

function afravivaArt(variant, status){
  if(variant === "coast") return coastSVG(status);
  if(variant === "tbc") return tbcSVG();
  return towersSVG(status);
}

/* ===========================================================
   "Classic Kenya" montage strip — three illustrated vignettes,
   original brand-style artwork (no photography), standing in
   for Greg's requested photo montage until real, rights-cleared
   photography is available.
   =========================================================== */
function montageNairobiSVG(){
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect width="400" height="260" fill="#DDE6DC"/>
    <rect x="40" y="90" width="46" height="140" fill="#2C4A3B"/>
    <rect x="96" y="60" width="58" height="170" fill="#2C4A3B"/>
    <rect x="164" y="100" width="42" height="130" fill="#2C4A3B" opacity="0.9"/>
    <rect x="216" y="40" width="64" height="190" fill="#1B2F26"/>
    <rect x="290" y="82" width="50" height="148" fill="#2C4A3B" opacity="0.85"/>
    <circle cx="330" cy="46" r="16" fill="#B98A46" opacity="0.8"/>
    <line x1="0" y1="230" x2="400" y2="230" stroke="#1B2F26" stroke-width="1" opacity="0.3"/>
    <text x="20" y="252" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="1.5" fill="#33413A" opacity="0.6">NAIROBI</text>
  </svg>`;
}
function montageSavannaSVG(){
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect width="400" height="260" fill="#F1E4C9"/>
    <circle cx="330" cy="60" r="30" fill="#B98A46" opacity="0.55"/>
    <path d="M0 230 Q100 214 200 228 T400 224 V260 H0 Z" fill="#C9A15C" opacity="0.5"/>
    <g>
      <line x1="90" y1="150" x2="90" y2="228" stroke="#8A6323" stroke-width="5" stroke-linecap="round"/>
      <path d="M90 150 L60 132 M90 150 L118 130 M90 150 L90 118" stroke="#8A6323" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="90" cy="112" rx="58" ry="14" fill="#6E7F52"/>
      <ellipse cx="58" cy="122" rx="26" ry="9" fill="#6E7F52"/>
      <ellipse cx="126" cy="120" rx="28" ry="9" fill="#6E7F52"/>
    </g>
    <g opacity="0.75">
      <line x1="200" y1="180" x2="200" y2="228" stroke="#8A6323" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M200 180 L182 168 M200 180 L219 167" stroke="#8A6323" stroke-width="3" stroke-linecap="round"/>
      <ellipse cx="200" cy="160" rx="36" ry="9" fill="#6E7F52"/>
    </g>
    <ellipse cx="90" cy="232" rx="44" ry="6" fill="#8A6323" opacity="0.22"/>
    <ellipse cx="200" cy="232" rx="30" ry="5" fill="#8A6323" opacity="0.18"/>
    <line x1="0" y1="230" x2="400" y2="230" stroke="#8A6323" stroke-width="1" opacity="0.25"/>
    <text x="20" y="252" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="1.5" fill="#6E5A33" opacity="0.65">THE SAVANNAH</text>
  </svg>`;
}
function montageCoastSVG(){
  return `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax slice">
    <rect width="400" height="260" fill="#E3EEF0"/>
    <circle cx="60" cy="54" r="22" fill="#B98A46" opacity="0.7"/>
    <path d="M0 190 Q100 170 200 188 T400 182 V260 H0 Z" fill="#A8452C" opacity="0.16"/>
    <path d="M0 210 Q100 195 200 208 T400 202 V260 H0 Z" fill="#2C4A3B" opacity="0.22"/>
    <path d="M170 208 L170 130 L232 190 Z" fill="#2C4A3B" opacity="0.85"/>
    <line x1="170" y1="130" x2="170" y2="212" stroke="#1B2F26" stroke-width="2.5"/>
    <path d="M118 208 Q170 224 232 208 Q214 220 170 222 Q140 222 118 208 Z" fill="#1B2F26"/>
    <line x1="0" y1="232" x2="400" y2="232" stroke="#1B2F26" stroke-width="1" opacity="0.2"/>
    <text x="20" y="252" font-family="IBM Plex Mono, monospace" font-size="11" letter-spacing="1.5" fill="#33413A" opacity="0.6">THE COAST</text>
  </svg>`;
}

/* ===========================================================
   Schematic location map — Nairobi cluster (5 neighbourhoods)
   + Coast cluster (2), plus the 8th address pending. Explicitly
   illustrative / not to scale — no licensed map data used.
   =========================================================== */
function afravivaLocationMap(){
  const nairobi = [
    { x: 120, y: 96,  label: "Kileleshwa / Lavington" },
    { x: 210, y: 62,  label: "Kilimani" },
    { x: 300, y: 96,  label: "Westlands" },
    { x: 330, y: 172, label: "Brookside" },
    { x: 150, y: 190, label: "Village Market" }
  ];
  const coast = [
    { x: 560, y: 150, label: "Nyali, Mombasa" },
    { x: 610, y: 230, label: "Diani" }
  ];
  const pin = (x,y,fill,ring) => `
    <circle cx="${x}" cy="${y}" r="9" fill="${fill}" stroke="${ring}" stroke-width="2"/>
    <circle cx="${x}" cy="${y}" r="2.4" fill="#FBF9F2"/>`;
  const label = (x,y,text,anchor) => `
    <text x="${x}" y="${y}" text-anchor="${anchor||'middle'}" font-family="IBM Plex Mono, monospace" font-size="11.5" letter-spacing="0.02em" fill="#33413A">${text}</text>`;

  let out = `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="700" height="300" fill="#F1ECDC"/>
    <line x1="430" y1="20" x2="430" y2="280" stroke="#B98A46" stroke-width="1" stroke-dasharray="4 6" opacity="0.6"/>
    <text x="60" y="34" font-family="Fraunces, serif" font-size="18" font-weight="600" fill="#2C4A3B">Nairobi</text>
    <text x="470" y="34" font-family="Fraunces, serif" font-size="18" font-weight="600" fill="#A8452C">Coast</text>`;

  nairobi.forEach(n => {
    out += pin(n.x, n.y, "#2C4A3B", "#F1ECDC");
    out += label(n.x, n.y+22, n.label);
  });
  coast.forEach(c => {
    out += pin(c.x, c.y, "#A8452C", "#F1ECDC");
    out += label(c.x, c.y+22, c.label);
  });

  // dashed "8th address" marker, unplaced
  out += `<circle cx="650" cy="60" r="9" fill="none" stroke="#8C877A" stroke-width="2" stroke-dasharray="3 3"/>`;
  out += label(650, 82, "8th — TBA");

  out += `<text x="350" y="292" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="10" letter-spacing="0.05em" fill="#6E6A5C" opacity="0.7">KENYA — ILLUSTRATIVE DIAGRAM, NOT TO SCALE</text>`;
  out += `</svg>`;
  return out;
}
