const data = {
  abbr: 'ARPA.',
  //  (ARPA)
  title: 'infrastructure top-level domain.',
  shortDesc:
    'The domain name arpa is a top-level domain (TLD) in the Domain Name System (DNS) of the Internet.',
  domains: {
    all: {
      title: 'All.',
      api: 'http://localhost:5173/api/arpa/',
    },
    zone: {},
  },
  complexity: 'basic',
  timeToPlay: 'basic',
  promoImg: '/images/scenarios/promo/arpa.svg',
  icon: '/images/scenarios/icons/arpa.svg',
  brandColor: '',
  id: 1,
  wikipedia: 'https://en.wikipedia.org/wiki/.arpa',
  desc: [
    `It is used predominantly for the management of technical network infrastructure. Prominent among such functions are the subdomains in-addr.arpa and ip6.arpa, which provide namespaces for reverse DNS lookup of IPv4 and IPv6 addresses, respectively.`,
    `The name originally was the acronym for the Advanced Research Projects Agency (ARPA), the funding organization in the United States that developed the ARPANET, the precursor of the Internet. It was the first domain defined for the network in preparation for a hierarchical naming system for the delegation of authority, autonomy, and responsibility.`,
    `It was originally intended only to serve in a temporary function for facilitating the systematic naming of the ARPANET computers. However, it became practically difficult to remove the domain after infrastructural uses had been sanctioned. As a result, the name was redefined as the backronym Address and Routing Parameter Area.`,
    `Domain-name registrations in arpa are not possible, and new subdomains are infrequently added by the Internet Engineering Task Force. `,
  ],
  gallery: [
    '/images/scenarios/gallery/arpa_1.svg',
    '/images/scenarios/gallery/arpa_2.svg',
    '/images/scenarios/gallery/arpa_3.svg',
  ],
}

export default data
