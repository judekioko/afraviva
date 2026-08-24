/* ===========================================================
   AFRAVIVA HOMES — shared behaviour
   =========================================================== */

const WHATSAPP_NUMBER = "254113781366";

function waLink(text){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function whatsappLink(propertyName){
  const msg = propertyName
    ? `Hi Afraviva Homes, I'd like to know more about renting at ${propertyName}.`
    : `Hi Afraviva Homes, I'd like to know more about renting one of your properties.`;
  return waLink(msg);
}

/* All enquiry/notify forms have no backend — submitting hands the
   visitor's details to WhatsApp instead, since that's the one
   channel on this static site that actually reaches the business. */
function openWhatsAppWithForm(text){
  window.open(waLink(text), "_blank", "noopener");
}

function flashButton(btn, text, duration){
  if(!btn) return;
  const original = btn.textContent;
  btn.textContent = text;
  setTimeout(() => { btn.textContent = original; }, duration || 2400);
}

/* ===========================================================
   Shared header/footer — single source of truth, injected into
   every page's #site-header / #site-footer mount points so a
   link or copy change only has to happen once.
   =========================================================== */
const SITE_HEADER_HTML = `<header class="site-header">
  <div class="wrap nav">
    <a href="index.html" class="brand">
      <img class="mark" src="assets/img/afraviva-logo-icon.png" alt="">
      <span class="brand-name">Afra<span class="v-flag">V</span>iva Homes</span>
    </a>
    <nav class="nav-links">
      <a href="index.html" data-page="index.html">Home</a>
      <a href="properties.html" data-page="properties.html">Properties</a>
      <a href="about.html" data-page="about.html">About</a>
      <a href="contact.html" data-page="contact.html">Contact</a>
    </nav>
    <div class="nav-cta">
      <a href="contact.html" class="btn btn-ghost"><span class="btn-label">Enquire</span></a>
      <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>`;
const SITE_FOOTER_HTML = `<footer class="site-footer">
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="footer-brand">
          <svg class="mark" viewBox="0 0 100 110" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#D9A552" stroke-width="3.4" stroke-linecap="round" opacity="0.95">
              <line x1="23.15" y1="39.83" x2="6.41" y2="36.88"/>
            <line x1="23.15" y1="39.83" x2="5.93" y2="31.80"/>
            <line x1="23.15" y1="39.83" x2="7.06" y2="26.33"/>
            <line x1="23.15" y1="39.83" x2="11.68" y2="23.45"/>
            <line x1="23.15" y1="39.83" x2="16.99" y2="22.92"/>
            <line x1="23.15" y1="39.83" x2="21.84" y2="24.89"/>
            <line x1="23.15" y1="39.83" x2="25.41" y2="27.03"/>
            <line x1="23.15" y1="39.83" x2="28.22" y2="28.95"/>
            <line x1="23.15" y1="39.83" x2="31.51" y2="29.87"/>
            <line x1="23.15" y1="39.83" x2="36.14" y2="32.33"/>
            <line x1="23.15" y1="39.83" x2="39.89" y2="36.88"/>
            <line x1="23.15" y1="39.83" x2="40.88" y2="42.96"/>
            </g>
            <circle cx="23.15" cy="39.83" r="11" fill="none" stroke="#D9A552" stroke-width="3.4" opacity="0.95"/>
            <path d="M83.073,62.506L83.058,66.67L84.281,68.685L84.781,73.551L83.343,75.837L78.279,79.339L79.123,82.021L78.556,84.843L76.157,87.567L75.758,89.475L71.151,95.113L68.505,96.638L65.024,96.531L61.812,97.786L60.323,96.536L60.299,93.689L58.263,89.816L57.032,87.992L55.997,82.044L53.258,76.498L55.321,70.59L53.895,64.058L53.742,63.72L53.453,62.901L52.562,61.747L50.069,58.631L50.823,56.329L50.995,54.945L49.749,52.239L46.923,52.794L45.216,50.606L43.442,50.617L42.547,50.744L41.671,50.977L37.42,51.996L32.148,52.683L28.104,50.042L26.142,47.721L24.098,45.365L22.418,43.876L22.238,43.022L22.379,42.527L22.649,39.674L22.852,35.154L22,34.102L22.047,33.611L24.845,27.874L30.14,23.346L31.124,19.13L34.083,15.813L38.166,16.6L42.113,14.675L49.663,14.214L52.027,14.94L51.538,17.707L52.992,19.264L57.068,20.389L61.237,22.927L63.156,19.82L67.837,21.28L71.905,22.168L77.716,21.724L78.427,23.885L77.341,26.176L76.051,24.876L80.537,32.935L82.214,37.56L83.144,39.915L87.282,43.525L87.352,44.899L86.954,45.493L87.931,47.413L92.393,48.71L93.651,44.957L96,44.276L94.199,50.021L91.065,54.324L85.66,59.253Z" fill="#F1ECDC"/>
            <path d="M94.296,71.069L95.312,74.15L91.643,85.395L88.325,85.452L87.47,81.981L88.689,79.673L88.767,75.266L90.791,74.775Z" fill="#F1ECDC"/>
          </svg>
          <span class="brand-name">Afra<span class="v-flag">V</span>iva Homes</span>
        </div>
        <p style="max-width:32ch;font-size:14px;">Luxury serviced apartments across Nairobi and the Kenyan Coast, for short to long-term stay, shown honestly at whatever stage they're actually at.</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="properties.html">All properties</a></li>
          <li><a href="properties.html#nairobi">Nairobi</a></li>
          <li><a href="properties.html#coast">Coast</a></li>
          <li><a href="about.html">About Afra<span class="v-flag">V</span>iva</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Properties</h4>
        <ul>
          <li><a href="property.html?slug=the-marquis">The Marquis</a></li>
          <li><a href="property.html?slug=capricorn">Capricorn</a></li>
          <li><a href="property.html?slug=kai-apartments">Kai Apartments</a></li>
          <li><a href="property.html?slug=1870-west">1870 West</a></li>
          <li><a href="property.html?slug=gemini">Gemini</a></li>
          <li><a href="property.html?slug=enaki">Enaki</a></li>
          <li><a href="property.html?slug=sensei">Sensei</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Get in touch</h4>
        <ul>
          <li><a href="contact.html">Enquiry form</a></li>
          <li><a href="#" data-whatsapp="general">WhatsApp</a></li>
          <li><a href="mailto:hello@afravivahomes.co.ke">hello@afravivahomes.co.ke</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Afra<span class="v-flag">V</span>iva Homes, part of the <a href="https://africanext.biz" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;">AfricaNext Group</a>. All rights reserved.</span>
      <span>Nairobi · Diani · Mombasa</span>
    </div>
  </div>
</footer>`;

(function(){
  const headerMount = document.getElementById("site-header");
  if(headerMount) headerMount.outerHTML = SITE_HEADER_HTML;
  const footerMount = document.getElementById("site-footer");
  if(footerMount) footerMount.outerHTML = SITE_FOOTER_HTML;
})();

document.addEventListener("DOMContentLoaded", () => {

  /* ---- mobile nav ---- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if(toggle && links){
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  /* ---- active nav link ---- */
  const path = location.pathname.split("/").pop() || "index.html";
  const activePage = path === "property.html" ? "properties.html" : path;
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if(a.dataset.page === activePage) a.classList.add("active");
  });

  /* ---- reveal on scroll ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  /* ---- wire up any WhatsApp buttons ---- */
  document.querySelectorAll("[data-whatsapp]").forEach(el => {
    el.href = whatsappLink(el.dataset.whatsapp === "general" ? null : el.dataset.whatsapp);
  });

});

