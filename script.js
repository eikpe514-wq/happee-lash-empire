/* ===== EASY-EDIT CONFIG ===== */
const CONFIG = {
    whatsappNumber: "2349023505145", // country code + number, digits only (e.g. 2348012345678)
    instagramUrl: "https://instagram.com/happee_lash_empire",
    instagramLabel: "Instagram: @happee_lash_empire",
    location: "Calabar, Nigeria"
};
/* Set "image" to a photo URL to replace a placeholder. kind: services = no quantity, products = quantity stepper.
   style = lash look used by the placeholder drawing (len, count, wisp). */
const PRODUCTS = [
    { cat: "services", name: "Classic Lash Set", desc: "One extension per natural lash for a soft, polished everyday look.", price: 4000, image: "classic.png", style: { len: 20, n: 26, wisp: 0, hue: 335 } },
    { cat: "services", name: "Anime Lash Set", desc: "Doll-eye spikes with a bold, wide-eyed finish.", price: 5000, image: "anime.jpg", style: { len: 30, n: 20, wisp: 1, hue: 320 } },
    { cat: "services", name: "Hybrid Lash Set", desc: "A mix of classic and volume fans for texture and softness.", price: 7000, image: "closeup-hybrid.png", style: { len: 28, n: 28, wisp: 0, hue: 345 } },
    { cat: "services", name: "Volume Lash Set", desc: "Light handmade fans for a full, fluffy look.", price: 8500, image: "closeup-volume.png", style: { len: 32, n: 34, wisp: 0, hue: 325 } },
    { cat: "services", name: "Mega Volume Set", desc: "Ultra-dense fans for dramatic, high-impact lashes.", price: 10000, image: "closeup-mega-volume.png", style: { len: 40, n: 44, wisp: 0, hue: 315 } },
    { cat: "services", name: "Wispy / Styled Cluster Set", desc: "Feathery, textured clusters with a styled, photo-ready finish.", price: 8000, image: "wispy.jpg", style: { len: 36, n: 30, wisp: 1, hue: 340 } },
    { cat: "services", name: "Spikes", desc: "Defined spiky strands for a trendy, editorial eye.", price: 1500, image: "spikes.jpg", style: { len: 34, n: 18, wisp: 1, hue: 330 } },
    { cat: "services", name: "Lash Refill", desc: "Keep your set full and fresh between full sets.", price: 3000, image: "refill.jpg", style: { len: 22, n: 22, wisp: 0, hue: 350 } },
    { cat: "services", name: "Lash Remover", desc: "Safe, gentle removal of your existing extensions.", price: 2000, image: "remover.jpg", style: { len: 12, n: 14, wisp: 0, hue: 300 } },
    { cat: "products", name: "Cluster Lash Kit", desc: "Trays of clusters with glue for easy, salon-style looks at home.", price: '', image: "cluster_lash_kit.jpg", style: { len: 30, n: 32, wisp: 1, hue: 328 } },
    { cat: "products", name: "Strip Lashes", desc: "Reusable strip lashes that go on in seconds.", price: '', image: "strip_lashes.jpg", style: { len: 26, n: 36, wisp: 0, hue: 338 } }
];
/* Gallery: 6 slots. Put each photo URL in "image" (square-ish photos look best). Empty = placeholder. Optional "caption". */
const GALLERY = [
    { image: "image1.jpeg", alt: "Classic lash set", caption: "" },
    { image: "image2.jpeg", alt: "Volume lash set", caption: "" },
    { image: "image3.jpeg", alt: "Anime lash set", caption: "" },
    { image: "image4.jpeg", alt: "Wispy cluster set", caption: "" },
    { image: "image6.jpeg", alt: "Mega volume set", caption: "" },
    { image: "image5.jpeg", alt: "Hybrid lash set", caption: "" }
];
/* ===== END CONFIG ===== */

const wa = text => `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
const naira = n => "₦" + n.toLocaleString("en-NG");
const GENERAL_MSG = "Hello HAPPEE LASH EMPIRE! I'd like to make an enquiry about your lash services and products. Could you please share more details?";

function eyeSVG(s, bg) {
    const P0 = [40, 176], P1 = [200, 70], P2 = [360, 176]; let l = "";
    for (let i = 0; i < s.n; i++) {
        const t = i / (s.n - 1), u = 1 - t;
        const x = u * u * P0[0] + 2 * u * t * P1[0] + t * t * P2[0], y = u * u * P0[1] + 2 * u * t * P1[1] + t * t * P2[1];
        const a = (205 + 130 * t) * Math.PI / 180;
        let len = s.len * (0.7 + 0.5 * Math.sin(Math.PI * t));
        if (s.wisp && i % 2) len *= 1.45;
        const ex = x + Math.cos(a) * len, ey = y + Math.sin(a) * len;
        const cx = x + Math.cos(a) * len * .5 + (t > .5 ? 6 : -6), cy = y + Math.sin(a) * len * .55;
        l += `<path d="M${x.toFixed(1)} ${y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}" stroke="#2b0a1f" stroke-width="2.4" stroke-linecap="round" fill="none"/>`;
    }
    const id = "g" + Math.random().toString(36).slice(2, 7);
    return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>
  <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${s.hue},90%,92%)"/><stop offset="1" stop-color="hsl(${s.hue},85%,72%)"/></linearGradient>
  <radialGradient id="${id}i"><stop offset="0" stop-color="#e8a0c4"/><stop offset=".6" stop-color="#a0245f"/><stop offset="1" stop-color="#4a0e33"/></radialGradient></defs>
  <rect width="400" height="300" fill="url(#${id}b)"/>
  <circle cx="330" cy="50" r="46" fill="#c99a3b" opacity=".25"/><circle cx="60" cy="250" r="60" fill="#fff" opacity=".25"/>
  <path d="M40 176 Q200 70 360 176 Q200 250 40 176Z" fill="#fffaf6"/>
  <circle cx="200" cy="170" r="44" fill="url(#${id}i)"/><circle cx="200" cy="170" r="18" fill="#1b0614"/><circle cx="188" cy="157" r="8" fill="#fff" opacity=".9"/>
  <path d="M40 176 Q200 70 360 176" stroke="#2b0a1f" stroke-width="4" fill="none" stroke-linecap="round"/>${l}</svg>`;
}

