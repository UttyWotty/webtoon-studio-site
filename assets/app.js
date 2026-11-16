/*
 * Page wiring: fills every data-i18n element in the chosen language, draws the service prices, and runs the order form.
 * The language starts from the visitor's browser (Korean for Korean browsers) and is remembered in localStorage when allowed.
 * Order checking and email building live in order.js; this file only reads the form and sends.
 */
import { TEXT as MAIN_TEXT } from "./i18n.js";
import { FAMILY_TEXT } from "./i18n-family.js";
import { STUDIO_NAME, ORDER_EMAIL, ORDER_ENDPOINT, PRICES, TURNAROUND_DAYS } from "./config.js";
import { validateOrder, orderEmail, mailtoLink, OrderError } from "./order.js";

const TEXT = Object.fromEntries(Object.keys(MAIN_TEXT).map((k) => [k, { ...MAIN_TEXT[k], ...FAMILY_TEXT[k] }]));
const LANG_KEY = "studio-lang";
const DEFAULT_LANG = navigator.language && navigator.language.toLowerCase().startsWith("ko") ? "ko" : "en";
let lang = DEFAULT_LANG;

function savedLang() {
  try { return localStorage.getItem(LANG_KEY); } catch { return null; }
}

function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function render() {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll("[data-name]").forEach((el) => { el.textContent = STUDIO_NAME; });
  document.querySelectorAll("[data-src-en]").forEach((img) => { img.src = img.dataset[lang === "ko" ? "srcKo" : "srcEn"]; });
  document.querySelectorAll("[data-points]").forEach((ul) => {
    ul.replaceChildren(...t[ul.dataset.points].split("|").map((s) => Object.assign(document.createElement("li"), { textContent: s })));
  });
  document.querySelectorAll(".card").forEach((card) => {
    const key = card.dataset.service;
    const price = lang === "ko" ? `₩${PRICES[key].krw}${t.from}` : `${t.from} ₩${PRICES[key].krw} (about $${PRICES[key].usd})`;
    card.querySelector(".price").textContent = `${price} · ${fill(t.days, { days: TURNAROUND_DAYS[key] })}`;
  });
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

function setLang(next) {
  lang = next;
  try { localStorage.setItem(LANG_KEY, next); } catch { /* storage blocked: keep the choice for this visit only */ }
  render();
}

function readForm(form) {
  const data = new FormData(form);
  return {
    name: data.get("name") || "", email: data.get("email") || "", service: data.get("service") || "",
    language: data.get("language") || "", style: data.get("style") || "", details: data.get("details") || "", deadline: data.get("deadline") || "",
    consent: data.get("consent") === "on",
  };
}

async function send(order) {
  if (!ORDER_ENDPOINT) {
    window.location.href = mailtoLink(ORDER_EMAIL, orderEmail(order, STUDIO_NAME));
    return TEXT[lang].f_sent_mail;
  }
  const res = await fetch(ORDER_ENDPOINT, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(order) });
  if (!res.ok) throw new Error(`form service answered ${res.status}`);
  return TEXT[lang].f_sent_post;
}

function wireForm() {
  const form = document.getElementById("order-form");
  if (!form) return;
  const status = form.querySelector(".form-status");
  const consentRow = document.getElementById("consent-row");
  const syncConsent = () => { consentRow.hidden = form.service.value !== "family"; };
  form.service.addEventListener("change", syncConsent);
  syncConsent();
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    form.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
    try {
      status.textContent = await send(validateOrder(readForm(form)));
    } catch (err) {
      if (err instanceof OrderError) form[err.field]?.setAttribute("aria-invalid", "true");
      status.textContent = TEXT[lang].f_error + (err instanceof OrderError ? TEXT[lang][`f_${err.field}`] || err.field : err.message);
    }
  });
}

lang = savedLang() || DEFAULT_LANG;
document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
render();
wireForm();
