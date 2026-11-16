/*
 * Pure order logic: checks a submitted order and turns it into an email subject and body.
 * It touches no DOM, network or storage, so it runs the same in the browser and under node --test.
 * app.js reads the form into a plain object, calls these functions, and does the sending.
 */

export const SERVICES = ["pilot", "family", "other"];
export const LANGUAGES = ["ko", "en"];
export const MAX_FIELD_LENGTH = 4000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class OrderError extends Error {
  /** An order that cannot be sent; `field` names the form field to fix. */
  constructor(field, message) {
    super(message);
    this.name = "OrderError";
    this.field = field;
  }
}

/**
 * Check an order and return a cleaned copy with trimmed text.
 * Throws OrderError naming the first field that is missing or wrong.
 * Photo orders must carry the consent tick, because they involve real people's faces.
 */
export function validateOrder(order) {
  const clean = {};
  for (const [key, value] of Object.entries(order)) {
    clean[key] = typeof value === "string" ? value.trim() : value;
  }
  if (!clean.name) throw new OrderError("name", "name is required");
  if (!EMAIL_PATTERN.test(clean.email || "")) throw new OrderError("email", "a valid email is required");
  if (!SERVICES.includes(clean.service)) throw new OrderError("service", "choose a service");
  if (!LANGUAGES.includes(clean.language)) throw new OrderError("language", "choose a language");
  if (!clean.details) throw new OrderError("details", "tell us about the project");
  for (const key of ["name", "details", "deadline"]) {
    if ((clean[key] || "").length > MAX_FIELD_LENGTH) throw new OrderError(key, "too long");
  }
  if (clean.service === "family" && clean.consent !== true) {
    throw new OrderError("consent", "consent is required for photo orders");
  }
  return clean;
}

/**
 * Build the email subject and body for a checked order.
 * The body is plain text, one labelled line per field, so it reads well in any mail app.
 * The studio name is passed in rather than imported, to keep this module free of settings.
 */
export function orderEmail(order, studioName) {
  const subject = `${studioName} order: ${order.service} (${order.language})`;
  const lines = [
    `Name: ${order.name}`,
    `Email: ${order.email}`,
    `Service: ${order.service}`,
    `Language: ${order.language}`,
    `Deadline: ${order.deadline || "none given"}`,
    `Photo consent: ${order.consent === true ? "yes" : "not applicable"}`,
    "",
    order.details,
  ];
  return { subject, body: lines.join("\n") };
}

/** Return a mailto: link carrying the subject and body, safely encoded. */
export function mailtoLink(address, email) {
  const query = `subject=${encodeURIComponent(email.subject)}&body=${encodeURIComponent(email.body)}`;
  return `mailto:${address}?${query}`;
}
