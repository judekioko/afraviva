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
  document.querySelectorAll(".nav-links a[data-page]").forEach(a => {
    if(a.dataset.page === path) a.classList.add("active");
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
    buttons.forEach(b => b.classList.toggle("active", b.dataset.filter === f));
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
