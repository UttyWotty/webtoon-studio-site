/*
 * Tests for the pure order logic in assets/order.js.
 * They cover validation of each required field, the photo-consent rule and the email it produces.
 * Run with: node --test tests/
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import { validateOrder, orderEmail, mailtoLink, OrderError } from "../assets/order.js";

const GOOD = {
  name: " Kim ", email: "kim@example.com", service: "pilot", language: "ko", style: "manhwa",
  details: "Chapter 1 of my romance novel, 12,000 characters.", deadline: "", consent: false,
};

test("a good pilot order passes and is trimmed", () => {
  assert.equal(validateOrder(GOOD).name, "Kim");
});

for (const [field, value] of [["name", ""], ["email", "not-an-email"], ["service", "logo"], ["language", "fr"], ["style", "anime"], ["details", "  "]]) {
  test(`a bad ${field} is rejected and named`, () => {
    assert.throws(() => validateOrder({ ...GOOD, [field]: value }), (e) => e instanceof OrderError && e.field === field);
  });
}

test("a family order without consent is rejected", () => {
  assert.throws(() => validateOrder({ ...GOOD, service: "family" }), (e) => e.field === "consent");
});

test("a family order with consent passes", () => {
  assert.equal(validateOrder({ ...GOOD, service: "family", consent: true }).service, "family");
});

test("an over-long field is rejected", () => {
  assert.throws(() => validateOrder({ ...GOOD, details: "x".repeat(4001) }), (e) => e.field === "details");
});

test("the email names the service and carries every field", () => {
  const mail = orderEmail(validateOrder(GOOD), "Studio");
  assert.equal(mail.subject, "Studio order: pilot (ko)");
  assert.match(mail.body, /Name: Kim/);
  assert.match(mail.body, /Deadline: none given/);
  assert.match(mail.body, /Style: manhwa/);
  assert.match(mail.body, /Chapter 1 of my romance novel/);
});

test("the mailto link encodes line breaks and symbols", () => {
  const link = mailtoLink("a@b.co", { subject: "A & B", body: "line1\nline2" });
  assert.equal(link, "mailto:a@b.co?subject=A%20%26%20B&body=line1%0Aline2");
});