/* ---- enquiry/notify forms: route to WhatsApp ----
   Delegated on document (rather than bound per-form at page load) so
   forms re-rendered later — e.g. the property grid after a filter
   click — stay wired without needing to be rebound. */
document.addEventListener("submit", (e) => {
  const form = e.target;

  if(form.matches(".tbc-card form")){
    e.preventDefault();
    const emailInput = form.querySelector("input[type=email]");
    const propertyName = form.closest(".tbc-card")?.querySelector("h3")?.textContent?.trim();
    openWhatsAppWithForm(
      `Hi Afraviva Homes, please notify me at ${emailInput.value.trim()} when ${propertyName || "this property"}'s details are confirmed.`
    );
    flashButton(form.querySelector("button"), "Opening WhatsApp ✓");
    emailInput.value = "";
    return;
  }

  if(form.matches(".enquiry-box form") || form.matches(".contact-form")){
    e.preventDefault();
    const btn = form.querySelector("button[type=submit], .btn");
    const propertyName = document.querySelector(".p-name")?.textContent?.trim();
    const tbcEmail = form.querySelector("#tbc-email");

    let lines;
    if(tbcEmail){
      lines = [`Hi Afraviva Homes, please notify me at ${tbcEmail.value.trim()} when ${propertyName || "this property"}'s details are confirmed.`];
    } else {
      const name = form.querySelector("#name, #c-name")?.value.trim();
      const phone = form.querySelector("#phone, #c-phone")?.value.trim();
      const email = form.querySelector("#c-email")?.value.trim();
      const property = form.querySelector("#c-property")?.value.trim() || propertyName;
      const message = form.querySelector("#message, #c-message")?.value.trim();

      lines = [`Hi Afraviva Homes, I'd like to enquire.`, `Name: ${name}`, `Phone: ${phone}`];
      if(email) lines.push(`Email: ${email}`);
      if(property) lines.push(`Property: ${property}`);
      if(message) lines.push(`Message: ${message}`);
    }

    openWhatsAppWithForm(lines.join("\n"));
    flashButton(btn, "Opening WhatsApp ✓", 2600);
    form.reset();
  }
});