function card(p) {
    const el = document.createElement("article"); el.className = "card";
    const pic = p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" width="800" height="600">` : eyeSVG(p.style);
    el.innerHTML = `<div class="pic">${pic}</div><div class="body"><h3>${p.name}</h3><p>${p.desc}</p><div class="price">${naira(p.price)}</div>${p.cat === "products" ? `<div class="qty"><span>Qty</span><button type="button" aria-label="Decrease quantity">−</button><output aria-live="polite">1</output><button type="button" aria-label="Increase quantity">+</button></div>` : ""
        }<a class="btn btn-wa" target="_blank" rel="noopener" href="#">Order on WhatsApp</a></div>`;
    let q = 1; const out = el.querySelector("output"), link = el.querySelector(".btn-wa");
    const upd = () => {
        const msg = p.cat === "products"
            ? `Hello HAPPEE LASH EMPIRE! I'd like to order the ${p.name} priced at ${naira(p.price)}${q > 1 ? ` (quantity: ${q})` : ""}. Please let me know how to proceed.`
            : `Hello HAPPEE LASH EMPIRE! I'm interested in ordering the ${p.name} priced at ${naira(p.price)}. Please send me more details about availability and payment.`;
        link.href = wa(msg); if (out) out.textContent = q;
    };
    const [minus, plus] = el.querySelectorAll(".qty button");
    if (minus) { minus.onclick = () => { q = Math.max(1, q - 1); upd() }; plus.onclick = () => { q = Math.min(20, q + 1); upd() } }
    upd(); return el;
}

const GSTYLES = [{ len: 20, n: 26, wisp: 0, hue: 335 }, { len: 32, n: 34, wisp: 0, hue: 325 }, { len: 30, n: 20, wisp: 1, hue: 320 }, { len: 36, n: 30, wisp: 1, hue: 340 }, { len: 40, n: 44, wisp: 0, hue: 315 }, { len: 28, n: 28, wisp: 0, hue: 345 }];
const lb = document.getElementById("lb");
GALLERY.forEach((g, i) => {
    const f = document.createElement("figure"); f.className = "shot" + (g.image ? " has-img" : "");
    const alt = g.alt || `Lash work ${i + 1}`;
    f.innerHTML = (g.image ? `<img src="${g.image}" alt="${alt}" loading="lazy" width="800" height="800">` : eyeSVG(GSTYLES[i % 6])) + (g.caption ? `<figcaption>${g.caption}</figcaption>` : "");
    if (g.image) {
        f.tabIndex = 0; f.setAttribute("role", "button"); f.setAttribute("aria-label", "View larger: " + alt);
        const open = () => { const im = lb.querySelector("img"); im.src = g.image; im.alt = alt; lb.showModal() };
        f.onclick = open; f.onkeydown = e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open() } }
    }
    document.getElementById("galleryGrid").appendChild(f);
});
lb.addEventListener("click", () => lb.close());
PRODUCTS.forEach(p => document.getElementById(p.cat === "services" ? "gridServices" : "gridProducts").appendChild(card(p)));
document.querySelectorAll("[data-wa-general]").forEach(a => { a.href = wa(GENERAL_MSG); a.target = "_blank"; a.rel = "noopener" });
const ig = document.getElementById("igLink"); ig.href = CONFIG.instagramUrl; ig.textContent = CONFIG.instagramLabel;
document.getElementById("locText").textContent = CONFIG.location;
document.getElementById("yr").textContent = new Date().getFullYear();

/* category navigation */
function filter(cat) {
    document.getElementById("services").hidden = cat === "products";
    document.getElementById("products").hidden = cat === "services";
    document.querySelectorAll(".tab").forEach(b => b.setAttribute("aria-pressed", b.dataset.filter === cat));
}
document.querySelectorAll(".tab").forEach(b => b.onclick = () => filter(b.dataset.filter));
document.querySelectorAll("a[data-cat]").forEach(a => a.addEventListener("click", () => { filter(a.dataset.cat === "all" ? "all" : a.dataset.cat); closeMenu() }));
/* mobile menu */
const burger = document.getElementById("burger"), links = document.getElementById("links");
function closeMenu() { links.classList.remove("open"); burger.setAttribute("aria-expanded", "false") }
burger.onclick = () => { const o = links.classList.toggle("open"); burger.setAttribute("aria-expanded", o) };
links.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));