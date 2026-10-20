/* ============================================================
   JEWELRY BOX — catalogue data
   This is the only file you need to edit day to day.
   ============================================================ */

/* 1) Your WhatsApp number, digits only, with country code.
      Example: "237690000000". Leave "" until you have it:
      buttons will then open WhatsApp and let the buyer pick the chat. */
const WHATSAPP_NUMBER = "";

/* 2) Products.
   stock: "available" or "finished"  (finished = hidden from the site)
   left:  null, or a number to show "Plus que 2" / "Dernière pièce" when it is 1
   cat:   "gold" | "silver" | "acrylic" | "rose"                                   */
const PRODUCTS = [
  // ---------- Doré / Gold-tone ----------
  { code: "A15", cat: "gold", price: 3000, stock: "available", left: 1,
    name: { fr: "Plaque Royale", en: "Royal Plate" },
    kind: { fr: "Manchette dorée", en: "Gold-tone cuff" } },
  { code: "A14", cat: "gold", price: 3000, stock: "available", left: null,
    name: { fr: "Bulles", en: "Bubbles" },
    kind: { fr: "Manchette dorée", en: "Gold-tone cuff" } },
  { code: "A7", cat: "gold", price: 3000, stock: "available", left: 1,
    name: { fr: "Enlacée", en: "Embrace" },
    kind: { fr: "Manchette dorée", en: "Gold-tone cuff" } },
  { code: "A6", cat: "gold", price: 3000, stock: "available", left: null,
    name: { fr: "Vague", en: "Wave" },
    kind: { fr: "Manchette dorée", en: "Gold-tone cuff" } },
  { code: "A11", cat: "gold", price: 3000, stock: "available", left: null,
    name: { fr: "Carré Doux", en: "Soft Square" },
    kind: { fr: "Jonc doré", en: "Gold-tone bangle" } },
  { code: "A19", cat: "gold", price: 3000, stock: "available", left: null,
    name: { fr: "Ovale Cristal", en: "Crystal Oval" },
    kind: { fr: "Jonc doré", en: "Gold-tone bangle" } },
  { code: "A5", cat: "gold", price: 3000, stock: "available", left: null,
    name: { fr: "Ligne Cristal", en: "Crystal Line" },
    kind: { fr: "Jonc doré", en: "Gold-tone bangle" } },

  // ---------- Argenté / Silver-tone ----------
  { code: "A10", cat: "silver", price: 3000, stock: "available", left: null,
    name: { fr: "Vague Argent", en: "Silver Wave" },
    kind: { fr: "Manchette argentée", en: "Silver-tone cuff" } },
  { code: "A8", cat: "silver", price: 3000, stock: "available", left: null,
    name: { fr: "Tourbillon", en: "Swirl" },
    kind: { fr: "Manchette argentée", en: "Silver-tone cuff" } },
  { code: "A18", cat: "silver", price: 3000, stock: "available", left: null,
    name: { fr: "Bulles Argent", en: "Silver Bubbles" },
    kind: { fr: "Manchette argentée", en: "Silver-tone cuff" } },
  { code: "A12", cat: "silver", price: 3000, stock: "available", left: null,
    name: { fr: "Carré Doux Argent", en: "Silver Soft Square" },
    kind: { fr: "Jonc argenté", en: "Silver-tone bangle" } },
  { code: "A2", cat: "silver", price: 3000, stock: "available", left: null,
    name: { fr: "Nacre", en: "Nacre" },
    kind: { fr: "Jonc argenté", en: "Silver-tone bangle" } },

  // ---------- Acrylique / Acrylic ----------
  { code: "C7", cat: "acrylic", price: 3000, stock: "available", left: 4,
    name: { fr: "Bleu Ciel", en: "Sky Blue" },
    kind: { fr: "Acrylique", en: "Acrylic" } },
  { code: "C3", cat: "acrylic", price: 3000, stock: "available", left: 1,
    name: { fr: "Feuilles Dorées", en: "Gold Flakes" },
    kind: { fr: "Acrylique", en: "Acrylic" } },
  { code: "C6", cat: "acrylic", price: 3000, stock: "available", left: null,
    name: { fr: "Olive", en: "Olive" },
    kind: { fr: "Acrylique", en: "Acrylic" } },
  { code: "C1", cat: "acrylic", price: 3000, stock: "available", left: 1,
    name: { fr: "Marbre Nuit", en: "Midnight Marble" },
    kind: { fr: "Acrylique", en: "Acrylic" } },
  { code: "C10", cat: "acrylic", price: 3000, stock: "available", left: null,
    name: { fr: "Marbre Crème", en: "Cream Marble" },
    kind: { fr: "Acrylique", en: "Acrylic" } },
  { code: "C8", cat: "acrylic", price: 3000, stock: "available", left: 2,
    name: { fr: "Champagne", en: "Champagne" },
    kind: { fr: "Acrylique", en: "Acrylic" } },
  { code: "C2", cat: "acrylic", price: 3000, stock: "finished", left: null,
    name: { fr: "Feuilles Dorées Carré", en: "Square Gold Flakes" },
    kind: { fr: "Acrylique", en: "Acrylic" } },

  // ---------- Rosé & Perles / Rose gold & pearls ----------
  { code: "D3", cat: "rose", price: 3000, stock: "available", left: null,
    name: { fr: "Cœurs Nacrés", en: "Pearl Hearts" },
    kind: { fr: "Chaîne dorée", en: "Gold-tone chain" } },
  { code: "A4", cat: "rose", price: 3000, stock: "available", left: null,
    name: { fr: "Charme Cristal", en: "Crystal Charm" },
    kind: { fr: "Jonc rosé", en: "Rose gold-tone bangle" } },
  { code: "D5", cat: "rose", price: 3000, stock: "available", left: null,
    name: { fr: "Perles", en: "Pearls" },
    kind: { fr: "Bracelet perles fantaisie", en: "Faux pearl bracelet" } },
  { code: "A16", cat: "rose", price: 3000, stock: "available", left: null,
    name: { fr: "Ligne Cristal Rosée", en: "Rosy Crystal Line" },
    kind: { fr: "Jonc rosé", en: "Rose gold-tone bangle" } },
  { code: "A1", cat: "rose", price: 3000, stock: "available", left: null,
    name: { fr: "Nacre Rosée", en: "Rosy Nacre" },
    kind: { fr: "Jonc rosé", en: "Rose gold-tone bangle" } },
  { code: "A3", cat: "rose", price: 3000, stock: "available", left: null,
    name: { fr: "Gravé", en: "Engraved" },
    kind: { fr: "Jonc rosé", en: "Rose gold-tone bangle" } },
];
