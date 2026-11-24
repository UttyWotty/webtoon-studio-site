/*
 * Site settings: the studio name, where orders go, and the starting prices shown on the page.
 * Everything a non-developer may want to change lives here, so the other scripts hold no names or numbers.
 * ORDER_ENDPOINT is empty by default, which makes the order form open the visitor's email app instead of posting.
 */

export const STUDIO_NAME = "Harbor Ink Studio";

/* Where order emails go when no form endpoint is set: the studio inbox. */
export const ORDER_EMAIL = "harborinkstudio@gmail.com";

/* Optional free form service URL (for example a Formspree form). Empty means: build an email instead. */
export const ORDER_ENDPOINT = "";

/* Starting prices, shown as "from" on the service cards. */
export const PRICES = {
  pilot: { krw: "500,000", usd: "350" },
  family: { krw: "150,000", usd: "110" },
  wedding: { krw: "300,000", usd: "210" },
  pet: { krw: "150,000", usd: "110" },
};

/* Turnaround promised on the cards, in days. */
export const TURNAROUND_DAYS = { pilot: 7, family: 5, wedding: 7, pet: 5 };
