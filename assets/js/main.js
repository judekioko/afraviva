/* ===========================================================
   AFRAVIVA HOMES — shared behaviour
   =========================================================== */

const WHATSAPP_NUMBER = "254113781366";

function whatsappLink(propertyName){
  const msg = propertyName
    ? `Hi Afraviva Homes, I'd like to know more about renting at ${propertyName}.`
    : `Hi Afraviva Homes, I'd like to know more about renting one of your properties.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
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

  /* ---- TBC notify-me forms: local-only demo confirmation ---- */
  document.querySelectorAll(".tbc-card form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button");
      const original = btn.textContent;
      btn.textContent = "Noted ✓";
      form.querySelector("input").value = "";
      setTimeout(() => { btn.textContent = original; }, 2400);
    });
  });

  /* ---- generic enquiry form (property + contact pages): demo confirmation ---- */
  document.querySelectorAll(".enquiry-box form, .contact-form").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = form.querySelector("button[type=submit], .btn");
      if(btn){
        const original = btn.textContent;
        btn.textContent = "Sent ✓";
        setTimeout(() => { btn.textContent = original; }, 2600);
      }
      form.reset();
    });
  });
});

/* ===========================================================
   Property card renderer — used on home + listing pages
   =========================================================== */
function afravivaCardHTML(p){
  if(p.status === "tbc"){
    return `
    <div class="p-card">
      <div class="p-card-art">${afravivaArt(p.artVariant, p.status)}</div>
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
      ${afravivaArt(p.artVariant, p.status)}
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
  paint(AFRAVIVA_PROPERTIES);

  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      if(f === "all"){ paint(AFRAVIVA_PROPERTIES); return; }
      if(f === "ready" || f === "progress" || f === "tbc"){
        paint(AFRAVIVA_PROPERTIES.filter(p => p.status === f));
        return;
      }
      paint(AFRAVIVA_PROPERTIES.filter(p => p.region === f));
    });
  });
}
