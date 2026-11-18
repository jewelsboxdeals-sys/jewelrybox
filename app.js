(function () {
  "use strict";

  const I18N = {
    fr: {
      city: "DOUALA · CAMEROUN",
      heroEyebrow: "SPÉCIAL FÊTES",
      heroLine1: "Le luxe au poignet,",
      heroLine2: "tous à 3 000 FCFA",
      heroSub: "Bracelets, bagues et colliers à 3 000 FCFA, boucles d’oreilles dès 2 000 FCFA. Choisis ton modèle, commande en un clic sur WhatsApp.",
      heroCta: "Voir la collection",
      heroWa: "Écrire sur WhatsApp",
      perk1a: "Commande simple", perk1b: "par WhatsApp",
      perk2a: "Livraison", perk2b: "Douala et tout le Cameroun",
      perk3a: "Prix de gros", perk3b: "pour revendeurs",
      catTitle: "Nos bracelets",
      catTitleE: "Nos boucles d’oreilles",
      catTitleR: "Nos bagues",
      catTitleN: "Nos colliers",
      types: { bracelet: "Bracelets", earring: "Boucles d’oreilles", ring: "Bagues", necklace: "Colliers" },
      onRequest: "Prix sur demande",
      howTitle: "Comment commander",
      how1: "Choisis ton bijou et appuie sur « Commander ».",
      how2: "WhatsApp s’ouvre avec le modèle et la référence déjà écrits.",
      how3: "On confirme la disponibilité et on organise la livraison avec toi.",
      wsEyebrow: "REVENDEURS",
      wsTitle: "Tu revends des bijoux ?",
      wsText: "Profite de nos prix de gros sur toute la collection. Écris-nous pour recevoir les tarifs.",
      wsCta: "Demander les prix de gros",
      footNote: "Bijoux fantaisie : doré, argenté, acrylique et perles fantaisie.",
      cats: { all: "Tous", gold: "Doré", silver: "Argenté", acrylic: "Acrylique", rose: "Rosé & Perles", pearl: "Perles", colour: "Couleurs" },
      count: (n) => `${n} modèle${n > 1 ? "s" : ""}`,
      order: "Commander",
      orderLong: "Commander sur WhatsApp",
      copy: "Copier le lien",
      copied: "Lien copié ✓",
      ref: "RÉF.",
      lastOne: "Dernière pièce",
      fewLeft: (n) => `Plus que ${n}`,
      empty: "Aucun modèle disponible ici pour le moment.",
      close: "Fermer",
      msgProduct: (p, url) =>
        `Bonjour Jewelry Box 👋\nJe veux commander : ${p.name} (Réf. ${p.code}) – ${p.priceText}.\nEst-il disponible ?\n${url}`,
      msgHello: "Bonjour Jewelry Box 👋 J’aimerais voir vos bijoux disponibles.",
      msgWholesale: "Bonjour Jewelry Box 👋 Je suis revendeur(se) et je voudrais recevoir vos prix de gros.",
    },
    en: {
      city: "DOUALA · CAMEROON",
      heroEyebrow: "HOLIDAY SPECIAL",
      heroLine1: "Luxury on your wrist,",
      heroLine2: "all at 3,000 FCFA",
      heroSub: "Bracelets, rings and necklaces at 3,000 FCFA, earrings from 2,000 FCFA. Pick your favourite and order in one tap on WhatsApp.",
      heroCta: "See the collection",
      heroWa: "Message us on WhatsApp",
      perk1a: "Easy ordering", perk1b: "on WhatsApp",
      perk2a: "Delivery", perk2b: "Douala and all of Cameroon",
      perk3a: "Wholesale prices", perk3b: "for resellers",
      catTitle: "Our bracelets",
      catTitleE: "Our earrings",
      catTitleR: "Our rings",
      catTitleN: "Our necklaces",
      types: { bracelet: "Bracelets", earring: "Earrings", ring: "Rings", necklace: "Necklaces" },
      onRequest: "Price on request",
      howTitle: "How to order",
      how1: "Pick your piece and tap “Order”.",
      how2: "WhatsApp opens with the model and reference already written.",
      how3: "We confirm it’s available and arrange delivery with you.",
      wsEyebrow: "RESELLERS",
      wsTitle: "Do you resell jewellery?",
      wsText: "Get wholesale prices on the whole collection. Message us to receive the price list.",
      wsCta: "Ask for wholesale prices",
      footNote: "Fashion jewellery: gold-tone, silver-tone, acrylic and faux pearls.",
      cats: { all: "All", gold: "Gold-tone", silver: "Silver-tone", acrylic: "Acrylic", rose: "Rose gold & pearls", pearl: "Faux pearls", colour: "Colours" },
      count: (n) => `${n} model${n > 1 ? "s" : ""}`,
      order: "Order",
      orderLong: "Order on WhatsApp",
      copy: "Copy link",
      copied: "Link copied ✓",
      ref: "REF.",
      lastOne: "Last one",
      fewLeft: (n) => `Only ${n} left`,
      empty: "Nothing available here right now.",
      close: "Close",
      msgProduct: (p, url) =>
        `Hello Jewelry Box 👋\nI'd like to order: ${p.name} (Ref. ${p.code}) – ${p.priceText}.\nIs it available?\n${url}`,
      msgHello: "Hello Jewelry Box 👋 I'd like to see your available jewellery.",
      msgWholesale: "Hello Jewelry Box 👋 I'm a reseller and I'd like your wholesale prices.",
    },
  };
  const CAT_ORDER = ["all", "gold", "silver", "acrylic", "rose", "pearl", "colour"];
  const TYPE_ORDER = ["bracelet", "earring", "ring", "necklace"];
  const typeOf = (p) => p.type || "bracelet";

  // ---------- state ----------
  const params = new URLSearchParams(location.search);
  let lang = params.get("lang") || store("get", "jb-lang") || "fr";
  if (!I18N[lang]) lang = "fr";
  let cat = "all";
  let type = TYPE_ORDER.includes(params.get("type")) ? params.get("type") : "bracelet";
  const visible = PRODUCTS.filter((p) => p.stock !== "finished");

  // ---------- helpers ----------
  function store(op, key, val) {
    try { return op === "get" ? localStorage.getItem(key) : localStorage.setItem(key, val); }
    catch (e) { return null; }
  }
  const t = () => I18N[lang];
  function priceText(n) {
    if (n == null) return t().onRequest;
    return lang === "fr"
      ? new Intl.NumberFormat("fr-FR").format(n) + " FCFA"
      : new Intl.NumberFormat("en-US").format(n) + " FCFA";
  }
  function view(p) {
    return { ...p, name: p.name[lang], kind: p.kind[lang], priceText: priceText(p.price) };
  }
  function pageUrl(code) {
    const base = location.href.split("#")[0].split("?")[0];
    return `${base}${lang === "en" ? "?lang=en" : ""}#${code}`;
  }
  function waLink(text) {
    const num = String(WHATSAPP_NUMBER || "").replace(/\D/g, "");
    return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
  }
  function badgeText(p) {
    if (p.left === 1) return t().lastOne;
    if (typeof p.left === "number" && p.left > 1 && p.left <= 5) return t().fewLeft(p.left);
    return "";
  }
  function el(tag, attrs, children) {
    const n = document.createElement(tag);
    for (const k in attrs || {}) {
      if (k === "text") n.textContent = attrs[k];
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    (children || []).forEach((c) => c && n.appendChild(c));
    return n;
  }

  // ---------- render ----------
  function renderStatic() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((n) => {
      const v = t()[n.dataset.i18n];
      if (typeof v === "string") n.textContent = v;
    });
    document.querySelectorAll(".lang button").forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.getElementById("top-wa").href = waLink(t().msgHello);
    document.getElementById("hero-wa").href = waLink(t().msgHello);
    document.getElementById("ws-wa").href = waLink(t().msgWholesale);
    document.getElementById("d-close").setAttribute("aria-label", t().close);
    document.getElementById("year").textContent = String(new Date().getFullYear());
  }

  function renderTypes() {
    const box = document.getElementById("types");
    box.innerHTML = "";
    TYPE_ORDER.forEach((ty) => {
      const n = visible.filter((p) => typeOf(p) === ty).length;
      if (!n) return;
      box.appendChild(el("button", {
        type: "button", class: "type-tab", role: "tab", "aria-selected": String(ty === type),
        onclick: () => { type = ty; cat = "all"; renderTypes(); renderFilters(); renderGrid(); },
      }, [document.createTextNode(t().types[ty]), el("small", { text: String(n) })]));
    });
    document.getElementById("cat-title").textContent = type === "earring" ? t().catTitleE : type === "ring" ? t().catTitleR : type === "necklace" ? t().catTitleN : t().catTitle;
  }

  function renderFilters() {
    const box = document.getElementById("filters");
    box.innerHTML = "";
    const inType = visible.filter((p) => typeOf(p) === type);
    CAT_ORDER.forEach((c) => {
      const n = c === "all" ? inType.length : inType.filter((p) => p.cat === c).length;
      if (!n) return;
      const chip = el("button", {
        type: "button", class: "chip", role: "tab", "aria-selected": String(c === cat),
        onclick: () => { cat = c; renderFilters(); renderGrid(); },
      }, [document.createTextNode(t().cats[c]), el("small", { text: String(n) })]);
      box.appendChild(chip);
    });
  }

  function renderGrid() {
    const grid = document.getElementById("grid");
    const list = visible.filter((p) => typeOf(p) === type && (cat === "all" || p.cat === cat)).map(view);
    document.getElementById("count").textContent = t().count(list.length);
    grid.innerHTML = "";
    if (!list.length) { grid.appendChild(el("p", { class: "empty", text: t().empty })); return; }
    list.forEach((p) => {
      const b = badgeText(p);
      const media = el("button", { type: "button", class: "card-media", "aria-label": p.name, onclick: () => openDetail(p.code) }, [
        el("img", { src: `images/${p.code}.jpg`, alt: `${p.name} – ${p.kind}`, loading: "lazy", width: "900", height: "1125" }),
        b ? el("span", { class: "badge", text: b }) : null,
      ]);
      const body = el("div", { class: "card-body" }, [
        el("p", { class: "kind", text: p.kind }),
        el("h3", { text: p.name }),
        el("div", { class: "price-row" }, [
          el("span", { class: "price", text: p.priceText }),
          el("span", { class: "ref", text: `${t().ref} ${p.code}` }),
        ]),
        el("div", { class: "spacer" }),
        el("a", { class: "btn btn-wa", href: waLink(t().msgProduct(p, pageUrl(p.code))), target: "_blank", rel: "noopener", text: t().order }),
      ]);
      grid.appendChild(el("article", { class: "card", id: `p-${p.code}` }, [media, body]));
    });
  }

  // ---------- detail dialog ----------
  const dlg = document.getElementById("detail");
  function openDetail(code, fromHash) {
    const raw = visible.find((x) => x.code === code);
    if (!raw) return;
    const p = view(raw);
    const b = badgeText(p);
    if (typeOf(raw) !== type) { type = typeOf(raw); cat = "all"; renderTypes(); renderFilters(); renderGrid(); }
    document.getElementById("d-img").src = `images/${p.code}.jpg`;
    document.getElementById("d-img").alt = `${p.name} – ${p.kind}`;
    document.getElementById("d-kind").textContent = p.kind;
    document.getElementById("d-name").textContent = p.name;
    document.getElementById("d-price").textContent = p.priceText;
    document.getElementById("d-ref").textContent = `${t().ref} ${p.code}`;
    const badge = document.getElementById("d-badge");
    badge.hidden = !b; badge.textContent = b;
    const wa = document.getElementById("d-wa");
    wa.textContent = t().orderLong;
    wa.href = waLink(t().msgProduct(p, pageUrl(p.code)));
    const copy = document.getElementById("d-copy");
    copy.textContent = t().copy;
    copy.onclick = async () => {
      try { await navigator.clipboard.writeText(pageUrl(p.code)); copy.textContent = t().copied; }
      catch (e) { prompt(t().copy, pageUrl(p.code)); }
    };
    if (!fromHash && location.hash !== `#${p.code}`) history.replaceState(null, "", `#${p.code}`);
    if (typeof dlg.showModal === "function") { if (!dlg.open) dlg.showModal(); }
    else dlg.setAttribute("open", "");
  }
  function closeDetail() {
    if (dlg.open) dlg.close();
    if (/^#[A-Z]\d+$/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
  }
  document.getElementById("d-close").addEventListener("click", closeDetail);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) closeDetail(); });
  dlg.addEventListener("close", () => {
    if (/^#[A-Z]\d+$/.test(location.hash)) history.replaceState(null, "", location.pathname + location.search);
  });

  function fromHash() {
    const code = decodeURIComponent(location.hash.slice(1));
    if (/^[A-Z]\d+$/.test(code)) openDetail(code, true);
  }
  window.addEventListener("hashchange", fromHash);

  // ---------- language ----------
  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => {
      lang = b.dataset.lang; store("set", "jb-lang", lang);
      renderAll();
      if (dlg.open) { const c = location.hash.slice(1); dlg.close(); openDetail(c); }
    }));

  function renderAll() { renderStatic(); renderTypes(); renderFilters(); renderGrid(); }
  renderAll();
  fromHash();
})();
