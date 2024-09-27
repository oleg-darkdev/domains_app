const data = {
  abbr: 'tTLD.',

  title: 'Test top-level domains (tTLD).',
  domains: {
    all: {
      title: 'All.',
      api: 'http://localhost:5173/api/tTLD/',
    },
    zone: {},
  },
  promoImg: '',
  id: 0,
  wikipedia: 'https://en.wikipedia.org/wiki/.test',
  shortDesc:
    '.test is a reserved top-level domain used to test websites or web applications as an alternative to testing webpages using the default localhost. It is guaranteed to never be registered into the Internet.',
  desc: [
    `Along with .test, there are 11 other reserved test domains: .测试, .परीक्षा, .испытание, .테스트, .טעסט, .測試, .آزمایشی, .பரிட்சை, .δοκιμή, .إختبار, and .テスト.`,
    `In June 1999, the Internet Engineering Task Force reserved the DNS labels .example, .invalid, .localhost, and .test so that they may not be installed into the root zone of the Domain Name System.`,
    `These top-level domain names were reserved to reduce the likelihood of conflict and confusion.[2] This allows their usage for either documentation purposes or in local testing scenarios. IANA.org states "Domains which are described as registered to IANA or ICANN on policy grounds are not available for registration or transfer, with the exception of country-name.info domains. These domains are available for release by the ICANN Governmental Advisory Committee Secretariat."`,
  ],
}

export default data