/* ===========================================================
   Property card renderer — used on home + listing pages
   =========================================================== */
function afravivaCardArtHTML(p){
  return p.coverImage
    ? `<img src="${p.coverImage}" alt="${p.name}" loading="lazy">`
    : afravivaArt(p.artVariant, p.status);
}

function afravivaCardHTML(p){
  if(p.status === "tbc"){
    return `
    <div class="p-card">
      <div class="p-card-art">${afravivaCardArtHTML(p)}</div>
      <div class="tbc-card" style="border:none;padding:24px;">
        <span class="tag tag-tbc">${p.statusLabel}</span>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <form>
          <input type="email" required placeholder="Email for updates" aria-label="Email for updates">
          <button type="submit">Notify</button>
        </form>
      </div>
    </div>`;
  }
  const tagClass = p.status === "ready" ? "tag-ready" : "tag-progress";
  return `
  <a class="p-card" href="property.html?slug=${p.slug}">
    <div class="p-card-art">
      <span class="p-card-tag"><span class="tag ${tagClass}">${p.statusLabel}</span></span>
      ${afravivaCardArtHTML(p)}
    </div>
    <div class="p-card-body">
      <div class="p-card-loc">${p.neighbourhood} · ${p.regionLabel}</div>
      <h3>${p.name}</h3>
      <p class="p-card-desc">${p.description}</p>
      <div class="p-card-foot">
        <span class="quarter">${p.quarterLabel}</span>
        <span class="view">View property →</span>
      </div>
    </div>
  </a>`;
}

/* ===========================================================
   Readiness Ledger — the signature homepage element
   =========================================================== */
function afravivaRenderLedger(containerId){
  const wrap = document.getElementById(containerId);
  if(!wrap) return;

  const items = wrap.querySelector(".ledger-items");
  const fill = wrap.querySelector(".ledger-axis-fill");
  const mobileList = wrap.querySelector(".ledger-list-mobile");

  const maxPos = Math.max(...AFRAVIVA_PROPERTIES.map(p => p.ledgerPos));
  if(fill) fill.style.width = maxPos + "%";

  AFRAVIVA_PROPERTIES.forEach(p => {
    if(items){
      const div = document.createElement("div");
      div.className = `ledger-item ${p.ledgerRow} is-${p.status}`;
      div.style.left = p.ledgerPos + "%";
      div.innerHTML = `
        <div class="dot"></div>
        <div class="li-text">
          <div class="li-name">${p.name}</div>
          <div class="li-loc">${p.neighbourhood}</div>
        </div>`;
      items.appendChild(div);
    }
    if(mobileList){
      const row = document.createElement("div");
      row.className = "lm-row";
      row.innerHTML = `<span>${p.name} <span style="opacity:.55">— ${p.neighbourhood}</span></span><span style="font-family:var(--f-mono);font-size:11px;opacity:.7;text-transform:uppercase;">${p.quarterLabel}</span>`;
      mobileList.appendChild(row);
    }
  });
}

/* ===========================================================
   Listing page filters
   =========================================================== */
function afravivaInitFilters(gridId){
  const grid = document.getElementById(gridId);
  if(!grid) return;

  function paint(list){
    grid.innerHTML = list.map(afravivaCardHTML).join("");
  }

  const buttons = document.querySelectorAll(".filter-btn");

  function applyFilter(f){
    buttons.forEach(b => {
      const isActive = b.dataset.filter === f;
      b.classList.toggle("active", isActive);
      b.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
    if(f === "all"){ paint(AFRAVIVA_PROPERTIES); return; }
    if(f === "ready" || f === "progress" || f === "tbc"){
      paint(AFRAVIVA_PROPERTIES.filter(p => p.status === f));
      return;
    }
    paint(AFRAVIVA_PROPERTIES.filter(p => p.region === f));
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
  });

  /* deep-link support: properties.html#nairobi / #coast pre-applies that filter */
  const hashFilter = location.hash.slice(1);
  const hasMatchingButton = Array.from(buttons).some(b => b.dataset.filter === hashFilter);
  applyFilter(hasMatchingButton ? hashFilter : "all");
}
