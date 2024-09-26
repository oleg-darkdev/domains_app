import dataAfrika from './geoTLD/dataAfrika'
import dataAsia from './geoTLD/dataAsia'
import dataEurope from './geoTLD/dataEurope'
import dataSpain from './geoTLD/dataSpain'
import dataGermany from './geoTLD/dataGermany'
import dataFrance from './geoTLD/dataFrance'
import dataOceania from './geoTLD/dataOceania'
import dataNorthAmerica from './geoTLD/dataNorthAmerica'
import dataSouthAmerica from './geoTLD/dataSouthAmerica'



const data = {
  abbr: 'geoTLD.',

  title: 'Geographic top-level domains (geoTLD).',
  shortDesc: '',
  domains: {
    all: [].concat(
      dataAfrika,
      dataAsia,
      dataEurope,
      dataSpain,
      dataGermany,
      dataFrance,
      dataOceania,
      dataNorthAmerica,
      dataSouthAmerica,
    ),
    alphabet: {
      afrika: {
        title: 'Afrika',
        data: dataAfrika,
      },
      asia: {
        title: 'Asia',
        data: dataAsia,
      },
      europe: {
        title: 'Europe',
        data: dataEurope,
      },
      spain: {
        title: 'Spain',
        data: dataSpain,
      },
      germany: {
        title: 'Germany',
        data: dataGermany,
      },
      france: {
        title: 'France',
        data: dataFrance,
      },
      northAmerica: {
        title: 'North America',
        data: dataNorthAmerica,
      },
      oceania: {
        title: 'Oceania',
        data: dataOceania,
      },
      southAmerica: {
        title: 'South America',
        data: dataSouthAmerica,
      },
    },
  },
  promoImg: '',
  id: 0,
  wikipedia: 'https://en.wikipedia.org/wiki/Geographic_top-level_domain',
  desc: [``],
}

export default data
