const data = {
  abbr: 'sTLD.',
  //  (sTLD)
  title: 'Sponsored top-level domains.',
  allDomainsCounter: 0,

  domains: {
    all: {
      title: 'All.',
      api: 'https://domains-game.vercel.app/api/sTLD/',
    },
    zone: {},
  },
  complexity: 'basic',
  timeToPlay: 'basic',
  promoImg: '/images/scenarios/promo/sTLD.svg',
  icon: '/images/scenarios/icons/sTLD.svg',
  brandColor: '',
  id: 8,
  wikipedia: 'https://en.wikipedia.org/wiki/Sponsored_top-level_domain',
  shortDesc:
    'A sponsored top-level domain (sTLD) is one of the categories of top-level domains (TLDs) maintained by the Internet Assigned Numbers Authority (IANA) for use in the Domain Name System of the Internet.',
  desc: [
    `A sponsored TLD is a specialized top-level domain that has a sponsor representing a specific community served by the domain. The communities involved are based on ethnic, geographical, professional, technical or other theme concepts proposed by private agencies or organizations that establish and enforce rules restricting the eligibility of registrants to use the TLD. `,
    `Generally speaking, a sponsored TLD is a specialized TLD that has a sponsor representing the narrower community that is most affected by the TLD, while an unsponsored TLD operates under policies established by the global Internet community directly through the ICANN process.[2] For example, the .aero TLD is sponsored by SITA, which limits registrations to members of the air transport industry. `,
  ],
  gallery: [
    '/images/scenarios/gallery/sTLD_1.svg',
    '/images/scenarios/gallery/sTLD_2.svg',
    '/images/scenarios/gallery/sTLD_3.svg',
  ],
}

export default data
