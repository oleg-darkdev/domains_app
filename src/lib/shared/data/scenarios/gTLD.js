const data = {
  abbr: 'gTLD.',
  //  (gTLDs)
  title: 'Generic top-level domains.',
  allDomainsCounter: 0,

  shortDesc:
    'Generic top-level domains (gTLDs) are one of the categories of top-level domains (TLDs) maintained by the Internet Assigned Numbers Authority (IANA) for use in the Domain Name System of the Internet.',
  domains: {
    all: {
      title: 'All.',
      api: 'https://domains-game.vercel.app/api/gTLD/',
    },
    zone: {},
  },
  complexity: 'basic',
  timeToPlay: 'basic',
  promoImg: '/images/scenarios/promo/gTLD.svg',
  icon: '/images/scenarios/icons/gTLD.svg',
  brandColor: '',
  id: 6,
  wikipedia: 'https://en.wikipedia.org/wiki/Generic_top-level_domain',
  desc: [
    `The core group of generic top-level domains consists of the com, net, org, biz, and info domains. In addition, the domains name and pro are also considered generic; however, these are designated as restricted, because registrations within them require proof of eligibility within the guidelines set for each. `,
    `Historically, the group of generic top-level domains included domains created in the early development of the domain name system, that are now sponsored by designated agencies or organizations and are restricted to specific types of registrants. Thus, domains edu, gov, int, and mil are now considered sponsored top-level domains, along with other themed top-level domains like jobs.`,
    `The entire group of domains that do not have a geographic or country designation (see country-code top-level domain) is still often referred to by the term generic TLDs.`,
  ],
  gallery: [
    '/images/scenarios/gallery/gTLD_1.svg',
    '/images/scenarios/gallery/gTLD_2.svg',
    '/images/scenarios/gallery/gTLD_3.svg',
  ],
}

export default data
