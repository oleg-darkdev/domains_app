const data = [
  {
    name: '.com',
    entity: 'commercial',
    administrator: {
      title: 'Verisign Inc.',
      link: 'https://en.wikipedia.org/wiki/Verisign'
    },
    notes: [
      `This is an open TLD; any person or entity is permitted to register.`,
      `Though originally intended for use by for-profit business entities, for a number of reasons it became the main TLD for domain names and is currently used by all types of entities including nonprofits, schools, and private individuals.`,
      `Domain name registrations may be successfully challenged if the holder cannot prove an outside relation justifying reservation of the name,[7] to prevent "squatting". It was originally administered by the United States Department of Defense.`,
    ],
      idn: true,
      dnssec: true,
      sld: true,
      ipv6: true,
      id: 0,
      wikipedia: 'https://en.wikipedia.org/wiki/.com',
      logo: '/images/domains/gTLD/com.svg',
      promoImg: '/images/domains/gTLD/com.svg'
  },
    {
    name: '.org',
    entity: 'organization',
    administrator: {
      title: 'Public Interest Registry',
      link: 'https://en.wikipedia.org/wiki/Public_Interest_Registry'
    },
    notes: [
      `This is an open TLD; any person or entity is permitted to register.`,
      `Originally created as a miscellaneous category as stated in RFC 920 (October 1984) "...any other domains meeting the second level requirements," and clarified in RFC 1591 (March 1994)`,
      `"This domain is intended as the miscellaneous TLD for organizations that didn't fit anywhere else. Some non-government organizations may fit here."[8][9] While mainly non-profits have used this domain, it was never restricted from miscellaneous use.`,

    ],
      idn: true,
      dnssec: true,
      sld: true,
      ipv6: true,
      id: 0,
      wikipedia: 'https://en.wikipedia.org/wiki/.org',
      logo: '/images/domains/gTLD/org.svg',
      promoImg: '/images/domains/gTLD/org.svg'
  },
    {
    name: '.net',
    entity: 'network',
    administrator: {
      title: 'Verisign Inc.',
      link: 'https://en.wikipedia.org/wiki/Verisign'
    },
    notes: [
      `This is an open TLD; any person or entity is permitted to register.`,
      `According to RFC 1591 (March 1994) "This domain is intended to hold only the computers of network providers."`,
    ],
      idn: true,
      dnssec: true,
      sld: true,
      ipv6: true,
      id: 0,
      wikipedia: 'https://en.wikipedia.org/wiki/.net',
      logo: '/images/domains/gTLD/net.svg',
      promoImg: '/images/domains/gTLD/net.svg'
  },
    {
    name: '.int',
    entity: 'international',
    administrator: {
      title: 'Internet Assigned Numbers Authority',
      link: 'https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority'
    },
    notes: [
      `The .int TLD is strictly limited to organizations, offices, and programs endorsed by a treaty between two or more nations.`,
      `However, a few grandfathered domains do not meet these criteria.`,
    ],
      idn: false,
      dnssec: true,
      sld: true,
      ipv6: true,
      id: 0,
      wikipedia: 'https://en.wikipedia.org/wiki/.int',
      logo: '',
      promoImg: ''
  },
    {
    name: '.edu',
    entity: 'education',
    administrator: {
      title: 'Educause',
      link: 'https://en.wikipedia.org/wiki/Educause'
    },
    notes: [
      `The .edu TLD is limited to specific higher educational institutions such as, but not limited to, trade schools and universities.`,
      ` In the U.S., its use was restricted in 2001 to post-secondary institutions accredited by an agency on the list of nationally recognized accrediting agencies.`,
      `This domain is therefore almost exclusively used by American colleges and universities. Some institutions, such as the Exploratorium, that do not meet the current registration criteria have grandfathered domain names.`,
    ],
      idn: false,
      dnssec: true,
      sld: true,
      ipv6: true,
      id: 0,
      wikipedia: 'https://en.wikipedia.org/wiki/.edu',
      logo: '/images/domains/gTLD/edu.svg',
      promoImg: '/images/domains/gTLD/edu.svg'
  },
  {
    name: '.gov',
    entity: 'U.S. national and state government agencies',
    administrator: {
      title: 'Cybersecurity and Infrastructure Security Agency',
      link: 'https://en.wikipedia.org/wiki/Cybersecurity_and_Infrastructure_Security_Agency'
    },
    notes: [
      `The .gov TLD is limited to United States governmental entities and agencies as well as qualifying state, county and local municipal government agencies, and tribal governments.`,
    ],
      idn: false,
      dnssec: true,
      sld: true,
      ipv6: true,
      id: 0,
      wikipedia: 'https://en.wikipedia.org/wiki/.gov',
      logo: '',
      promoImg: ''
  },
    {
    name: '.mil',
    entity: 'U.S. military',
    administrator: {
      title: 'United States Department of Defense',
      link: 'https://en.wikipedia.org/wiki/United_States_Department_of_Defense'
    },
    notes: [
      `The .mil TLD is limited to divisions, services and agencies of the United States Department of Defense.`,
    ],
      idn: false,
      dnssec: true,
      sld: true,
      ipv6: true,
      id: 0,
      wikipedia: 'https://en.wikipedia.org/wiki/.mil',
      logo: '',
      promoImg: ''
  },
]


export default data;
