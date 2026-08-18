/**
 * Every verified fact about Domestic Electrician Ltd lives here.
 * Nothing on the page should state anything that is not in this file.
 * Unverified claims (EV charging, staff count, years of individual
 * experience, customer quotes) are deliberately absent.
 */
export const site = {
  name: 'Domestic Electrician Ltd',
  shortName: 'Domestic Electrician',
  owner: 'Lee',
  tradingSince: 'January 2018',
  tradingSinceYear: 2018,
  certification: 'NICEIC Approved',
  town: 'Fareham',
  radiusMiles: 4,
  phoneDisplay: '07784 303202',
  phoneHref: 'tel:+447784303202',
  whatsappHref: 'https://wa.me/447784303202',
  email: 'mail@domesticelectrician.com',
  ratings: {
    trustpilot: { score: '4.9', approxReviews: 83 },
    google: { score: '5.0' },
  },
} as const;
